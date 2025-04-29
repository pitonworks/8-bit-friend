'use client'

import { CreateNote } from "@/components/CreateNote"
import { NotesProvider } from "@/context/NotesContext"

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-8">
      <main className="container mx-auto max-w-2xl">
        <h1 className="text-[#f89621] text-2xl font-bold mb-8 text-center">8-Bit Notes</h1>
        
        <NotesProvider>
          <CreateNote />
        </NotesProvider>
      </main>
    </div>
  )
}
