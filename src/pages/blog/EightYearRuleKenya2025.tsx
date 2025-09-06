import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Share2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SocialShare from '@/components/SocialShare';
import WhatsAppButton from '@/components/WhatsAppButton';
import AdSpace from '@/components/AdSpace';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const EightYearRuleKenya2025 = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "8-Year Rule for Car Imports in Kenya: Manufacture vs Registration Explained",
    description: "Learn why Kenya only allows cars under 8 years old—from either manufacture or registration year. How it impacts importing to Kenya in 2025.",
    author: {
      "@type": "Organization",
      name: "Garimoto Kenya",
      url: "https://garimoto.co.ke"
    },
    publisher: {
      "@type": "Organization",
      name: "Garimoto Kenya",
      logo: {
        "@type": "ImageObject",
        url: "https://garimoto.co.ke/logo.png"
      }
    },
    datePublished: "2025-01-12",
    dateModified: "2025-01-12",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://garimoto.co.ke/blog/8-year-rule-kenya-2025"
    },
    image: {
      "@type": "ImageObject",
      url: "https://garimoto.co.ke/images/8-year-rule-kenya.jpg",
      width: 1200,
      height: 630
    }
  };

  const faqData = {
    questions: [
      {
        question: "Is the 8-year rule based on manufacture or registration date?",
        answer: "Registration date is what counts—garage rules are based strictly on registration within the past 8 years."
      },
      {
        question: "Are there any exceptions for older vehicles?",
        answer: "Only for special-purpose vehicles (like ambulances), and only if they meet strict customization, safety, and age limits (≤20 years old)."
      },
      {
        question: "What if my car was manufactured in 2018 but registered late?",
        answer: "It still qualifies—as long as the registration was on or after January 1, 2018."
      },
      {
        question: "What's the deadline for importing 2017-registered vehicles?",
        answer: "They had to be cleared by December 31, 2024, or they will face rejection at customs."
      }
    ]
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: '8-Year Rule Kenya 2025', href: '/blog/8-year-rule-kenya-2025' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>8-Year Rule for Car Imports in Kenya: Manufacture vs Registration Explained</title>
        <meta name="description" content="Learn why Kenya only allows cars under 8 years old—from either manufacture or registration year. How it impacts importing to Kenya in 2025." />
        <meta name="keywords" content="8-year rule Kenya, car import age limit Kenya, manufacture vs registration Kenya, import car age limit 2025, KEBS 8 year rule" />
        <meta property="og:title" content="8-Year Rule for Car Imports in Kenya: Manufacture vs Registration Explained" />
        <meta property="og:description" content="Learn why Kenya only allows cars under 8 years old—from either manufacture or registration year. How it impacts importing to Kenya in 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://garimoto.co.ke/blog/8-year-rule-kenya-2025" />
        <meta property="og:image" content="https://garimoto.co.ke/images/8-year-rule-kenya.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="8-Year Rule for Car Imports in Kenya: Manufacture vs Registration Explained" />
        <meta name="twitter:description" content="Learn why Kenya only allows cars under 8 years old—from either manufacture or registration year. How it impacts importing to Kenya in 2025." />
        <meta name="twitter:image" content="https://garimoto.co.ke/images/8-year-rule-kenya.jpg" />
        <link rel="canonical" href="https://garimoto.co.ke/blog/8-year-rule-kenya-2025" />
      </Helmet>

      <StructuredData type="article" data={articleData} />
      <StructuredData type="faq" data={faqData} />

      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                8-Year Rule in Kenya Explained (Manufacture vs Registration Date)
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Published: 27th August 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you're importing a car to Kenya, understanding the <strong>8-year rule</strong> is critical. 
                  Whether it's based on the <strong>year of manufacture</strong> or the <strong>first registration date</strong>, 
                  that rule could make or break your import plans this year.
                </p>
              </div>
            </div>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is the 8-Year Rule?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                According to <strong>KEBS</strong> and <strong>KRA</strong> standards (§ KS 1515:2000, Legal Notice No. 78/2005), 
                only vehicles registered within <strong>8 years prior to the date of import</strong> are allowed into Kenya.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Starting <strong>1st January 2025</strong>, imports are restricted to Right-Hand Drive (RHD) vehicles 
                first registered on or after <strong>1 January 2018</strong>.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <p className="text-red-800 font-semibold">
                  KEBS has issued a strict deadline: vehicles registered in 2017 or earlier must have cleared 
                  customs by <strong>December 31, 2024</strong>, or they face rejection and potential losses.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                These rules are applied based on <strong>registration year</strong>, not manufacture year—even if 
                the car was made earlier but registered later, it may still qualify.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why the Registration Date Matters — Not Manufacture Date
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Importing vehicles by the <strong>registration date</strong> ensures that the car has actually 
                been used for less than 8 years in practice. A vehicle manufactured in 2015 but registered 
                in 2020 may still qualify—while a 2018 model registered in late 2016 may not.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                This practical approach helps Kenya avoid importing older, rust-prone, or poorly maintained cars, 
                improving road safety and reducing environmental and mechanical risks.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Special Exemptions (Limited Scope Only)
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                KEBS may allow older vehicles in <strong>special-purpose roles</strong> (e.g., ambulances, fire trucks) if:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>They've been customized,</li>
                <li>Have valid service history, and</li>
                <li>Are not older than <strong>20 years from manufacture</strong></li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                But for regular passenger imports, this is rarely applicable and requires pre-approval.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              At a Glance: 8-Year Rule Summary
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Rule Aspect
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Kenya Interpretation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Age Limit
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      Must be registered within the last 8 years
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Applicable Date
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      1 Jan 2018 or newer (for 2025 imports)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Deadline for Older Registrations
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      Must have cleared by 31 Dec 2024
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Exemptions
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      Very limited, only approved special-purpose vehicles
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      Year of Manufacture isn't Counted
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      Only registration date matters
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What This Means for Kenyan Buyers
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Don't rely on manufacture year alone</strong> —ensure the first registration year is 2018 or newer.
                </li>
                <li>
                  If you're eyeing a <strong>2017 model</strong>, time is up—unless already cleared.
                </li>
                <li>
                  Consider using the <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Import Duty Calculator
                  </Link> to estimate your total landed cost before purchase.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqData.questions.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Q: {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A: {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The 8-year rule keeps Kenya's roads safer and more environmentally friendly. Make sure your 
                vehicle's <strong>registration year is 2018 or later</strong>, and that you're compliant 
                with KEBS requirements before importing.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-semibold">
                  Ready to calculate your import costs? Go to the{' '}
                  <Link to="/" className="text-green-600 hover:text-green-800 underline">
                    Import Duty Calculator
                  </Link>{' '}
                  now and get instant Kenya landing cost estimates.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                to="/blog/japanese-auction-sheet-guide-2025" 
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">
                  Japanese Auction Sheet Guide Kenya 2025
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete guide to reading Japanese auction sheets for car imports to Kenya.
                </p>
              </Link>
              
              <Link 
                to="/" 
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">
                  Import Duty Calculator
                </h4>
                <p className="text-gray-600 text-sm">
                  Calculate exact import duties and taxes for your vehicle import to Kenya.
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <SocialShare 
              url="https://garimoto.co.ke/blog/8-year-rule-kenya-2025"
              title="8-Year Rule for Car Imports in Kenya: Manufacture vs Registration Explained"
            />
          </div>

          <WhatsAppButton />

          <AdSpace slot="blog-bottom" />
        </article>
      </div>

      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default EightYearRuleKenya2025;