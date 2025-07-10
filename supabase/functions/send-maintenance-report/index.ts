import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface MaintenanceItem {
  id: string;
  service: string;
  intervalKm: number;
  intervalMonths: number;
  lastServiceKm: number;
  lastServiceDate: string;
  cost: number;
  priority: 'high' | 'medium' | 'low';
  category: string;
  isCompleted: boolean;
}

interface MaintenanceReportRequest {
  email: string;
  currentKm: number;
  vehicleAge: number;
  maintenanceItems: MaintenanceItem[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, currentKm, vehicleAge, maintenanceItems }: MaintenanceReportRequest = await req.json();

    const getServiceStatus = (item: MaintenanceItem) => {
      if (!currentKm) return 'pending';
      
      const kmSinceLastService = currentKm - item.lastServiceKm;
      const kmUntilService = item.intervalKm - kmSinceLastService;
      
      if (kmUntilService <= 0) return 'overdue';
      if (kmUntilService <= item.intervalKm * 0.1) return 'due';
      return 'ok';
    };

    const overdueItems = maintenanceItems.filter(item => getServiceStatus(item) === 'overdue');
    const dueItems = maintenanceItems.filter(item => getServiceStatus(item) === 'due');
    const completedItems = maintenanceItems.filter(item => item.isCompleted);
    
    const upcomingCosts = maintenanceItems
      .filter(item => ['overdue', 'due'].includes(getServiceStatus(item)))
      .reduce((total, item) => total + item.cost, 0);

    const generateItemTable = (items: MaintenanceItem[], title: string) => {
      if (items.length === 0) return '';
      
      return `
        <h3 style="color: #2563eb; margin-top: 20px; margin-bottom: 10px;">${title}</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Service</th>
              <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Interval</th>
              <th style="border: 1px solid #d1d5db; padding: 8px; text-align: right;">Cost (KES)</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td style="border: 1px solid #d1d5db; padding: 8px;">${item.service}</td>
                <td style="border: 1px solid #d1d5db; padding: 8px;">${item.intervalKm.toLocaleString()} km / ${item.intervalMonths} months</td>
                <td style="border: 1px solid #d1d5db; padding: 8px; text-align: right;">${item.cost.toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    };

    const emailResponse = await resend.emails.send({
      from: "GariMoto Maintenance <noreply@garimoto.co.ke>",
      to: [email],
      subject: "Vehicle Maintenance Report - GariMoto.co.ke",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">🔧 Vehicle Maintenance Report</h1>
            <p style="color: #6b7280; font-size: 16px;">Generated on ${new Date().toLocaleDateString()}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Vehicle Information</h2>
            <p><strong>Current Mileage:</strong> ${currentKm.toLocaleString()} KM</p>
            <p><strong>Vehicle Age:</strong> ${vehicleAge} years</p>
          </div>

          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #dc2626;">
            <h2 style="color: #dc2626; margin-top: 0;">Summary</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
              <div>
                <p><strong>Overdue Services:</strong> ${overdueItems.length}</p>
                <p><strong>Due Soon:</strong> ${dueItems.length}</p>
              </div>
              <div>
                <p><strong>Completed Services:</strong> ${completedItems.length}</p>
                <p><strong>Upcoming Costs:</strong> KES ${upcomingCosts.toLocaleString()}</p>
              </div>
            </div>
          </div>

          ${generateItemTable(overdueItems, '🚨 Overdue Services')}
          ${generateItemTable(dueItems, '⏰ Services Due Soon')}
          ${generateItemTable(completedItems, '✅ Completed Services')}

          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10b981;">
            <h3 style="color: #059669; margin-top: 0;">💡 Maintenance Tips for Kenya</h3>
            <ul style="color: #065f46; margin: 0; padding-left: 20px;">
              <li>Change oil more frequently if driving in dusty conditions</li>
              <li>Check tire pressure weekly due to varying road conditions</li>
              <li>Service air conditioning regularly due to hot climate</li>
              <li>Inspect brakes more often if driving in hilly areas like Nairobi</li>
              <li>Use quality spare parts from authorized dealers</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This report was generated by <strong>GariMoto.co.ke</strong><br>
              Kenya's premier vehicle import and maintenance platform
            </p>
            <p style="color: #6b7280; font-size: 12px; margin-top: 10px;">
              Visit <a href="https://garimoto.co.ke" style="color: #2563eb;">GariMoto.co.ke</a> for more automotive tools and services
            </p>
          </div>
        </div>
      `,
    });

    console.log("Maintenance report sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-maintenance-report function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);