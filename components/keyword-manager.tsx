"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus, X, ChevronUp, ChevronDown } from "lucide-react"
import {
  getKeywords,
  addKeywordList,
  updateKeywordList,
  deleteKeywordList,
  moveKeywordList,
  type KeywordList,
  type KeywordOption,
} from "@/lib/sentence-store"

export function KeywordManager() {
  const [keywords, setKeywords] = useState<KeywordList[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [editName, setEditName] = useState("")
  const [editOptions, setEditOptions] = useState<KeywordOption[]>([{ english: "", korean: "" }])

  useEffect(() => {
    setKeywords(getKeywords())
  }, [])

  const handleAdd = () => {
    if (editName.trim()) {
      const validOptions = editOptions.filter((opt) => opt.english.trim() && opt.korean.trim())
      if (validOptions.length > 0) {
        addKeywordList(editName.trim(), validOptions)
        setKeywords(getKeywords())
        setEditName("")
        setEditOptions([{ english: "", korean: "" }])
        setIsAdding(false)
      }
    }
  }

  const handleUpdate = (id: string) => {
    if (editName.trim()) {
      const validOptions = editOptions.filter((opt) => opt.english.trim() && opt.korean.trim())
      if (validOptions.length > 0) {
        updateKeywordList(id, editName.trim(), validOptions)
        setKeywords(getKeywords())
        setEditingId(null)
        setEditName("")
        setEditOptions([{ english: "", korean: "" }])
      }
    }
  }

  const handleDelete = (id: string) => {
    deleteKeywordList(id)
    setKeywords(getKeywords())
  }

  const handleMove = (id: string, direction: "up" | "down") => {
    moveKeywordList(id, direction)
    setKeywords(getKeywords())
  }

  const startEdit = (keyword: KeywordList) => {
    setEditingId(keyword.id)
    setEditName(keyword.name)
    setEditOptions(keyword.options)
    setIsAdding(false)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditName("")
    setEditOptions([{ english: "", korean: "" }])
  }

  const startAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setEditName("")
    setEditOptions([{ english: "", korean: "" }])
  }

  const addOption = () => {
    setEditOptions([...editOptions, { english: "", korean: "" }])
  }

  const removeOption = (index: number) => {
    setEditOptions(editOptions.filter((_, i) => i !== index))
  }

  const updateOption = (index: number, field: "english" | "korean", value: string) => {
    const updated = [...editOptions]
    updated[index][field] = value
    setEditOptions(updated)
  }

  const renderOptionInputs = (onSave: () => void, onCancel: () => void) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="edit-name">List Name</Label>
        <Input
          id="edit-name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder="e.g., weekday, food, color"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Options</Label>
          <Button type="button" variant="outline" size="sm" onClick={addOption} className="gap-2 bg-transparent">
            <Plus className="w-3.5 h-3.5" />
            Add Option
          </Button>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {editOptions.map((option, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-1 space-y-2">
                <Input
                  value={option.english}
                  onChange={(e) => updateOption(index, "english", e.target.value)}
                  placeholder="English (e.g., Monday)"
                />
                <Input
                  value={option.korean}
                  onChange={(e) => updateOption(index, "korean", e.target.value)}
                  placeholder="Korean (e.g., 월요일)"
                />
              </div>
              {editOptions.length > 1 && (
                <Button type="button" variant="ghost" size="icon" onClick={() => removeOption(index)} className="mt-1">
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSave}>Save Changes</Button>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Manage Keywords</h2>
          <p className="text-muted-foreground">
            Create keyword lists to use in dynamic sentence templates with [p = name.selectOne]
          </p>
        </div>
        <Button onClick={startAdd} className="gap-2">
          <Plus className="w-4 h-4" />
          Add List
        </Button>
      </div>

      {isAdding && (
        <Card className="p-6 space-y-4 border-primary">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">New Keyword List</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsAdding(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          {renderOptionInputs(handleAdd, () => setIsAdding(false))}
        </Card>
      )}

      <div className="space-y-3">
        {keywords.map((keyword, index) => (
          <Card key={keyword.id} className="p-6">
            {editingId === keyword.id ? (
              renderOptionInputs(() => handleUpdate(keyword.id), cancelEdit)
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{keyword.name}</p>
                    <Badge variant="secondary" className="text-xs">
                      [p = {keyword.name}.selectOne]
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keyword.options.map((option, index) => (
                      <Badge key={index} variant="outline" className="gap-1.5">
                        <span>{option.english}</span>
                        <span className="text-muted-foreground">/</span>
                        <span>{option.korean}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 justify-between pt-2 border-t">
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleMove(keyword.id, "up")}
                      disabled={index === 0}
                      className="h-8 w-8"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleMove(keyword.id, "down")}
                      disabled={index === keywords.length - 1}
                      className="h-8 w-8"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => startEdit(keyword)} className="gap-2">
                      <Pencil className="w-3.5 h-3.5" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(keyword.id)}
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

      {keywords.length === 0 && !isAdding && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">
            No keyword lists yet. Click "Add List" to create your first keyword group.
          </p>
        </Card>
      )}
    </div>
  )
}
