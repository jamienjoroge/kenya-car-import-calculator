import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOPermalinks from '@/components/SEOPermalinks';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VehicleImportCalculator from '@/components/VehicleImportCalculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';

const NairobiCarImport = () => {
  const nairobiServices = [
    "Import duty calculations",
    "Vehicle inspection coordination", 
    "KRA customs clearance guidance",
    "Port documentation assistance",
    "Local dealer connections",
    "Insurance recommendations"
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "/locations" },
    { label: "Nairobi Car Import Guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-slate-50">
      <SEOPermalinks 
        title="Nairobi Car Import Guide 2025 - KRA Clearance & Duty Calculator"
        description="Complete guide to importing cars in Nairobi Kenya. Calculate exact import duties, KRA clearance process, Mombasa port procedures, and local dealer connections."
        keywords="Nairobi car import, Kenya car import Nairobi, KRA clearance Nairobi, car import agent Nairobi, vehicle import Nairobi 2025"
        canonicalUrl="https://garimoto.co.ke/locations/nairobi-car-import"
      />
      
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BreadcrumbNav items={breadcrumbItems} />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Nairobi Car Import Guide 2025</h1>
                  <p className="text-gray-600">Complete import process for Kenya's capital</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  Importing a car to Nairobi? Our comprehensive guide covers everything from 
                  duty calculations to KRA clearance procedures specifically for Nairobi residents.
                </p>
                
                <h2 className="text-xl font-semibold mb-3">Why Choose Nairobi for Car Imports?</h2>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Close proximity to government offices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Multiple KRA service centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Established dealer network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Professional clearing agents</span>
                  </li>
                </ul>
                
                <h2 className="text-xl font-semibold mb-3">Nairobi Import Process</h2>
                <ol className="list-decimal list-inside space-y-2 mb-6">
                  <li>Calculate import duties using our calculator below</li>
                  <li>Visit KRA Times Tower for pre-clearance</li>
                  <li>Coordinate with Mombasa port for vehicle collection</li>
                  <li>Complete inspection at Nairobi testing centers</li>
                  <li>Register with NTSA offices in Nairobi</li>
                </ol>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Calculate Your Import Costs</CardTitle>
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
                  <Phone className="h-5 w-5" />
                  Nairobi Import Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nairobiServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Need assistance?</strong> Our Nairobi team can help with 
                    your import process from start to finish.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Processing Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Duty calculation:</span>
                  <span className="text-sm font-medium">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">KRA clearance:</span>
                  <span className="text-sm font-medium">2-3 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Vehicle inspection:</span>
                  <span className="text-sm font-medium">1 day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">NTSA registration:</span>
                  <span className="text-sm font-medium">3-5 days</span>
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

export default NairobiCarImport;