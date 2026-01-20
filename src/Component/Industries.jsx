import React, { useEffect, useRef } from "react";
import { Factory, Zap, Building2, Wrench, FlaskConical, Truck } from "lucide-react";

// NetworkBackground component
const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const initDots = () => {
      const numDots = Math.floor((canvas.width * canvas.height) / 15000);
      dotsRef.current = [];
      for (let i = 0; i < numDots; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dots = dotsRef.current;

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;
      });

      ctx.strokeStyle = "hsl(218 85% 55% / 0.2)";
      ctx.lineWidth = 1;

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `hsl(218 85% 55% / ${opacity * 0.25})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "hsl(218 85% 55% / 0.5)";
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(drawDots);
    };

    resizeCanvas();
    initDots();
    drawDots();

    const handleResize = () => {
      resizeCanvas();
      initDots();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export const Industries = () => {
  const industries = [
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Production facilities, assembly lines, and industrial automation",
      color: "from-blue-800 to-indigo-900",
    },
    {
      icon: Zap,
      name: "Power & Energy",
      description: "Power generation, transmission, and renewable energy systems",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Building2,
      name: "Infrastructure",
      description: "Construction, utilities, and smart city development projects",
      color: "from-green-600 to-emerald-800",
    },
    {
      icon: Wrench,
      name: "Oil & Gas",
      description: "Upstream, midstream, and downstream petroleum operations",
      color: "from-red-600 to-rose-800",
    },
    {
      icon: FlaskConical,
      name: "Chemical & Pharma",
      description: "Process industries, pharmaceutical manufacturing, and research",
      color: "from-purple-600 to-fuchsia-800",
    },
    {
      icon: Truck,
      name: "Transportation",
      description: "Logistics, automotive, aerospace, and marine industries",
      color: "from-cyan-600 to-blue-800",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <NetworkBackground />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Industry Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Specialized solutions across diverse industrial sectors worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <div key={industry.name} className="group cursor-pointer">
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 hover:-translate-y-2">
                {/* Colored Icon Box */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  {industry.name}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {industry.description}
                </p>

                {/* Hover underline with matching color */}
                <div
                  className={`w-full h-1 bg-gradient-to-r ${industry.color} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  