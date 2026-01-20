import React from "react";
import { Zap, Cog, Activity, Stethoscope, ChevronRight, Globe, Shield, Truck, Headphones } from "lucide-react";

export default function Products() {
  const productCategories = [
    {
      title: "Electrical",
      icon: Zap,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      images: [
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png",
        "img/7.png",
        "img/29.png",
        
      ],
      products: ["Circuit Breakers", "Junction Boxes (JBs)", "Cable Glands", "Cable Trays", "Push Buttons", "Transformers", "Power Supply Modules","Solenoid Valves"]
    },
    {
      title: "Mechanical", 
      icon: Cog,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      images: [
        "img/8.png",
        "img/9.png",
        "img/10.png",
        "img/11.png",
        "img/12.png",
        "img/13.png",
        "img/14.png",
        "img/30.png",
        
      ],
      products: ["RO Membranes", "Strainers", "Pumps", "Motors", "Filters", "Gaskets", "Expansion Joints","Hand Power and Pneumatic tools"]
    },
    {
      title: "Instruments",
      icon: Activity,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      images: [
        "img/15.png",
        "img/16.png",
        "img/17.png",
        "img/18.png",
        "img/19.png",
        "img/20.png",
        "img/al3.png",
        "img/33.png",
      ],
      products: ["Field Instruments", "Calibration Equipment", "Instrument Cables", "Analyzers", "VFDs", "Instrument Valves & Tubings", "Vibration Instruments","IOT Devices"]
    },
    {
      title: "Medical Instruments",
      icon: Stethoscope,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      images: [
        "img/al1.png",
        "img/23.png",
        "img/24.png",
        "img/32.png",
        "img/26.png",
        "img/27.png",
        "img/al2.png",
        "img/31.png",
      ],
      products: ["Weighing Balances", "Shakers", "Pipettes", "Vortex Mixers", "Stirring Heaters", "Incubators", "Medical Refrigerators and freezers","Centrifuges"]
    }
  ];

 const services = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "From trusted suppliers worldwide",
    cardColor: "bg-blue-100", // card background
    bgColor: "bg-blue-500/10", // icon background
    textColor: "text-blue-600", // icon color
  },
  {
    icon: Shield,
    title: "Quality Checks",
    description: "Strict quality assurance processes",
    cardColor: "bg-green-100",
    bgColor: "bg-green-500/10",
    textColor: "text-green-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable and timely shipping",
    cardColor: "bg-yellow-100",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-600",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "End-to-end customer service",
    cardColor: "bg-purple-100",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
  },
];


  return (
    <div className="overflow-x-hidden">
      {/* Custom Header Div with Background Image */}
      <div 
        className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/banner 3.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Products & Services
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            A comprehensive range of high-quality products and support services to meet your industrial needs.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {productCategories.map((category) => (
              <div key={category.title} className={`${category.bgColor} p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Left Side: Info */}
                  <div className="md:order-1">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <category.icon className={`w-8 h-8 md:w-10 md:h-10 ${category.iconColor}`} />
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{category.title}</h3>
                    </div>

                    {/* Products List */}
                    <ul className="space-y-2 md:space-y-3">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 md:gap-3 text-slate-700">
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: 8 Images in Grid */}
                  <div className="grid grid-cols-6 grid-rows-12 gap-4 h-[300px] md:h-[300px] md:order-2">
                      <img 
                        src={category.images[0]} 
                        alt={`${category.title} product 1`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4"
                      />
                      <img 
                        src={category.images[1]} 
                        alt={`${category.title} product 2`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 col-start-3"
                      />
                      <img 
                        src={category.images[2]} 
                        alt={`${category.title} product 3`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 col-start-5"
                      />
                      <img 
                        src={category.images[3]} 
                        alt={`${category.title} product 4`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 row-start-5"
                      />
                      <img 
                        src={category.images[4]} 
                        alt={`${category.title} product 5`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 col-start-3 row-start-5"
                      />
                      <img 
                        src={category.images[5]} 
                        alt={`${category.title} product 6`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 col-start-5 row-start-5"
                      />
                      <img 
                        src={category.images[6]} 
                        alt={`${category.title} product 7`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 col-start-2 row-start-9"
                      />
                      <img 
                        src={category.images[7]} 
                        alt={`${category.title} product 8`} 
                        className="w-full h-full object-cover rounded-lg shadow-sm col-span-2 row-span-4 col-start-4 row-start-9"
                      />
                    </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Our Value-Added Services
      </h2>
      <p className="mt-3 md:mt-4 text-base md:text-lg text-slate-600">
        Beyond products, we provide end-to-end support.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  {services.map((service) => (
    <div
      key={service.title}
      className={`${service.cardColor} p-6 md:p-8 text-center rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300`}
    >
      <div
        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 ${service.bgColor} ${service.textColor}`}
      >
        <service.icon className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-slate-600">
        {service.description}
      </p>
    </div>
  ))}
</div>

  </div>
</section>

    </div>
  );
}