"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Sparkles, Lightbulb } from "lucide-react"
import { getRandomSentence, type SentencePair } from "@/lib/sentence-store"

export function SentenceGenerator() {
  const [currentSentence, setCurrentSentence] = useState<SentencePair | null>(null)
  const [showKorean, setShowKorean] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const handleGenerate = () => {
    const sentence = getRandomSentence()
    setCurrentSentence(sentence)
    setShowKorean(false)
    setShowHint(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-balance">Language Practice</h1>
        <p className="text-muted-foreground text-lg">Generate random English and Korean sentence pairs</p>
      </div>

      <Button onClick={handleGenerate} size="lg" className="gap-2 text-lg h-14 px-8">
        <Sparkles className="w-5 h-5" />
        Generate Sentence
      </Button>

      {currentSentence && (
        <Card className="w-full max-w-2xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">English</p>
            <p className="text-2xl md:text-3xl font-medium text-balance leading-relaxed">{currentSentence.english}</p>
          </div>

          <Button
            variant="ghost"
            onClick={() => setShowKorean(!showKorean)}
            className="w-full justify-between text-muted-foreground hover:text-foreground"
          >
            <span className="text-sm font-medium">{showKorean ? "Hide" : "Show"} Korean Translation</span>
            {showKorean ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          {showKorean && (
            <div className="space-y-2 pt-4 border-t animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Korean</p>
              <p className="text-2xl md:text-3xl font-medium text-balance leading-relaxed">{currentSentence.korean}</p>
            </div>
          )}

          {currentSentence.hint && currentSentence.showHint && (
            <>
              <Button
                variant="ghost"
                onClick={() => setShowHint(!showHint)}
                className="w-full justify-between text-muted-foreground hover:text-foreground"
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  {showHint ? "Hide" : "Show"} Hint
                </span>
                {showHint ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>

              {showHint && (
                <div className="space-y-2 pt-4 border-t animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <Lightbulb className="w-3 h-3" />
                    Hint
                  </p>
                  <p className="text-base leading-relaxed">{currentSentence.hint}</p>
                </div>
              )}
            </>
          )}
        </Card>
      )}
    </div>
  )
}
