import React from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import { ArrowRight, Zap, Cog, Activity, Stethoscope, Play, Award, Globe, Users } from "lucide-react";
import { Statistics } from "./Statistics";
import { Industries } from "./Industries";

export default function Home() {
     const createPageUrl = (pageName) => {
    return `/${pageName.toLowerCase()}`;
  };
  return (
    <div className="bg-white">
      {/* Enhanced Hero Section with Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern industrial facility"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-blue-800/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-blue-400/10 rounded-full animate-bounce slow"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-ping slow"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 mt-10 tracking-tighter leading-tight animate-fade-in-up">
              TerraX
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-amber-400 font-bold">
                Trading & Services
              </span>
            </h1>

            {/* Badge - Now below the heading */}
            <div className="mb-8 animate-fade-in-up animation-delay-200">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                Intelligence at the Core of Every Solution
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-3 sm:mb-4 font-medium animate-fade-in-up animation-delay-400">
              Your Trusted Industrial Trading Partner
            </p>
            {/* <p className="text-base sm:text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 animate-fade-in-up animation-delay-600">
              We connect industries with high-quality Electrical, Mechanical, Instrumentation, and Medical products from trusted global suppliers across India and beyond.
            </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 mt-10 sm:mb-16 animate-fade-in-up animation-delay-800">
                <Link 
                    to={createPageUrl("Products")} 
                    className="w-full sm:w-auto group"
                >
                    <button className="w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 rounded-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out group-hover:shadow-amber-500/25">
                    Explore Products
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </Link>
                
                <Link 
                    to={createPageUrl("About")} 
                    className="w-full sm:w-auto group"
                >
                    <button className="w-full flex items-center justify-center border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                    Learn More
                    </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Categories Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Four Key Sectors
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Delivering excellence across industries with precision, quality, and reliability.
            </p>
          </div>
  <Link to ='/products'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                name: "Electrical",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-100",
                description: "Power systems & electrical components"
              },
              {
                icon: Cog,
                name: "Mechanical",
                color: "from-red-300 to-red-400",
                bgColor: "bg-red-50",
                description: "Durable mechanical solutions"
              },
              {
                icon: Activity,
                name: "Instrumentation",
                color: "from-amber-500 to-amber-600",
                bgColor: "bg-amber-50",
                description: "Precision measurement devices & Field Instruments"
              },
              {
                icon: Stethoscope,
                name: "Medical",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                description: "Healthcare & laboratory equipment"
              }
            ].map((category) => (
            

        
              <div key={category.name} className="group">
                <div className={`${category.bgColor} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm lg:h-72 `}>
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <category.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{category.name}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{category.description}</p>
                  <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
                              </Link>

        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Industries Trust Us</h2>
            <p className="text-base sm:text-lg text-slate-600">Building partnerships through excellence and reliability</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Globe,
                title: "Global Network",
                description: "Extensive supplier partnerships worldwide ensuring quality and on-time deliveries."
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "Rigorous testing and certification processes for every product we supply."
              },
              {
                icon: Users,
                title: "Trusted Partnerships",
                description: "Long-term relationships built on integrity, transparency, and mutual success."
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Statistics/>
      <Industries/>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}



