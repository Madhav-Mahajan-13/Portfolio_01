"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white font-mono mb-3">
          <span className="text-[#66FCF1]">//</span> Get In Touch
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#66FCF1] to-[#C3073F]"></div>
        <p className="text-gray-400 mt-4 font-mono text-sm">
          Have a project in mind? Let's work together to build something amazing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#1F2833] p-6 rounded-lg border border-[#66FCF1]/20 hover:border-[#66FCF1]/40 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#66FCF1]/10 flex items-center justify-center border border-[#66FCF1]/30">
                <svg className="w-6 h-6 text-[#66FCF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#66FCF1] font-mono font-bold">Email</h3>
                <p className="text-gray-400 text-sm">madhavmahajan152@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1F2833] p-6 rounded-lg border border-[#66FCF1]/20 hover:border-[#66FCF1]/40 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#66FCF1]/10 flex items-center justify-center border border-[#66FCF1]/30">
                <svg className="w-6 h-6 text-[#66FCF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#66FCF1] font-mono font-bold">Location</h3>
                <p className="text-gray-400 text-sm"> Punjab, IN</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1F2833] p-6 rounded-lg border border-[#66FCF1]/20 hover:border-[#66FCF1]/40 transition-colors">
            <h3 className="text-[#66FCF1] font-mono font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Madhav-Mahajan-13" target="#" className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center border border-[#66FCF1]/30 hover:bg-[#66FCF1] hover:text-[#0B0C10] text-[#66FCF1] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/madhav-mahajan-162062280/" target="#" className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center border border-[#66FCF1]/30 hover:bg-[#66FCF1] hover:text-[#0B0C10] text-[#66FCF1] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center border border-[#66FCF1]/30 hover:bg-[#66FCF1] hover:text-[#0B0C10] text-[#66FCF1] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a> */}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1F2833] p-8 rounded-lg border border-[#66FCF1]/20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#66FCF1] font-mono text-sm mb-2 font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0B0C10] border border-[#66FCF1]/30 rounded-lg p-3 text-white font-mono focus:border-[#66FCF1] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]/20 transition-all placeholder:text-gray-600"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-[#66FCF1] font-mono text-sm mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0B0C10] border border-[#66FCF1]/30 rounded-lg p-3 text-white font-mono focus:border-[#66FCF1] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]/20 transition-all placeholder:text-gray-600"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-[#66FCF1] font-mono text-sm mb-2 font-bold">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#0B0C10] border border-[#66FCF1]/30 rounded-lg p-3 text-white font-mono focus:border-[#66FCF1] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]/20 transition-all resize-none placeholder:text-gray-600"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#66FCF1] text-[#0B0C10] px-6 py-4 rounded-lg font-mono font-bold hover:bg-[#66FCF1]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SENDING...
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            {status && (
              <div
                className={`p-4 rounded-lg border font-mono text-sm flex items-center gap-3 ${
                  status === "success"
                    ? "bg-[#66FCF1]/10 border-[#66FCF1]/30 text-[#66FCF1]"
                    : "bg-[#C3073F]/10 border-[#C3073F]/30 text-[#C3073F]"
                }`}
              >
                {status === "success" ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed to send message. Please try again.
                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}