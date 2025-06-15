
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageSquare, HelpCircle, Bug } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculator
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>
          <p className="text-gray-700 mb-8">
            We're here to help! If you have questions about vehicle import calculations, 
            need technical support, or want to provide feedback, we'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  General Inquiries
                </CardTitle>
                <CardDescription>
                  Questions about import duties, CRSP values, or how to use our calculator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Import duty questions, CRSP clarifications, 
                    general calculator usage
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Response time:</strong> Within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" />
                  Technical Support
                </CardTitle>
                <CardDescription>
                  Report bugs, calculation errors, or technical issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Calculator errors, website issues, 
                    data inaccuracies
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Response time:</strong> Within 12 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Reach Us</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Email Support</h3>
                  <p className="text-blue-700 mb-4">
                    Send us a detailed message and we'll get back to you as soon as possible.
                  </p>
                  <div className="bg-white rounded p-3 border">
                    <p className="text-sm text-gray-600 mb-1">Send your email to:</p>
                    <p className="font-mono text-primary">support@kenyacarimport.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">How accurate are the calculations?</h4>
                <p className="text-gray-700 text-sm">
                  Our calculations use official KRA rates and the latest CRSP values. While highly accurate, 
                  final duties may vary based on vehicle condition and KRA assessment.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">When are CRSP values updated?</h4>
                <p className="text-gray-700 text-sm">
                  We update our CRSP database regularly based on official KRA publications. 
                  The current schedule is effective from July 2025.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Can I get a detailed breakdown of costs?</h4>
                <p className="text-gray-700 text-sm">
                  Yes! Our calculator provides a comprehensive breakdown including import duty, 
                  excise duty, VAT, IDF, RDL, and estimated shipping costs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Feedback & Suggestions</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">We Value Your Input</h3>
                  <p className="text-green-700 mb-4">
                    Help us improve by sharing your suggestions for new features, 
                    reporting data inaccuracies, or letting us know how we can serve you better.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Feature requests</li>
                    <li>• Data corrections</li>
                    <li>• User experience improvements</li>
                    <li>• Additional vehicle models</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Business Inquiries</h2>
            <p className="text-gray-700 mb-4">
              For partnerships, API access, custom calculations, or bulk import consultations, 
              please reach out through our email with details about your requirements.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Services available:</strong> Custom CRSP data integration, 
                API access for businesses, bulk calculation services, 
                clearing agent partnerships
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
