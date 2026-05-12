-- Extend articles with dedicated categories for news/education
alter table if exists public.articles
  add column if not exists article_type text not null default 'news'
  check (article_type in ('news', 'education'));

-- Rooms for exhibition/education spaces
create table if not exists public.rooms (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  location    text,
  capacity    integer not null default 0,
  status      text not null default 'draft' check (status in ('draft', 'published')),
  created_at  timestamptz not null default now()
);

-- Group tour schedule
create table if not exists public.group_schedules (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  description    text,
  room_id        uuid references public.rooms(id) on delete set null,
  visit_date     date,
  start_time     time,
  end_time       time,
  max_group_size integer,
  contact_person text,
  status         text not null default 'draft' check (status in ('draft', 'published')),
  created_at     timestamptz not null default now()
);

-- Ticket booking / group registration
create table if not exists public.tour_bookings (
  id            uuid primary key default gen_random_uuid(),
  booking_type  text not null check (booking_type in ('ticket', 'group')),
  full_name     text not null,
  group_name    text,
  email         text not null,
  phone         text,
  visit_date    date,
  visit_time    time,
  visitor_count integer not null default 1,
  room_id       uuid references public.rooms(id) on delete set null,
  notes         text,
  status        text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at    timestamptz not null default now()
);

alter table if exists public.rooms enable row level security;
alter table if exists public.group_schedules enable row level security;
alter table if exists public.tour_bookings enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'rooms' and policyname = 'public read rooms'
  ) then
    create policy "public read rooms" on public.rooms for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'group_schedules' and policyname = 'public read schedules'
  ) then
    create policy "public read schedules" on public.group_schedules for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'tour_bookings' and policyname = 'public read bookings'
  ) then
    create policy "public read bookings" on public.tour_bookings for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'rooms' and policyname = 'anon write rooms'
  ) then
    create policy "anon write rooms" on public.rooms for all using (true) with check (true);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'group_schedules' and policyname = 'anon write schedules'
  ) then
    create policy "anon write schedules" on public.group_schedules for all using (true) with check (true);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'tour_bookings' and policyname = 'anon write bookings'
  ) then
    create policy "anon write bookings" on public.tour_bookings for all using (true) with check (true);
  end if;
end $$;