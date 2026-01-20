import React from "react";

export const Statistics = () => {
  const stats = [
    {
      number: "5+",
      label: "Years of Excellence",
      description: "Serving industries worldwide"
    },
    {
      number: "100+",
      label: "Trusted Partners",
      description: "Global supplier network"
    },
    {
      number: "10K+",
      label: "Products Delivered",
      description: "Quality guaranteed solutions"
    },
    {
      number: "10+",
      label: "Countries Served",
      description: "Worldwide reach & presence"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Driving Industrial Growth
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and partnership
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl text-yellow-600 font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm sm:text-base text-blue-100">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};