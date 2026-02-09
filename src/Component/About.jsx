import React from "react";
import PageHeader from "./PageHeader";
import { Globe, Users, Award, Target, Eye, CheckCircle } from "lucide-react";

export default function About() {
  const advantages = [
    "We supply genuine OEM parts with emphasis on quality",
    "Strong global sourcing and supply chain network",
    "Competitive pricing with uncompromised quality",
    "Expert technical support and after-sales services",
    "Commitment to integrity and trust",
    "Quick delivery times from our global suppliers"
  ];

  return (
 <div>
      {/* Hero Header Section */}
      <div 
        className="relative py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/banner 3.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-5">
            About TerraX
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building long-term partnerships through integrity, quality, and service excellence.
          </p>
        </div>
      </div>
      

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div>
              <img
                src="img/banner 3.jpg"
                alt="Business partnership handshake"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="prose prose-lg">
              <h3 className="text-3xl font-bold text-slate-900">A Trusted Trading Company</h3>
              <p className="text-slate-600 leading-[1.75]">
                TerraX Trading And Services is a trusted trading company, based in Qatar, specializing in Electrical, Mechanical and Instrumentation Products. We work with global manufacturers and suppliers to provide industries with high-quality, tested products.
              </p><br/>
              <p className="text-slate-600 leading-[1.75]">
                At TerraX, we believe that business is about building long-term partnerships, not just supplying products. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-10 h-10 text-blue-800" />
                <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-lg text-slate-700">
                To provide industries with reliable, high-quality products through a transparent and efficient trading process, ensuring trust and long term value for every client.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-10 h-10 text-amber-600" />
                <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-lg text-slate-700">
                To be a globally recognized trading partner known for integrity, service excellence, and intelligent solutions across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose TerraX?</h2>
            <p className="mt-4 text-lg text-slate-600">Your partner for quality, reliability, and competitive advantage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}