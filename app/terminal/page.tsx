"use client"

import type React from "react"
import ContactForm from "./components/ContactForm"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const commands_title = ["projects", "resume", "experiments", "ai-lab", "contact", "profile"]
const commands = ["cd projects", "cd resume", "cd experiments", "cd ai-lab", "cd contact", "cd profile"]
const projectsData = [
  {
    title: "ThaProt-G: Alumni Networking Platform",
    description: [
      "Full-stack professional networking platform for Thapar students and alumni.",
      "Features user authentication, dynamic dashboards, messaging, alumni search filters, and project showcasing.",
      "Role-based access for students, alumni, and admin committee.",
      "Built with React.js, Node.js, Express.js, and PostgreSQL.",
      "Deployed with custom domain ensuring scalability and security."
    ],
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API", "Full-Stack"],
    demo: "https://thaprotg.thapar.edu",
    github: "#"
  },
  {
    title: "Software Fault Prediction System",
    description: [
      "Machine learning-powered desktop application to predict software faults early in development.",
      "Uses historical project data and ML algorithms for fault classification.",
      "GUI built with Tkinter allows dataset uploads, predictions, and software health visualization.",
      "Reduces maintenance cost and improves software reliability."
    ],
    tags: ["Python", "Machine Learning", "GUI", "Tkinter", "Software Reliability"],
    demo: "#",
    github: "https://github.com/Madhav-Mahajan-13/software-fault-pediction-app"
  },
  {
    title: "Healthcare Multilingual Assistant",
    description: [
      "Real-time multilingual speech-to-text and translation web app for healthcare providers.",
      "Uses Deepgram API for transcription and Google Cloud Translation API for bidirectional translation.",
      "Supports 12+ languages with live audio streaming and file uploads.",
      "Backend built with Node.js, Express.js, and WebSocket-powered real-time updates via Socket.io.",
      "Responsive UI built with Bootstrap for clinical usability."
    ],
    tags: ["Node.js", "Express.js", "Deepgram API", "Socket.io", "Bootstrap", "WebSockets", "Google Cloud Translation"],
    demo: "#",
    github: "https://github.com/Madhav-Mahajan-13/deepgram"
  },
  {
    title: "Voting System with Real-Time Fraud Detection",
    description: [
      "Command-line voting system built in C++ using STL data structures (hash maps, sets, vectors).",
      "Ensures O(1) fraud detection by preventing multiple votes per user.",
      "Provides real-time vote statistics with ASCII-based result visualization.",
      "Logs duplicate votes with timestamps for admin audit.",
      "Focuses on algorithmic efficiency, input validation, and data integrity."
    ],
    tags: ["C++", "STL", "Data Structures", "Algorithms", "Fraud Detection", "CLI Application"],
    demo: "#",
    github: "#"
  }
];

const experimentsData = [
  {
    title: "AI Code Generator",
    description: "Experimental tool that generates code from natural language descriptions",
    tags: ["Python", "OpenAI API", "Flask", "NLP"],
    status: "In Progress",
  },
  {
    title: "Quantum Algorithm Simulator",
    description: "Browser-based quantum computing simulator for educational purposes",
    tags: ["JavaScript", "Quantum.js", "WebAssembly"],
    status: "Beta",
  },
  {
    title: "Voice-Controlled IDE",
    description: "Prototype IDE that accepts voice commands for coding operations",
    tags: ["Electron", "Speech Recognition", "Monaco Editor"],
    status: "Prototype",
  },
]

const profileData = {
  name: "Alex Morgan",
  bio: "Full-stack developer and creative storyteller with a passion for building innovative solutions and crafting compelling narratives. I bridge the gap between technical excellence and creative expression.",
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "MIT",
      year: "2022",
      focus: "Artificial Intelligence & Machine Learning",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Stanford University",
      year: "2020",
      focus: "Systems Design & Architecture",
    },
  ],
  hobbies: [
    "Creative Writing & Storytelling",
    "Open Source Contributions",
    "Photography & Digital Art",
    "Chess & Strategic Games",
    "Hiking & Nature Exploration",
    "Music Production & Sound Design",
  ],
  contact: "alex.morgan@example.com",
}

export default function TerminalPage() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [currentView, setCurrentView] = useState("welcome")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentView])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, currentView])

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()
    setHistory((prev) => [...prev, `> ${command}`])

    if (cmd === "cd ..") {
      setCurrentView("welcome")
      setHistory((prev) => [...prev, "Returned to main directory"])
    } else if (commands.includes(cmd)) {
      setCurrentView(cmd)
      setHistory((prev) => [...prev, `Loading ${cmd}...`])
    } else if (cmd === "clear") {
      setHistory([])
      setCurrentView("welcome")
    } else if (cmd === "help") {
      setHistory((prev) => [...prev, "Available commands: " + commands.join(", ") + ", cd .., clear, help"])
    } else if (cmd) {
      setHistory((prev) => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`])
    }

    setInput("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
  }

  const renderContent = () => {
    switch (currentView) {
      case "cd projects":
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

      case "cd resume":
       return (
      <div className="space-y-6">
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
      
      {/* Download Resume Button */}
      <a
        className="bg-[#66FCF1]/20 border border-[#66FCF1] text-[#66FCF1] px-4 py-2 rounded font-mono hover:bg-[#66FCF1]/30 transition-colors inline-block text-center"
        href="/resume.pdf"
        download
      >
        [DOWNLOAD RESUME]
      </a>
    </div>
    )


      case "cd experiments":
        return (
          <div className="space-y-6">
            <div className="text-[#66FCF1] font-mono text-lg mb-4">=== EXPERIMENTAL PROJECTS ===</div>
            {experimentsData.map((experiment, index) => (
              <div key={index} className="border border-[#C3073F]/30 rounded p-4 bg-[#C3073F]/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[#C3073F] font-mono text-lg">{experiment.title}</h3>
                  <span className="bg-[#66FCF1]/20 text-[#66FCF1] px-2 py-1 rounded text-xs font-mono">
                    {experiment.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-3 font-mono text-sm">{experiment.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experiment.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#66FCF1]/20 text-[#66FCF1] px-2 py-1 rounded text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case "cd ai-lab":
        return (
          <div className="space-y-6">
            <div className="text-[#66FCF1] font-mono text-lg mb-4">=== AI LABORATORY ===</div>
            <div className="border border-[#66FCF1]/30 rounded p-6 bg-[#66FCF1]/5">
              <h3 className="text-[#66FCF1] font-mono text-lg mb-4">Current Research Areas</h3>
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <p>• Machine Learning Model Optimization</p>
                <p>• Natural Language Processing Applications</p>
                <p>• Computer Vision for Real-time Applications</p>
                <p>• Reinforcement Learning in Game Development</p>
                <p>• Neural Architecture Search Algorithms</p>
              </div>
            </div>
            <div className="border border-[#C3073F]/30 rounded p-6 bg-[#C3073F]/5">
              <h3 className="text-[#C3073F] font-mono text-lg mb-4">Recent Publications</h3>
              <div className="space-y-2 font-mono text-sm text-gray-300">
                <p>• "Optimizing Neural Networks for Edge Computing" - AI Conference 2024</p>
                <p>• "Novel Approaches to Few-Shot Learning" - ML Journal 2023</p>
                <p>• "Ethical AI in Production Systems" - Tech Ethics Symposium 2023</p>
              </div>
            </div>
          </div>
        )

      case "cd contact":
        return (
          <ContactForm />
        )

      case "cd profile":
        return (
          <div className="space-y-6">
            <div className="text-[#66FCF1] font-mono text-lg mb-4">=== USER PROFILE ===</div>

            <div className="space-y-4">
              <section>
                <h3 className="text-[#C3073F] font-mono text-md mb-2">NAME</h3>
                <div className="ml-4 font-mono text-sm text-gray-300">
                  <p>{profileData.name}</p>
                </div>
              </section>

              <section>
                <h3 className="text-[#C3073F] font-mono text-md mb-2">BIO</h3>
                <div className="ml-4 font-mono text-sm text-gray-300 leading-relaxed">
                  <p>{profileData.bio}</p>
                </div>
              </section>

              <section>
                <h3 className="text-[#C3073F] font-mono text-md mb-2">EDUCATION</h3>
                <div className="ml-4 font-mono text-sm text-gray-300 space-y-2">
                  {profileData.education.map((edu, index) => (
                    <div key={index}>
                      <p className="text-[#66FCF1]">{edu.degree}</p>
                      <p>
                        • {edu.institution} ({edu.year})
                      </p>
                      <p>• Focus: {edu.focus}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[#C3073F] font-mono text-md mb-2">HOBBIES & INTERESTS</h3>
                <div className="ml-4 font-mono text-sm text-gray-300">
                  {profileData.hobbies.map((hobby, index) => (
                    <p key={index}>• {hobby}</p>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[#C3073F] font-mono text-md mb-2">CONTACT</h3>
                <div className="ml-4 font-mono text-sm text-gray-300">
                  <p className="text-[#66FCF1]">{profileData.contact}</p>
                </div>
              </section>
            </div>

            <div className="mt-4 p-3 border border-[#66FCF1]/30 rounded bg-[#66FCF1]/5">
              <p className="font-mono text-xs text-gray-400">Tip: Type 'cd ..' to return to main directory</p>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-4">
            <div className="text-[#66FCF1] font-mono">Welcome to the Software Engineering Terminal</div>
            <div className="text-gray-300 font-mono text-sm">Type a command or click on one below:</div>
            <div className="text-gray-400 font-mono text-xs mt-2">
              <p>• Use 'cd ..' to go back to main directory</p>
              <p>• Type 'help' for all available commands</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-[#66FCF1] hover:text-white transition-colors font-mono">
          ← BACK TO MAIN
        </Link>
        <div className="text-[#66FCF1] font-mono text-sm">TERMINAL v2.1.0</div>
      </div>

      {/* Terminal Window */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/50 border border-[#66FCF1]/30 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#66FCF1]/10 px-4 py-2 border-b border-[#66FCF1]/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#C3073F] rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-[#66FCF1] rounded-full"></div>
              <span className="ml-4 text-[#66FCF1] font-mono text-sm">terminal@portfolio:~$</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div ref={terminalRef} className="p-6 h-[500px] overflow-y-auto">
            {/* Command History */}
            {history.map((line, index) => (
              <div key={index} className="font-mono text-sm text-gray-300 mb-1">
                {line}
              </div>
            ))}

            {/* Current Content */}
            <div className="mt-6">{renderContent()}</div>

            {/* Available Commands */}
            {currentView === "welcome" && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-2">
                {commands_title.map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand("cd "+cmd)}
                    className="bg-[#66FCF1]/10 border border-[#66FCF1]/30 text-[#66FCF1] px-3 py-2 rounded font-mono text-sm hover:bg-[#66FCF1]/20 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Command Input */}
          <div className="border-t border-[#66FCF1]/30 p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <span className="text-[#66FCF1] font-mono text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none"
                placeholder="Type a command..."
                autoComplete="off"
              />
              <div className="w-2 h-4 bg-[#66FCF1] animate-pulse"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
