"use client";
import React from "react";
import { projectsData } from "@/data/projectData";

export default function ProjectSection(){
    return (
              <div className="space-y-6">
                <div className="text-[#66FCF1] font-mono text-lg mb-4">=== PROJECT PORTFOLIO ===</div>
                {projectsData.map((project, index) => (
                  <div key={index} className="border border-[#66FCF1]/30 rounded p-4 bg-[#66FCF1]/5">
                    <h3 className="text-[#66FCF1] font-mono text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-3 font-mono text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-[#C3073F]/20 text-[#C3073F] px-2 py-1 rounded text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.demo} className="text-[#66FCF1] hover:underline font-mono text-sm">
                        [DEMO]
                      </a>
                      <a href={project.github} className="text-[#66FCF1] hover:underline font-mono text-sm">
                        [GITHUB]
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
}