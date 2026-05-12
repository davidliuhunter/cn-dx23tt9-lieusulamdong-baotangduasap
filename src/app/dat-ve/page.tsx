import PublicLayout from '../../components/PublicLayout';
import TourBookingForm from '../../components/TourBookingForm';
import { getRooms, getTourBookingsByEmail } from '../../lib/data';
import { CircleCheckBig, CircleX, Clock3, Ticket } from 'lucide-react';

function getStatusLabel(status: 'pending' | 'confirmed' | 'cancelled' | 'completed') {
  if (status === 'pending') return 'Chờ xác nhận';
  if (status === 'confirmed') return 'Đã xác nhận';
  if (status === 'completed') return 'Đã hoàn tất';
  return 'Đã hủy';
}

function getStatusClass(status: 'pending' | 'confirmed' | 'cancelled' | 'completed') {
  if (status === 'pending') return 'bg-amber-100 text-amber-800';
  if (status === 'confirmed') return 'bg-emerald-100 text-emerald-800';
  if (status === 'completed') return 'bg-blue-100 text-blue-800';
  return 'bg-red-100 text-red-800';
}

function getStatusIcon(status: 'pending' | 'confirmed' | 'cancelled' | 'completed') {
  if (status === 'pending') return <Clock3 className="w-3.5 h-3.5" />;
  if (status === 'confirmed') return <CircleCheckBig className="w-3.5 h-3.5" />;
  if (status === 'completed') return <CircleCheckBig className="w-3.5 h-3.5" />;
  return <CircleX className="w-3.5 h-3.5" />;
}

export default async function TicketBookingPage({
  searchParams,
}: {
  searchParams?: { email?: string };
}) {
  const rooms = await getRooms();
  const email = searchParams?.email?.trim() ?? '';
  const bookings = email ? await getTourBookingsByEmail(email) : [];

  return (
    <PublicLayout>
      <div className="page-hero">
        <div className="container-museum">
          <h1 className="font-serif text-4xl font-bold mb-2">Đặt vé tham quan</h1>
          <p className="text-amber-200">Đăng ký lịch ghé thăm bảo tàng hoặc đăng ký đoàn tham quan theo nhu cầu</p>
        </div>
      </div>

      <div className="container-museum py-12">
        <div className="flex items-center gap-3 mb-6 text-amber-900">
          <Ticket className="w-5 h-5" />
          <div>
            <h2 className="font-serif text-2xl font-bold">Biểu mẫu đăng ký</h2>
            <p className="text-sm text-amber-700">Hệ thống ghi nhận yêu cầu và để quản trị duyệt sau.</p>
          </div>
        </div>
        <TourBookingForm rooms={rooms} />

        <section className="mt-12 bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-amber-950 mb-2">Tra cứu lịch đã đặt</h3>
          <p className="text-sm text-amber-700 mb-4">Nhập email để xem trạng thái yêu cầu: chờ xác nhận, đã xác nhận, hoàn tất hoặc đã hủy.</p>

          <form method="GET" className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              name="email"
              type="email"
              defaultValue={email}
              required
              className="form-input sm:flex-1"
              placeholder="Nhập email đã dùng khi đăng ký"
            />
            <button type="submit" className="btn-primary sm:w-auto">Tra cứu</button>
          </form>

          {!email ? (
            <p className="text-sm text-amber-600">Chưa nhập email để tra cứu.</p>
          ) : bookings.length === 0 ? (
            <p className="text-sm text-amber-600">Không tìm thấy đăng ký nào với email này.</p>
          ) : (
            <div className="space-y-3">
              {bookings.map((booking) => (
                <div key={booking.id} className="border border-amber-100 rounded-xl p-4 bg-amber-50/50">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="font-medium text-amber-950">{booking.full_name}</p>
                      <p className="text-xs text-amber-600 mt-0.5">
                        {booking.booking_type === 'group' ? `Đăng ký đoàn: ${booking.group_name ?? '—'}` : 'Đặt vé cá nhân / gia đình'}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusClass(booking.status)}`}>
                      {getStatusIcon(booking.status)} {getStatusLabel(booking.status)}
                    </span>
                  </div>

                  <div className="text-sm text-amber-800">
                    <p>
                      Lịch tham quan: {booking.visit_date ?? 'Chưa chọn ngày'} {booking.visit_time ?? ''}
                    </p>
                    <p>
                      Số khách: {booking.visitor_count} · Phòng: {booking.room?.name ?? 'Tự sắp xếp'}
                    </p>
                    {booking.notes && <p className="text-xs text-amber-700 mt-1">Ghi chú: {booking.notes}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PublicLayout>
  );
}