# Dữ liệu Test (Test Data)

Dự án đã được cấu hình để sử dụng **dữ liệu mẫu (seed data)** từ Supabase.

---

## Cách sử dụng dữ liệu test

### Bước 1: Chạy SQL seed

Sau khi tạo database, hãy chạy file `supabase/002_seed.sql`:

1. Vào **Supabase Dashboard** → **SQL Editor**
2. Tạo query mới
3. Copy toàn bộ nội dung `supabase/002_seed.sql`
4. Paste vào editor
5. Click **Run**

### Bước 2: Verify dữ liệu

```bash
npm run dev
```

Truy cập http://localhost:3000 → Kiểm tra:
- Trang chủ có hiện vật?
- Danh sách bài viết có dữ liệu?
- Danh sách sự kiện có sự kiện?

---

## Dữ liệu test có sẵn

### Artifacts (Hiện vật)

| ID | Tên | Mô tả |
|----|-----|-------|
| 1 | Dừa Sáp cổ | Dừa sáp được làm thủ công từ năm 1950 |
| 2 | Khuôn dừa | Khuôn gỗ dùng để tạo hình dừa sáp |
| ... | ... | ... |

### Articles (Bài viết)

| ID | Tiêu đề | Nội dung |
|----|--------|---------|
| 1 | Lịch sử Dừa Sáp | Bài viết về lịch sử... |
| 2 | Quy trình sản xuất | Hướng dẫn làm dừa sáp... |
| ... | ... | ... |

### Events (Sự kiện)

| ID | Tên sự kiện | Ngày |
|----|-----------|------|
| 1 | Khai mạc triển lãm | 01/06/2026 |
| 2 | Workshop làm dừa sáp | 15/06/2026 |
| ... | ... | ... |

---

## Reset dữ liệu

Nếu muốn reset toàn bộ dữ liệu:

### Cách 1: Supabase Dashboard

1. **Supabase** → **Settings** → **Database**
2. Click **Restart database**
3. Sau đó chạy lại `002_seed.sql`

### Cách 2: SQL Command

```sql
-- Xóa tất cả dữ liệu
DELETE FROM artifacts;
DELETE FROM articles;
DELETE FROM events;
DELETE FROM messages;

-- Sau đó chạy lại 002_seed.sql
```

---

## Thêm dữ liệu test của riêng bạn

Bạn có thể tạo file `supabase/custom_seed.sql` và chạy trên Supabase:

```sql
-- Thêm hiện vật mới
INSERT INTO artifacts (name, description, year, image_url)
VALUES ('Dừa Sáp mới', 'Mô tả của tôi', 2024, 'https://...');

-- Thêm bài viết mới
INSERT INTO articles (title, content, author, created_at)
VALUES ('Bài viết của tôi', 'Nội dung...', 'Tên tác giả', NOW());
```

---

## Xem dữ liệu trong Supabase

1. Vào **Supabase Dashboard**
2. Click **Table Editor**
3. Chọn table: `artifacts`, `articles`, `events`, `messages`
4. Xem dữ liệu trực tiếp

---

## Liên quan

- Xem schema: `supabase/001_schema.sql`
- Xem seed data: `supabase/002_seed.sql`
