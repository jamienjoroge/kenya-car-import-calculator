import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Share2, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdSpace from '@/components/AdSpace';
import NewsletterSignup from '@/components/NewsletterSignup';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SEOPermalinks from '@/components/SEOPermalinks';
import SocialShare from '@/components/SocialShare';
import StructuredData from '@/components/StructuredData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const JapaneseAuctionSheetGuide2025 = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Japanese Auction Sheet Guide 2025" }
  ];

  const faqData = {
    questions: [
      {
        question: "What is a good auction grade for Kenyan buyers?",
        answer: "Grades 4–4.5 are ideal for most budgets as they offer good value with minor cosmetic issues. Grade 5 is excellent but comes at a premium price. Avoid RA/R grades unless you have professional repair documentation and get a significant discount."
      },
      {
        question: "Are RA/R cars always bad?",
        answer: "No, but they're repaired vehicles that require extra caution. Only proceed with complete documentation of repairs and plan for a thorough post-arrival inspection in Kenya to verify the quality of work done."
      },
      {
        question: "Which symbols should I worry about most on the auction sheet map?",
        answer: "Focus on S2 (heavy rust), X/XX markings on structural parts, and clusters of W3/P symbols suggesting extensive repaint or body filler work. These indicate significant issues that could affect safety and resale value."
      },
      {
        question: "Can I rely on just the overall grade?",
        answer: "No, never rely solely on the overall grade. Always read the detailed map and comments section as they reveal specific issues that the general grade cannot capture, such as accident history or hidden damage."
      },
      {
        question: "How do I estimate the true landing cost in Kenya?",
        answer: "Use our Import Duty Calculator which applies Kenya's CRSP-based tax system and includes typical clearing fees, shipping costs, and all applicable duties to give you an accurate total landing cost."
      }
    ]
  };

  const articleData = {
    title: "Japanese Auction Sheet Guide Kenya 2025: Master Car Import Inspections",
    description: "Complete guide to reading Japanese auction sheets for Kenya car imports. Learn grades, symbols, and inspection tips to avoid costly mistakes when importing from Japan.",
    author: "GariMoto Editorial",
    datePublished: "2025-01-10",
    dateModified: "2025-01-10",
    keywords: ["Japanese auction sheet", "Kenya car import", "auction grades", "vehicle inspection", "import guide"],
    content: "Master Japanese auction sheets to import better cars to Kenya. Learn to decode grades, symbols, and inspection maps to avoid costly mistakes and hidden damage."
  };

  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <SEOPermalinks 
        title="Japanese Auction Sheet Guide Kenya 2025: Master Car Import Inspections"
        description="Complete guide to reading Japanese auction sheets for Kenya car imports. Learn grades, symbols, and inspection tips to avoid costly mistakes when importing from Japan."
        keywords="Japanese auction sheet Kenya, car import inspection, auction grades guide, vehicle inspection Japan, import car tips Kenya"
        canonicalUrl="https://garimoto.co.ke/blog/japanese-auction-sheet-guide-2025"
        type="article"
      />
      
      <StructuredData type="article" data={articleData} />
      <StructuredData type="faq" data={faqData} />
      
      <Navigation />
      <BreadcrumbNav items={breadcrumbItems} />
      
      {/* Header Ad */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <AdSpace slot="blog-header" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">Import Guide</Badge>
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Japanese Auction Sheet Guide Kenya 2025: Master Car Import Inspections
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Complete guide to reading Japanese auction sheets for Kenya car imports. Learn grades, symbols, and inspection tips to avoid costly mistakes.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>By GariMoto Editorial</span>
              <span>•</span>
              <span>January 10, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>

          {/* CTA Box */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Calculate Your Import Costs</h3>
                  <p className="text-blue-700">Get accurate duty estimates for any Japanese car before you buy</p>
                </div>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/">
                    <Calculator className="h-4 w-4 mr-2" />
                    Run Calculator
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              The Japanese auction sheet is your window into a vehicle's true condition. Master it, and you'll import cleaner cars, avoid hidden costs, and resell faster in Kenya. Here's everything you need to know.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Understanding Auction Grades</h2>
            
            <p className="mb-6">
              Japanese auction grades range from 1 (poor) to 5 (excellent), with special categories for modified or repaired vehicles. Here's what each grade means for Kenyan buyers:
            </p>

            <Table className="mb-8">
              <TableHeader>
                <TableRow>
                  <TableHead>Grade</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Price Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">5</TableCell>
                  <TableCell>Excellent - like new</TableCell>
                  <TableCell>Premium buyers</TableCell>
                  <TableCell>High</TableCell>
                </TableRow>
                <TableRow className="bg-green-50">
                  <TableCell className="font-semibold">4.5</TableCell>
                  <TableCell>Very good - minor wear</TableCell>
                  <TableCell>Most Kenyan buyers</TableCell>
                  <TableCell>Good value</TableCell>
                </TableRow>
                <TableRow className="bg-green-50">
                  <TableCell className="font-semibold">4</TableCell>
                  <TableCell>Good - some cosmetic issues</TableCell>
                  <TableCell>Budget-conscious buyers</TableCell>
                  <TableCell>Best value</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">3.5</TableCell>
                  <TableCell>Fair - noticeable wear</TableCell>
                  <TableCell>Mechanics/dealers</TableCell>
                  <TableCell>Low</TableCell>
                </TableRow>
                <TableRow className="bg-red-50">
                  <TableCell className="font-semibold">RA/R</TableCell>
                  <TableCell>Repaired after accident</TableCell>
                  <TableCell>Experts only</TableCell>
                  <TableCell>Very low</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
              <h4 className="font-semibold text-green-800 mb-2">💡 Pro Tip for Kenyan Buyers</h4>
              <p className="text-green-700">
                Grades 4–4.5 offer the sweet spot for most Kenyan buyers. You get good condition at reasonable prices, with issues that are typically cosmetic rather than mechanical.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Decoding the Inspection Map</h2>
            
            <p className="mb-6">
              The auction sheet includes a detailed car diagram with symbols indicating specific issues. Here are the key symbols to watch for:
            </p>

            <h3 className="text-xl font-semibold mb-4">Critical Symbols to Avoid</h3>
            
            <Table className="mb-6">
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Meaning</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-red-50">
                  <TableCell className="font-semibold">S2</TableCell>
                  <TableCell>Heavy rust</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Avoid</TableCell>
                </TableRow>
                <TableRow className="bg-red-50">
                  <TableCell className="font-semibold">X/XX</TableCell>
                  <TableCell>Structural damage</TableCell>
                  <TableCell>Critical</TableCell>
                  <TableCell>Avoid</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50">
                  <TableCell className="font-semibold">W3</TableCell>
                  <TableCell>Heavy repaint</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Investigate</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50">
                  <TableCell className="font-semibold">P</TableCell>
                  <TableCell>Body filler used</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Check extent</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h3 className="text-xl font-semibold mb-4">Acceptable Minor Issues</h3>
            
            <Table className="mb-8">
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Meaning</TableHead>
                  <TableHead>Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">A1</TableCell>
                  <TableCell>Minor scratch</TableCell>
                  <TableCell>Cosmetic only</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">U1</TableCell>
                  <TableCell>Small dent</TableCell>
                  <TableCell>Easy to repair</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">W1</TableCell>
                  <TableCell>Touch-up paint</TableCell>
                  <TableCell>Normal wear</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Interior and Engine Grades</h2>
            
            <p className="mb-6">
              Beyond the exterior grade, auction sheets rate interior condition (A-D) and engine performance (★ symbols). Here's what to look for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interior Grades</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>A:</strong> Excellent condition</li>
                    <li><strong>B:</strong> Good with minor wear</li>
                    <li><strong>C:</strong> Fair with noticeable wear</li>
                    <li><strong>D:</strong> Poor condition</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Engine Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>★★★★★:</strong> Perfect performance</li>
                    <li><strong>★★★★:</strong> Very good</li>
                    <li><strong>★★★:</strong> Good (acceptable)</li>
                    <li><strong>★★:</strong> Fair (needs attention)</li>
                    <li><strong>★:</strong> Poor (avoid)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Reading the Comments Section</h2>
            
            <p className="mb-6">
              The comments section often contains crucial information not captured in grades or symbols. Look for:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Accident history:</strong> Even if repaired, this affects resale value</li>
              <li><strong>Modification details:</strong> Important for NTSA compliance in Kenya</li>
              <li><strong>Maintenance records:</strong> Well-maintained cars last longer</li>
              <li><strong>Known issues:</strong> Mechanical problems to address</li>
              <li><strong>Mileage verification:</strong> Confirms odometer accuracy</li>
            </ul>

            {/* Mid-article CTA */}
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Import?</h3>
                <p className="text-green-700 mb-4">Calculate exact import duties and total landing costs for any Japanese car</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/">
                    <Calculator className="h-4 w-4 mr-2" />
                    Get Duty Estimate
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Common Mistakes Kenyan Buyers Make</h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h4 className="font-semibold text-red-800 mb-4">❌ Avoid These Costly Errors</h4>
              <ul className="space-y-3 text-red-700">
                <li><strong>Focusing only on the overall grade</strong> - Always check the detailed map and comments</li>
                <li><strong>Ignoring RA/R warnings</strong> - These cars need expert evaluation</li>
                <li><strong>Overlooking rust indicators</strong> - S2 symbols mean expensive repairs ahead</li>
                <li><strong>Not calculating total costs</strong> - Factor in duties, shipping, and clearing fees</li>
                <li><strong>Skipping post-arrival inspection</strong> - Always verify condition upon arrival</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Frequently Asked Questions</h2>
            
            <div className="space-y-6 mb-8">
              {faqData.questions.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Final Word</h2>
            
            <p className="mb-6">
              The auction sheet is your truth detector when importing cars from Japan to Kenya. Master it, and you'll import cleaner cars, avoid hidden costs, and resell faster in the Kenyan market. 
            </p>
            
            <p className="mb-8">
              Pair a solid auction sheet analysis with a pre-purchase inspection on arrival, and you'll have complete peace of mind from Japan to Nairobi.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Next Steps</h4>
              <p className="text-blue-700 mb-4">
                Ready to import? Shortlist your vehicle, then use our Import Duty Calculator to see your true Kenya landing cost in minutes.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Import Costs
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-8 pt-6 border-t">
            <SocialShare 
              title="Japanese Auction Sheet Guide Kenya 2025: Master Car Import Inspections"
              url="https://garimoto.co.ke/blog/japanese-auction-sheet-guide-2025"
              description="Complete guide to reading Japanese auction sheets for Kenya car imports. Learn grades, symbols, and inspection tips to avoid costly mistakes."
            />
          </div>

          {/* WhatsApp Share Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button 
              className="bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg"
              onClick={() => {
                const text = encodeURIComponent("Check out this comprehensive guide to Japanese auction sheets for Kenya car imports: https://garimoto.co.ke/blog/japanese-auction-sheet-guide-2025");
                window.open(`https://wa.me/?text=${text}`, '_blank');
              }}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </article>

        {/* Sidebar Ad */}
        <div className="mt-8">
          <AdSpace slot="blog-sidebar" format="rectangle" style={{ width: "100%", height: "250px" }} />
        </div>

        <NewsletterSignup />
      </div>
      
      <Footer />
    </div>
  );
};

export default JapaneseAuctionSheetGuide2025;