'use client'

import { useState } from 'react'
import { useNotes } from '@/context/NotesContext'
import { Alert, AlertDescription } from '@/components/ui/8bit/alert'

export function CreateNote() {
  const { addNote, error } = useNotes()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    await addNote({
      title,
      content,
      priority,
      is_completed: false,
    })

    // Reset form
    setTitle('')
    setContent('')
    setPriority('medium')
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="w-full p-2 bg-black border-2 border-[#f89621] text-[#f89621] placeholder-[#f89621]/50"
            required
          />
        </div>

        <div className="space-y-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note content"
            className="w-full h-32 p-2 bg-black border-2 border-[#f89621] text-[#f89621] placeholder-[#f89621]/50 resize-none"
            required
          />
        </div>

        <div className="space-y-2">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="w-full p-2 bg-black border-2 border-[#f89621] text-[#f89621]"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-[#f89621] text-black font-bold hover:bg-[#f89621]/90 transition-colors"
        >
          Create Note
        </button>
      </form>
    </div>
  )
} 