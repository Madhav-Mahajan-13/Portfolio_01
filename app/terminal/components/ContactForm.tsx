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
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-[#66FCF1] font-mono text-lg mb-4">=== CONTACT INTERFACE ===</div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#66FCF1] font-mono text-sm mb-2">NAME:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#0B0C10] border border-[#66FCF1]/30 rounded p-2 text-white font-mono focus:border-[#66FCF1] focus:outline-none"
            placeholder="Enter your name..."
          />
        </div>
        <div>
          <label className="block text-[#66FCF1] font-mono text-sm mb-2">EMAIL:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#0B0C10] border border-[#66FCF1]/30 rounded p-2 text-white font-mono focus:border-[#66FCF1] focus:outline-none"
            placeholder="Enter your email..."
          />
        </div>
        <div>
          <label className="block text-[#66FCF1] font-mono text-sm mb-2">MESSAGE:</label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-[#0B0C10] border border-[#66FCF1]/30 rounded p-2 text-white font-mono focus:border-[#66FCF1] focus:outline-none resize-none"
            placeholder="Enter your message..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#66FCF1]/20 border border-[#66FCF1] text-[#66FCF1] px-6 py-2 rounded font-mono hover:bg-[#66FCF1]/30 transition-colors"
        >
          {loading ? "[SENDING...]" : "[SEND MESSAGE]"}
        </button>
        {status && <p className="font-mono text-sm text-gray-300 mt-2">{status}</p>}
      </form>
    </div>
  );
}
