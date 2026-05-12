# Hướng dẫn Sử dụng (User Manual)

---

## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Trang công cộng](#trang-công-cộng)
3. [Admin panel](#admin-panel)
4. [FAQs](#faqs)

---

## Giới thiệu

Bảo Tàng Di Sản Dừa Sáp là website quản lý và trưng bày các hiện vật, bài viết, sự kiện liên quan đến Di sản Dừa Sáp.

**URL:** https://bao-tang-nextjs.vercel.app (hoặc local: http://localhost:3000)

---

## Trang công cộng

### 1. Trang chủ

**URL:** http://localhost:3000

Hiển thị:
- Banner chào mừng
- Hiện vật nổi bật
- Bài viết mới nhất
- Các sự kiện sắp tới

---

### 2. Danh sách hiện vật

**URL:** http://localhost:3000/hien-vat

**Tính năng:**
- Xem danh sách các hiện vật (grid view)
- Xem ảnh thumbnail
- Click vào card để xem chi tiết

**Tìm kiếm:** (tùy chọn)
- Có thể filter theo loại
- Sort theo ngày tạo

---

### 3. Chi tiết hiện vật

**URL:** http://localhost:3000/hien-vat/[id]

**Thông tin hiển thị:**
- Ảnh chính (carousel nếu có nhiều ảnh)
- Tên hiện vật
- Mô tả chi tiết
- Năm sáng tác/thu thập
- Lượt xem

**Tương tác:**
- Xem ảnh full-screen (lightbox)
- Xem hiện vật liên quan

---

### 4. Danh sách bài viết

**URL:** http://localhost:3000/bai-viet

**Tính năng:**
- Danh sách bài viết (card view)
- Hiển thị title, excerpt, ngày tạo
- Sắp xếp theo ngày (mới nhất trước)

---

### 5. Chi tiết bài viết

**URL:** http://localhost:3000/bai-viet/[id]

**Thông tin:**
- Tiêu đề & tác giả
- Ngày tạo
- Nội dung đầy đủ (rich text)
- Ảnh đính kèm

---

### 6. Sự kiện

**URL:** http://localhost:3000/su-kien

**Thông tin:**
- Danh sách sự kiện sắp tới
- Ngày, giờ, địa điểm
- Mô tả ngắn

---

### 7. Liên hệ

**URL:** http://localhost:3000/lien-he

**Biểu mẫu:**
- Họ tên *
- Email *
- Số điện thoại
- Nội dung tin nhắn *

**Cách dùng:**
1. Điền thông tin
2. Click "Gửi"
3. Xác nhận thành công → Admin sẽ xem

---

## Admin panel

### Đăng nhập

**URL:** http://localhost:3000/dang-nhap

**Bước:**
1. Nhập password (được cấp bởi quản trị viên)
2. Click "Đăng nhập"
3. Chuyển hướng đến /quan-tri

**Lưu ý:**
- Password không phải username
- Session tính theo browser (click logout để thoát)

---

### Dashboard

**URL:** http://localhost:3000/quan-tri

Tổng quan:
- Số lượng hiện vật
- Số lượng bài viết
- Số lượng sự kiện
- Số lượng tin nhắn chưa đọc

---

### Quản lý hiện vật

**URL:** http://localhost:3000/quan-tri/hien-vat

#### Xem danh sách
- Bảng hiển thị tất cả hiện vật
- Tên, năm, lượt xem, tương tác

#### Thêm hiện vật
1. Click "Thêm hiện vật"
2. Điền:
   - Tên *
   - Mô tả *
   - Năm tạo
   - Chọn ảnh (upload JPG/PNG)
3. Click "Lưu"

#### Chỉnh sửa
1. Click "Sửa" ở hàng cần sửa
2. Cập nhật thông tin
3. Click "Lưu"

#### Xóa
1. Click "Xóa" ở hàng cần xóa
2. Xác nhận

---

### Quản lý bài viết

**URL:** http://localhost:3000/quan-tri/bai-viet

#### Thêm bài viết
1. Click "Thêm bài viết"
2. Điền:
   - Tiêu đề *
   - Nội dung (dùng rich text editor) *
   - Tác giả
3. Click "Lưu"

#### Chỉnh sửa
1. Click "Sửa"
2. Cập nhật
3. Click "Lưu"

#### Xóa
1. Click "Xóa"
2. Xác nhận

**Rich text editor:**
- Bold, Italic, Underline
- Heading 1, 2, 3
- Lists (unordered, ordered)
- Insert link, image

---

### Quản lý sự kiện

**URL:** http://localhost:3000/quan-tri/su-kien

#### Thêm sự kiện
1. Click "Thêm sự kiện"
2. Điền:
   - Tên sự kiện *
   - Ngày *
   - Giờ
   - Địa điểm
   - Mô tả
3. Click "Lưu"

#### Chỉnh sửa & Xóa
Tương tự như hiện vật

---

### Xem tin nhắn

**URL:** http://localhost:3000/quan-tri/tin-nhan

**Thông tin hiển thị:**
- Họ tên người gửi
- Email
- Số điện thoại
- Nội dung tin nhắn
- Ngày gửi

**Tương tác:**
- Xem chi tiết
- Trả lời (tùy chọn)

---

## FAQs

### Q: Quên password admin?
**A:** Liên hệ người quản lý để cấp lại hoặc reset database.

### Q: Ảnh upload bị lỗi?
**A:** Kiểm tra:
- File < 5MB
- Định dạng JPG/PNG
- Kết nối internet

### Q: Hiện vật không hiển thị?
**A:** 
- Kiểm tra database có dữ liệu?
- Supabase connection OK?
- Clear browser cache (Ctrl+F5)

### Q: Logout ở đâu?
**A:** Click "Logout" ở header admin panel

### Q: Có thể chỉnh sửa header/footer?
**A:** Tùy chỉnh trong code, thay đổi file `components/Header.tsx`

### Q: Có lịch sử chỉnh sửa?
**A:** Hiện chưa có, có thể thêm timestamps vào database

---

## Liên hệ hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra [../../setup/TROUBLESHOOTING.md](../../setup/TROUBLESHOOTING.md)
2. Xem logs ở browser (F12)
3. Liên hệ quản trị viên

---

**Cập nhật lần cuối:** 12/05/2026
