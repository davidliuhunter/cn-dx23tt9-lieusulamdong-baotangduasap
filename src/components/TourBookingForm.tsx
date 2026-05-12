'use client';

import React, { useRef, useState } from 'react';
import { submitTourBooking } from '@/src/lib/actions';
import type { MuseumRoom } from '@/src/lib/types';

type Props = {
  rooms: MuseumRoom[];
};

export default function TourBookingForm({ rooms }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingId, setBookingId] = useState<string>('');
  const [submittedEmail, setSubmittedEmail] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('email') || '').trim();
    const result = await submitTourBooking(fd);
    if (result.success) {
      setStatus('success');
      setBookingId(result.bookingId ?? '');
      setSubmittedEmail(email);
      formRef.current?.reset();
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Có lỗi xảy ra.');
    }
  }

  return (
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
        <div>
          <label className="form-label">Loại đăng ký *</label>
          <select name="booking_type" className="form-input" defaultValue="ticket" required>
            <option value="ticket">Đặt vé tham quan cá nhân / gia đình</option>
            <option value="group">Đăng ký đoàn tham quan</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Họ tên *</label>
            <input name="full_name" required className="form-input" placeholder="Nguyễn Văn A" />
          </div>
          <div>
            <label className="form-label">Tên đoàn / công ty</label>
            <input name="group_name" className="form-input" placeholder="Nếu đăng ký theo đoàn" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Email *</label>
            <input name="email" type="email" required className="form-input" placeholder="email@example.com" />
          </div>
          <div>
            <label className="form-label">Số điện thoại</label>
            <input name="phone" type="tel" className="form-input" placeholder="0901 234 567" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="form-label">Ngày tham quan *</label>
            <input name="visit_date" type="date" required className="form-input" />
          </div>
          <div>
            <label className="form-label">Giờ tham quan</label>
            <input name="visit_time" type="time" className="form-input" />
          </div>
          <div>
            <label className="form-label">Số lượng khách *</label>
            <input name="visitor_count" type="number" min="1" required defaultValue={1} className="form-input" />
          </div>
        </div>

        <div>
          <label className="form-label">Phòng / không gian ưu tiên</label>
          <select name="room_id" className="form-input" defaultValue="">
            <option value="">Tự sắp xếp phù hợp</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Ghi chú</label>
          <textarea
            name="notes"
            rows={4}
            className="form-input resize-none"
            placeholder="Yêu cầu hướng dẫn, xe đưa đón, phòng họp, hỗ trợ giáo dục..."
          />
        </div>

        {status === 'error' && (
          <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-xl border border-red-200">{errorMsg}</div>
        )}

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-semibold text-green-800 mb-1">Đã gửi yêu cầu</h3>
            <p className="text-sm text-green-700">Bảo tàng sẽ phản hồi và xác nhận lịch sớm nhất.</p>
            {bookingId && (
              <p className="text-xs text-green-800 mt-2">
                Mã đăng ký: <span className="font-semibold">{bookingId}</span>
              </p>
            )}
            {submittedEmail && (
              <a
                href={`/dat-ve?email=${encodeURIComponent(submittedEmail)}`}
                className="inline-block text-xs text-green-900 font-semibold mt-3 hover:underline"
              >
                Xem danh sách lịch đã đặt của email này
              </a>
            )}
            <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-4">
              Đăng ký tiếp
            </button>
          </div>
        ) : (
          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
            {status === 'loading' ? 'Đang gửi...' : 'Gửi yêu cầu đặt vé / đăng ký đoàn'}
          </button>
        )}
      </form>

      <aside className="space-y-4">
        <div className="bg-amber-950 text-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-bold mb-3">Quy trình đăng ký</h2>
          <ol className="space-y-3 text-sm text-amber-100">
            <li>1. Chọn loại đăng ký: vé lẻ hoặc theo đoàn.</li>
            <li>2. Điền thông tin cơ bản và thời gian muốn tham quan.</li>
            <li>3. Bảo tàng duyệt yêu cầu và liên hệ xác nhận.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
          <h3 className="font-semibold text-amber-950 mb-3">Không gian tham quan</h3>
          <div className="space-y-3 text-sm">
            {rooms.map((room) => (
              <div key={room.id} className="border border-amber-100 rounded-xl p-3 bg-amber-50/70">
                <div className="font-medium text-amber-950">{room.name}</div>
                <div className="text-amber-700 text-xs mt-1">{room.location ?? 'Không gian bảo tàng'}</div>
                <div className="text-amber-600 text-xs mt-1">Sức chứa: {room.capacity} khách</div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}