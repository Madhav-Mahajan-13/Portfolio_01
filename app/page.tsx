"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"

// --- Custom Hook: useKonamiCode ---
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

const useKonamiCode = (): boolean => {
  const [keys, setKeys] = useState<string[]>([])
  const [success, setSuccess] = useState(false)

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (success) return;
    setKeys((prevKeys) => [...prevKeys, event.key].slice(-KONAMI_CODE.length))
  }, [success])

  useEffect(() => {
    if (keys.join('') === KONAMI_CODE.join('')) {
      setSuccess(true)
    }
  }, [keys])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return success
}


// --- Visual Effect Components ---

const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    class Particle {
      x: number; y: number; size: number;
      speedX: number; speedY: number;

      constructor() {
        const width = canvas?.width ?? 0
        const height = canvas?.height ?? 0
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 1.5 + 1
        this.speedX = (Math.random() * 2 - 1) * 0.5
        this.speedY = (Math.random() * 2 - 1) * 0.5
      }
      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1
        this.x += this.speedX
        this.y += this.speedY
      }
      draw() {
        ctx!.fillStyle = 'rgba(102, 252, 241, 0.8)'
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    const init = () => {
      particles = []
      const numberOfParticles = (canvas.width * canvas.height) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    const connect = () => {
        let opacityValue = 1
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y))
                if (distance < (canvas.width/7) * (canvas.height/7)) {
                    opacityValue = 1 - (distance/20000)
                    ctx!.strokeStyle = `rgba(102, 252, 241, ${opacityValue})`
                    ctx!.lineWidth = 1
                    ctx!.beginPath()
                    ctx!.moveTo(particles[a].x, particles[a].y)
                    ctx!.lineTo(particles[b].x, particles[b].y)
                    ctx!.stroke()
                }
            }
        }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw(); })
      connect()
      requestAnimationFrame(animate)
    }

    resizeCanvas()
    init()
    animate()
    
    window.addEventListener('resize', () => { resizeCanvas(); init(); })
    
    return () => window.removeEventListener('resize', () => { resizeCanvas(); init(); })
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10" />
}

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const nums = '0123456789'
    const alphabet = katakana + latin + nums

    const fontSize = 16
    const columns = canvas.width / fontSize
    const rainDrops: number[] = []

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 12, 16, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#66FCF1'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }
    
    const intervalId = setInterval(draw, 30)
    
    return () => clearInterval(intervalId)
  }, [])
  
  return <canvas ref={canvasRef} className="fixed top-0 left-0 z-50" />
}


// --- NEW Floating Game Bubble Component ---
const FloatingGameBubble = () => {
    const bubbleRef = useRef<HTMLAnchorElement>(null);
    const position = useRef({ x: 50, y: 50 });
    // Changed the multiplier from 8 to 12 to increase speed
    const velocity = useRef({ x: (Math.random() - 0.5) * 12, y: (Math.random() - 0.5) * 12 });
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        const moveBubble = () => {
            if (bubbleRef.current) {
                // Update position
                position.current.x += velocity.current.x;
                position.current.y += velocity.current.y;

                // Collision detection with viewport edges
                const rect = bubbleRef.current.getBoundingClientRect();
                if (position.current.x + rect.width >= window.innerWidth || position.current.x <= 0) {
                    velocity.current.x *= -1;
                }
                if (position.current.y + rect.height >= window.innerHeight || position.current.y <= 0) {
                    velocity.current.y *= -1;
                }

                // Apply new position
                bubbleRef.current.style.left = `${position.current.x}px`;
                bubbleRef.current.style.top = `${position.current.y}px`;
            }
            animationFrameId.current = requestAnimationFrame(moveBubble);
        };

        animationFrameId.current = requestAnimationFrame(moveBubble);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <a
            ref={bubbleRef}
            href="https://minegame-indol.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-1/2 left-1/2 z-40 flex h-20 w-20 transform items-center justify-center rounded-full bg-cyan-400/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-400/20"
            style={{
                boxShadow: '0 0 15px rgba(102, 252, 241, 0.4), inset 0 0 10px rgba(102, 252, 241, 0.3)',
                border: '1px solid rgba(102, 252, 241, 0.5)',
            }}
        >
            {/* Controller Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none" stroke="#66FCF1" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                <path d="M76,120h24v24H76Z" opacity="0.2"/>
                <path d="M176,144a28,28,0,0,1-28-28,28.1,28.1,0,0,1,28-28" fill="none" stroke="#66FCF1" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                <path d="M100,120H76v24h24Z" fill="none" stroke="#66FCF1" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                <path d="M88,108V84" fill="none" stroke="#66FCF1" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                <rect x="32" y="48" width="192" height="160" rx="40" fill="none" stroke="#66FCF1" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            </svg>
        </a>
    );
};


// --- UI Components ---
const ScrambleText = ({ children }: { children: string }) => {
  const [text, setText] = useState(children)
  const intervalRef = useRef<any>(null)
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  const scramble = useCallback(() => {
    let iteration = 0
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setText(prevText => 
        prevText.split("")
          .map((letter, index) => {
            if(index < iteration) {
              return children[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if(iteration >= children.length) { 
        clearInterval(intervalRef.current)
      }
      
      iteration += 1 / 3
    }, 30)
  }, [children])

  return (
    <span onMouseEnter={scramble} className="inline-block">
      {text}
    </span>
  )
}

const InteractivePanel = ({ href, panelId, hoveredPanel, setHoveredPanel, theme, icon, title, subtitle, description }: any) => {
  const isHovered = hoveredPanel === panelId
  const panelRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    panelRef.current.style.setProperty('--mouse-x', `${x}px`)
    panelRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

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
    glare: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(102, 252, 241, 0.1), transparent 40%)'
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
    glare: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(195, 7, 63, 0.1), transparent 40%)'
  }

  return (
    <Link href={href} passHref>
      <div
        ref={panelRef}
        onMouseEnter={() => setHoveredPanel(panelId)}
        onMouseLeave={() => setHoveredPanel(null)}
        onMouseMove={handleMouseMove}
        className={`group relative h-96 cursor-pointer rounded-3xl p-8 flex flex-col justify-center items-center transition-all duration-500 ease-out ${
          isHovered ? `scale-105 ${panelId === 'engineering' ? '-rotate-1' : 'rotate-1'}` : ""
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientVia} rounded-3xl transition-all duration-500 ${isHovered ? colors.shadow : ''}`} />
        <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${isHovered ? colors.hoverBorder : colors.border}`} />
        <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${colors.glowFrom} ${colors.glowTo} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: colors.glare }} />
        
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

// --- Main Page Component ---

export default function HomePage() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 })
  const konamiSuccess = useKonamiCode()

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="min-h-screen bg-[#0B0C10] text-white overflow-hidden relative font-sans">
        
        {konamiSuccess && <MatrixRain />}
        <ConstellationCanvas />
        <FloatingGameBubble /> {/* <-- ADDED BUBBLE HERE */}
        
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 252, 241, 0.15), transparent 80%)`
          }}
        />
        
        <header className="fixed top-0 left-0 right-0 z-20 p-4 md:p-6 backdrop-blur-md bg-[#0B0C10]/50 border-b border-gray-500/10">
          <div className={`flex items-center justify-between max-w-7xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#C3073F] rounded-lg flex items-center justify-center shadow-lg shadow-[#66FCF1]/20 hover:shadow-[#66FCF1]/40 transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#66FCF1] font-medium text-sm md:text-base tracking-[0.15em] uppercase">Madhav Mahajan</span>
                <span className="text-gray-400 text-xs tracking-wider">Full-Stack Developer</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm hidden sm:block">Status:</span>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm hidden sm:block">Online</span>
            </div>
          </div>
        </header>

        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 pt-28 md:pt-32">
          <div className={`text-center mb-20 max-w-4xl transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter">
              <span className="text-gray-200"><ScrambleText>Engineering</ScrambleText> </span>
              <span className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E] bg-clip-text text-transparent"><ScrambleText>Precision</ScrambleText>.</span>
              <br />
              <span className="text-gray-200"><ScrambleText>Building</ScrambleText> </span> 
              <span className="bg-gradient-to-r from-[#C3073F] to-[#FF6B6B] bg-clip-text text-transparent"><ScrambleText>Experiences</ScrambleText>.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
              I craft scalable backend systems and intuitive interfaces, bringing ideas to life with clean code and creative design.
            </p>
          </div>
          <div className={`grid md:grid-cols-2 gap-10 w-full max-w-6xl transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <InteractivePanel href="/terminal" panelId="engineering" hoveredPanel={hoveredPanel} setHoveredPanel={setHoveredPanel} theme="cyan" icon={"</>"} title="Code Playground" subtitle="Terminal Interface" description="Dive into my technical universe. Explore projects, experiments, and documentation through an interactive terminal experience."/>
            <InteractivePanel href="/vault" panelId="storytelling" hoveredPanel={hoveredPanel} setHoveredPanel={setHoveredPanel} theme="magenta" icon={"✦"} title="Creative Vault" subtitle="Stories & Writing" description="Step into my creative sanctuary. Discover stories, thoughts, and artistic expressions that fuel my imagination."/>
          </div>
        </main>
      </div>
    </>
  )
}