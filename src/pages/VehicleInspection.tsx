
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
    // Engine & Performance (Kenya-focused)
    { id: '1', category: 'Engine & Performance', item: 'Engine oil level and condition (check dipstick)', critical: true, checked: false, repairCost: 0, points: 12, comment: '' },
    { id: '2', category: 'Engine & Performance', item: 'Coolant level and visible leaks (important for hot climate)', critical: true, checked: false, repairCost: 0, points: 12, comment: '' },
    { id: '3', category: 'Engine & Performance', item: 'Battery terminals clean and tight (corrosion check)', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '4', category: 'Engine & Performance', item: 'Air filter condition (dust accumulation check)', critical: false, checked: false, repairCost: 0, points: 6, comment: '' },
    { id: '5', category: 'Engine & Performance', item: 'Engine belts tension and cracks', critical: false, checked: false, repairCost: 0, points: 5, comment: '' },
    { id: '6', category: 'Engine & Performance', item: 'Engine sounds normal (no unusual noises)', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    
    // Safety Systems (Roadworthy focused)
    { id: '7', category: 'Safety Systems', item: 'Brake pedal firm (not spongy or going to floor)', critical: true, checked: false, repairCost: 0, points: 20, comment: '' },
    { id: '8', category: 'Safety Systems', item: 'Brake fluid level adequate and clean', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '9', category: 'Safety Systems', item: 'All exterior lights work (headlights, indicators, brake)', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '10', category: 'Safety Systems', item: 'Horn audible and working', critical: true, checked: false, repairCost: 0, points: 5, comment: '' },
    { id: '11', category: 'Safety Systems', item: 'Seatbelts secure and undamaged', critical: true, checked: false, repairCost: 0, points: 12, comment: '' },
    { id: '12', category: 'Safety Systems', item: 'Handbrake holds vehicle on incline', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    
    // Tires & Wheels (Road condition focused)
    { id: '13', category: 'Tires & Wheels', item: 'All tires have adequate tread (2mm+ recommended)', critical: true, checked: false, repairCost: 0, points: 18, comment: '' },
    { id: '14', category: 'Tires & Wheels', item: 'No visible tire damage (cuts, bulges, punctures)', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '15', category: 'Tires & Wheels', item: 'Spare tire in good condition and properly inflated', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '16', category: 'Tires & Wheels', item: 'Wheel nuts tight and wheel alignment appears straight', critical: false, checked: false, repairCost: 0, points: 6, comment: '' },
    
    // Body & Interior (Kenya conditions)
    { id: '17', category: 'Body & Interior', item: 'Windscreen clear with no major cracks', critical: true, checked: false, repairCost: 0, points: 12, comment: '' },
    { id: '18', category: 'Body & Interior', item: 'Side mirrors intact and adjustable', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '19', category: 'Body & Interior', item: 'Dashboard warning lights off (check engine, oil, etc.)', critical: true, checked: false, repairCost: 0, points: 15, comment: '' },
    { id: '20', category: 'Body & Interior', item: 'Air conditioning working (essential for Kenya)', critical: false, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '21', category: 'Body & Interior', item: 'Doors open/close properly and windows work', critical: false, checked: false, repairCost: 0, points: 5, comment: '' },
    
    // Documentation (Kenya specific)
    { id: '22', category: 'Documentation', item: 'Valid comprehensive insurance certificate', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '23', category: 'Documentation', item: 'Current inspection certificate (if required)', critical: true, checked: false, repairCost: 0, points: 8, comment: '' },
    { id: '24', category: 'Documentation', item: 'Vehicle logbook/registration documents', critical: true, checked: false, repairCost: 0, points: 10, comment: '' },
    { id: '25', category: 'Documentation', item: 'Service history/maintenance records available', critical: false, checked: false, repairCost: 0, points: 6, comment: '' },
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
  
  // Enhanced grading system for Kenya market
  const getVehicleGrade = () => {
    const criticalFailures = criticalItems.filter(item => !item.checked).length;
    const totalFailures = checklistItems.filter(item => !item.checked).length;
    
    if (scorePercentage >= 90 && criticalFailures === 0) {
      return { 
        grade: 'A+', 
        color: 'text-green-700', 
        bgColor: 'bg-green-100', 
        condition: 'EXCELLENT',
        message: 'Premium condition. Ready for immediate use.',
        marketValue: 'Full market value expected'
      };
    } else if (scorePercentage >= 80 && criticalFailures <= 1) {
      return { 
        grade: 'A', 
        color: 'text-green-600', 
        bgColor: 'bg-green-50', 
        condition: 'VERY GOOD',
        message: 'Minor maintenance needed. Great purchase.',
        marketValue: '95-100% of market value'
      };
    } else if (scorePercentage >= 70 && criticalFailures <= 2) {
      return { 
        grade: 'B+', 
        color: 'text-blue-600', 
        bgColor: 'bg-blue-50', 
        condition: 'GOOD',
        message: 'Some repairs needed but worthwhile.',
        marketValue: '85-95% of market value'
      };
    } else if (scorePercentage >= 60 && criticalFailures <= 3) {
      return { 
        grade: 'B', 
        color: 'text-yellow-700', 
        bgColor: 'bg-yellow-50', 
        condition: 'FAIR',
        message: 'Budget for repairs before regular use.',
        marketValue: '70-85% of market value'
      };
    } else if (scorePercentage >= 45 && criticalFailures <= 5) {
      return { 
        grade: 'C', 
        color: 'text-orange-600', 
        bgColor: 'bg-orange-50', 
        condition: 'POOR',
        message: 'Significant repairs required. Negotiate price.',
        marketValue: '50-70% of market value'
      };
    } else {
      return { 
        grade: 'F', 
        color: 'text-red-600', 
        bgColor: 'bg-red-50', 
        condition: 'DANGEROUS',
        message: 'Not roadworthy. Avoid or major overhaul needed.',
        marketValue: 'Below 50% of market value'
      };
    }
  };

  // Purchase recommendation based on grade and cost
  const getPurchaseRecommendation = () => {
    const grade = getVehicleGrade();
    const criticalFailures = criticalItems.filter(item => !item.checked).length;
    const repairToValueRatio = totalRepairCost / (totalRepairCost + 500000); // Assume base value 500k
    
    if (grade.grade === 'A+' || grade.grade === 'A') {
      return { 
        recommendation: 'BUY', 
        confidence: 'HIGH',
        color: 'text-green-700', 
        bgColor: 'bg-green-100',
        reasoning: 'Excellent condition vehicle with minimal risk.'
      };
    } else if (grade.grade === 'B+' && repairToValueRatio < 0.15) {
      return { 
        recommendation: 'BUY', 
        confidence: 'MEDIUM',
        color: 'text-green-600', 
        bgColor: 'bg-green-50',
        reasoning: 'Good buy if price reflects needed repairs.'
      };
    } else if (grade.grade === 'B' && repairToValueRatio < 0.25) {
      return { 
        recommendation: 'CONSIDER', 
        confidence: 'MEDIUM',
        color: 'text-yellow-700', 
        bgColor: 'bg-yellow-50',
        reasoning: 'Acceptable if significant price reduction.'
      };
    } else if (grade.grade === 'C' && repairToValueRatio < 0.35) {
      return { 
        recommendation: 'RISKY', 
        confidence: 'LOW',
        color: 'text-orange-600', 
        bgColor: 'bg-orange-50',
        reasoning: 'High repair costs. Only for experienced buyers.'
      };
    } else {
      return { 
        recommendation: 'AVOID', 
        confidence: 'HIGH',
        color: 'text-red-600', 
        bgColor: 'bg-red-50',
        reasoning: 'Too many issues or repair costs too high.'
      };
    }
  };
  
  const vehicleGrade = getVehicleGrade();
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

        {/* Enhanced Results - Only show after completion */}
        {checkedItems === totalItems && (
          <div className="space-y-6 mb-6">
            {/* Vehicle Grade Card */}
            <Card className={`${vehicleGrade.bgColor} border-2`}>
              <CardHeader>
                <CardTitle className={`${vehicleGrade.color} text-2xl flex items-center justify-between`}>
                  <span>Vehicle Grade: {vehicleGrade.grade}</span>
                  <Badge variant="outline" className={`${vehicleGrade.color} text-lg px-3 py-1`}>
                    {vehicleGrade.condition}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className={`${vehicleGrade.color} text-lg font-medium mb-3`}>{vehicleGrade.message}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Overall Score:</span>
                        <span className="font-bold text-lg">{scorePercentage.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Critical Issues:</span>
                        <span className="font-bold">{criticalItems.length - checkedCriticalItems} of {criticalItems.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Items Passed:</span>
                        <span className="font-bold">{checkedItems} of {totalItems}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Market Value Estimate</h4>
                    <p className={`${vehicleGrade.color} font-medium`}>{vehicleGrade.marketValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Decision & Repair Costs */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={`${recommendation.bgColor} border-2`}>
                <CardHeader>
                  <CardTitle className={`${recommendation.color} text-xl`}>
                    Purchase Decision: {recommendation.recommendation}
                  </CardTitle>
                  <CardDescription className={`${recommendation.color} opacity-80`}>
                    Confidence Level: {recommendation.confidence}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`${recommendation.color} mb-4 text-lg`}>{recommendation.reasoning}</p>
                  
                  {/* Kenya-specific advice */}
                  <div className="bg-white/50 rounded-lg p-3 mt-4">
                    <h4 className="font-semibold mb-2 text-slate-700">💡 Kenya Market Tip:</h4>
                    <p className="text-sm text-slate-600">
                      {recommendation.recommendation === 'BUY' 
                        ? 'Consider getting a pre-purchase inspection from AA Kenya or similar service for final peace of mind.'
                        : recommendation.recommendation === 'CONSIDER'
                        ? 'Negotiate based on repair costs. Get quotes from trusted mechanics in your area.'
                        : recommendation.recommendation === 'RISKY'
                        ? 'If proceeding, ensure you have access to affordable spare parts and reliable mechanics.'
                        : 'Better to walk away and find another vehicle. Many good options available in Kenya market.'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    💰 Repair Cost Analysis
                    {totalRepairCost > 0 && (
                      <Badge variant="destructive">
                        KES {totalRepairCost.toLocaleString()}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {totalRepairCost === 0 ? (
                    <div className="text-center py-6">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <p className="text-green-700 font-medium">No repair costs estimated!</p>
                      <p className="text-sm text-green-600">All items passed inspection</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-700">
                          KES {totalRepairCost.toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-600">Total estimated repairs</div>
                      </div>
                      
                      {/* Priority breakdown */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-slate-800">Repair Priority:</h4>
                        {failedItems.filter(item => item.critical).length > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-red-600">Critical repairs:</span>
                            <span className="font-semibold text-red-600">
                              KES {failedItems.filter(item => item.critical).reduce((sum, item) => sum + item.repairCost, 0).toLocaleString()}
                            </span>
                          </div>
                        )}
                        {failedItems.filter(item => !item.critical).length > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-orange-600">Non-critical repairs:</span>
                            <span className="font-semibold text-orange-600">
                              KES {failedItems.filter(item => !item.critical).reduce((sum, item) => sum + item.repairCost, 0).toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Failed items list */}
                      {failedItems.length > 0 && (
                        <div className="max-h-32 overflow-y-auto border rounded-lg p-2 bg-white">
                          <h4 className="font-semibold text-xs text-slate-800 mb-2 sticky top-0 bg-white">Items needing attention:</h4>
                          {failedItems.map(item => (
                            <div key={item.id} className="flex justify-between text-xs py-1">
                              <span className="truncate mr-2 flex items-center gap-1">
                                {item.critical && <AlertTriangle className="h-3 w-3 text-red-500" />}
                                {item.item}
                              </span>
                              <span className="font-semibold">
                                {item.repairCost > 0 ? `KES ${item.repairCost.toLocaleString()}` : 'TBD'}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
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
                        
                        {/* Enhanced expandable section for repair cost and comments */}
                        {expandedItems.has(item.id) && !item.checked && (
                          <div className="mt-3 pt-3 border-t space-y-3 bg-slate-50 rounded-lg p-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <Label htmlFor={`cost-${item.id}`} className="text-xs font-medium flex items-center gap-1">
                                  💰 Estimated Repair Cost (KES)
                                  {item.critical && <span className="text-red-500 text-xs">(Critical!)</span>}
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
                                  📝 Inspection Notes
                                </Label>
                                <Textarea
                                  id={`comment-${item.id}`}
                                  placeholder="Describe the issue, condition, or needed action..."
                                  value={item.comment}
                                  onChange={(e) => updateComment(item.id, e.target.value)}
                                  className="min-h-[60px] text-sm"
                                />
                              </div>
                            </div>
                            {/* Quick cost suggestions */}
                            {item.critical && (
                              <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                                <p className="text-xs text-yellow-800 font-medium mb-1">💡 Typical Kenya repair costs:</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.item.includes('brake') && (
                                    <>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-6 text-xs" 
                                        onClick={() => updateRepairCost(item.id, 8000)}
                                      >
                                        Brake pads: 8k
                                      </Button>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-6 text-xs" 
                                        onClick={() => updateRepairCost(item.id, 15000)}
                                      >
                                        Brake service: 15k
                                      </Button>
                                    </>
                                  )}
                                  {item.item.includes('tire') && (
                                    <>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-6 text-xs" 
                                        onClick={() => updateRepairCost(item.id, 12000)}
                                      >
                                        New tire: 12k
                                      </Button>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-6 text-xs" 
                                        onClick={() => updateRepairCost(item.id, 40000)}
                                      >
                                        4 tires: 40k
                                      </Button>
                                    </>
                                  )}
                                  {item.item.includes('oil') && (
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="h-6 text-xs" 
                                      onClick={() => updateRepairCost(item.id, 5000)}
                                    >
                                      Oil change: 5k
                                    </Button>
                                  )}
                                  {item.item.includes('battery') && (
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="h-6 text-xs" 
                                      onClick={() => updateRepairCost(item.id, 15000)}
                                    >
                                      New battery: 15k
                                    </Button>
                                  )}
                                </div>
                              </div>
                            )}
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
