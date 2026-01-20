import React, { useState } from "react";
import { Mail, Send, Phone, MapPin, Clock, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What industries do you primarily serve?",
      answer: "We serve a wide range of industries including oil & gas, manufacturing, healthcare, construction, and water treatment sectors with our comprehensive product offerings."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we have extensive experience in international logistics and can ship products to most countries worldwide with proper documentation and compliance."
    },
    {
      question: "What is your typical response time for inquiries?",
      answer: "We respond to all inquiries within 24 hours during business days. For urgent matters, please call our direct line for immediate assistance."
    },
    {
      question: "Can you source products not listed on your website?",
      answer: "Absolutely. Our global network allows us to source specialized industrial products upon request. Contact us with your specific requirements."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment options including LC, TT, and credit terms for established customers. Specific terms are determined based on order value and customer relationship."
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Header Section */}
      <div 
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/banner 3.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            We're ready to serve you. Reach out today to explore how we can support your business.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-2 text-sm sm:text-base">+919742807007</p>
              <p className="text-xs sm:text-sm text-slate-500">Mon-Fri, 9:00 AM - 5:00 PM</p>
            </div>
            
            {/* Email */}
            <div className="bg-yellow-50 p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-2 text-sm sm:text-base">sales@terraxme.com</p>
              <p className="text-xs sm:text-sm text-slate-500">We'll respond within 24 hours</p>
            </div>
            
            {/* Office */}
            <div className="bg-green-50 p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Office</h3>
              <p className="text-slate-600 mb-2 text-sm sm:text-base">TerraX Trading And Services</p>
              <p className="text-xs sm:text-sm text-slate-500"> DOHA, QATAR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
                <div className="text-center mb-8 sm:mb-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Send us a Message</h2>
                  <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base">Your reliable trading partner is just a click away.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        placeholder="John Doe"
                        required
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        value={formData.name}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        value={formData.email}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="How can we help you today?"
                      className="min-h-[150px] w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      required
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      value={formData.message}
                    />
                  </div>
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center mx-auto"
                    >
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Map & Business Hours */}
            <div>
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 mb-8">
                <img 
                  src="img/cont-banner.webp" 
                  alt="Office Location Map" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-blue-800" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Monday - Friday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Saturday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Sunday</span>
                    <span className="font-medium text-slate-900">Holiday</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-blue-200">
                    <p className="text-xs sm:text-sm text-slate-600">Emergency support available outside business hours for critical needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">Find answers to common questions about our products and services.</p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 sm:p-6 text-left font-medium text-slate-900 hover:bg-slate-50 transition-all duration-150"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-slate-600 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
