"use client"

import { useState } from "react"
import { SentenceGenerator } from "@/components/sentence-generator"
import { SentenceManager } from "@/components/sentence-manager"
import { KeywordManager } from "@/components/keyword-manager"
import { Button } from "@/components/ui/button"
import { BookOpen, Settings, List } from "lucide-react"

export default function Home() {
  const [view, setView] = useState<"generate" | "manage" | "keywords">("generate")

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Sentence Generator</h1>
            <div className="flex gap-2">
              <Button
                variant={view === "generate" ? "default" : "ghost"}
                onClick={() => setView("generate")}
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Practice
              </Button>
              <Button
                variant={view === "manage" ? "default" : "ghost"}
                onClick={() => setView("manage")}
                className="gap-2"
              >
                <Settings className="w-4 h-4" />
                Sentences
              </Button>
              <Button
                variant={view === "keywords" ? "default" : "ghost"}
                onClick={() => setView("keywords")}
                className="gap-2"
              >
                <List className="w-4 h-4" />
                Keywords
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {view === "generate" && <SentenceGenerator />}
        {view === "manage" && <SentenceManager />}
        {view === "keywords" && <KeywordManager />}
      </main>
    </div>
  )
}
