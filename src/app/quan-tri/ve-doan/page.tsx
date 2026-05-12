'use client';

import { useEffect, useState } from 'react';
import { getAllGroupSchedules, getAllTourBookings, getRooms } from '@/lib/data';
import { deleteGroupSchedule, deleteTourBooking, saveGroupSchedule, saveTourBooking } from '@/lib/actions';
import type { GroupSchedule, MuseumRoom, TourBooking } from '@/lib/types';
import { X } from 'lucide-react';

const EMPTY: Partial<GroupSchedule> = {};

function formatDate(date: string | null) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('vi-VN');
}

export default function AdminBookingsPage() {
  const [schedules, setSchedules] = useState<GroupSchedule[]>([]);
  const [bookings, setBookings] = useState<TourBooking[]>([]);
  const [rooms, setRooms] = useState<MuseumRoom[]>([]);
  const [editing, setEditing] = useState<Partial<GroupSchedule> | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  async function reload() {
    const [loadedSchedules, loadedBookings, loadedRooms] = await Promise.all([
      getAllGroupSchedules(),
      getAllTourBookings(),
      getRooms(),
    ]);
    setSchedules(loadedSchedules);
    setBookings(loadedBookings);
    setRooms(loadedRooms);
  }

  useEffect(() => { reload(); }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function handleSaveSchedule(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    const fd = new FormData(e.currentTarget);
    const result = await saveGroupSchedule({
      id: editing.id,
      title: fd.get('title') as string,
      description: (fd.get('description') as string) || null,
      room_id: (fd.get('room_id') as string) || null,
      visit_date: (fd.get('visit_date') as string) || null,
      start_time: (fd.get('start_time') as string) || null,
      end_time: (fd.get('end_time') as string) || null,
      max_group_size: Number(fd.get('max_group_size') || 0) || null,
      contact_person: (fd.get('contact_person') as string) || null,
      status: fd.get('status') as 'published' | 'draft',
    });
    setSaving(false);
    if (result.success) {
      showToast(editing.id ? 'Đã cập nhật lịch đoàn!' : 'Đã thêm lịch đoàn mới!');
      setEditing(null);
      await reload();
    } else {
      showToast('Lỗi: ' + result.error);
    }
  }

  async function updateBookingStatus(id: string, status: TourBooking['status']) {
    const result = await saveTourBooking({ id, status });
    if (result.success) {
      showToast('Đã cập nhật trạng thái đăng ký.');
      await reload();
    } else {
      showToast('Lỗi: ' + result.error);
    }
  }

  async function removeSchedule(id: string, title: string) {
    if (!confirm(`Xóa lịch đoàn "${title}"?`)) return;
    await deleteGroupSchedule(id);
    showToast('Đã xóa lịch đoàn.');
    await reload();
  }

  async function removeBooking(id: string, name: string) {
    if (!confirm(`Xóa đăng ký "${name}"?`)) return;
    await deleteTourBooking(id);
    showToast('Đã xóa đăng ký.');
    await reload();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-serif font-bold text-gray-800 mb-1">Quản lý Vé & Đoàn</h1>
        <p className="text-gray-500 text-sm">Điều phối lịch đoàn, duyệt booking và quản lý đăng ký tham quan.</p>
      </div>

      {toast && <div className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5 text-sm">{toast}</div>}

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-start">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">Lịch tham quan theo đoàn</h2>
              <p className="text-xs text-gray-500">{schedules.length} lịch</p>
            </div>
            <button onClick={() => setEditing(EMPTY)} className="btn-primary text-xs">+ Thêm lịch</button>
          </div>

          <div className="divide-y divide-gray-100">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="p-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="font-medium text-gray-800">{schedule.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {formatDate(schedule.visit_date)} · {schedule.start_time ?? '--:--'} - {schedule.end_time ?? '--:--'}
                    </div>
                  </div>
                  <span className={schedule.status === 'published' ? 'badge-published' : 'badge-draft'}>
                    {schedule.status === 'published' ? 'Xuất bản' : 'Nháp'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{schedule.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  Phòng: {schedule.room?.name ?? 'Chưa gắn'} · Tối đa: {schedule.max_group_size ?? 0}
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <button onClick={() => setEditing(schedule)} className="text-amber-600 hover:text-amber-800 font-medium">Sửa</button>
                  <button onClick={() => removeSchedule(schedule.id, schedule.title)} className="text-red-500 hover:text-red-700 font-medium">Xóa</button>
                </div>
              </div>
            ))}
            {schedules.length === 0 && <div className="p-6 text-center text-gray-400 text-sm">Chưa có lịch đoàn nào.</div>}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Đăng ký vé / đoàn</h2>
            <p className="text-xs text-gray-500">{bookings.length} yêu cầu</p>
          </div>

          <div className="divide-y divide-gray-100 max-h-[72vh] overflow-auto">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="font-medium text-gray-800">{booking.full_name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {booking.booking_type === 'group' ? `Đoàn: ${booking.group_name ?? '—'}` : 'Vé lẻ / gia đình'} · {booking.visitor_count} khách
                    </div>
                  </div>
                  <span className={booking.status === 'confirmed' ? 'badge-published' : 'badge-draft'}>{booking.status}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {formatDate(booking.visit_date)} {booking.visit_time ?? ''} · {booking.room?.name ?? 'Chưa gắn phòng'}
                </div>
                <div className="text-sm text-gray-600 mb-3">{booking.notes || 'Không có ghi chú'}</div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <button onClick={() => updateBookingStatus(booking.id, 'confirmed')} className="text-emerald-600 hover:text-emerald-800 font-medium">Xác nhận</button>
                  <button onClick={() => updateBookingStatus(booking.id, 'completed')} className="text-blue-600 hover:text-blue-800 font-medium">Hoàn tất</button>
                  <button onClick={() => updateBookingStatus(booking.id, 'cancelled')} className="text-amber-600 hover:text-amber-800 font-medium">Hủy</button>
                  <button onClick={() => removeBooking(booking.id, booking.full_name)} className="text-red-500 hover:text-red-700 font-medium">Xóa</button>
                </div>
              </div>
            ))}
            {bookings.length === 0 && <div className="p-6 text-center text-gray-400 text-sm">Chưa có yêu cầu đặt vé nào.</div>}
          </div>
        </div>
      </div>

      {editing !== null && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">{editing.id ? 'Chỉnh sửa lịch đoàn' : 'Lịch đoàn mới'}</h2>
            <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-gray-700 p-0.5 rounded transition-colors"><X className="w-5 h-5" /></button>
          </div>
          <form onSubmit={handleSaveSchedule} className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="form-label">Tên lịch đoàn *</label>
              <input name="title" defaultValue={editing.title || ''} required className="form-input" />
            </div>
            <div className="md:col-span-2">
              <label className="form-label">Mô tả</label>
              <textarea name="description" defaultValue={editing.description || ''} rows={3} className="form-input resize-none" />
            </div>
            <div>
              <label className="form-label">Phòng</label>
              <select name="room_id" defaultValue={editing.room_id || ''} className="form-input">
                <option value="">— Chưa chọn —</option>
                {rooms.map((room) => <option key={room.id} value={room.id}>{room.name}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">Ngày tham quan</label>
              <input name="visit_date" type="date" defaultValue={editing.visit_date || ''} className="form-input" />
            </div>
            <div>
              <label className="form-label">Giờ bắt đầu</label>
              <input name="start_time" type="time" defaultValue={editing.start_time || ''} className="form-input" />
            </div>
            <div>
              <label className="form-label">Giờ kết thúc</label>
              <input name="end_time" type="time" defaultValue={editing.end_time || ''} className="form-input" />
            </div>
            <div>
              <label className="form-label">Tối đa khách</label>
              <input name="max_group_size" type="number" min="0" defaultValue={editing.max_group_size ?? ''} className="form-input" />
            </div>
            <div>
              <label className="form-label">Người liên hệ</label>
              <input name="contact_person" defaultValue={editing.contact_person || ''} className="form-input" />
            </div>
            <div>
              <label className="form-label">Trạng thái</label>
              <select name="status" defaultValue={editing.status || 'draft'} className="form-input">
                <option value="draft">Nháp</option>
                <option value="published">Xuất bản</option>
              </select>
            </div>
            <div className="md:col-span-2 flex gap-2 pt-1">
              <button type="submit" disabled={saving} className="btn-primary flex-1">{saving ? 'Đang lưu...' : 'Lưu lịch đoàn'}</button>
              <button type="button" onClick={() => setEditing(null)} className="btn-secondary">Hủy</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}