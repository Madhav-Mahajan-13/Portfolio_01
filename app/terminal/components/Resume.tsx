"use client";

import React from "react";

export default function ResumeTab() {
    return(<div className="space-y-6">
        <div className="text-[#66FCF1] font-mono text-lg mb-4">=== PROFESSIONAL RESUME ===</div>

        <div className="space-y-4">
          
          <section>
            <h3 className="text-[#C3073F] font-mono text-md mb-2">EDUCATION</h3>
            <div className="ml-4 font-mono text-sm text-gray-300">
              <p>• B.E in Computer Engineering - Thapar Institute of Engineering and Technology (Expected 2026)</p>
              <p>• 12th (Non-Medical) - Holy Heart Presidency School (2022) - 93.4%</p>
              <p>• 10th - Holy Heart Presidency School (2020) - 92.8%</p>
            </div>
          </section>

          <section>
            <h3 className="text-[#C3073F] font-mono text-md mb-2">EXPERIENCE</h3>
            <div className="ml-4 font-mono text-sm text-gray-300 space-y-2">
              <div>
                <p className="text-[#66FCF1]">Frontend Developer - HealthArc (Feb 2025 – Apr 2025)</p>
                <p>• Converted legacy PHP frontend to modern React architecture.</p>
                <p>• Integrated Deepgram API for real-time speech-to-text functionality.</p>
                <p>• Built proof-of-concept Shopify integration for product listings & payments.</p>
              </div>
              <div>
                <p className="text-[#66FCF1]">Full-Stack Developer - Alumni Relation Cell (Sep 2024 – Feb 2025)</p>
                <p>• Designed and developed ThaProt-G — a professional networking platform for Thapar alumni & students.</p>
                <p>• Built scalable backend with Express.js & PostgreSQL handling user data, messaging, and projects.</p>
                <p>• Deployed full-stack application with production domain integration.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#C3073F] font-mono text-md mb-2">PROJECTS</h3>
            <div className="ml-4 font-mono text-sm text-gray-300 space-y-2">
              <div>
                <p className="text-[#66FCF1]">ThaProt-G: Alumni Networking Platform</p>
                <p>• Full-stack web app enabling student-alumni collaboration, funding, and project showcases.</p>
                <p>• Role-based access system with custom domain deployment.</p>
              </div>
              <div>
                <p className="text-[#66FCF1]">Software Fault Prediction System</p>
                <p>• ML-powered desktop app predicting software faults using historical project data.</p>
                <p>• GUI built with Tkinter for real-time dataset analysis and visualization.</p>
              </div>
              <div>
                <p className="text-[#66FCF1]">Healthcare Multilingual Assistant</p>
                <p>• Real-time multilingual speech-to-text web app for healthcare providers.</p>
                <p>• Integrated Deepgram API & Google Cloud Translation across 12+ languages.</p>
              </div>
              <div>
                <p className="text-[#66FCF1]">Voting System with Fraud Detection</p>
                <p>• CLI voting system in C++ using STL for real-time fraud detection & result visualization.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#C3073F] font-mono text-md mb-2">SKILLS</h3>
            <div className="ml-4 font-mono text-sm text-gray-300">
              <p>• Languages: Python, C/C++, SQL (PostgreSQL), JavaScript, HTML, CSS</p>
              <p>• Frameworks & Libraries: React.js, Express.js, Node.js, jQuery, Bootstrap</p>
              <p>• Tools: Git, VS Code, PyCharm, Jupyter Notebook, PostgreSQL</p>
            </div>
          </section>
        </div>
      
      
      <a
        className="bg-[#66FCF1]/20 border border-[#66FCF1] text-[#66FCF1] px-4 py-2 rounded font-mono hover:bg-[#66FCF1]/30 transition-colors inline-block text-center"
        href="/resume.pdf"
        download
      >
        [DOWNLOAD RESUME]
      </a>
    </div>)
}
