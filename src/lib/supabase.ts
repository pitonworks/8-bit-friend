import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export type Note = {
  id: string
  created_at: string
  title: string
  content: string
  user_id: string
  is_completed: boolean
  due_date?: string
  priority: 'low' | 'medium' | 'high'
  tags?: string[]
} 