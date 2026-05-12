import PublicLayout from '@/src/components/PublicLayout';
import Link from 'next/link';

const milestones = [
  { year: '1700s', title: 'Hình thành vùng dừa sáp', desc: 'Người dân Cầu Kè lưu giữ và chọn lọc giống dừa quý hiếm qua nhiều thế hệ.' },
  { year: '2000s', title: 'Nghiên cứu và nhân giống', desc: 'Khoa học hiện đại mở rộng nguồn giống và gia tăng giá trị kinh tế - du lịch.' },
  { year: '2026', title: 'Bảo tàng số hoá', desc: 'Website bảo tàng giới thiệu hiện vật, sự kiện, đặt vé và quản lý đoàn tham quan.' },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="page-hero">
        <div className="container-museum">
          <h1 className="font-serif text-4xl font-bold mb-2">Giới thiệu</h1>
          <p className="text-amber-200">Không gian kể chuyện về Dừa Sáp Cầu Kè, con người và di sản địa phương</p>
        </div>
      </div>

      <div className="container-museum py-12 space-y-12">
        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-amber-950 mb-4">Sứ mệnh của bảo tàng</h2>
            <p className="text-amber-800 leading-relaxed mb-4">
              Bảo tàng Dừa Sáp Cầu Kè được xây dựng để lưu giữ ký ức, trưng bày hiện vật, giới thiệu văn hóa - lịch sử,
              đồng thời phục vụ giáo dục cộng đồng và phát triển du lịch địa phương.
            </p>
            <p className="text-amber-800 leading-relaxed mb-6">
              Website này hỗ trợ đầy đủ các tác vụ: giới thiệu, bài viết, hiện vật, triển lãm/sự kiện, đặt vé tham quan,
              lịch đoàn, liên hệ và quản trị nội dung.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dat-ve" className="btn-primary">Đặt vé tham quan</Link>
              <Link href="/lich-tham-quan-theo-doan" className="btn-secondary">Xem lịch đoàn</Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6">
            <h3 className="font-semibold text-amber-950 mb-4">Giá trị cốt lõi</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ['Bảo tồn', 'Lưu giữ hiện vật, tư liệu và câu chuyện bản địa.'],
                ['Giáo dục', 'Tạo nguồn học liệu và trải nghiệm cho học sinh, sinh viên.'],
                ['Du lịch', 'Kết nối lịch tham quan, vé và đoàn khách.'],
                ['Cộng đồng', 'Gắn kết người dân, nghệ nhân và du khách.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl bg-amber-50 border border-amber-100 p-4">
                  <div className="font-medium text-amber-950 mb-1">{title}</div>
                  <div className="text-amber-700 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold text-amber-950 mb-6">Dòng thời gian</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {milestones.map((item) => (
              <article key={item.year} className="bg-white rounded-2xl border border-amber-100 p-5 shadow-sm">
                <div className="text-amber-500 font-semibold text-sm mb-2">{item.year}</div>
                <h3 className="font-semibold text-amber-950 mb-2">{item.title}</h3>
                <p className="text-amber-700 text-sm leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}