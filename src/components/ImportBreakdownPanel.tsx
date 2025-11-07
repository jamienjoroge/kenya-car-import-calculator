
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BreakdownProps {
  crsp: number;
  originalCrsp?: number;
  depreciationRate?: number;
  importDuty: number;
  excise: number;
  vat: number;
  idf: number;
  rdl: number;
  shipping?: number;
  total: number;
  currency: string;
  exchangeRate: number;
  crspVersion?: string;
  selectedYear?: string;
}

export default function ImportBreakdownPanel({
  crsp,
  originalCrsp,
  depreciationRate,
  importDuty,
  excise,
  vat,
  idf,
  rdl,
  shipping,
  total,
  currency,
  exchangeRate,
  crspVersion,
  selectedYear,
}: BreakdownProps) {
  const fmt = (amount: number) =>
    currency === "USD"
      ? `$${(amount / exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
      : `KES ${(amount).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  // Calculate total duties (excluding vehicle cost and shipping)
  const totalDuties = importDuty + excise + vat + idf + rdl;

  return (
    <Card className="w-full max-w-xl mx-auto shadow-md mt-6">
      <CardHeader>
        <CardTitle>Cost Breakdown</CardTitle>
        {crspVersion && (
          <div className="text-sm text-muted-foreground mt-2">
            {crspVersion === '2025' && selectedYear && parseInt(selectedYear) < 2025 ? (
              <span className="text-blue-700">
                💡 Base CRSP from July 2025 schedule, {depreciationRate ? (depreciationRate * 100).toFixed(0) : '0'}% depreciation applied for {new Date().getFullYear() - parseInt(selectedYear)}-year-old vehicle
              </span>
            ) : crspVersion === '2025' ? (
              <span className="text-blue-700">
                💡 July 2025 CRSP schedule
              </span>
            ) : (
              <span className="text-muted-foreground">
                2018 CRSP schedule{depreciationRate ? `, ${(depreciationRate * 100).toFixed(0)}% depreciation applied` : ''}
              </span>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {originalCrsp && originalCrsp !== crsp && (
            <>
              <div className="flex justify-between"><span>Original CRSP</span> <span>{fmt(originalCrsp)}</span></div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Depreciation ({depreciationRate ? (depreciationRate * 100).toFixed(1) : '0'}%)</span> 
                <span>-{fmt(originalCrsp - crsp)}</span>
              </div>
              <div className="flex justify-between font-medium"><span>Depreciated CRSP</span> <span>{fmt(crsp)}</span></div>
              <hr className="my-1"/>
            </>
          )}
          {(!originalCrsp || originalCrsp === crsp) && (
            <div className="flex justify-between"><span>CRSP (KRA Valuation)</span> <span>{fmt(crsp)}</span></div>
          )}
          <div className="flex justify-between"><span>Import Duty <span className="text-xs">(25%)</span></span> <span>{fmt(importDuty)}</span></div>
          <div className="flex justify-between"><span>Excise Duty</span> <span>{fmt(excise)}</span></div>
          <div className="flex justify-between"><span>VAT <span className="text-xs">(16%)</span></span> <span>{fmt(vat)}</span></div>
          <div className="flex justify-between"><span>IDF</span> <span>{fmt(idf)}</span></div>
          <div className="flex justify-between"><span>RDL</span> <span>{fmt(rdl)}</span></div>
          {typeof shipping === "number" && shipping > 0 && (
            <div className="flex justify-between"><span>Shipping</span> <span>{fmt(shipping)}</span></div>
          )}
          <hr className="my-2"/>
          <div className="flex justify-between font-semibold text-base">
            <span>Total Duties</span>
            <span>{fmt(totalDuties)}</span>
          </div>
          <hr className="my-2"/>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
