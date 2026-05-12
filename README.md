# Bảo Tàng Di Sản Dừa Sáp Cầu Kè

Website quản lý và trưng bày hiện vật Di sản Dừa Sáp - Trà Vinh

Một ứng dụng web hiện đại cho phép quản lý, trưng bày các hiện vật, bài viết, sự kiện và quản lý liên hệ từ khách hàng.

**Stack:** Next.js 14 · Tailwind CSS · Supabase (PostgreSQL) · Vercel · TypeScript

---

## Cấu trúc Repository

```
bao-tang-nextjs/
├── app/                      # Source code - Next.js App Router
│   ├── page.tsx             # Trang chủ
│   ├── hien-vat/            # Hiện vật
│   ├── bai-viet/            # Bài viết
│   ├── su-kien/             # Sự kiện
│   ├── lien-he/             # Liên hệ
│   ├── dang-nhap/           # Login
│   └── quan-tri/            # Admin panel (protected)
├── components/              # React components
├── lib/                     # Utilities, types, data access
├── supabase/               # Database schema & migrations
├── public/                 # Static assets
│
├── setup/                  # Hướng dẫn cài đặt & test data
│   ├── README.md          # Tổng quan setup
│   ├── INSTALL.md         # Hướng dẫn cài đặt chi tiết
│   ├── REQUIREMENTS.md    # Yêu cầu hệ thống
│   ├── TEST-DATA.md       # Dữ liệu test
│   └── TROUBLESHOOTING.md # Xử lý lỗi
│
├── progress-report/       # Báo cáo tiến độ hàng tuần
│   ├── README.md
│   ├── WEEK-01_10-17-04-2026.md
│   ├── WEEK-02_17-24-04-2026.md
│   └── ...
│
├── thesis/               # Tài liệu đồ án
│   ├── README.md
│   ├── PROPOSAL.md       # Đề xuất đồ án
│   ├── FINAL-REPORT.md   # Báo cáo cuối cùng
│   ├── USER-MANUAL.md    # Hướng dẫn sử dụng
│   └── TECHNICAL-DESIGN.md
│
├── README.md            # File này
├── DEPLOY.md           # Hướng dẫn deploy Vercel
├── package.json
└── tsconfig.json
```

---

## Mục lục

- [Tính năng](#tính-năng)
- [Stack công nghệ](#stack-công-nghệ)
- [Cài đặt nhanh](#cài-đặt-nhanh)
- [Hướng dẫn chi tiết](#hướng-dẫn-chi-tiết)
- [Thông tin project](#thông-tin-project)

---

## Tính năng

### Người dùng công cộng
- Xem danh sách hiện vật với hình ảnh, mô tả chi tiết
- Xem chi tiết từng hiện vật - thống kê lượt xem
- Đọc bài viết về lịch sử, giới thiệu bảo tàng
- Xem sự kiện sắp tới
- Liên hệ qua form (lưu tin nhắn vào database)
- Giao diện responsive - hoạt động tốt trên mobile/tablet/desktop

### Admin (Đăng nhập)
- Quản lý hiện vật: thêm/sửa/xóa, tải ảnh lên Supabase Storage
- Quản lý bài viết: CRUD với Rich Text Editor
- Quản lý sự kiện: thêm/cập nhật sự kiện
- Xem tin nhắn: liên hệ từ khách hàng

---

## Stack công nghệ

| Phần | Công nghệ |
|------|-----------|
| Frontend | Next.js 14, React 19, TypeScript |
| Styling | Tailwind CSS 3 |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage (ảnh) |
| Hosting | Vercel |
| Editor | Rich Text Editor |

---

## Cài đặt nhanh

### Yêu cầu tối thiểu
- Node.js 18+
- npm hoặc yarn
- Git
- Supabase account (miễn phí)

### 3 bước khởi chạy

```bash
# 1. Clone & install
git clone https://github.com/davidliuhunter/cn-dx23tt9-lieusulamdong-baotangduasap.git
cd bao-tang-nextjs
npm install

# 2. Setup environment
cp .env.local.example .env.local
# Điền Supabase keys vào .env.local

# 3. Chạy
npm run dev
# Mở http://localhost:3000
```

---

## Hướng dẫn chi tiết

### Setup & Cài đặt
Xem thư mục **[setup/](./setup/)**
- [INSTALL.md](./setup/INSTALL.md) - Hướng dẫn chi tiết
- [REQUIREMENTS.md](./setup/REQUIREMENTS.md) - Yêu cầu hệ thống
- [TEST-DATA.md](./setup/TEST-DATA.md) - Dữ liệu test
- [TROUBLESHOOTING.md](./setup/TROUBLESHOOTING.md) - Fix lỗi

### Deploy Production
Xem [DEPLOY.md](./DEPLOY.md) - Hướng dẫn deploy lên Vercel

### Tài liệu Đồ án
Xem thư mục **[thesis/](./thesis/)**
- [PROPOSAL.md](./thesis/PROPOSAL.md) - Đề xuất đồ án
- [USER-MANUAL.md](./thesis/USER-MANUAL.md) - Hướng dẫn sử dụng
- [FINAL-REPORT.md](./thesis/FINAL-REPORT.md) - Báo cáo cuối cùng

### Báo cáo Tiến độ
Xem thư mục **[progress-report/](./progress-report/)**
- Báo cáo hàng tuần (WEEK-01 đến WEEK-05)
- Template để cập nhật tuần tiếp theo

---

## Thông tin project

| Thông tin | Chi tiết |
|-----------|---------|
| Tên đồ án | Xây dựng Website Quản lý & Trưng bày Di sản Dừa Sáp |
| Mục đích | Quản lý hiện vật, bài viết, sự kiện của Bảo tàng |
| Stack | Next.js + Supabase + Vercel |
| Repository | https://github.com/davidliuhunter/cn-dx23tt9-lieusulamdong-baotangduasap |
| Đạo hạn | 30/06/2026 |

---

## Tác giả

**Liêu Sư Lâm Đông** - Sinh viên Trường Đại học Cần Thơ

---

## Support

Nếu gặp lỗi, hãy:

1. Kiểm tra [setup/TROUBLESHOOTING.md](./setup/TROUBLESHOOTING.md)
2. Xem logs: `npm run dev` → console browser (F12)
3. Kiểm tra `.env.local` - đảm bảo keys đúng
4. Check Supabase database connection

---

## License

Đồ án học tập - 2026

---

**Cập nhật lần cuối:** 12/05/2026