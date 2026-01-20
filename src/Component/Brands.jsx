import React from "react";
import { motion } from "framer-motion";

const brandLogos = [
  { name: "ABB", color: "#FF0000" },
  { name: "SIEMENS", color: "#009999" },
  { name: "BOURDON", color: "#004080" },
  { name: "NORGREN", color: "#C8102E" },
  { name: "OMICRON", color: "#003366" },
  { name: "AIRMAX PNEUMATIC PRODUCTS", color: "#1E90FF" },
  { name: "LEMO", color: "#0072CE" },
  { name: "GOYEN", color: "#228B22" },
  { name: "PENTAIR", color: "#0066CC" },
  { name: "CESARE BONETTI", color: "#800001" },
  { name: "LESLIE CONTROLS", color: "#CC6600" },
  { name: "HALE HAMILTON", color: "#005BAC" },
  { name: "R.G. LAURENCE", color: "#8B0000" },
  { name: "SCHROEDAHL", color: "#2E8B57" },
  { name: "RTK", color: "#FF4500" },
  { name: "KENDRION & INTORQ", color: "#DC143C" },
  { name: "EPE FILTERS ", color: "#4682B4" },
  { name: "OMSONS", color: "#9400D3" },
  { name: "A-EBERLE", color: "#FF6347" },
  { name: "FILSEP FILTERS", color: "#556B2F" },
  { name: "EPCOS", color: "#004C97" },
  { name: "BELDEN", color: "#00338D" },
  { name: "LEONI KERPEN", color: "#1C1C1C" },
  { name: "VEGA", color: "#FF6347" }
];


export default function Brands() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Trusted by Industry Leaders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Supplying a wide range of engineering products from leading brands across the globe.

          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
              style={{ '--brand-color': brand.color }}
            >
              <div className="aspect-square bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center relative overflow-hidden border border-gray-100 hover:border-gray-200 p-4">
                {/* Background gradient that appears on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: brand.color }}
                />
                
                {/* Brand Name */}
                <div className="relative z-10 text-center">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-black 
   group-hover:text-[var(--brand-color)] 
   transition-colors duration-300 transform group-hover:scale-105 
   text-center break-words leading-tight px-1">
  {brand.name}
</p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-[#EFF6FF] rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Global Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15M+</div>
              <div className="text-gray-600">Users Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center mt-16"
        >
          {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to join these industry leaders?
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button> */}
        </motion.div>
      </div>
    </div>
  );
}