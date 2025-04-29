-- Create notes table
create table public.notes (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  content text not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  is_completed boolean default false not null,
  due_date timestamp with time zone,
  priority text check (priority in ('low', 'medium', 'high')) default 'medium' not null,
  tags text[] default array[]::text[]
);

-- Enable RLS
alter table public.notes enable row level security;

-- Create policies
create policy "Users can view their own notes" on notes
  for select using (auth.uid() = user_id);

create policy "Users can create their own notes" on notes
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own notes" on notes
  for update using (auth.uid() = user_id);

create policy "Users can delete their own notes" on notes
  for delete using (auth.uid() = user_id); 