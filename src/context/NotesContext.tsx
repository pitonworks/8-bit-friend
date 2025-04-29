'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase, type Note } from '@/lib/supabase'

interface NotesContextType {
  notes: Note[]
  loading: boolean
  error: string | null
  addNote: (note: Omit<Note, 'id' | 'created_at' | 'user_id'>) => Promise<void>
  updateNote: (id: string, note: Partial<Note>) => Promise<void>
  deleteNote: (id: string) => Promise<void>
  toggleComplete: (id: string) => Promise<void>
}

const NotesContext = createContext<NotesContextType | undefined>(undefined)

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setNotes(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  async function addNote(note: Omit<Note, 'id' | 'created_at' | 'user_id'>) {
    try {
      const { data, error } = await supabase
        .from('notes')
        .insert([note])
        .select()

      if (error) throw error
      if (data) {
        setNotes(prev => [data[0], ...prev])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  async function updateNote(id: string, note: Partial<Note>) {
    try {
      const { error } = await supabase
        .from('notes')
        .update(note)
        .eq('id', id)

      if (error) throw error
      setNotes(prev => prev.map(n => n.id === id ? { ...n, ...note } : n))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  async function deleteNote(id: string) {
    try {
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id)

      if (error) throw error
      setNotes(prev => prev.filter(n => n.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  async function toggleComplete(id: string) {
    const note = notes.find(n => n.id === id)
    if (note) {
      await updateNote(id, { is_completed: !note.is_completed })
    }
  }

  return (
    <NotesContext.Provider value={{
      notes,
      loading,
      error,
      addNote,
      updateNote,
      deleteNote,
      toggleComplete
    }}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  const context = useContext(NotesContext)
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider')
  }
  return context
} 