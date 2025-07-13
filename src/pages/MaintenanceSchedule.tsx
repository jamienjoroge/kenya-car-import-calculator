
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, AlertCircle, CheckCircle, Clock, Wrench, Mail, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

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

const MaintenanceSchedule = () => {
  const [currentKm, setCurrentKm] = useState<number>(0);
  const [vehicleAge, setVehicleAge] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const { toast } = useToast();
  const [maintenanceItems, setMaintenanceItems] = useState<MaintenanceItem[]>([
    // High Priority - Kenya Climate Focused
    {
      id: '1',
      service: 'Engine Oil & Filter Change',
      intervalKm: 5000,
      intervalMonths: 4,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 4500,
      priority: 'high',
      category: 'Engine',
      isCompleted: false
    },
    {
      id: '2',
      service: 'Air Filter Replacement (Dust Protection)',
      intervalKm: 8000,
      intervalMonths: 8,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 2500,
      priority: 'high',
      category: 'Engine',
      isCompleted: false
    },
    {
      id: '3',
      service: 'Brake System Inspection & Service',
      intervalKm: 12000,
      intervalMonths: 10,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 8500,
      priority: 'high',
      category: 'Safety',
      isCompleted: false
    },
    {
      id: '4',
      service: 'Tire Rotation & Pressure Check',
      intervalKm: 8000,
      intervalMonths: 6,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 2000,
      priority: 'high',
      category: 'Tires',
      isCompleted: false
    },
    {
      id: '5',
      service: 'AC System Service (Essential for Kenya)',
      intervalKm: 15000,
      intervalMonths: 12,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 6000,
      priority: 'high',
      category: 'Comfort',
      isCompleted: false
    },
    
    // Medium Priority - Performance & Reliability
    {
      id: '6',
      service: 'Battery & Charging System Check',
      intervalKm: 10000,
      intervalMonths: 8,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 3000,
      priority: 'medium',
      category: 'Electrical',
      isCompleted: false
    },
    {
      id: '7',
      service: 'Coolant System Service',
      intervalKm: 20000,
      intervalMonths: 18,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 5000,
      priority: 'medium',
      category: 'Cooling',
      isCompleted: false
    },
    {
      id: '8',
      service: 'Spark Plugs Replacement',
      intervalKm: 15000,
      intervalMonths: 15,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 7000,
      priority: 'medium',
      category: 'Engine',
      isCompleted: false
    },
    {
      id: '9',
      service: 'Wheel Alignment & Balancing',
      intervalKm: 12000,
      intervalMonths: 12,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 4000,
      priority: 'medium',
      category: 'Tires',
      isCompleted: false
    },
    {
      id: '10',
      service: 'Suspension System Check',
      intervalKm: 25000,
      intervalMonths: 20,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 12000,
      priority: 'medium',
      category: 'Suspension',
      isCompleted: false
    },
    
    // Long Term - Major Services
    {
      id: '11',
      service: 'Transmission Service',
      intervalKm: 40000,
      intervalMonths: 30,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 18000,
      priority: 'high',
      category: 'Transmission',
      isCompleted: false
    },
    {
      id: '12',
      service: 'Timing Belt Replacement',
      intervalKm: 60000,
      intervalMonths: 48,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 25000,
      priority: 'high',
      category: 'Engine',
      isCompleted: false
    },
    {
      id: '13',
      service: 'Comprehensive Vehicle Inspection',
      intervalKm: 20000,
      intervalMonths: 12,
      lastServiceKm: 0,
      lastServiceDate: '',
      cost: 5000,
      priority: 'medium',
      category: 'General',
      isCompleted: false
    }
  ]);

  const getServiceStatus = (item: MaintenanceItem) => {
    if (!currentKm) return 'pending';
    
    const kmSinceLastService = currentKm - item.lastServiceKm;
    const kmUntilService = item.intervalKm - kmSinceLastService;
    
    if (kmUntilService <= 0) return 'overdue';
    if (kmUntilService <= item.intervalKm * 0.1) return 'due';
    return 'ok';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue': return 'destructive';
      case 'due': return 'default';
      case 'ok': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
      case 'due': return <Clock className="h-4 w-4" />;
      case 'ok': return <CheckCircle className="h-4 w-4" />;
      default: return <Wrench className="h-4 w-4" />;
    }
  };

  const calculateUpcomingCosts = () => {
    const upcomingServices = maintenanceItems.filter(item => {
      const status = getServiceStatus(item);
      return status === 'overdue' || status === 'due';
    });
    
    return upcomingServices.reduce((total, item) => total + item.cost, 0);
  };

  const toggleServiceCompletion = (id: string) => {
    setMaintenanceItems(items =>
      items.map(item =>
        item.id === id 
          ? { 
              ...item, 
              isCompleted: !item.isCompleted,
              lastServiceKm: !item.isCompleted ? currentKm : 0,
              lastServiceDate: !item.isCompleted ? new Date().toISOString().split('T')[0] : ''
            } 
          : item
      )
    );
  };

  const sendEmailReport = async () => {
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(`https://tapmpahzwxsckbamdurms.supabase.co/functions/v1/send-maintenance-report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          currentKm,
          vehicleAge,
          maintenanceItems,
        }),
      });

      if (response.ok) {
        toast({
          title: "Report Sent",
          description: "Maintenance report has been sent to your email.",
        });
        setIsEmailDialogOpen(false);
        setEmail('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send maintenance report. Please try again.",
        variant: "destructive",
      });
    }
  };

  const downloadReport = () => {
    const report = `
VEHICLE MAINTENANCE REPORT
Generated: ${new Date().toLocaleDateString()}
Current Mileage: ${currentKm.toLocaleString()} KM
Vehicle Age: ${vehicleAge} years

MAINTENANCE STATUS:
${maintenanceItems.map(item => {
  const status = getServiceStatus(item);
  return `${item.isCompleted ? '✅' : '❌'} ${item.service} - ${status.toUpperCase()}`;
}).join('\n')}

UPCOMING COSTS: KES ${calculateUpcomingCosts().toLocaleString()}

For professional maintenance services in Kenya, visit GariMoto.co.ke
    `;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'maintenance-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const categories = [...new Set(maintenanceItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Car Maintenance Schedule Kenya | Vehicle Service Tracker | GariMoto"
        description="Track your vehicle maintenance schedule in Kenya. Never miss important services with our free car maintenance tracker. Save money and extend vehicle life."
        keywords="car maintenance Kenya, vehicle service schedule, automotive maintenance tracker, car servicing Kenya, vehicle maintenance costs"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            🔧 Car Maintenance Schedule Tracker
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Keep your vehicle in perfect condition with our maintenance schedule tracker
          </p>
        </div>

        {/* Vehicle Information Input */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
            <CardDescription>Enter your vehicle details to get personalized maintenance schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-km">Current Mileage (KM)</Label>
                <Input
                  id="current-km"
                  type="number"
                  placeholder="e.g. 45000"
                  value={currentKm || ''}
                  onChange={(e) => setCurrentKm(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicle-age">Vehicle Age (Years)</Label>
                <Input
                  id="vehicle-age"
                  type="number"
                  placeholder="e.g. 5"
                  value={vehicleAge || ''}
                  onChange={(e) => setVehicleAge(Number(e.target.value))}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        {currentKm > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">
                  {maintenanceItems.filter(item => getServiceStatus(item) === 'overdue').length}
                </div>
                <div className="text-sm text-muted-foreground">Overdue Services</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {maintenanceItems.filter(item => getServiceStatus(item) === 'due').length}
                </div>
                <div className="text-sm text-muted-foreground">Due Soon</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  KES {calculateUpcomingCosts().toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Upcoming Costs</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Maintenance Schedule by Category */}
        <div className="space-y-6">
          {categories.map(category => {
            const categoryItems = maintenanceItems.filter(item => item.category === category);
            
            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    {category} Maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryItems.map(item => {
                      const status = getServiceStatus(item);
                      const kmSinceLastService = currentKm - item.lastServiceKm;
                      const kmUntilService = item.intervalKm - kmSinceLastService;
                      
                      return (
                        <div key={item.id} className="flex items-center space-x-3 p-4 border rounded-lg">
                          <Checkbox
                            checked={item.isCompleted}
                            onCheckedChange={() => toggleServiceCompletion(item.id)}
                            id={`service-${item.id}`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <label htmlFor={`service-${item.id}`} className={`font-semibold cursor-pointer ${item.isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                                {item.service}
                              </label>
                              {!item.isCompleted && (
                                <Badge variant={getStatusColor(status)}>
                                  {getStatusIcon(status)}
                                  <span className="ml-1 capitalize">{status}</span>
                                </Badge>
                              )}
                              {item.isCompleted && (
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Completed
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Every {item.intervalKm.toLocaleString()} km or {item.intervalMonths} months</p>
                              {item.isCompleted && item.lastServiceDate && (
                                <p className="text-green-600">Last serviced: {item.lastServiceDate} at {item.lastServiceKm.toLocaleString()} km</p>
                              )}
                              {!item.isCompleted && currentKm > 0 && (
                                <p>
                                  {status === 'overdue' 
                                    ? `Overdue by ${Math.abs(kmUntilService).toLocaleString()} km`
                                    : status === 'due'
                                    ? `Due in ${kmUntilService.toLocaleString()} km`
                                    : `Next service in ${kmUntilService.toLocaleString()} km`
                                  }
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">KES {item.cost.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">Est. cost</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button onClick={downloadReport} className="flex items-center gap-2 justify-center">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          
          <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 justify-center">
                <Mail className="h-4 w-4" />
                Email Report
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Email Maintenance Report</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsEmailDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={sendEmailReport}>
                    Send Report
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Enhanced Kenya-Specific Tips */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                🇰🇪 Kenya Driving Conditions Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <ul className="space-y-2 text-sm">
                <li>• <strong>Dusty Roads:</strong> Change air filter every 8,000km (not 15,000km)</li>
                <li>• <strong>Hot Climate:</strong> AC service essential - don't skip it</li>
                <li>• <strong>Poor Roads:</strong> Check suspension and alignment frequently</li>
                <li>• <strong>Stop-Start Traffic:</strong> More frequent brake inspections in Nairobi</li>
                <li>• <strong>Fuel Quality:</strong> Use fuel system cleaners occasionally</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                💰 Money-Saving Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-700">
              <ul className="space-y-2 text-sm">
                <li>• <strong>Bulk Service:</strong> Do multiple services together for discounts</li>
                <li>• <strong>Compare Prices:</strong> Industrial Area often 30% cheaper than town</li>
                <li>• <strong>Genuine Parts:</strong> Worth the extra cost for critical components</li>
                <li>• <strong>Service Records:</strong> Increases resale value by 10-15%</li>
                <li>• <strong>Early Maintenance:</strong> Prevents expensive major repairs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Popular Service Providers in Kenya */}
        <Card className="mt-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-800">🔧 Popular Service Centers in Kenya</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Authorized Dealers</h4>
                <ul className="space-y-1 text-orange-700">
                  <li>• Toyota Kenya (Mombasa Rd)</li>
                  <li>• General Motors (Nairobi)</li>
                  <li>• Associated Vehicle Assemblers</li>
                  <li>• DT Dobie (Multiple brands)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Independent Garages</h4>
                <ul className="space-y-1 text-orange-700">
                  <li>• Industrial Area (Cheapest)</li>
                  <li>• River Road garages</li>
                  <li>• Ngara automotive shops</li>
                  <li>• Local neighborhood garages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Quick Service</h4>
                <ul className="space-y-1 text-orange-700">
                  <li>• Oil change centers</li>
                  <li>• Total/Shell service stations</li>
                  <li>• Mobile mechanic services</li>
                  <li>• Online booking platforms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default MaintenanceSchedule;
