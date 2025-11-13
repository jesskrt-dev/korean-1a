"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Trash2, Plus, X, Lightbulb, ChevronUp, ChevronDown } from "lucide-react"
import {
  getSentences,
  addSentence,
  updateSentence,
  deleteSentence,
  moveSentence,
  getKeywords,
  type SentencePair,
} from "@/lib/sentence-store"

export function SentenceManager() {
  const [sentences, setSentences] = useState<SentencePair[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [editEnglish, setEditEnglish] = useState("")
  const [editKorean, setEditKorean] = useState("")
  const [editHint, setEditHint] = useState("")
  const [editShowHint, setEditShowHint] = useState(true)
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    setSentences(getSentences())
  }, [])

  const handleAdd = () => {
    if (editEnglish.trim() && editKorean.trim()) {
      addSentence(editEnglish.trim(), editKorean.trim(), editHint.trim(), editShowHint)
      setSentences(getSentences())
      setEditEnglish("")
      setEditKorean("")
      setEditHint("")
      setEditShowHint(true)
      setIsAdding(false)
    }
  }

  const handleUpdate = (id: string) => {
    if (editEnglish.trim() && editKorean.trim()) {
      updateSentence(id, editEnglish.trim(), editKorean.trim(), editHint.trim(), editShowHint)
      setSentences(getSentences())
      setEditingId(null)
      setEditEnglish("")
      setEditKorean("")
      setEditHint("")
      setEditShowHint(true)
    }
  }

  const handleDelete = (id: string) => {
    deleteSentence(id)
    setSentences(getSentences())
  }

  const handleMove = (id: string, direction: "up" | "down") => {
    moveSentence(id, direction)
    setSentences(getSentences())
  }

  const startEdit = (sentence: SentencePair) => {
    setEditingId(sentence.id)
    setEditEnglish(sentence.english)
    setEditKorean(sentence.korean)
    setEditHint(sentence.hint || "")
    setEditShowHint(sentence.showHint ?? true)
    setIsAdding(false)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditEnglish("")
    setEditKorean("")
    setEditHint("")
    setEditShowHint(true)
  }

  const startAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setEditEnglish("")
    setEditKorean("")
    setEditHint("")
    setEditShowHint(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Manage Sentences</h2>
          <p className="text-muted-foreground">Create sentence templates using [p = keyword.selectOne] syntax</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowHelp(!showHelp)} className="gap-2">
            <Lightbulb className="w-4 h-4" />
            {showHelp ? "Hide" : "Show"} Keywords
          </Button>
          <Button onClick={startAdd} className="gap-2">
            <Plus className="w-4 h-4" />
            Add New
          </Button>
        </div>
      </div>

      {showHelp && (
        <Card className="p-6 space-y-3 bg-muted/50">
          <h3 className="font-semibold flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Available Keywords
          </h3>
          <p className="text-sm text-muted-foreground">
            Use these placeholders in your sentences to create dynamic templates:
          </p>
          <div className="flex flex-wrap gap-2">
            {getKeywords().map((keyword) => (
              <Badge key={keyword.id} variant="secondary" className="font-mono">
                [p = {keyword.name}.selectOne]
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            Example: "What are you doing on [p = weekday.selectOne]?" will randomly select a weekday each time.
          </p>
        </Card>
      )}

      {isAdding && (
        <Card className="p-6 space-y-4 border-primary">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">New Sentence Pair</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsAdding(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-english">English</Label>
              <Input
                id="new-english"
                value={editEnglish}
                onChange={(e) => setEditEnglish(e.target.value)}
                placeholder="e.g., What are you doing on [p = weekday.selectOne]?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-korean">Korean</Label>
              <Input
                id="new-korean"
                value={editKorean}
                onChange={(e) => setEditKorean(e.target.value)}
                placeholder="e.g., [p = weekday.selectOne]에 무엇을 하고 있어요?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-hint">Hint (Optional)</Label>
              <Textarea
                id="new-hint"
                value={editHint}
                onChange={(e) => setEditHint(e.target.value)}
                placeholder="Add a helpful hint for this sentence..."
                rows={3}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="new-show-hint"
                checked={editShowHint}
                onCheckedChange={(checked) => setEditShowHint(checked as boolean)}
              />
              <Label htmlFor="new-show-hint" className="cursor-pointer font-normal">
                Show hint on practice page
              </Label>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdd}>Add Sentence</Button>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {sentences.map((sentence, index) => (
          <Card key={sentence.id} className="p-6">
            {editingId === sentence.id ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`edit-english-${sentence.id}`}>English</Label>
                  <Input
                    id={`edit-english-${sentence.id}`}
                    value={editEnglish}
                    onChange={(e) => setEditEnglish(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`edit-korean-${sentence.id}`}>Korean</Label>
                  <Input
                    id={`edit-korean-${sentence.id}`}
                    value={editKorean}
                    onChange={(e) => setEditKorean(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`edit-hint-${sentence.id}`}>Hint (Optional)</Label>
                  <Textarea
                    id={`edit-hint-${sentence.id}`}
                    value={editHint}
                    onChange={(e) => setEditHint(e.target.value)}
                    placeholder="Add a helpful hint for this sentence..."
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`edit-show-hint-${sentence.id}`}
                    checked={editShowHint}
                    onCheckedChange={(checked) => setEditShowHint(checked as boolean)}
                  />
                  <Label htmlFor={`edit-show-hint-${sentence.id}`} className="cursor-pointer font-normal">
                    Show hint on practice page
                  </Label>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={cancelEdit}>
                    Cancel
                  </Button>
                  <Button onClick={() => handleUpdate(sentence.id)}>Save Changes</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">English</p>
                  <p className="text-lg font-medium">{sentence.english}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Korean</p>
                  <p className="text-lg font-medium">{sentence.korean}</p>
                </div>
                {sentence.hint && (
                  <div className="space-y-1 pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Hint</p>
                      <Badge variant={sentence.showHint ? "default" : "secondary"} className="text-xs">
                        {sentence.showHint ? "Visible" : "Hidden"}
                      </Badge>
                    </div>
                    <p className="text-sm">{sentence.hint}</p>
                  </div>
                )}
                <div className="flex gap-2 justify-between pt-2 border-t">
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleMove(sentence.id, "up")}
                      disabled={index === 0}
                      className="h-8 w-8"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleMove(sentence.id, "down")}
                      disabled={index === sentences.length - 1}
                      className="h-8 w-8"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => startEdit(sentence)} className="gap-2">
                      <Pencil className="w-3.5 h-3.5" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(sentence.id)}
                      className="gap-2 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {sentences.length === 0 && !isAdding && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No sentences yet. Click "Add New" to create your first sentence pair.</p>
        </Card>
      )}
    </div>
  )
}
