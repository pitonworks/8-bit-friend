import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/8bit/card'
import { Button } from '@/components/ui/8bit/button'
import { Input, Textarea } from '@/components/ui/8bit/form'

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')
  const [newNote, setNewNote] = useState({ title: '', content: '' })

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleCreateNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title,
        content: newNote.content,
        createdAt: new Date().toISOString()
      }
      setNotes(prev => [note, ...prev])
      setNewNote({ title: '', content: '' })
    }
  }

  const handleEditNote = (note: Note) => {
    setIsEditing(note.id)
    setEditTitle(note.title)
    setEditContent(note.content)
  }

  const handleSaveEdit = (id: string) => {
    setNotes(prev => prev.map(note => 
      note.id === id 
        ? { ...note, title: editTitle, content: editContent }
        : note
    ))
    setIsEditing(null)
  }

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  return (
    <div className="space-y-6 p-4">
      {/* Create New Note */}
      <Card className="p-4">
        <h2 className="text-[#f89621] mb-4">Create New Note</h2>
        <div className="space-y-4">
          <Input
            placeholder="Note Title"
            value={newNote.title}
            onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
          />
          <Textarea
            placeholder="Note Content"
            value={newNote.content}
            onChange={(e) => setNewNote(prev => ({ ...prev, content: e.target.value }))}
            rows={4}
          />
          <Button onClick={handleCreateNote}>Save Note</Button>
        </div>
      </Card>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map(note => (
          <Card key={note.id} className="p-4">
            {isEditing === note.id ? (
              <div className="space-y-4">
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={4}
                />
                <div className="flex gap-2">
                  <Button onClick={() => handleSaveEdit(note.id)}>Save</Button>
                  <Button variant="outline" onClick={() => setIsEditing(null)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-[#f89621] mb-2">{note.title}</h3>
                <p className="text-[#f89621] mb-4 whitespace-pre-wrap">{note.content}</p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleEditNote(note)}>Edit</Button>
                  <Button variant="outline" onClick={() => handleDeleteNote(note.id)}>Delete</Button>
                </div>
                <p className="text-[#f89621]/60 text-xs mt-2">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
} 