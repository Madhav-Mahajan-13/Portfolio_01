"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

const storiesData = {
  ongoing: [
    {
      title: "The Digital Prophecy",
      cover: "/placeholder.svg?height=300&width=200",
      teaser:
        "In a world where algorithms predict human destiny, a young programmer discovers a code that could rewrite reality itself...",
      chapters: 12,
      lastUpdated: "2024-01-15",
    },
    {
      title: "Echoes of Tomorrow",
      cover: "/placeholder.svg?height=300&width=200",
      teaser:
        "Time travelers from a dystopian future arrive with a warning, but their presence might be the very catalyst for the apocalypse they seek to prevent...",
      chapters: 8,
      lastUpdated: "2024-01-10",
    },
  ],
  archives: [
    {
      title: "The Last Library",
      cover: "/placeholder.svg?height=300&width=200",
      teaser:
        "In a post-apocalyptic world where books are forbidden, a secret society of librarians fights to preserve human knowledge...",
      chapters: 24,
      completed: "2023-12-01",
    },
    {
      title: "Neon Dreams",
      cover: "/placeholder.svg?height=300&width=200",
      teaser: "A cyberpunk tale of love and rebellion in a city where memories can be bought, sold, and stolen...",
      chapters: 18,
      completed: "2023-10-15",
    },
    {
      title: "The Quantum Heart",
      cover: "/placeholder.svg?height=300&width=200",
      teaser:
        "A scientist's experiment with quantum entanglement leads to an unexpected connection with someone from a parallel universe...",
      chapters: 15,
      completed: "2023-08-20",
    },
  ],
  snippets: [
    {
      title: "Midnight Conversations",
      teaser: "A collection of late-night dialogues between strangers who meet in the most unexpected places...",
      wordCount: "2,500 words",
    },
    {
      title: "The Color of Silence",
      teaser: "Short vignettes exploring the spaces between words, the pauses between heartbeats...",
      wordCount: "1,800 words",
    },
    {
      title: "Digital Ghosts",
      teaser: "What happens to our online presence after we die? A haunting exploration of digital immortality...",
      wordCount: "3,200 words",
    },
  ],
}

export default function VaultPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeSection, setActiveSection] = useState("ongoing")

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For demo purposes, any password works
    if (password.trim()) {
      setIsAuthenticated(true)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#2d1b1b] to-[#4a1a1a] text-white">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <Link href="/" className="text-[#C3073F] hover:text-white transition-colors font-serif">
            ← Return to Main
          </Link>
        </div>

        {/* Password Protection */}
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="max-w-md w-full mx-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-serif text-[#C3073F] mb-4">The Storytelling Vault</h1>
              <p className="text-gray-300 font-light">
                These stories are protected. Enter the key to unlock the archives.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter vault password..."
                  className="w-full bg-black/30 border border-[#C3073F]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#C3073F] focus:outline-none font-serif"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C3073F]/20 to-[#C3073F]/10 border border-[#C3073F] text-[#C3073F] py-3 rounded-lg font-serif hover:bg-[#C3073F]/30 transition-colors"
              >
                Unlock Vault
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 font-light">Hint: Any password will work for this demo</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#2d1b1b] to-[#4a1a1a] text-white">
      {/* Header */}
      <header className="p-6 border-b border-[#C3073F]/20">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="text-[#C3073F] hover:text-white transition-colors font-serif">
            ← Return to Main
          </Link>
          <h1 className="text-2xl font-serif text-[#C3073F]">The Storytelling Vault</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Navigation */}
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

      {/* Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {activeSection === "ongoing" && (
            <div>
              <h2 className="text-3xl font-serif text-white mb-8">Ongoing Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {storiesData.ongoing.map((story, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-black/40 to-[#C3073F]/10 border border-[#C3073F]/20 rounded-lg overflow-hidden hover:border-[#C3073F]/50 transition-all duration-300">
                      <div className="aspect-[3/4] bg-gradient-to-br from-[#C3073F]/20 to-black/50 flex items-center justify-center">
                        <img
                          src={story.cover || "/placeholder.svg"}
                          alt={story.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
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
            </div>
          )}

          {activeSection === "archives" && (
            <div>
              <h2 className="text-3xl font-serif text-white mb-8">Completed Archives</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {storiesData.archives.map((story, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-black/40 to-[#C3073F]/10 border border-[#C3073F]/20 rounded-lg overflow-hidden hover:border-[#C3073F]/50 transition-all duration-300">
                      <div className="aspect-[3/4] bg-gradient-to-br from-[#C3073F]/20 to-black/50 flex items-center justify-center">
                        <img
                          src={story.cover || "/placeholder.svg"}
                          alt={story.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
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
            </div>
          )}

          {activeSection === "snippets" && (
            <div>
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
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
