
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BreakdownProps {
  crsp: number;
  importDuty: number;
  excise: number;
  vat: number;
  idf: number;
  rdl: number;
  shipping?: number;
  total: number;
  currency: string;
  exchangeRate: number;
}

export default function ImportBreakdownPanel({
  crsp,
  importDuty,
  excise,
  vat,
  idf,
  rdl,
  shipping,
  total,
  currency,
  exchangeRate,
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
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between"><span>CRSP (KRA Valuation)</span> <span>{fmt(crsp)}</span></div>
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
