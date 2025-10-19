"use client";
import React from "react";

// Mock data for demonstration
import { projectsData } from "@/data/projectData";

export default function ProjectSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-white font-mono mb-2">
            Featured <span className="text-[#66FCF1]">Projects</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">Explore my latest work</p>
        </div>
        <div className="hidden md:block text-[#66FCF1]/40 font-mono text-6xl font-bold">
          {projectsData.length}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col border border-[#66FCF1]/20 rounded-xl overflow-hidden bg-[#1F2833] hover:border-[#66FCF1] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#66FCF1]/20"
          >
            {/* Card Header */}
            <div className="relative p-6 bg-gradient-to-br from-[#0B0C10] to-[#1F2833] border-b border-[#66FCF1]/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#66FCF1]/10 flex items-center justify-center border border-[#66FCF1]/30 group-hover:bg-[#66FCF1]/20 transition-colors">
                <span className="text-[#66FCF1] font-mono font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-mono pr-16 group-hover:text-[#66FCF1] transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Card Body */}
            <div className="flex-1 p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-[#C3073F]/10 text-[#C3073F] px-2.5 py-1 rounded-md border border-[#C3073F]/20 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-0 flex gap-3">
              <a
                href={project.demo}
                className="flex-1 text-center py-2.5 bg-[#66FCF1]/10 text-[#66FCF1] rounded-lg font-mono text-sm border border-[#66FCF1]/30 hover:bg-[#66FCF1] hover:text-[#0B0C10] transition-all duration-200"
              >
                Demo
              </a>
              <a
                href={project.github}
                className="flex-1 text-center py-2.5 bg-[#C3073F]/10 text-[#C3073F] rounded-lg font-mono text-sm border border-[#C3073F]/30 hover:bg-[#C3073F] hover:text-white transition-all duration-200"
              >
                Code
              </a>
            </div>

            {/* Animated corner accent */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-[#66FCF1] border-r-[40px] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      
    </div>
  );
}