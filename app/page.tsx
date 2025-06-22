"use client"

import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-2 md:space-y-0">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-gradient-to-r from-[#66FCF1] to-[#C3073F] rounded-lg flex items-center justify-center">
        <span className="text-black font-bold text-lg">M</span>
      </div>
      <span className="text-[#66FCF1] font-light text-sm md:text-base tracking-wider whitespace-nowrap">
        MADHAV MAHAJAN
      </span>
    </div>
  </div>
</header>


      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 pt-32 md:pt-0">

        {/* Tagline */}
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-thin mb-6 leading-tight">
            <span className="text-white">Engineering Precision.</span> <span className="text-[#66FCF1]">Building Experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            Full-stack developer. Backend architect. Machine learning explorer. <br />Crafting code that scales and interfaces that feel natural.
          </p>
        </div>

        {/* Interactive Panels */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Engineering Panel */}
          <Link href="/terminal">
            <div
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredPanel === "engineering" ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredPanel("engineering")}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              <div className="bg-gradient-to-br from-[#0B0C10] to-[#1a1d29] border border-[#66FCF1]/20 rounded-2xl p-8 h-80 flex flex-col justify-center items-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-[#66FCF1]/5 rounded-2xl transition-opacity duration-500 ${
                    hoveredPanel === "engineering" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    hoveredPanel === "engineering"
                      ? "shadow-[0_0_30px_rgba(102,252,241,0.3)] border-[#66FCF1]/50"
                      : "border-[#66FCF1]/20"
                  } border`}
                />
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-[#66FCF1]/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-[#66FCF1] text-2xl font-mono">{"</>"}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#66FCF1]">Code Playground</h2>
                  <h3 className="text-xl font-mono text-white/80">Terminal Interface</h3>
                  <p className="text-sm text-gray-400 mt-4 font-light">Explore my projects, experiments, and technical resume</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Creative Panel */}
          <Link href="/vault">
            <div
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredPanel === "storytelling" ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredPanel("storytelling")}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              <div className="bg-gradient-to-br from-[#0B0C10] to-[#2d1b1b] border border-[#C3073F]/20 rounded-2xl p-8 h-80 flex flex-col justify-center items-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-[#C3073F]/5 rounded-2xl transition-opacity duration-500 ${
                    hoveredPanel === "storytelling" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    hoveredPanel === "storytelling"
                      ? "shadow-[0_0_30px_rgba(195,7,63,0.3)] border-[#C3073F]/50"
                      : "border-[#C3073F]/20"
                  } border`}
                />
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-[#C3073F]/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-[#C3073F] text-2xl">🖋️</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#C3073F]">Creative Vault</h2>
                  <h3 className="text-xl font-serif text-white/80">Stories & Writing</h3>
                  <p className="text-sm text-gray-400 mt-4 font-light">Peek into my storytelling side</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#66FCF1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C3073F]/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
