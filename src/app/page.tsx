'use client'

import { CreateNote } from "@/components/CreateNote"
import { NotesProvider } from "@/context/NotesContext"
import Notes from '@/components/Notes'


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto">
        <h1 className="text-[#f89621] text-2xl py-8 text-center">8-Bit Notes</h1>
        <Notes />
      </div>
    </main>
  )
}
