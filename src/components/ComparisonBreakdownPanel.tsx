import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";

interface ComparisonData {
  crsp: number;
  originalCrsp: number;
  depreciationRate: number;
  importDuty: number;
  excise: number;
  vat: number;
  idf: number;
  rdl: number;
  total: number;
}

interface ComparisonBreakdownPanelProps {
  crsp2018: ComparisonData;
  crsp2025: ComparisonData;
  shipping: number;
  currency: string;
  exchangeRate: number;
  selectedYear: string;
}

export default function ComparisonBreakdownPanel({
  crsp2018,
  crsp2025,
  shipping,
  currency,
  exchangeRate,
  selectedYear,
}: ComparisonBreakdownPanelProps) {
  const fmt = (amount: number) =>
    currency === "USD"
      ? `$${(amount / exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
      : `KES ${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  const calculatePercentageIncrease = (old: number, newVal: number) => {
    if (old === 0) return 0;
    return ((newVal - old) / old) * 100;
  };

  const totalDuties2018 = crsp2018.importDuty + crsp2018.excise + crsp2018.vat + crsp2018.idf + crsp2018.rdl;
  const totalDuties2025 = crsp2025.importDuty + crsp2025.excise + crsp2025.vat + crsp2025.idf + crsp2025.rdl;
  const dutiesIncrease = calculatePercentageIncrease(totalDuties2018, totalDuties2025);

  const PercentageBadge = ({ value }: { value: number }) => {
    if (value < 0) return null;
    return (
      <Badge variant={value > 200 ? "destructive" : "secondary"} className="ml-2">
        <TrendingUp className="h-3 w-3 mr-1" />
        +{value.toFixed(0)}%
      </Badge>
    );
  };

  return (
    <Card className="w-full mx-auto shadow-md mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>CRSP Comparison: 2018 vs July 2025</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Compare import costs for {selectedYear} vehicle under both CRSP schedules
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2018 CRSP Column */}
          <div className="space-y-3">
            <div className="bg-secondary/20 p-3 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                2018 CRSP Schedule
                <Badge variant="outline">Old Rates</Badge>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original CRSP:</span>
                  <span className="font-medium">{fmt(crsp2018.originalCrsp)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Depreciation ({(crsp2018.depreciationRate * 100).toFixed(0)}%):</span>
                  <span className="text-muted-foreground">-{fmt(crsp2018.originalCrsp - crsp2018.crsp)}</span>
                </div>
                <div className="flex justify-between font-medium border-t pt-2">
                  <span>Depreciated CRSP:</span>
                  <span>{fmt(crsp2018.crsp)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Import Duty (25%):</span>
                <span>{fmt(crsp2018.importDuty)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Excise Duty:</span>
                <span>{fmt(crsp2018.excise)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>VAT (16%):</span>
                <span>{fmt(crsp2018.vat)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>IDF:</span>
                <span>{fmt(crsp2018.idf)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>RDL:</span>
                <span>{fmt(crsp2018.rdl)}</span>
              </div>
              {shipping > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>{fmt(shipping)}</span>
                </div>
              )}
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total Duties:</span>
                <span>{fmt(totalDuties2018)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total Cost:</span>
                <span>{fmt(crsp2018.total)}</span>
              </div>
            </div>
          </div>

          {/* Arrow separator */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          {/* 2025 CRSP Column */}
          <div className="space-y-3">
            <div className="bg-primary/10 p-3 rounded-lg border-2 border-primary/20">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                July 2025 CRSP
                <Badge variant="default">Current Rates</Badge>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original CRSP:</span>
                  <span className="font-medium">{fmt(crsp2025.originalCrsp)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Depreciation ({(crsp2025.depreciationRate * 100).toFixed(0)}%):</span>
                  <span className="text-muted-foreground">-{fmt(crsp2025.originalCrsp - crsp2025.crsp)}</span>
                </div>
                <div className="flex justify-between font-medium border-t pt-2">
                  <span>Depreciated CRSP:</span>
                  <span>{fmt(crsp2025.crsp)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Import Duty (25%):</span>
                <span className="font-medium">{fmt(crsp2025.importDuty)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Excise Duty:</span>
                <span className="font-medium">{fmt(crsp2025.excise)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>VAT (16%):</span>
                <span className="font-medium">{fmt(crsp2025.vat)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>IDF:</span>
                <span className="font-medium">{fmt(crsp2025.idf)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>RDL:</span>
                <span className="font-medium">{fmt(crsp2025.rdl)}</span>
              </div>
              {shipping > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span className="font-medium">{fmt(shipping)}</span>
                </div>
              )}
              <div className="border-t pt-2 flex justify-between font-semibold items-center">
                <span>Total Duties:</span>
                <div className="flex items-center">
                  <span>{fmt(totalDuties2025)}</span>
                  <PercentageBadge value={dutiesIncrease} />
                </div>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg items-center">
                <span>Total Cost:</span>
                <div className="flex items-center">
                  <span>{fmt(crsp2025.total)}</span>
                  <PercentageBadge value={calculatePercentageIncrease(crsp2018.total, crsp2025.total)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-6 pt-6 border-t">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Cost Impact Summary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground block">Duties Increase:</span>
                <span className="text-xl font-bold text-destructive">
                  {fmt(totalDuties2025 - totalDuties2018)}
                </span>
                <span className="text-destructive ml-2">
                  (+{dutiesIncrease.toFixed(0)}%)
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">Total Cost Increase:</span>
                <span className="text-xl font-bold text-destructive">
                  {fmt(crsp2025.total - crsp2018.total)}
                </span>
                <span className="text-destructive ml-2">
                  (+{calculatePercentageIncrease(crsp2018.total, crsp2025.total).toFixed(0)}%)
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">CRSP Value Change:</span>
                <span className="text-xl font-bold text-destructive">
                  {fmt(crsp2025.originalCrsp - crsp2018.originalCrsp)}
                </span>
                <span className="text-destructive ml-2">
                  (+{calculatePercentageIncrease(crsp2018.originalCrsp, crsp2025.originalCrsp).toFixed(0)}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
