# Đề xuất Đồ án (Project Proposal)

**Tiêu đề:** Xây dựng Website Quản lý & Trưng bày Di sản Dừa Sáp

**Ngày:** 10/04/2026

---

## 1. Mục đích & Tổng quan

Xây dựng một ứng dụng web hiện đại để **quản lý và trưng bày** các hiện vật, bài viết, sự kiện của Bảo Tàng Di Sản Dừa Sáp Cầu Kè, Trà Vinh.

Ứng dụng hỗ trợ:
- Người dùng công cộng: Xem thông tin, hiện vật, bài viết
- Quản trị viên: Quản lý nội dung, xem messages

---

## 2. Mục tiêu cụ thể

### 2.1 Mục tiêu chính (Must-have)
- Xây dựng website responsive (mobile/tablet/desktop)
- Trang công cộng hiển thị hiện vật, bài viết, sự kiện
- Admin panel quản lý nội dung (CRUD)
- Database PostgreSQL lưu trữ dữ liệu
- Deploy lên Vercel

### 2.2 Mục tiêu phụ (Nice-to-have)
- Rich text editor cho bài viết
- Upload ảnh đa phương tiện
- View counter cho hiện vật
- Admin authentication

### 2.3 Mục tiêu không thực hiện (Out of scope)
- Mobile app (chỉ web responsive)
- E-commerce/Thanh toán
- Advanced analytics
- Multi-language

---

## 3. Phạm vi công việc

### 3.1 Công việc phát triển

**Frontend (Public pages):**
- Home page
- Artifacts (danh sách & chi tiết)
- Articles (danh sách & chi tiết)
- Events (danh sách)
- Contact form
- Header/Footer/Layout

**Admin pages:**
- Login page
- Dashboard
- Artifacts management
- Articles management
- Events management
- Messages view

**Technical:**
- Database schema & migration
- Supabase integration
- Authentication
- Image storage & upload
- API/Server actions

### 3.2 Công việc không bao gồm

- Design từ đầu (sử dụng Tailwind)
- Native mobile app
- Advanced DevOps/CI-CD

---

## 4. Stack công nghệ

| Layer | Công nghệ |
|-------|-----------|
| Frontend | Next.js 14, React 19, TypeScript |
| Styling | Tailwind CSS 3 |
| Backend | Next.js Server Actions |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Hosting | Vercel |
| Editor | Rich Text Editor (Tiptap/Quill) |

---

## 5. Timeline & Milestone

| Tuần | Milestone | Mục tiêu |
|-----|-----------|---------|
| **Tuần 1** | Setup | Project khởi tạo, database schema |
| **Tuần 2** | Frontend base | Header, Footer, Home page |
| **Tuần 3** | Content pages | Artifacts, Articles, Events pages |
| **Tuần 4** | Admin I | Login, Dashboard, CRUD cơ bản |
| **Tuần 5** | Finalize | Polish, Testing, Documentation |
| **Tuần 6+** | Deployment | Deploy, Fix bugs, Final report |

---

## 6. Kết quả dự kiến

### 6.1 Deliverables

- Code source đầy đủ trên GitHub
- Database schema & seed data
- Deployment guide (Vercel)
- User manual & API documentation
- Progress reports (hàng tuần)
- Final thesis document

### 6.2 Tiêu chí thành công

- Website hoạt động ổn định (zero critical bugs)
- Tất cả tính năng chính hoạt động
- Database lưu & retrieve dữ liệu chính xác
- Responsive trên mobile/tablet/desktop
- Deployment thành công & URL truy cập được

---

## 7. Yêu cầu & Ràng buộc

### 7.1 Tài nguyên

- 1 sinh viên (full-time, 6 tuần)
- 1 laptop với Node.js + Git
- Kết nối internet

### 7.2 Ràng buộc

- Phải hoàn thành trước 30/06/2026
- Code phải có comment rõ ràng
- Phải có hướng dẫn setup chi tiết

---

## 8. Rủi ro & Giải pháp

| Rủi ro | Giải pháp |
|--------|----------|
| Quá nhiều tính năng | Scope rõ ràng, prioritize |
| Bug phát hiện muộn | Testing thường xuyên |
| Quên backup code | Git commit hàng ngày |
| Supabase overquota | Monitor usage, optimize queries |

---

## 9. Tài liệu tham khảo

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React 19 Release Notes](https://react.dev)

---

## 10. Phê duyệt

| Vai trò | Tên | Ký | Ngày |
|--------|-----|----|----|
| Sinh viên | Liêu Sư Lâm Đông | ... | 10/04/2026 |
| Giáo sư | (Tên GVHD) | ... | ... |

---

**Ghi chú:** Đề xuất này có thể được điều chỉnh tuỳ theo phản hồi của người hướng dẫn.
