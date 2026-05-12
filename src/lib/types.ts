export type PublishStatus = 'draft' | 'published';
export type ArticleType = 'news' | 'education';

export interface Category {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string | null;
  category_id: string | null;
  created_at: string;
  category?: Category;
}

export interface Artifact {
  id: string;
  name: string;
  description: string | null;
  origin: string | null;
  era: string | null;
  material: string | null;
  collection_id: string | null;
  status: PublishStatus;
  image_url: string | null;
  view_count: number;
  created_at: string;
  collection?: Collection;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  summary: string | null;
  article_type: ArticleType;
  status: PublishStatus;
  image_url: string | null;
  created_at: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
  status: PublishStatus;
  image_url: string | null;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
  is_read: boolean;
}

export interface MuseumRoom {
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  capacity: number;
  status: PublishStatus;
  created_at: string;
}

export interface GroupSchedule {
  id: string;
  title: string;
  description: string | null;
  room_id: string | null;
  visit_date: string | null;
  start_time: string | null;
  end_time: string | null;
  max_group_size: number | null;
  contact_person: string | null;
  status: PublishStatus;
  created_at: string;
  room?: MuseumRoom;
}

export type TourBookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type TourBookingType = 'ticket' | 'group';

export interface TourBooking {
  id: string;
  booking_type: TourBookingType;
  full_name: string;
  group_name: string | null;
  email: string;
  phone: string | null;
  visit_date: string | null;
  visit_time: string | null;
  visitor_count: number;
  room_id: string | null;
  notes: string | null;
  status: TourBookingStatus;
  created_at: string;
  room?: MuseumRoom;
}
