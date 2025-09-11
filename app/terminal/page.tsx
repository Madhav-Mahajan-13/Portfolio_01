"use client"

import type React from "react"
import ContactForm from "./components/ContactForm"
import ResumeTab from "./components/Resume"
import { projectsData } from "@/data/projectData";
import { experimentsData } from "@/data/experimentData";
import { profileData } from "@/data/profileData";

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import AiLabSection from "./components/aiLab";
import ProjectSection from "./components/ProjectSection";
import ProfileSection from "./components/ProfileSection";

const commands_title = ["projects", "resume", "experiments", "ai-lab", "contact", "profile","github"]
const commands = ["cd projects", "cd resume", "cd experiments", "cd ai-lab", "cd contact", "cd profile", "cd github"]


export default function TerminalPage() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [currentView, setCurrentView] = useState("welcome")
  const [isTyping, setIsTyping] = useState(false)
  const [githubOpened, setGithubOpened] = useState(false) // Add this state
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

  // Effect to handle GitHub opening when view changes to GitHub
  useEffect(() => {
    if (currentView === "cd github" && !githubOpened) {
      window.open("https://github.com/Madhav-Mahajan-13", "_blank")
      setGithubOpened(true)
    }
    // Reset githubOpened when leaving GitHub view
    if (currentView !== "cd github") {
      setGithubOpened(false)
    }
  }, [currentView, githubOpened])

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
        return(<ProjectSection/> )

      case "cd resume":
       return <ResumeTab/>

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
        return( <AiLabSection/> )

      case "cd contact":
        return (  <ContactForm />  )

      case "cd profile":
        return (<ProfileSection/> )

      case "cd github":
        // Remove window.open from here, now handled in useEffect
        return (
          <div className="space-y-4">
            <div className="text-[#66FCF1] font-mono text-lg mb-4">=== GITHUB REDIRECT ===</div>
            <div className="text-gray-300 font-mono text-sm">
              Opening GitHub profile in a new tab...
            </div>
            <div className="text-gray-400 font-mono text-xs">
              <p>• GitHub: https://github.com/Madhav-Mahajan-13</p>
              <p>• If the page didn't open, check your popup blocker settings</p>
            </div>
            <div className="mt-4">
              <a 
                href="https://github.com/Madhav-Mahajan-13" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#66FCF1] hover:text-white transition-colors font-mono underline"
              >
                Click here if GitHub didn't open automatically
              </a>
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#C3073F] rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-[#66FCF1] rounded-full"></div>
                <span className="ml-4 text-[#66FCF1] font-mono text-sm">terminal@portfolio:~$</span>
              </div>
              {/* Back Button in Header */}
              {currentView !== "welcome" && (
                <button
                  onClick={() => handleCommand("cd ..")}
                  className="bg-[#C3073F]/20 border border-[#C3073F]/40 text-[#C3073F] px-3 py-1 rounded font-mono text-xs hover:bg-[#C3073F]/30 transition-colors flex items-center space-x-1"
                >
                  <span>←</span>
                  <span>cd ..</span>
                </button>
              )}
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