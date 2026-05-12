# Hướng dẫn Cài đặt Chi tiết

---

## Bước 1: Chuẩn bị môi trường

### 1.1 Kiểm tra Node.js & npm

```bash
node --version    # Phải >= 18.0.0
npm --version     # Phải >= 9.0.0
git --version     # Kiểm tra Git đã cài
```

Nếu chưa cài:
- [Download Node.js](https://nodejs.org/en/download)
- [Download Git](https://git-scm.com/download/win)

### 1.2 Tạo Supabase project

1. Vào **https://supabase.com** → Sign Up
2. Tạo project mới: đặt tên `bao-tang-dua-sap`
3. Chọn region **Southeast Asia (Singapore)**
4. Ghi nhớ **Database Password**

---

## Bước 2: Clone repository

```bash
git clone https://github.com/davidliuhunter/cn-dx23tt9-lieusulamdong-baotangduasap.git
cd bao-tang-nextjs
```

---

## Bước 3: Cài đặt dependencies

```bash
npm install
```

Nếu gặp lỗi, thử:
```bash
npm clean-install
```

---

## Bước 4: Cấu hình Supabase

### 4.1 Tạo database tables

1. Vào **Supabase Dashboard** → **SQL Editor**
2. Copy nội dung từ `supabase/001_schema.sql` → Paste → **Run**
3. Copy nội dung từ `supabase/002_seed.sql` → Paste → **Run**

### 4.2 Lấy API keys

1. **Settings** → **API**
2. Copy:
   - **Project URL** (dạng `https://xxxxx.supabase.co`)
   - **anon public** key (dạng `eyJhbGc...`)

---

## Bước 5: Setup .env.local

```bash
# Trong thư mục bao-tang-nextjs
cp .env.local.example .env.local
```

Mở `.env.local` và điền:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_ADMIN_PASSWORD=your-password-here
```

---

## Bước 6: Chạy development server

```bash
npm run dev
```

Output sẽ hiển thị:
```
▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

Mở browser vào [http://localhost:3000](http://localhost:3000)

---

## Bước 7: Test features

### 7.1 Trang công cộng
- Xem trang chủ: http://localhost:3000
- Xem hiện vật: http://localhost:3000/hien-vat
- Xem bài viết: http://localhost:3000/bai-viet
- Xem sự kiện: http://localhost:3000/su-kien
- Liên hệ: http://localhost:3000/lien-he

### 7.2 Admin panel
- Đăng nhập: http://localhost:3000/dang-nhap
- Password: Giá trị trong `NEXT_PUBLIC_ADMIN_PASSWORD`
- Dashboard: http://localhost:3000/quan-tri
- Quản lý hiện vật: http://localhost:3000/quan-tri/hien-vat
- Quản lý bài viết: http://localhost:3000/quan-tri/bai-viet
- Quản lý sự kiện: http://localhost:3000/quan-tri/su-kien
- Xem tin nhắn: http://localhost:3000/quan-tri/tin-nhan

---

## Build production

```bash
npm run build
npm run start
```

---

## Dừng development server

Nhấn **Ctrl + C** trong terminal

---

## Cần giúp?

Xem [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
