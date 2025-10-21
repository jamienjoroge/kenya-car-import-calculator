import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, TrendingUp, PiggyBank, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";
import { Alert, AlertDescription } from "@/components/ui/alert";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default function LoanCalculator() {
  const [vehicleCost, setVehicleCost] = useState<number>(1500000);
  const [downPayment, setDownPayment] = useState<number>(20);
  const [loanTerm, setLoanTerm] = useState<number>(48);
  const [interestRate, setInterestRate] = useState<number>(13);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);

  const loanAmount = vehicleCost * (1 - downPayment / 100);
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;
  const affordabilityRatio = monthlyIncome > 0 ? (monthlyPayment / monthlyIncome) * 100 : 0;

  const banks = [
    { name: "Co-operative Bank", rate: 12.5, setup: 25000 },
    { name: "KCB Bank", rate: 13.0, setup: 20000 },
    { name: "Equity Bank", rate: 14.0, setup: 15000 },
    { name: "NCBA Bank", rate: 13.5, setup: 20000 },
    { name: "Stanbic Bank", rate: 12.0, setup: 30000 },
  ];

  const calculateBankPayment = (rate: number) => {
    const mRate = rate / 100 / 12;
    return loanAmount * (mRate * Math.pow(1 + mRate, loanTerm)) / (Math.pow(1 + mRate, loanTerm) - 1);
  };

  const faqs = [
    {
      question: "What is the maximum car loan term in Kenya?",
      answer: "Most banks in Kenya offer car loans with terms ranging from 12 to 60 months (5 years). Some banks may offer up to 72 months for specific customers with excellent credit history."
    },
    {
      question: "How much down payment do I need for a car loan in Kenya?",
      answer: "Typically, banks require a minimum down payment of 10-30% of the vehicle's value. A higher down payment (30%+) usually results in better interest rates and lower monthly payments."
    },
    {
      question: "What documents do I need for a car loan in Kenya?",
      answer: "You'll need: National ID/Passport, KRA PIN certificate, 3-6 months bank statements, proof of income (payslips/business financials), proforma invoice for the vehicle, and insurance quotation."
    },
    {
      question: "Can I get a car loan for an imported vehicle?",
      answer: "Yes, most Kenyan banks offer loans for both local and imported vehicles. However, the vehicle must comply with the 8-year age limit rule (manufactured within 8 years from current year)."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Car Loan Calculator Kenya 2025 | Import Financing & Monthly Payment Estimator</title>
        <meta name="description" content="Calculate car loan payments in Kenya. Compare interest rates from 5+ banks, estimate monthly payments & total cost. Get pre-approved in 24 hours. Updated October 2025." />
        <meta name="keywords" content="car loan Kenya, vehicle financing calculator, car loan interest rates Kenya, monthly payment calculator, auto loan Kenya, car finance Kenya" />
        <link rel="canonical" href="https://garimoto.co.ke/loan-calculator" />
      </Helmet>

      <SoftwareApplicationSchema
        name="Kenya Car Loan Calculator"
        description="Calculate monthly car loan payments, compare bank interest rates, and estimate total financing costs for vehicle imports in Kenya."
        url="https://garimoto.co.ke/loan-calculator"
        applicationCategory="FinanceApplication"
      />

      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "Vehicle Tools", href: "/" },
              { label: "Loan Calculator" }
            ]}
          />

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Car Loan Calculator Kenya 2025</h1>
            <p className="text-muted-foreground text-lg">
              Calculate your monthly car loan payments, compare bank interest rates, and determine affordability. Updated with October 2025 rates from Kenya's leading banks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Loan Details
                  </CardTitle>
                  <CardDescription>Enter your vehicle and loan information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vehicleCost">Vehicle Total Cost (KES)</Label>
                      <Input
                        id="vehicleCost"
                        type="number"
                        value={vehicleCost}
                        onChange={(e) => setVehicleCost(Number(e.target.value))}
                        min={0}
                      />
                    </div>
                    <div>
                      <Label htmlFor="downPayment">Down Payment (%)</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        min={0}
                        max={100}
                      />
                    </div>
                    <div>
                      <Label htmlFor="loanTerm">Loan Term (Months)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        min={12}
                        max={72}
                      />
                    </div>
                    <div>
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        step={0.1}
                        min={1}
                        max={30}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Label htmlFor="monthlyIncome">Monthly Income (Optional - for affordability check)</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                      placeholder="Enter your monthly income"
                      min={0}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compare Bank Interest Rates</CardTitle>
                  <CardDescription>Based on October 2025 rates for 48-month terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bank</TableHead>
                        <TableHead>Interest Rate</TableHead>
                        <TableHead>Setup Fee</TableHead>
                        <TableHead>Monthly Payment</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {banks.map((bank) => (
                        <TableRow key={bank.name}>
                          <TableCell className="font-medium">{bank.name}</TableCell>
                          <TableCell>{bank.rate}%</TableCell>
                          <TableCell>KES {bank.setup.toLocaleString()}</TableCell>
                          <TableCell className="font-semibold">
                            KES {calculateBankPayment(bank.rate).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Your Monthly Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-4xl font-bold text-primary">
                      KES {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">per month for {loanTerm} months</div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount:</span>
                      <span className="font-semibold">KES {loanAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Down Payment:</span>
                      <span className="font-semibold">KES {(vehicleCost * downPayment / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest:</span>
                      <span className="font-semibold text-destructive">KES {totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t">
                      <span className="font-medium">Total Payment:</span>
                      <span className="font-bold text-lg">KES {totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {monthlyIncome > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5" />
                      Affordability Check
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {affordabilityRatio <= 33 ? (
                      <Alert>
                        <TrendingUp className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Affordable!</strong> Your loan payment is {affordabilityRatio.toFixed(1)}% of your income (recommended: ≤33%)
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert variant="destructive">
                        <AlertDescription>
                          <strong>Warning:</strong> Your loan payment is {affordabilityRatio.toFixed(1)}% of your income. Banks recommend ≤33%.
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Quick Scenarios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" onClick={() => { setDownPayment(20); setLoanTerm(48); }}>
                    <DollarSign className="h-4 w-4 mr-2" />
                    20% down, 4 years
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => { setDownPayment(30); setLoanTerm(36); }}>
                    <DollarSign className="h-4 w-4 mr-2" />
                    30% down, 3 years
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => { setDownPayment(10); setLoanTerm(60); }}>
                    <DollarSign className="h-4 w-4 mr-2" />
                    10% down, 5 years
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
}
