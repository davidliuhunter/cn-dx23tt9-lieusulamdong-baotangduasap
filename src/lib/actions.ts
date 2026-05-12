'use server';

import { revalidatePath } from 'next/cache';
import { supabase, isConfigured } from './supabase';
import type { Artifact, Article, EventItem, GroupSchedule, MuseumRoom, TourBooking } from './types';

// ─── Image Upload ─────────────────────────────────────────────────────────────

export async function uploadImage(formData: FormData): Promise<{ success: boolean; url?: string; error?: string }> {
  if (!isConfigured || !supabase) {
    return { success: false, error: 'Supabase chưa được cấu hình.' };
  }
  const file = formData.get('file') as File | null;
  if (!file || file.size === 0) return { success: false, error: 'Không có file.' };

  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  if (!allowed.includes(ext)) return { success: false, error: 'Chỉ hỗ trợ JPG, PNG, WEBP, GIF.' };
  if (file.size > 5 * 1024 * 1024) return { success: false, error: 'Ảnh không được vượt quá 5MB.' };

  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const bytes = await file.arrayBuffer();
  const { error } = await supabase.storage
    .from('museum-images')
    .upload(fileName, bytes, { contentType: file.type, upsert: false });

  if (error) return { success: false, error: error.message };

  const { data: urlData } = supabase.storage.from('museum-images').getPublicUrl(fileName);
  return { success: true, url: urlData.publicUrl };
}

// ─── Contact form ─────────────────────────────────────────────────────────────

export async function submitContact(formData: FormData) {
  const full_name = (formData.get('full_name') as string | null)?.trim();
  const email = (formData.get('email') as string | null)?.trim();
  const phone = (formData.get('phone') as string | null)?.trim() || null;
  const message = (formData.get('message') as string | null)?.trim();

  if (!full_name || !email || !message) {
    return { success: false, error: 'Vui lòng điền đầy đủ thông tin bắt buộc.' };
  }

  if (!isConfigured || !supabase) {
    // Mock success when Supabase not configured
    return { success: true };
  }

  const { error } = await supabase
    .from('contact_messages')
    .insert({ full_name, email, phone, message });

  if (error) return { success: false, error: 'Không thể gửi tin nhắn. Vui lòng thử lại.' };
  return { success: true };
}

export async function submitTourBooking(formData: FormData) {
  const booking_type = (formData.get('booking_type') as string | null)?.trim() as 'ticket' | 'group' | null;
  const full_name = (formData.get('full_name') as string | null)?.trim();
  const group_name = (formData.get('group_name') as string | null)?.trim() || null;
  const email = (formData.get('email') as string | null)?.trim();
  const phone = (formData.get('phone') as string | null)?.trim() || null;
  const visit_date = (formData.get('visit_date') as string | null)?.trim() || null;
  const visit_time = (formData.get('visit_time') as string | null)?.trim() || null;
  const visitor_count = Number(formData.get('visitor_count') || 0);
  const room_id = (formData.get('room_id') as string | null)?.trim() || null;
  const notes = (formData.get('notes') as string | null)?.trim() || null;

  if (!booking_type || !full_name || !email || !visit_date || visitor_count <= 0) {
    return { success: false, error: 'Vui lòng điền đầy đủ thông tin bắt buộc.' };
  }

  if (!isConfigured || !supabase) {
    return { success: true, bookingId: `MOCK-${Date.now()}` };
  }

  const { data, error } = await supabase
    .from('tour_bookings')
    .insert({
      booking_type,
      full_name,
      group_name,
      email,
      phone,
      visit_date,
      visit_time,
      visitor_count,
      room_id,
      notes,
      status: 'pending',
    })
    .select('id')
    .single();

  if (error) return { success: false, error: 'Không thể tạo yêu cầu đặt vé. Vui lòng thử lại.' };
  revalidatePath('/dat-ve');
  revalidatePath('/lich-tham-quan-theo-doan');
  revalidatePath('/quan-tri/ve-doan');
  return { success: true, bookingId: data?.id };
}

// ─── Artifacts ────────────────────────────────────────────────────────────────

export async function saveArtifact(data: Partial<Artifact> & { id?: string }) {
  if (!isConfigured || !supabase) return { success: true };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, collection: _col, ...rest } = data;
  let error;
  if (id) {
    ({ error } = await supabase.from('artifacts').update(rest).eq('id', id));
  } else {
    ({ error } = await supabase.from('artifacts').insert(rest));
  }
  if (error) return { success: false, error: error.message };
  revalidatePath('/hien-vat');
  revalidatePath('/quan-tri');
  return { success: true };
}

export async function deleteArtifact(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase.from('artifacts').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/hien-vat');
  revalidatePath('/quan-tri');
  return { success: true };
}

// ─── Articles ─────────────────────────────────────────────────────────────────

export async function saveArticle(data: Partial<Article> & { id?: string }) {
  if (!isConfigured || !supabase) return { success: true };
  const { id, ...rest } = data;
  let error;
  if (id) {
    ({ error } = await supabase.from('articles').update(rest).eq('id', id));
  } else {
    ({ error } = await supabase.from('articles').insert(rest));
  }
  if (error) return { success: false, error: error.message };
  revalidatePath('/bai-viet');
  revalidatePath('/quan-tri');
  return { success: true };
}

export async function deleteArticle(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase.from('articles').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/bai-viet');
  return { success: true };
}

// ─── Events ───────────────────────────────────────────────────────────────────

export async function saveEvent(data: Partial<EventItem> & { id?: string }) {
  if (!isConfigured || !supabase) return { success: true };
  const { id, ...rest } = data;
  let error;
  if (id) {
    ({ error } = await supabase.from('events').update(rest).eq('id', id));
  } else {
    ({ error } = await supabase.from('events').insert(rest));
  }
  if (error) return { success: false, error: error.message };
  revalidatePath('/su-kien');
  return { success: true };
}

export async function deleteEvent(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase.from('events').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/su-kien');
  return { success: true };
}

// ─── Contact Messages ─────────────────────────────────────────────────────────

export async function markMessageRead(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase
    .from('contact_messages')
    .update({ is_read: true })
    .eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/quan-tri');
  return { success: true };
}

// ─── View tracking ────────────────────────────────────────────────────────────

export async function trackArtifactView(id: string) {
  if (!isConfigured || !supabase) return;
  await supabase.rpc('increment_artifact_view', { artifact_id: id });
}

export async function saveRoom(data: Partial<MuseumRoom> & { id?: string }) {
  if (!isConfigured || !supabase) return { success: true };
  const { id, ...rest } = data;
  let error;
  if (id) {
    ({ error } = await supabase.from('rooms').update(rest).eq('id', id));
  } else {
    ({ error } = await supabase.from('rooms').insert(rest));
  }
  if (error) return { success: false, error: error.message };
  revalidatePath('/quan-tri/phong');
  revalidatePath('/');
  return { success: true };
}

export async function deleteRoom(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase.from('rooms').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/quan-tri/phong');
  return { success: true };
}

export async function saveGroupSchedule(data: Partial<GroupSchedule> & { id?: string }) {
  if (!isConfigured || !supabase) return { success: true };
  const { id, room, ...rest } = data;
  let error;
  if (id) {
    ({ error } = await supabase.from('group_schedules').update(rest).eq('id', id));
  } else {
    ({ error } = await supabase.from('group_schedules').insert(rest));
  }
  if (error) return { success: false, error: error.message };
  revalidatePath('/lich-tham-quan-theo-doan');
  revalidatePath('/quan-tri/ve-doan');
  return { success: true };
}

export async function deleteGroupSchedule(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase.from('group_schedules').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/quan-tri/ve-doan');
  revalidatePath('/lich-tham-quan-theo-doan');
  return { success: true };
}

export async function saveTourBooking(data: Partial<TourBooking> & { id?: string }) {
  if (!isConfigured || !supabase) return { success: true };
  const { id, room, ...rest } = data;
  let error;
  if (id) {
    ({ error } = await supabase.from('tour_bookings').update(rest).eq('id', id));
  } else {
    ({ error } = await supabase.from('tour_bookings').insert(rest));
  }
  if (error) return { success: false, error: error.message };
  revalidatePath('/quan-tri/ve-doan');
  return { success: true };
}

export async function deleteTourBooking(id: string) {
  if (!isConfigured || !supabase) return { success: true };
  const { error } = await supabase.from('tour_bookings').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/quan-tri/ve-doan');
  return { success: true };
}
