'use client'

import { useState } from 'react'
import { useNotes } from '@/context/NotesContext'
import { Alert, AlertDescription } from '@/components/ui/8bit/alert'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card"
import { Input, Textarea, Select, Label, Button } from "@/components/ui/8bit/form"

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
    <div className="max-w-[600px] mx-auto space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Create Note</CardTitle>
          <CardDescription>Add a new note to your collection.</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="create-note-form" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title"
                required
              />
            </div>

            <div>
              <Label>Content</Label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Note content"
                className="h-32 resize-none"
                required
              />
            </div>

            <div>
              <Label>Priority</Label>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="button"
            onClick={() => {
              setTitle('')
              setContent('')
              setPriority('medium')
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="create-note-form"
            variant="primary"
          >
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 