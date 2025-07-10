
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, Car, FileText, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  critical: boolean;
  checked: boolean;
}

const VehicleInspection = () => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    // Engine & Performance
    { id: '1', category: 'Engine & Performance', item: 'Engine oil level and condition', critical: true, checked: false },
    { id: '2', category: 'Engine & Performance', item: 'Coolant level and leaks', critical: true, checked: false },
    { id: '3', category: 'Engine & Performance', item: 'Battery terminals and charge', critical: true, checked: false },
    { id: '4', category: 'Engine & Performance', item: 'Air filter condition', critical: false, checked: false },
    { id: '5', category: 'Engine & Performance', item: 'Belt tension and condition', critical: false, checked: false },
    
    // Safety Systems
    { id: '6', category: 'Safety Systems', item: 'Brake fluid level', critical: true, checked: false },
    { id: '7', category: 'Safety Systems', item: 'Brake pad thickness', critical: true, checked: false },
    { id: '8', category: 'Safety Systems', item: 'All lights functioning', critical: true, checked: false },
    { id: '9', category: 'Safety Systems', item: 'Horn working', critical: false, checked: false },
    { id: '10', category: 'Safety Systems', item: 'Seatbelts condition', critical: true, checked: false },
    
    // Tires & Wheels
    { id: '11', category: 'Tires & Wheels', item: 'Tire tread depth (minimum 1.6mm)', critical: true, checked: false },
    { id: '12', category: 'Tires & Wheels', item: 'Tire pressure (including spare)', critical: true, checked: false },
    { id: '13', category: 'Tires & Wheels', item: 'Wheel alignment check', critical: false, checked: false },
    { id: '14', category: 'Tires & Wheels', item: 'Wheel balancing', critical: false, checked: false },
    
    // Body & Interior
    { id: '15', category: 'Body & Interior', item: 'Mirror adjustment and condition', critical: true, checked: false },
    { id: '16', category: 'Body & Interior', item: 'Windscreen cracks or chips', critical: true, checked: false },
    { id: '17', category: 'Body & Interior', item: 'Dashboard warning lights', critical: true, checked: false },
    { id: '18', category: 'Body & Interior', item: 'AC/Heating system', critical: false, checked: false },
    
    // Documentation
    { id: '19', category: 'Documentation', item: 'Valid insurance certificate', critical: true, checked: false },
    { id: '20', category: 'Documentation', item: 'Current inspection certificate', critical: true, checked: false },
    { id: '21', category: 'Documentation', item: 'Vehicle registration (logbook)', critical: true, checked: false },
    { id: '22', category: 'Documentation', item: 'Driver\'s license', critical: true, checked: false },
  ]);

  const toggleItem = (id: string) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const categories = [...new Set(checklistItems.map(item => item.category))];
  const totalItems = checklistItems.length;
  const checkedItems = checklistItems.filter(item => item.checked).length;
  const criticalItems = checklistItems.filter(item => item.critical);
  const checkedCriticalItems = criticalItems.filter(item => item.checked).length;
  const progress = (checkedItems / totalItems) * 100;

  const generateReport = () => {
    const report = `
VEHICLE INSPECTION REPORT
Generated: ${new Date().toLocaleDateString()}
Progress: ${checkedItems}/${totalItems} items completed

CRITICAL ITEMS STATUS:
${criticalItems.map(item => 
  `${item.checked ? '✅' : '❌'} ${item.item}`
).join('\n')}

SUMMARY:
- Total Items Checked: ${checkedItems}/${totalItems}
- Critical Items Passed: ${checkedCriticalItems}/${criticalItems.length}
- Overall Status: ${checkedCriticalItems === criticalItems.length ? 'ROADWORTHY' : 'NEEDS ATTENTION'}

For professional vehicle inspection services in Kenya, visit GariMoto.co.ke
    `;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vehicle-inspection-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Free Vehicle Inspection Checklist Kenya | Car Safety Check | GariMoto"
        description="Professional vehicle inspection checklist for Kenya. Ensure your car is roadworthy with our comprehensive safety checklist. Free download and instant results."
        keywords="vehicle inspection Kenya, car safety checklist, roadworthy test, vehicle inspection certificate, car maintenance Kenya"
      />
      
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            🔍 Free Vehicle Inspection Checklist
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Ensure your vehicle is roadworthy and safe with our comprehensive inspection checklist
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              <Car className="h-4 w-4 mr-1" />
              Kenya Roadworthy Standards
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              Professional Grade
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Inspection Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Overall Progress</span>
                  <span className="font-semibold">{checkedItems}/{totalItems}</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{checkedItems}</div>
                  <div className="text-sm text-blue-600">Items Completed</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{checkedCriticalItems}/{criticalItems.length}</div>
                  <div className="text-sm text-orange-600">Critical Items</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {checkedCriticalItems === criticalItems.length ? 'PASS' : 'FAIL'}
                  </div>
                  <div className="text-sm text-green-600">Safety Status</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist by Category */}
        <div className="space-y-6">
          {categories.map(category => {
            const categoryItems = checklistItems.filter(item => item.category === category);
            const categoryProgress = (categoryItems.filter(item => item.checked).length / categoryItems.length) * 100;
            
            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{category}</span>
                    <Badge variant="outline">
                      {categoryItems.filter(item => item.checked).length}/{categoryItems.length}
                    </Badge>
                  </CardTitle>
                  <Progress value={categoryProgress} className="h-2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoryItems.map(item => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <Checkbox
                          checked={item.checked}
                          onCheckedChange={() => toggleItem(item.id)}
                          id={item.id}
                        />
                        <label
                          htmlFor={item.id}
                          className={`flex-1 cursor-pointer ${item.checked ? 'line-through text-muted-foreground' : ''}`}
                        >
                          {item.item}
                        </label>
                        {item.critical && (
                          <Badge variant="destructive" className="text-xs">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Critical
                          </Badge>
                        )}
                        {item.checked && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={generateReport} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setChecklistItems(items => items.map(item => ({ ...item, checked: false })))}
          >
            Reset Checklist
          </Button>
        </div>

        {/* Important Notes */}
        <Card className="mt-6 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">💡 Important Notes</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-700">
            <ul className="space-y-2 text-sm">
              <li>• This checklist is based on Kenya's vehicle inspection standards</li>
              <li>• Critical items marked with red badges are mandatory for roadworthiness</li>
              <li>• For official inspection certificates, visit authorized NTSA centers</li>
              <li>• Regular inspections help prevent accidents and costly repairs</li>
              <li>• Keep your inspection certificate updated to avoid fines</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default VehicleInspection;
