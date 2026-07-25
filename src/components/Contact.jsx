"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const { contact, socials } = portfolioData.profile;
  const [copiedText, setCopiedText] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${subject}&body=${body}`;
    
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      window.open(gmailUrl, "_blank");
    }, 800);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-dark/50">
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center md:items-start text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Contact</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-lg text-white">
              Contact Information
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Have an exciting project suggestion, job opening, or simply want to chat? Reach out directly or use the quick contact form!
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Detail */}
              <div className="flex items-center justify-between p-4 glass-panel rounded-2xl border border-white/5 group hover:border-brand-primary/30 transition-colors">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-medium">Email Address</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{contact.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contact.email, "email")}
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedText === "email" ? <Check className="w-4 h-4 text-brand-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Detail */}
              <div className="flex items-center justify-between p-4 glass-panel rounded-2xl border border-white/5 group hover:border-brand-primary/30 transition-colors">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-medium">Phone Number</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{contact.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contact.phone, "phone")}
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  aria-label="Copy Phone Number"
                >
                  {copiedText === "phone" ? <Check className="w-4 h-4 text-brand-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Detail */}
              <div className="flex items-center p-4 glass-panel rounded-2xl border border-white/5">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-medium">Location</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 glass-panel rounded-3xl border border-white/5 relative overflow-hidden">
              <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-brand-primary" />
                <span>Send a Quick Message</span>
              </h3>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">Message Prepared Successfully!</h4>
                  <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
                    Opening Gmail web compose in a new tab. If it did not load, please reach out directly at <span className="text-brand-accent">{contact.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-xs text-text-secondary font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="p-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-primary focus:outline-none text-white text-sm transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs text-text-secondary font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="p-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-primary focus:outline-none text-white text-sm transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs text-text-secondary font-medium">Message Body</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="p-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-primary focus:outline-none text-white text-sm transition-colors resize-none"
                      placeholder="Hi Rintia, I'd love to connect regarding..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition-all duration-200 text-white font-medium rounded-xl shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
