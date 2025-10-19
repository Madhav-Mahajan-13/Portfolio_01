"use client";

import React from "react";

export default function ResumeTab() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white font-mono mb-3">
          <span className="text-[#66FCF1]">//</span> Resume
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#66FCF1] to-[#C3073F]"></div>
      </div>

      <div className="space-y-8">
        {/* EDUCATION */}
        <section className="border-l-2 border-[#66FCF1]/30 pl-6 hover:border-[#66FCF1] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#66FCF1]"></div>
            <h3 className="text-2xl font-bold text-[#66FCF1] font-mono">EDUCATION</h3>
          </div>
          <div className="space-y-3 text-gray-300">
            <div className="bg-[#1F2833] p-4 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <p className="font-mono text-sm leading-relaxed">
                <span className="text-white font-semibold">B.E in Computer Engineering</span> - Thapar Institute of Engineering and Technology
                <span className="text-[#C3073F] ml-2">(Expected 2026)</span>
              </p>
            </div>
            <div className="bg-[#1F2833] p-4 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <p className="font-mono text-sm">
                <span className="text-white font-semibold">12th (Non-Medical)</span> - Holy Heart Presidency School
                <span className="text-[#66FCF1] ml-2">(2022) - 93.4%</span>
              </p>
            </div>
            <div className="bg-[#1F2833] p-4 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <p className="font-mono text-sm">
                <span className="text-white font-semibold">10th</span> - Holy Heart Presidency School
                <span className="text-[#66FCF1] ml-2">(2020) - 92.8%</span>
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="border-l-2 border-[#66FCF1]/30 pl-6 hover:border-[#66FCF1] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#66FCF1]"></div>
            <h3 className="text-2xl font-bold text-[#66FCF1] font-mono">EXPERIENCE</h3>
          </div>
          <div className="space-y-6">
            <div className="bg-[#1F2833] p-6 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-white font-mono">Frontend Developer</h4>
                <span className="text-[#C3073F] font-mono text-sm">Feb 2025 – Apr 2025</span>
              </div>
              <p className="text-[#66FCF1] font-mono text-sm mb-3">HealthArc</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#66FCF1] mt-1">▹</span>
                  <span>Migrated legacy PHP frontend to React, improving performance by 25% and maintainability.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#66FCF1] mt-1">▹</span>
                  <span>Integrated Deepgram API for real-time speech-to-text, reducing manual transcription effort by 10%.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#66FCF1] mt-1">▹</span>
                  <span>Built Shopify integration proof-of-concept for product listings & payment handling.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1F2833] p-6 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-white font-mono">Full-Stack Developer</h4>
                <span className="text-[#C3073F] font-mono text-sm">Sep 2024 – Feb 2025</span>
              </div>
              <p className="text-[#66FCF1] font-mono text-sm mb-3">Alumni Relation Cell</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#66FCF1] mt-1">▹</span>
                  <span>Architected ThaProt-G — a full-stack alumni networking platform for Thapar's students and alumni.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#66FCF1] mt-1">▹</span>
                  <span>Built scalable backend with Express.js & PostgreSQL handling user data, messaging, and projects.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#66FCF1] mt-1">▹</span>
                  <span>Developed alumni card system and event registration with integrated payment gateway.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="border-l-2 border-[#66FCF1]/30 pl-6 hover:border-[#66FCF1] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#66FCF1]"></div>
            <h3 className="text-2xl font-bold text-[#66FCF1] font-mono">PROJECTS</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "ThaProt-G: Alumni Networking Platform",
                points: [
                  "Full-stack web app connecting students and alumni for collaborations, funding, and projects.",
                  "Features role-based access, authentication, and dynamic dashboards with RESTful APIs."
                ]
              },
              {
                title: "Software Fault Prediction System",
                points: [
                  "ML-powered desktop app predicting software faults using historical datasets and classification models.",
                  "Tkinter-based GUI enables dataset uploads, predictions, and visual insights."
                ]
              },
              {
                title: "Healthcare Multilingual Assistant",
                points: [
                  "Real-time multilingual speech-to-text web app for healthcare providers.",
                  "Integrated Deepgram API and Google Cloud Translation supporting 12+ languages with live transcription."
                ]
              },
              {
                title: "AI-Powered Surveillance System",
                points: [
                  "Real-time computer vision system using YOLOv5 and SORT for object detection and tracking.",
                  "Implemented abandoned-object and loitering detection with Streamlit-based alert dashboard."
                ]
              },
              {
                title: "Acadify: Course Management System",
                points: [
                  "PostgreSQL-based academic management database with triggers, views, and automated reporting.",
                  "Streamlined faculty load tracking, assignments, and analytics through optimized queries."
                ]
              },
              {
                title: "Voting System with Fraud Detection",
                points: [
                  "CLI voting system in C++ using STL data structures for O(1) fraud detection.",
                  "Provides real-time results and logs duplicate votes for audit purposes."
                ]
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#1F2833] p-5 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors group"
              >
                <h4 className="text-white font-mono text-sm font-bold mb-3 group-hover:text-[#66FCF1] transition-colors">
                  {project.title}
                </h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#C3073F] mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="border-l-2 border-[#66FCF1]/30 pl-6 hover:border-[#66FCF1] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#66FCF1]"></div>
            <h3 className="text-2xl font-bold text-[#66FCF1] font-mono">LEADERSHIP</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-[#1F2833] p-5 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <h4 className="text-white font-mono text-sm font-bold mb-2">
                Head of Technical & Management Team
              </h4>
              <p className="text-[#66FCF1] font-mono text-xs mb-2">Alumni Relations Cell • Jan 2024 – Present</p>
              <p className="text-gray-400 text-sm">
                Leading development of Thapar's alumni–student networking ecosystem for events, jobs, and outreach.
              </p>
            </div>

            <div className="bg-[#1F2833] p-5 rounded-lg border border-[#66FCF1]/10 hover:border-[#66FCF1]/30 transition-colors">
              <h4 className="text-white font-mono text-sm font-bold mb-2">
                Head of Technical Department
              </h4>
              <p className="text-[#66FCF1] font-mono text-xs mb-2">Saturnalia • Sept 2024 – Present</p>
              <p className="text-gray-400 text-sm">
                Oversaw all technical operations for Thapar's largest techno-cultural fest, serving 15,000+ attendees.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="border-l-2 border-[#66FCF1]/30 pl-6 hover:border-[#66FCF1] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#66FCF1]"></div>
            <h3 className="text-2xl font-bold text-[#66FCF1] font-mono">SKILLS</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1F2833] p-5 rounded-lg border border-[#66FCF1]/10">
              <h4 className="text-[#C3073F] font-mono text-sm font-bold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "C/C++", "SQL", "JavaScript", "HTML", "CSS"].map((skill) => (
                  <span key={skill} className="bg-[#66FCF1]/10 text-[#66FCF1] px-3 py-1 rounded text-xs font-mono border border-[#66FCF1]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1F2833] p-5 rounded-lg border border-[#66FCF1]/10">
              <h4 className="text-[#C3073F] font-mono text-sm font-bold mb-3">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "Express.js", "jQuery", "Bootstrap"].map((skill) => (
                  <span key={skill} className="bg-[#66FCF1]/10 text-[#66FCF1] px-3 py-1 rounded text-xs font-mono border border-[#66FCF1]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1F2833] p-5 rounded-lg border border-[#66FCF1]/10">
              <h4 className="text-[#C3073F] font-mono text-sm font-bold mb-3">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "PyCharm", "PostgreSQL", "Postman"].map((skill) => (
                  <span key={skill} className="bg-[#66FCF1]/10 text-[#66FCF1] px-3 py-1 rounded text-xs font-mono border border-[#66FCF1]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="mt-12 flex justify-center">
        <a
          className="group relative px-8 py-4 bg-[#66FCF1]/10 border-2 border-[#66FCF1] text-[#66FCF1] rounded-lg font-mono hover:bg-[#66FCF1] hover:text-[#0B0C10] transition-all duration-300 inline-flex items-center gap-3"
          href="/resumee.pdf"
          download
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}