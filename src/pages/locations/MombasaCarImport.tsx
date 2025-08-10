import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VehicleImportCalculator from '@/components/VehicleImportCalculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Anchor, Truck, DollarSign, CheckCircle } from 'lucide-react';

const MombasaCarImport = () => {
  const portServices = [
    "Direct port vehicle collection",
    "Customs clearance at source", 
    "Lower transportation costs",
    "Faster processing times",
    "Port storage facilities",
    "Marine insurance options"
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "/locations" },
    { label: "Mombasa Car Import Guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Mombasa Car Import Guide 2025 - Port Clearance & Duty Calculator"
        description="Import cars directly through Mombasa port Kenya. Calculate duties, port clearance procedures, storage costs, and transportation to other cities."
        keywords="Mombasa car import, Kenya port clearance, Mombasa port car import, vehicle clearance Mombasa, car import agent Mombasa"
        canonicalUrl="https://garimoto.co.ke/locations/mombasa-car-import"
      />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Anchor className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Mombasa Port Car Import 2025</h1>
                  <p className="text-gray-600">Direct import through Kenya's main port</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  Mombasa port is Kenya's main entry point for vehicle imports. Learn about 
                  clearance procedures, costs, and advantages of importing directly through the coast.
                </p>
                
                <h2 className="text-xl font-semibold mb-3">Mombasa Port Advantages</h2>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>No inland transportation costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Direct customs clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Multiple clearing agents available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Port storage facilities</span>
                  </li>
                </ul>
                
                <h2 className="text-xl font-semibold mb-3">Clearance Process at Mombasa</h2>
                <ol className="list-decimal list-inside space-y-2 mb-6">
                  <li>Calculate import duties (use calculator below)</li>
                  <li>Submit documents to KRA Mombasa</li>
                  <li>Pay duties and clearance fees</li>
                  <li>Vehicle inspection at port</li>
                  <li>Release and transportation arrangement</li>
                </ol>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">Port Storage Costs</h3>
                  <p className="text-yellow-700">
                    Vehicles incur daily storage charges at Mombasa port. Quick clearance 
                    saves money - calculate your total costs including storage below.
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Calculate Total Import + Port Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <VehicleImportCalculator />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Mombasa Port Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {portServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Additional Port Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Port handling:</span>
                  <span className="text-sm font-medium">KES 15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Storage (per day):</span>
                  <span className="text-sm font-medium">KES 500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Security:</span>
                  <span className="text-sm font-medium">KES 2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Documentation:</span>
                  <span className="text-sm font-medium">KES 5,000</span>
                </div>
                <div className="mt-3 p-2 bg-blue-50 rounded">
                  <p className="text-xs text-blue-800">
                    Costs vary by vehicle size and clearance time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MombasaCarImport;