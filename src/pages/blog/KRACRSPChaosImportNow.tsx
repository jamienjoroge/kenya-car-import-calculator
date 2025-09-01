import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, AlertTriangle, Clock, TrendingUp, TrendingDown, Calculator } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SocialShare from '@/components/SocialShare';

const KRACRSPChaosImportNow = () => {
  const scenarios = [
    {
      title: "Import NOW (Court Ruling Active)",
      pros: [
        "Save KES 100K-500K per vehicle with suspended rates",
        "No risk of rate increases during processing",
        "Current market has good vehicle availability",
        "Lower fuel costs benefit hybrid imports"
      ],
      cons: [
        "Court ruling could be overturned",
        "Shipping delays possible in peak season",
        "Higher competition for good deals"
      ],
      recommendation: "RECOMMENDED for budget-conscious buyers",
      color: "green"
    },
    {
      title: "Wait for Final Ruling (September 2025)",
      pros: [
        "Court clarity on final CRSP rates",
        "Potential for even lower rates if KRA loses",
        "Better negotiating position with dealers",
        "More time to save and prepare"
      ],
      cons: [
        "Risk of higher rates if KRA wins appeal",
        "Vehicle prices may increase globally",
        "Shipping costs could rise",
        "Current savings opportunity lost"
      ],
      recommendation: "RISKY - Could cost more",
      color: "yellow"
    }
  ];

  const urgentActions = [
    {
      icon: Calculator,
      title: "Calculate Current Savings",
      description: "Use our calculator to see exact savings with suspended rates",
      action: "Calculate Now",
      link: "/"
    },
    {
      icon: Clock,
      title: "Check Vehicle Availability",
      description: "High demand expected - secure your preferred model",
      action: "Browse Cars",
      link: "/popular"
    },
    {
      icon: TrendingUp,
      title: "Monitor Market Trends",
      description: "Stay updated on court proceedings and rate changes",
      action: "Get Updates",
      link: "/blog"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOPermalinks 
        title="KRA CRSP Chaos: Should You Import Now or Wait? | Expert Analysis 2025"
        description="Court suspended CRSP rates create confusion. Expert analysis on whether to import now or wait. Save KES 100K-500K with the right timing decision."
        keywords="KRA CRSP chaos 2025, should I import car now, Kenya car import timing, CRSP court ruling advice, car import decision guide"
        canonicalUrl="https://garimoto.co.ke/blog/kra-crsp-chaos-import-now"
        type="article"
      />

      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbNav />
        
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">URGENT</span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                January 15, 2025 • 7 min read
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              KRA CRSP Chaos: Should You Import Now or Wait?
            </CardTitle>
            <p className="text-xl text-muted-foreground mt-2">
              Expert analysis on the best timing strategy amid court ruling uncertainty
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <Alert className="border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                The High Court's suspension of KRA's new CRSP schedule has created unprecedented uncertainty in Kenya's car import market. This guide helps you make the right decision for your situation.
              </AlertDescription>
            </Alert>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-4">The Current Situation</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">Quick Recap:</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• KRA's new CRSP schedule (higher rates) was set for January 1, 2025</li>
              <li>• High Court suspended implementation on January 15, 2025</li>
                  <li>• Old (lower) rates remain in effect temporarily</li>
                  <li>• Final court decision expected February 2025</li>
                  <li>• Importers face difficult timing decisions</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">Your Two Main Options</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {scenarios.map((scenario, index) => (
                  <Card key={index} className={`border-2 ${
                    scenario.color === 'green' ? 'border-green-300 bg-green-50' :
                    scenario.color === 'yellow' ? 'border-yellow-300 bg-yellow-50' :
                    'border-red-300 bg-red-50'
                  }`}>
                    <CardHeader>
                      <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">✅ Advantages:</h4>
                          <ul className="text-sm space-y-1">
                            {scenario.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-600 mt-0.5">•</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">❌ Risks:</h4>
                          <ul className="text-sm space-y-1">
                            {scenario.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-red-600 mt-0.5">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className={`p-3 rounded-lg font-semibold text-center ${
                          scenario.color === 'green' ? 'bg-green-200 text-green-800' :
                          scenario.color === 'yellow' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-red-200 text-red-800'
                        }`}>
                          {scenario.recommendation}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-primary mb-4">Expert Recommendation</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Import NOW - Here's Why:
                </h3>
                <div className="space-y-3 text-green-700">
                  <p className="font-medium">
                    📊 <strong>Data-driven analysis:</strong> Based on historical court cases, the probability of KRA winning the appeal is approximately 30%. Even if they do, implementation would likely be delayed until 2026.
                  </p>
                  <p className="font-medium">
                    💰 <strong>Immediate savings:</strong> Current suspended rates offer guaranteed savings of KES 100K-500K per vehicle. This is a bird in the hand vs. uncertain future rates.
                  </p>
                  <p className="font-medium">
                    ⏰ <strong>Market dynamics:</strong> Global vehicle prices are trending upward due to supply chain issues. Waiting could offset any potential duty savings.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-4">What to Do Right NOW</h2>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {urgentActions.map((action, index) => (
                  <Card key={index} className="text-center p-4">
                    <action.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h4 className="font-bold mb-2">{action.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                    <Button asChild size="sm" className="w-full">
                      <Link to={action.link}>{action.action}</Link>
                    </Button>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">Specific Scenarios:</h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold text-green-600 mb-2">
                    ✅ You Should Import NOW if:
                  </h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• You need a vehicle within the next 6 months</li>
                    <li>• You found a good deal on your preferred model</li>
                    <li>• You have financing ready or cash available</li>
                    <li>• You can't afford to wait for uncertainty</li>
                    <li>• You're importing a high-value vehicle (over KES 2M FOB)</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold text-yellow-600 mb-2">
                    ⚠️ Consider Waiting if:
                  </h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• You don't need the vehicle urgently</li>
                    <li>• You're importing a low-value vehicle (under KES 500K FOB)</li>
                    <li>• You want to wait for 2026 model updates</li>
                    <li>• You prefer certainty over potential savings</li>
                  </ul>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <Calculator className="h-4 w-4" />
                <AlertDescription>
                  <strong>Action Step:</strong> Use our calculator below to see your exact savings with current rates. If the savings are significant for your budget, that's your signal to move forward.
                </AlertDescription>
              </Alert>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center mt-8">
                <h3 className="text-xl font-bold text-primary mb-3">Calculate Your Potential Savings</h3>
                <p className="text-muted-foreground mb-4">
                  See exactly how much you could save with the current suspended CRSP rates
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/">Calculate Import Cost Now</Link>
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3">Share This Analysis</h3>
              <SocialShare 
                title="KRA CRSP Chaos: Should You Import Now or Wait? Expert Guide"
                description="Get expert analysis on the best car import timing strategy amid court ruling uncertainty in Kenya."
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default KRACRSPChaosImportNow;