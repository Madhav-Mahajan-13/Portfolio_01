"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

const storiesData = {
  ongoing: [
    {
      title: "Fragments of Control",
      cover: "/placeholder.svg?height=300&width=200",
      teaser: "A psychological thriller where obsession and manipulation dance on the thin line between love and control.",
      chapters: 10,
      lastUpdated: "2024-06-01",
    },
    {
      title: "Binary Scars",
      cover: "/placeholder.svg?height=300&width=200",
      teaser: "In a hyperconnected society, digital identities are currency, and one rogue coder rewrites the system for revenge.",
      chapters: 7,
      lastUpdated: "2024-05-20",
    },
  ],
  archives: [
    {
      title: "The Dark Algorithm",
      cover: "/placeholder.svg?height=300&width=200",
      teaser: "When an AI language model learns forbidden knowledge, a secret war begins to erase its existence before it leaks the truth.",
      chapters: 20,
      completed: "2024-01-15",
    },
    {
      title: "Ashes of Dominion",
      cover: "/placeholder.svg?height=300&width=200",
      teaser: "An underground rebellion rises against a dystopian regime that controls both emotion and memory.",
      chapters: 16,
      completed: "2023-12-05",
    },
    {
      title: "Toxic Serenity",
      cover: "/placeholder.svg?height=300&width=200",
      teaser: "Behind the perfect facade of luxury, a twisted game of silent psychological torture unfolds between lovers.",
      chapters: 13,
      completed: "2023-10-28",
    },
  ],
  snippets: [
    {
      title: "Unspoken Algorithms",
      teaser: "Tiny pieces exploring what AI can never fully understand: obsession, jealousy, and irrational love.",
      wordCount: "2,300 words",
    },
    {
      title: "Parallel Regrets",
      teaser: "Short fragments where characters confront choices they never made, but always feared.",
      wordCount: "1,900 words",
    },
    {
      title: "The Edge of Desire",
      teaser: "A haunting dialogue between control and surrender in the darkest corners of human connection.",
      wordCount: "2,800 words",
    },
  ],
}

export default function VaultPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeSection, setActiveSection] = useState("ongoing")

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Password verification via env
    const correctPassword = process.env.NEXT_PUBLIC_VAULT_PASSWORD

    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password.")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#2d1b1b] to-[#4a1a1a] text-white">
        <div className="flex justify-between items-center p-6">
          <Link href="/" className="text-[#C3073F] hover:text-white transition-colors font-serif">
            ← Return to Main
          </Link>
        </div>

        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="max-w-md w-full mx-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-serif text-[#C3073F] mb-4">The Storytelling Vault</h1>
              <p className="text-gray-300 font-light">Enter your vault password to access private archives.</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter vault password..."
                className="w-full bg-black/30 border border-[#C3073F]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#C3073F] focus:outline-none font-serif"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C3073F]/20 to-[#C3073F]/10 border border-[#C3073F] text-[#C3073F] py-3 rounded-lg font-serif hover:bg-[#C3073F]/30 transition-colors"
              >
                Unlock Vault
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#2d1b1b] to-[#4a1a1a] text-white">
      {/* HEADER */}
      <header className="p-6 border-b border-[#C3073F]/20">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="text-[#C3073F] hover:text-white transition-colors font-serif">
            ← Return to Main
          </Link>
          <h1 className="text-2xl font-serif text-[#C3073F]">The Storytelling Vault</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-8">
            {["ongoing", "archives", "snippets"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`font-serif text-lg capitalize transition-colors ${
                  activeSection === section
                    ? "text-[#C3073F] border-b-2 border-[#C3073F]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {activeSection === "ongoing" && (
            <>
              <h2 className="text-3xl font-serif text-white mb-8">Ongoing Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {storiesData.ongoing.map((story, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-black/40 to-[#C3073F]/10 border border-[#C3073F]/20 rounded-lg overflow-hidden hover:border-[#C3073F]/50 transition-all duration-300">
                      <div className="aspect-[3/4] bg-gradient-to-br from-[#C3073F]/20 to-black/50 flex items-center justify-center">
                        <img src={story.cover} alt={story.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif text-[#C3073F] mb-3">{story.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">{story.teaser}</p>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span>{story.chapters} chapters</span>
                          <span>Updated {story.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "archives" && (
            <>
              <h2 className="text-3xl font-serif text-white mb-8">Completed Archives</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {storiesData.archives.map((story, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-black/40 to-[#C3073F]/10 border border-[#C3073F]/20 rounded-lg overflow-hidden hover:border-[#C3073F]/50 transition-all duration-300">
                      <div className="aspect-[3/4] bg-gradient-to-br from-[#C3073F]/20 to-black/50 flex items-center justify-center">
                        <img src={story.cover} alt={story.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif text-[#C3073F] mb-3">{story.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">{story.teaser}</p>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span>{story.chapters} chapters</span>
                          <span>Completed {story.completed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "snippets" && (
            <>
              <h2 className="text-3xl font-serif text-white mb-8">Story Snippets</h2>
              <div className="space-y-6">
                {storiesData.snippets.map((snippet, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gradient-to-r from-black/40 to-[#C3073F]/10 border border-[#C3073F]/20 rounded-lg p-6 hover:border-[#C3073F]/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-serif text-[#C3073F]">{snippet.title}</h3>
                        <span className="text-xs text-gray-400 bg-[#C3073F]/10 px-2 py-1 rounded">
                          {snippet.wordCount}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed font-light">{snippet.teaser}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
