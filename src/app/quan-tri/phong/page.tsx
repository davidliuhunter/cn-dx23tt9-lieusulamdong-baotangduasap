'use client';

import { useEffect, useState } from 'react';
import { getRooms } from '@/lib/data';
import { deleteRoom, saveRoom } from '@/lib/actions';
import type { MuseumRoom } from '@/lib/types';
import { X } from 'lucide-react';

const EMPTY: Partial<MuseumRoom> = {};

export default function AdminRoomsPage() {
  const [rooms, setRooms] = useState<MuseumRoom[]>([]);
  const [editing, setEditing] = useState<Partial<MuseumRoom> | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  async function reload() {
    setRooms(await getRooms());
  }

  useEffect(() => { reload(); }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    const fd = new FormData(e.currentTarget);
    const result = await saveRoom({
      id: editing.id,
      name: fd.get('name') as string,
      description: (fd.get('description') as string) || null,
      location: (fd.get('location') as string) || null,
      capacity: Number(fd.get('capacity') || 0),
      status: fd.get('status') as 'published' | 'draft',
    });
    setSaving(false);
    if (result.success) {
      showToast(editing.id ? 'Đã cập nhật phòng!' : 'Đã thêm phòng mới!');
      setEditing(null);
      await reload();
    } else {
      showToast('Lỗi: ' + result.error);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Xóa phòng "${name}"?`)) return;
    await deleteRoom(id);
    showToast('Đã xóa phòng.');
    await reload();
  }

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">Quản lý Phòng</h1>
            <p className="text-gray-500 text-sm">{rooms.length} phòng / không gian</p>
          </div>
          <button onClick={() => setEditing(EMPTY)} className="btn-primary">+ Thêm phòng</button>
        </div>

        {toast && <div className="mb-4 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5 text-sm">{toast}</div>}

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Tên phòng</th>
                <th className="px-4 py-3 text-left font-medium hidden md:table-cell">Sức chứa</th>
                <th className="px-4 py-3 text-left font-medium">Trạng thái</th>
                <th className="px-4 py-3 text-right font-medium">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rooms.map((room) => (
                <tr key={room.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">
                    <div>{room.name}</div>
                    <div className="text-xs text-gray-400 font-normal mt-0.5">{room.location ?? 'Chưa có vị trí'}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{room.capacity}</td>
                  <td className="px-4 py-3">
                    <span className={room.status === 'published' ? 'badge-published' : 'badge-draft'}>
                      {room.status === 'published' ? 'Xuất bản' : 'Nháp'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <button onClick={() => setEditing(room)} className="text-amber-600 hover:text-amber-800 text-xs font-medium">Sửa</button>
                    <button onClick={() => handleDelete(room.id, room.name)} className="text-red-500 hover:text-red-700 text-xs font-medium">Xóa</button>
                  </td>
                </tr>
              ))}
              {rooms.length === 0 && (
                <tr><td colSpan={4} className="px-4 py-10 text-center text-gray-400">Chưa có phòng nào</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {editing !== null && (
        <div className="w-80 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm sticky top-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">{editing.id ? 'Chỉnh sửa' : 'Phòng mới'}</h2>
              <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-gray-700 p-0.5 rounded transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="form-label">Tên phòng *</label>
                <input name="name" defaultValue={editing.name || ''} required className="form-input" />
              </div>
              <div>
                <label className="form-label">Mô tả</label>
                <textarea name="description" defaultValue={editing.description || ''} rows={3} className="form-input resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="form-label">Vị trí</label>
                  <input name="location" defaultValue={editing.location || ''} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Sức chứa</label>
                  <input name="capacity" type="number" min="0" defaultValue={editing.capacity ?? 0} className="form-input" />
                </div>
              </div>
              <div>
                <label className="form-label">Trạng thái</label>
                <select name="status" defaultValue={editing.status || 'draft'} className="form-input">
                  <option value="draft">Nháp</option>
                  <option value="published">Xuất bản</option>
                </select>
              </div>
              <div className="flex gap-2 pt-1">
                <button type="submit" disabled={saving} className="btn-primary flex-1">{saving ? 'Đang lưu...' : 'Lưu'}</button>
                <button type="button" onClick={() => setEditing(null)} className="btn-secondary">Hủy</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}