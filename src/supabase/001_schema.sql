-- ============================================================
-- Bảo tàng Dừa Sáp - Supabase Database Schema
-- Chạy file này trong Supabase SQL Editor
-- ============================================================

-- Danh mục
create table if not exists public.categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  created_at  timestamptz not null default now()
);

-- Bộ sưu tập
create table if not exists public.collections (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  category_id uuid references public.categories(id) on delete set null,
  created_at  timestamptz not null default now()
);

-- Hiện vật
create table if not exists public.artifacts (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  description   text,
  origin        text,
  era           text,
  material      text,
  collection_id uuid references public.collections(id) on delete set null,
  status        text not null default 'draft' check (status in ('draft', 'published')),
  image_url     text,
  created_at    timestamptz not null default now()
);

-- Bài viết
create table if not exists public.articles (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  content    text not null default '',
  summary    text,
  article_type text not null default 'news' check (article_type in ('news', 'education')),
  status     text not null default 'draft' check (status in ('draft', 'published')),
  image_url  text,
  created_at timestamptz not null default now()
);

-- Sự kiện
create table if not exists public.events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  location    text,
  start_date  date,
  end_date    date,
  status      text not null default 'draft' check (status in ('draft', 'published')),
  image_url   text,
  created_at  timestamptz not null default now()
);

-- Tin nhắn liên hệ
create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  full_name  text not null,
  email      text not null,
  phone      text,
  message    text not null,
  is_read    boolean not null default false,
  created_at timestamptz not null default now()
);

-- Phòng / không gian bảo tàng
create table if not exists public.rooms (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  location    text,
  capacity    integer not null default 0,
  status      text not null default 'draft' check (status in ('draft', 'published')),
  created_at  timestamptz not null default now()
);

-- Lịch tham quan theo đoàn
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

-- Đặt vé tham quan / đăng ký đoàn
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

-- ============================================================
-- Row Level Security (RLS)
-- Cho demo: cho phép đọc công khai, ghi qua anon key
-- ============================================================

alter table public.categories        enable row level security;
alter table public.collections       enable row level security;
alter table public.artifacts         enable row level security;
alter table public.articles          enable row level security;
alter table public.events            enable row level security;
alter table public.contact_messages  enable row level security;
alter table public.rooms             enable row level security;
alter table public.group_schedules   enable row level security;
alter table public.tour_bookings     enable row level security;

-- Cho phép đọc tất cả (public)
create policy "public read categories"       on public.categories        for select using (true);
create policy "public read collections"      on public.collections       for select using (true);
create policy "public read artifacts"        on public.artifacts         for select using (true);
create policy "public read articles"         on public.articles          for select using (true);
create policy "public read events"           on public.events            for select using (true);
create policy "public read rooms"             on public.rooms             for select using (true);
create policy "public read schedules"         on public.group_schedules   for select using (true);
create policy "public read bookings"          on public.tour_bookings     for select using (true);

-- Cho phép ghi từ anon key (demo - không cần auth)
create policy "anon write categories"        on public.categories        for all using (true) with check (true);
create policy "anon write collections"       on public.collections       for all using (true) with check (true);
create policy "anon write artifacts"         on public.artifacts         for all using (true) with check (true);
create policy "anon write articles"          on public.articles          for all using (true) with check (true);
create policy "anon write events"            on public.events            for all using (true) with check (true);
create policy "anon write rooms"             on public.rooms             for all using (true) with check (true);
create policy "anon write schedules"         on public.group_schedules   for all using (true) with check (true);
create policy "anon write bookings"          on public.tour_bookings     for all using (true) with check (true);
create policy "anon insert contact"          on public.contact_messages  for insert with check (true);
create policy "anon read contact"            on public.contact_messages  for select using (true);
create policy "anon update contact"          on public.contact_messages  for update using (true) with check (true);
