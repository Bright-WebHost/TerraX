import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Zap, Cog, Activity, Stethoscope, Send, House, Book, ShoppingCart, Target, User, Phone, ExternalLink } from "lucide-react";

const createPageUrl = (pageName) => {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
};

const Footer = () => {
  const [footerForm, setFooterForm] = useState({ email: '', message: '' });

  const handleFooterFormSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `New message from Customer:%0A%0AEmail: ${footerForm.email}%0AMessage: ${footerForm.message}`;
    
    // WhatsApp business number (replace with your actual number)
    const whatsappNumber = "919742807007";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFooterForm({ email: '', message: '' });
    
    // Show confirmation
    alert("Thank you for your message! You'll be redirected to WhatsApp.");
  };

  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:sales@terraxme.com";
  };

  // Function to handle phone click
  const handlePhoneClick = () => {
    window.location.href = "tel:+919742807007";
  };

  // Function to handle Bright Media click
  const handleBrightMediaClick = () => {
    window.open("https://brightmedia.tech", "_blank");
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* About */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-amber-50 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="img/TerraxLogo.png"
                  alt="Terragence Logo"
                  className="w-full h-full object-contain round-md"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-blue-600">
                  TerraX
                </h3>
                <p className="text-sm text-slate-400">Trading And Services</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Intelligence at the Core of Every Solution. Your trusted trading partner for
              high-quality industrial and medical products.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  TerraX Trading And Services<br/>
                  Office 806, Zone 14, Street 902, Ishraq, Building 8, PO Box No. 8000, Musheireb Doha, Qatar
                </span>
              </div>
              <div 
                className="flex items-center gap-2 text-slate-300 cursor-pointer hover:text-blue-400 transition-colors"
                onClick={handleEmailClick}
              >
                <Mail className="w-4 h-4" />
                <span>sales@terraxme.com</span>
              </div>
              <div 
                className="flex items-center gap-2 text-slate-300 cursor-pointer hover:text-blue-400 transition-colors"
                onClick={handlePhoneClick}
              >
                <Phone className="w-4 h-4" />
                <span>+974 50255007</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4">Product Lines</h4>
            <div className="space-y-3 text-sm">
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Zap className="w-4 h-4 text-blue-400" /> Electrical
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Cog className="w-4 h-4 text-slate-400" /> Mechanical
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Activity className="w-4 h-4 text-amber-400" /> Instruments
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-green-400" /> Medical
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white  mb-4">Main Page</h4>
            <div className="space-y-3 text-sm">
              <Link
                to={createPageUrl("")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <House  className="w-4 h-4 text-blue-400" /> Home
              </Link>
              <Link
                to={createPageUrl("About")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Book className="w-4 h-4 text-slate-400" /> About Us
              </Link>
              <Link
                to={createPageUrl("Products")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-4 h-4 text-amber-400" /> Products
              </Link>
              <Link
                to={createPageUrl("Brands")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Target className="w-4 h-4 text-red-400" /> Brands
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <User className="w-4 h-4 text-green-400" /> Contact Us
              </Link>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-white mb-4">Quick Message via WhatsApp</h4>
            <form onSubmit={handleFooterFormSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                value={footerForm.email}
                onChange={(e) =>
                  setFooterForm({ ...footerForm, email: e.target.value })
                }
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message..."
                value={footerForm.message}
                onChange={(e) =>
                  setFooterForm({ ...footerForm, message: e.target.value })
                }
                required
                rows={3}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Send via WhatsApp <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} TerraX Trading And Services. | Site by{" "}
          <span 
            className="text-amber-400 hover:text-amber-300 cursor-pointer underline transition-colors inline-flex items-center"
            onClick={handleBrightMediaClick}
          >
            Bright Media
            <ExternalLink className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;