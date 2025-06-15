
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuotePDFButtonProps {
  make: string;
  model: string;
  year: string;
  costBreakdown: {
    crsp: number;
    depreciatedCrsp: number;
    importDuty: number;
    excise: number;
    vat: number;
    idf: number;
    rdl: number;
    shipping?: number;
    total: number;
    currency: string;
    exchangeRate: number;
  };
}

export function QuotePDFButton({ make, model, year, costBreakdown }: QuotePDFButtonProps) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Kenya Car Importation Quote", 14, 18);
    doc.setFontSize(12);

    doc.text(`Vehicle: ${make} ${model} ${year}`, 14, 32);

    autoTable(doc, {
      startY: 38,
      head: [["Item", "Amount"]],
      body: [
        ["CRSP", format(costBreakdown.crsp)],
        [`Depreciated CRSP (${((costBreakdown.depreciationRate || 0) * 100).toFixed(0)}% depreciation)`, format(costBreakdown.depreciatedCrsp)],
        ["Import Duty", format(costBreakdown.importDuty)],
        ["Excise Duty", format(costBreakdown.excise)],
        ["VAT", format(costBreakdown.vat)],
        ["IDF", format(costBreakdown.idf)],
        ["RDL", format(costBreakdown.rdl)],
        ...(costBreakdown.shipping
          ? [["Shipping", format(costBreakdown.shipping)]]
          : []),
        ["Total", format(costBreakdown.total)],
      ],
    });

    doc.save(
      `Quote-${make}-${model}-${year}.pdf`.replace(/\s+/g, "-")
    );
  };

  function format(amount: number) {
    return costBreakdown.currency === "USD"
      ? `$${(amount / costBreakdown.exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
      : `KES ${(amount).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  }

  return (
    <Button
      className="flex items-center gap-2 mt-3"
      onClick={generatePDF}
      variant="outline"
    >
      <FileText size={18} />
      Generate Quote (PDF)
    </Button>
  );
}
