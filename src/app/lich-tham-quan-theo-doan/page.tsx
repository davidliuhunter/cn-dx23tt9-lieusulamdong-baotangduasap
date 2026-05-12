import Link from 'next/link';
import PublicLayout from '@/src/components/PublicLayout';
import { getPublishedGroupSchedules } from '@/src/lib/data';
import { CalendarDays, MapPin, Users } from 'lucide-react';

function formatDate(date: string | null) {
  if (!date) return 'Chưa sắp lịch';
  return new Date(date).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default async function GroupSchedulePage() {
  const schedules = await getPublishedGroupSchedules();

  return (
    <PublicLayout>
      <div className="page-hero">
        <div className="container-museum">
          <h1 className="font-serif text-4xl font-bold mb-2">Lịch tham quan theo đoàn</h1>
          <p className="text-amber-200">Danh sách lịch đoàn, workshop và không gian đã được bảo tàng sắp xếp</p>
        </div>
      </div>

      <div className="container-museum py-12">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold text-amber-950 mb-2">Các lịch đoàn công khai</h2>
            <p className="text-amber-700 text-sm leading-relaxed">
              Phù hợp cho trường học, cơ quan, nhóm nghiên cứu và đoàn du lịch muốn chủ động thời gian tham quan.
            </p>
          </div>
          <Link href="/dat-ve" className="btn-primary">
            Đăng ký ngay
          </Link>
        </div>

        {schedules.length === 0 ? (
          <div className="bg-white rounded-2xl border border-amber-100 p-10 text-center text-amber-700">
            <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-40" />
            Chưa có lịch tham quan theo đoàn được công bố.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {schedules.map((schedule) => (
              <article key={schedule.id} className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-amber-950 leading-tight">{schedule.title}</h3>
                    <p className="text-amber-600 text-sm mt-1">{schedule.contact_person ?? 'Liên hệ bộ phận đón khách'}</p>
                  </div>
                  <span className="text-xs font-semibold rounded-full px-3 py-1 bg-amber-100 text-amber-800">Đã mở đăng ký</span>
                </div>

                <p className="text-amber-800 text-sm leading-relaxed mb-4">{schedule.description}</p>

                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-amber-50 p-3 border border-amber-100">
                    <div className="text-xs uppercase tracking-wide text-amber-500 mb-1">Ngày tham quan</div>
                    <div className="font-medium text-amber-950">{formatDate(schedule.visit_date)}</div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3 border border-amber-100">
                    <div className="text-xs uppercase tracking-wide text-amber-500 mb-1">Khung giờ</div>
                    <div className="font-medium text-amber-950">
                      {schedule.start_time ?? '00:00'} - {schedule.end_time ?? '00:00'}
                    </div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3 border border-amber-100 flex items-center gap-3 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-wide text-amber-500 mb-1">Phòng / không gian</div>
                      <div className="font-medium text-amber-950">{schedule.room?.name ?? 'Chưa gắn phòng'}</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3 border border-amber-100 flex items-center gap-3 sm:col-span-2">
                    <Users className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-wide text-amber-500 mb-1">Quy mô đoàn</div>
                      <div className="font-medium text-amber-950">Tối đa {schedule.max_group_size ?? 0} khách</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}