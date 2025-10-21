import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, TrendingDown, CheckCircle2, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";
import { Alert, AlertDescription } from "@/components/ui/alert";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Badge } from "@/components/ui/badge";

export default function InsuranceCalculator() {
  const [vehicleValue, setVehicleValue] = useState<number>(1500000);
  const [driverAge, setDriverAge] = useState<string>("30-39");
  const [experience, setExperience] = useState<string>("5+");
  const [county, setCounty] = useState<string>("nairobi");

  // Calculate insurance rates
  const getAgeMultiplier = () => {
    switch (driverAge) {
      case "18-24": return 1.4;
      case "25-29": return 1.2;
      case "30-39": return 1.0;
      case "40-49": return 0.95;
      case "50+": return 0.9;
      default: return 1.0;
    }
  };

  const getExperienceMultiplier = () => {
    switch (experience) {
      case "<2": return 1.3;
      case "2-4": return 1.1;
      case "5+": return 1.0;
      default: return 1.0;
    }
  };

  const getCountyMultiplier = () => {
    switch (county) {
      case "nairobi": return 1.2;
      case "mombasa": return 1.1;
      case "other": return 1.0;
      default: return 1.0;
    }
  };

  const baseComprehensiveRate = 0.045; // 4.5% of vehicle value
  const baseThirdPartyRate = 0.008; // 0.8% of vehicle value

  const multiplier = getAgeMultiplier() * getExperienceMultiplier() * getCountyMultiplier();
  
  const comprehensiveAnnual = vehicleValue * baseComprehensiveRate * multiplier;
  const thirdPartyAnnual = vehicleValue * baseThirdPartyRate * multiplier;

  const insurers = [
    { name: "Britam Insurance", comprehensive: comprehensiveAnnual * 0.95, thirdParty: thirdPartyAnnual * 0.92, rating: 4.5 },
    { name: "Jubilee Insurance", comprehensive: comprehensiveAnnual * 1.02, thirdParty: thirdPartyAnnual * 1.0, rating: 4.3 },
    { name: "AAR Insurance", comprehensive: comprehensiveAnnual * 1.05, thirdParty: thirdPartyAnnual * 1.05, rating: 4.4 },
    { name: "CIC Insurance", comprehensive: comprehensiveAnnual * 0.98, thirdParty: thirdPartyAnnual * 0.95, rating: 4.2 },
    { name: "ICEA Lion", comprehensive: comprehensiveAnnual * 1.0, thirdParty: thirdPartyAnnual * 0.98, rating: 4.1 },
    { name: "Madison Insurance", comprehensive: comprehensiveAnnual * 0.93, thirdParty: thirdPartyAnnual * 0.90, rating: 4.0 },
  ];

  const comprehensiveCoverage = [
    "Accidental damage to your vehicle",
    "Theft and attempted theft",
    "Fire and explosion",
    "Third party liability (injury/death)",
    "Third party property damage",
    "Windscreen, windows and sunroof",
    "Personal accident for driver and passengers",
    "Towing and recovery",
  ];

  const thirdPartyCoverage = [
    "Third party liability (injury/death)",
    "Third party property damage",
    "Legal liability coverage",
  ];

  const faqs = [
    {
      question: "What's the difference between comprehensive and third-party insurance in Kenya?",
      answer: "Comprehensive insurance covers damage to your own vehicle plus third-party liability. Third-party insurance only covers damage you cause to others' property or persons - it's the minimum legal requirement in Kenya."
    },
    {
      question: "How much does car insurance cost in Kenya?",
      answer: "Comprehensive insurance typically costs 3.5-5.5% of your vehicle's value annually (KES 52,500-82,500 for a KES 1.5M car). Third-party insurance costs 0.6-1.0% annually (KES 9,000-15,000 for the same car)."
    },
    {
      question: "What factors affect my car insurance premium in Kenya?",
      answer: "Key factors include: vehicle value, driver's age and experience, location (Nairobi/Mombasa premiums are higher), vehicle usage, security features, and your claims history."
    },
    {
      question: "Can I get insurance for an imported car?",
      answer: "Yes, but you must have comprehensive insurance BEFORE clearing the vehicle from the port. Most insurers require a pre-inspection and the vehicle must comply with the 8-year age rule."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Car Insurance Calculator Kenya 2025 | Compare 6+ Quotes Instantly</title>
        <meta name="description" content="Calculate car insurance costs in Kenya. Compare comprehensive vs third-party coverage from 6+ top insurers. Get instant quotes & save up to 25%. Updated October 2025." />
        <meta name="keywords" content="car insurance Kenya, comprehensive insurance cost, third party insurance Kenya, insurance calculator, car insurance quotes Kenya, cheapest car insurance Kenya" />
        <link rel="canonical" href="https://garimoto.co.ke/insurance-calculator" />
      </Helmet>

      <SoftwareApplicationSchema
        name="Kenya Car Insurance Calculator"
        description="Compare car insurance quotes from Kenya's top 6 insurers. Calculate comprehensive and third-party insurance costs based on vehicle value, driver profile, and location."
        url="https://garimoto.co.ke/insurance-calculator"
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
              { label: "Insurance Calculator" }
            ]}
          />

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Car Insurance Calculator Kenya 2025</h1>
            <p className="text-muted-foreground text-lg">
              Get instant insurance quotes from Kenya's leading insurers. Compare comprehensive and third-party coverage to find the best rates. Updated with October 2025 premiums.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Vehicle & Driver Information
                  </CardTitle>
                  <CardDescription>Enter your details for accurate quotes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vehicleValue">Vehicle Value (KES)</Label>
                      <Input
                        id="vehicleValue"
                        type="number"
                        value={vehicleValue}
                        onChange={(e) => setVehicleValue(Number(e.target.value))}
                        min={0}
                      />
                    </div>
                    <div>
                      <Label htmlFor="county">Location</Label>
                      <Select value={county} onValueChange={setCounty}>
                        <SelectTrigger id="county">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nairobi">Nairobi</SelectItem>
                          <SelectItem value="mombasa">Mombasa</SelectItem>
                          <SelectItem value="other">Other County</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="driverAge">Driver Age</Label>
                      <Select value={driverAge} onValueChange={setDriverAge}>
                        <SelectTrigger id="driverAge">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-24">18-24 years</SelectItem>
                          <SelectItem value="25-29">25-29 years</SelectItem>
                          <SelectItem value="30-39">30-39 years</SelectItem>
                          <SelectItem value="40-49">40-49 years</SelectItem>
                          <SelectItem value="50+">50+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Driving Experience</Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger id="experience">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<2">Less than 2 years</SelectItem>
                          <SelectItem value="2-4">2-4 years</SelectItem>
                          <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compare Insurance Quotes</CardTitle>
                  <CardDescription>Annual premiums from Kenya's top insurers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Insurer</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Comprehensive</TableHead>
                        <TableHead>Third Party</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {insurers.sort((a, b) => a.comprehensive - b.comprehensive).map((insurer) => (
                        <TableRow key={insurer.name}>
                          <TableCell className="font-medium">{insurer.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{insurer.rating} ⭐</Badge>
                          </TableCell>
                          <TableCell className="font-semibold">
                            KES {insurer.comprehensive.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </TableCell>
                          <TableCell className="font-semibold text-muted-foreground">
                            KES {insurer.thirdParty.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="text-sm text-muted-foreground mt-4">
                    💡 Tip: Prices shown are estimates. Actual premiums may vary based on additional factors like security features, claims history, and specific vehicle model.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Comprehensive Coverage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {comprehensiveCoverage.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-muted-foreground" />
                      Third Party Coverage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {thirdPartyCoverage.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Alert className="mt-4">
                      <AlertDescription className="text-xs">
                        Third party is the legal minimum in Kenya, but does NOT cover damage to your own vehicle.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Your Best Quote</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Comprehensive (Annual)</div>
                    <div className="text-3xl font-bold text-primary">
                      KES {Math.min(...insurers.map(i => i.comprehensive)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {insurers.find(i => i.comprehensive === Math.min(...insurers.map(i => i.comprehensive)))?.name}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Third Party (Annual)</div>
                    <div className="text-2xl font-bold">
                      KES {Math.min(...insurers.map(i => i.thirdParty)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {insurers.find(i => i.thirdParty === Math.min(...insurers.map(i => i.thirdParty)))?.name}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Save on Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Install a tracking device (-10-15% discount)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Maintain a no-claims history</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Increase your voluntary excess</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Compare quotes annually</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Park in a secure location</span>
                  </div>
                </CardContent>
              </Card>

              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> For imported vehicles, you must arrange comprehensive insurance BEFORE clearing from the port. Most insurers require a pre-inspection.
                </AlertDescription>
              </Alert>
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
