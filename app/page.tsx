"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// For better organization, you could move this to its own file (e.g., components/InteractivePanel.tsx)
const InteractivePanel = ({
  href,
  panelId,
  hoveredPanel,
  setHoveredPanel,
  theme,
  icon,
  title,
  subtitle,
  description
}: any) => {
  const isHovered = hoveredPanel === panelId
  const colors = theme === 'cyan' ? {
    main: '#66FCF1',
    border: 'border-[#66FCF1]/20',
    hoverBorder: 'border-[#66FCF1]/60',
    shadow: 'shadow-[0_0_60px_-15px_rgba(102,252,241,0.3)]',
    gradientFrom: 'from-[#0B0C10]',
    gradientVia: 'via-[#1a1d29]',
    glowFrom: 'from-[#66FCF1]/10',
    glowTo: 'to-[#45A29E]/10',
    iconBgFrom: 'from-[#66FCF1]/20',
    iconBgTo: 'to-[#45A29E]/20',
    subtitleBg: 'bg-[#66FCF1]/10',
  } : {
    main: '#C3073F',
    border: 'border-[#C3073F]/20',
    hoverBorder: 'border-[#C3073F]/60',
    shadow: 'shadow-[0_0_60px_-15px_rgba(195,7,63,0.4)]',
    gradientFrom: 'from-[#0B0C10]',
    gradientVia: 'via-[#2d1b1b]',
    glowFrom: 'from-[#C3073F]/10',
    glowTo: 'to-[#FF6B6B]/10',
    iconBgFrom: 'from-[#C3073F]/20',
    iconBgTo: 'to-[#FF6B6B]/20',
    subtitleBg: 'bg-[#C3073F]/10',
  }

  return (
    <Link href={href} passHref>
      <div
        onMouseEnter={() => setHoveredPanel(panelId)}
        onMouseLeave={() => setHoveredPanel(null)}
        className={`relative group cursor-pointer transition-all duration-500 ease-out h-96 flex flex-col justify-center items-center p-8 rounded-3xl ${
          isHovered ? `scale-105 ${panelId === 'engineering' ? '-rotate-1' : 'rotate-1'}` : ""
        }`}
      >
        {/* Base structure and background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientVia} rounded-3xl transition-all duration-500 ${isHovered ? colors.shadow : ''}`} />
        
        {/* Animated Border */}
        <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${isHovered ? colors.hoverBorder : colors.border}`} />

        {/* Inner glow effect on hover */}
        <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${colors.glowFrom} ${colors.glowTo} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

        <div className="relative z-10 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${colors.iconBgFrom} ${colors.iconBgTo} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
            <span className="text-4xl" style={{ color: colors.main }}>{icon}</span>
          </div>
          <h2 className="text-3xl font-light mb-4 tracking-wider" style={{ color: colors.main }}>
            {title}
          </h2>
          <h3 className={`text-xl font-mono text-white/90 mb-4 ${colors.subtitleBg} px-4 py-2 rounded-lg inline-block`}>
            {subtitle}
          </h3>
          <p className="text-gray-400 mt-6 font-light leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}


export default function HomePage() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Keyframe animations for background effects */}
      <style jsx global>{`
        @keyframes aurora {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(80px, 120px) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes aurora-2 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-100px, -60px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
      
      <div className="min-h-screen bg-[#0B0C10] text-white overflow-hidden relative font-sans">
        {/* Background Grid */}
        <div className="fixed inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(102, 252, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 252, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Flowing Aurora Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#66FCF1]/5 rounded-full blur-3xl" style={{ animation: `aurora 12s infinite ease-in-out` }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C3073F]/5 rounded-full blur-3xl" style={{ animation: `aurora-2 14s infinite ease-in-out`, animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#45A29E]/5 rounded-full blur-2xl" style={{ animation: `aurora 16s infinite ease-in-out`, animationDelay: '1s' }} />
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-10 p-4 md:p-6 backdrop-blur-md bg-[#0B0C10]/50 border-b border-gray-500/10">
          <div className={`flex items-center justify-between max-w-7xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#C3073F] rounded-lg flex items-center justify-center shadow-lg shadow-[#66FCF1]/20 hover:shadow-[#66FCF1]/40 transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#66FCF1] font-medium text-sm md:text-base tracking-[0.15em] uppercase">
                  Madhav Mahajan
                </span>
                <span className="text-gray-400 text-xs tracking-wider">
                  Full-Stack Developer
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm hidden sm:block">Status:</span>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm hidden sm:block">Online</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
<main className="relative z-0 flex flex-col items-center justify-center min-h-screen p-6 pt-28 md:pt-32">          
          {/* Tagline */}
          <div className={`text-center mb-20 max-w-4xl transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter">
              <span className="text-gray-200">Engineering </span>
              <span className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E] bg-clip-text text-transparent">Precision</span>.
              <br />
              <span className="text-gray-200">Building </span> 
              <span className="bg-gradient-to-r from-[#C3073F] to-[#FF6B6B] bg-clip-text text-transparent">Experiences</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
              I craft scalable backend systems and intuitive interfaces, bringing ideas to life with clean code and creative design.
            </p>
          </div>

          {/* Interactive Panels */}
          <div className={`grid md:grid-cols-2 gap-10 w-full max-w-6xl transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <InteractivePanel 
              href="/terminal"
              panelId="engineering"
              hoveredPanel={hoveredPanel}
              setHoveredPanel={setHoveredPanel}
              theme="cyan"
              icon={"</>"}
              title="Code Playground"
              subtitle="Terminal Interface"
              description="Dive into my technical universe. Explore projects, experiments, and documentation through an interactive terminal experience."
            />
            <InteractivePanel 
              href="/vault"
              panelId="storytelling"
              hoveredPanel={hoveredPanel}
              setHoveredPanel={setHoveredPanel}
              theme="magenta"
              icon={"✦"}
              title="Creative Vault"
              subtitle="Stories & Writing"
              description="Step into my creative sanctuary. Discover stories, thoughts, and artistic expressions that fuel my imagination."
            />
          </div>
          
        </main>
      </div>
    </>
  )
}