import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Remove the problematic import
// import { createPageUrl } from "@/utils";
import { Mail, MapPin, Zap, Cog, Activity, Stethoscope, Menu, X, Send } from "lucide-react";

// Add the createPageUrl function directly
const createPageUrl = (pageName) => {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
};

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "About Us", url: createPageUrl("About") },
  { title: "Products", url: createPageUrl("Products") },
  { title: "Contact", url: createPageUrl("Contact") }
];

export default function Layout({ children }) {
    
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [footerForm, setFooterForm] = useState({ email: '', message: '' });

  const handleFooterFormSubmit = (e) => {
    e.preventDefault();
    console.log("Footer form submitted:", footerForm);
    alert("Thank you for your message!");
    setFooterForm({ email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg sm:text-xl">T</span>
              </div>
              <div>
                <h1 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">Terragence</h1>
                <p className="text-xs text-slate-500 font-medium">Instruments Pvt Ltd</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                    location.pathname === item.url
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                    location.pathname === item.url
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12">
            {/* About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-400 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg sm:text-2xl">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-white">Terragence Instruments</h3>
                  <p className="text-sm text-slate-400">Private Limited</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                Intelligence at the Core of Every Solution. Your trusted trading partner for high-quality industrial and medical products.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-300"><MapPin className="w-4 h-4" /> India</div>
                <div className="flex items-center gap-2 text-slate-300"><Mail className="w-4 h-4" /> info@terragence.com</div>
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product Lines</h4>
              <div className="space-y-3 text-sm">
                <Link to={createPageUrl("Products")} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"><Zap className="w-4 h-4 text-blue-400" /> Electrical</Link>
                <Link to={createPageUrl("Products")} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"><Cog className="w-4 h-4 text-slate-400" /> Mechanical</Link>
                <Link to={createPageUrl("Products")} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"><Activity className="w-4 h-4 text-amber-400" /> Instruments</Link>
                <Link to={createPageUrl("Products")} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"><Stethoscope className="w-4 h-4 text-green-400" /> Medical</Link>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="md:col-span-2">
              <h4 className="font-semibold text-white mb-4">Quick Message</h4>
              <form onSubmit={handleFooterFormSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={footerForm.email}
                  onChange={(e) => setFooterForm({ ...footerForm, email: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-amber-500"
                />
                <textarea
                  placeholder="Your Message..."
                  value={footerForm.message}
                  onChange={(e) => setFooterForm({ ...footerForm, message: e.target.value })}
                  required
                  rows={3}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-amber-500"
                />
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold">
                  Send <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Terragence Instruments Private Limited. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}