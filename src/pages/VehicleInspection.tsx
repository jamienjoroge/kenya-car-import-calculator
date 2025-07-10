
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertTriangle, Car, FileText, Download, Edit3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  critical: boolean;
  checked: boolean;
  repairCost: number; // User input repair cost in KES
  points: number; // Points for scoring system
  comment: string; // User comments
}

const VehicleInspection = () => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    // Engine & Performance
    { id: '1', category: 'Engine & Performance', item: 'Engine oil level and condition', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '2', category: 'Engine & Performance', item: 'Coolant level and leaks', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '3', category: 'Engine & Performance', item: 'Battery terminals and charge', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '4', category: 'Engine & Performance', item: 'Air filter condition', critical: false, checked: false, repairCost: 0, points: 5, comment: '' },
    { id: '5', category: 'Engine & Performance', item: 'Belt tension and condition', critical: false, checked: false, repairCost: 0, points: 5, comment: '' },
    
    // Safety Systems
    { id: '6', category: 'Safety Systems', item: 'Brake fluid level', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '7', category: 'Safety Systems', item: 'Brake pad thickness', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '8', category: 'Safety Systems', item: 'All lights functioning', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '9', category: 'Safety Systems', item: 'Horn working', critical: false, checked: false, repairCost: 0, points: 3, comment: '' },
    { id: '10', category: 'Safety Systems', item: 'Seatbelts condition', critical: true, checked: false, repairCost: 0, points: 12, comment: '' },
    
    // Tires & Wheels
    { id: '11', category: 'Tires & Wheels', item: 'Tire tread depth (minimum 1.6mm)', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '12', category: 'Tires & Wheels', item: 'Tire pressure (including spare)', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '13', category: 'Tires & Wheels', item: 'Wheel alignment check', critical: false, checked: false, repairCost: 0, points: 5, comment: '' },
    { id: '14', category: 'Tires & Wheels', item: 'Wheel balancing', critical: false, checked: false, repairCost: 0, points: 4, comment: '' },
    
    // Body & Interior
    { id: '15', category: 'Body & Interior', item: 'Mirror adjustment and condition', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '16', category: 'Body & Interior', item: 'Windscreen cracks or chips', critical: true, checked: false, repairCost: 0, points: 12, comment: '' },
    { id: '17', category: 'Body & Interior', item: 'Dashboard warning lights', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '18', category: 'Body & Interior', item: 'AC/Heating system', critical: false, checked: false, repairCost: 0, points: 6, comment: '' },
    
    // Documentation
    { id: '19', category: 'Documentation', item: 'Valid insurance certificate', critical: true, checked: false, repairCost: 0, points: 5, comment: '' },
    { id: '20', category: 'Documentation', item: 'Current inspection certificate', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '21', category: 'Documentation', item: 'Vehicle registration (logbook)', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '22', category: 'Documentation', item: 'Driver\'s license', critical: true, checked: false, repairCost: 0, points: 5, comment: '' },
  ]);

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const updateRepairCost = (id: string, cost: number) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, repairCost: cost } : item
      )
    );
  };

  const updateComment = (id: string, comment: string) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, comment } : item
      )
    );
  };

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const categories = [...new Set(checklistItems.map(item => item.category))];
  const totalItems = checklistItems.length;
  const checkedItems = checklistItems.filter(item => item.checked).length;
  const criticalItems = checklistItems.filter(item => item.critical);
  const checkedCriticalItems = criticalItems.filter(item => item.checked).length;
  const progress = (checkedItems / totalItems) * 100;
  
  // Scoring system calculations
  const totalPossiblePoints = checklistItems.reduce((sum, item) => sum + item.points, 0);
  const earnedPoints = checklistItems.filter(item => item.checked).reduce((sum, item) => sum + item.points, 0);
  const scorePercentage = totalPossiblePoints > 0 ? (earnedPoints / totalPossiblePoints) * 100 : 0;
  
  // Repair cost calculations
  const failedItems = checklistItems.filter(item => !item.checked);
  const totalRepairCost = failedItems.reduce((sum, item) => sum + item.repairCost, 0);
  
  // Purchase recommendation logic
  const getPurchaseRecommendation = () => {
    const criticalFailures = criticalItems.filter(item => !item.checked).length;
    
    if (scorePercentage >= 85 && criticalFailures === 0) {
      return { status: 'EXCELLENT', color: 'text-green-600', bgColor: 'bg-green-50', message: 'Highly recommended for purchase. Vehicle is in excellent condition.' };
    } else if (scorePercentage >= 70 && criticalFailures <= 2) {
      return { status: 'GOOD', color: 'text-blue-600', bgColor: 'bg-blue-50', message: 'Good choice for purchase with minor repairs needed.' };
    } else if (scorePercentage >= 55 && criticalFailures <= 4) {
      return { status: 'FAIR', color: 'text-orange-600', bgColor: 'bg-orange-50', message: 'Consider purchase but budget for repairs.' };
    } else {
      return { status: 'POOR', color: 'text-red-600', bgColor: 'bg-red-50', message: 'Not recommended. Major repairs required.' };
    }
  };
  
  const recommendation = getPurchaseRecommendation();

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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{checkedItems}</div>
                  <div className="text-sm text-blue-600">Items Completed</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{checkedCriticalItems}/{criticalItems.length}</div>
                  <div className="text-sm text-orange-600">Critical Items</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{scorePercentage.toFixed(0)}%</div>
                  <div className="text-sm text-purple-600">Vehicle Score</div>
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

        {/* Scoring & Recommendation - Only show after completion */}
        {checkedItems === totalItems && (
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card className={`${recommendation.bgColor} border-2`}>
              <CardHeader>
                <CardTitle className={`${recommendation.color} text-xl`}>
                  Purchase Recommendation: {recommendation.status}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${recommendation.color} mb-4`}>{recommendation.message}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Vehicle Score:</span>
                    <span className="font-bold">{scorePercentage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Critical Issues:</span>
                    <span className="font-bold">{criticalItems.length - checkedCriticalItems}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Estimated Repair Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-red-600">
                    KES {totalRepairCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-red-600">Total for all failed items</div>
                </div>
                {failedItems.length > 0 && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    <h4 className="font-semibold text-sm text-red-800 mb-2">Items needing repair:</h4>
                    {failedItems.map(item => (
                      <div key={item.id} className="flex justify-between text-xs">
                        <span className="truncate mr-2">{item.item}</span>
                        <span className="font-semibold">KES {item.repairCost.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

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
                      <div key={item.id} className="border rounded-lg p-3">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            checked={item.checked}
                            onCheckedChange={() => toggleItem(item.id)}
                            id={item.id}
                            className="mt-1"
                          />
                          <div className="flex-1 min-w-0">
                            <label
                              htmlFor={item.id}
                              className={`block cursor-pointer text-sm sm:text-base ${item.checked ? 'line-through text-muted-foreground' : ''}`}
                            >
                              {item.item}
                            </label>
                            {item.comment && (
                              <p className="text-xs text-blue-600 mt-1 italic">
                                Note: {item.comment}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            {!item.checked && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleExpanded(item.id)}
                                className="h-8 px-2"
                              >
                                <Edit3 className="h-3 w-3" />
                              </Button>
                            )}
                            {item.critical && (
                              <Badge variant="destructive" className="text-xs">
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                <span className="hidden sm:inline">Critical</span>
                                <span className="sm:hidden">!</span>
                              </Badge>
                            )}
                            {item.checked && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </div>
                        
                        {/* Expandable section for repair cost and comments */}
                        {expandedItems.has(item.id) && !item.checked && (
                          <div className="mt-3 pt-3 border-t space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <Label htmlFor={`cost-${item.id}`} className="text-xs font-medium">
                                  Repair Cost (KES)
                                </Label>
                                <Input
                                  id={`cost-${item.id}`}
                                  type="number"
                                  placeholder="0"
                                  value={item.repairCost || ''}
                                  onChange={(e) => updateRepairCost(item.id, Number(e.target.value) || 0)}
                                  className="h-8 text-sm"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`comment-${item.id}`} className="text-xs font-medium">
                                  Comments
                                </Label>
                                <Textarea
                                  id={`comment-${item.id}`}
                                  placeholder="Add your observations..."
                                  value={item.comment}
                                  onChange={(e) => updateComment(item.id, e.target.value)}
                                  className="h-16 text-sm resize-none"
                                />
                              </div>
                            </div>
                          </div>
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button onClick={generateReport} className="flex items-center gap-2 justify-center">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setChecklistItems(items => items.map(item => ({ ...item, checked: false })))}
            className="justify-center"
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
