# Xử lý lỗi thường gặp (Troubleshooting)

---

## Lỗi khi cài đặt

### 1. Lỗi "npm: command not found"

**Nguyên nhân:** Node.js chưa được cài đặt hoặc không trong PATH

**Cách fix:**
```bash
# Kiểm tra Node.js
node --version

# Nếu không tìm thấy, download tại https://nodejs.org
# Sau khi cài, restart terminal
```

---

### 2. Lỗi "npm install" bị stuck

**Nguyên nhân:** Kết nối internet chậm hoặc npm cache bị lỗi

**Cách fix:**
```bash
# Clear npm cache
npm cache clean --force

# Cài lại
npm install
```

---

### 3. Lỗi permission denied

**Nguyên nhân:** Không có quyền write vào folder

**Cách fix (Windows):**
```bash
# Chạy PowerShell as Administrator
# Rồi chạy lại npm install
```

---

## Lỗi khi chạy ứng dụng

### 4. Lỗi "ENOENT: no such file or directory '.env.local'"

**Nguyên nhân:** File `.env.local` không tồn tại

**Cách fix:**
```bash
# Tạo file từ template
cp .env.local.example .env.local

# Mở .env.local và điền Supabase keys
```

---

### 5. Lỗi "Supabase connection failed"

**Nguyên nhân:** 
- Supabase URL hoặc key sai
- Không có internet
- Supabase project down

**Cách fix:**
```bash
# 1. Kiểm tra .env.local
cat .env.local

# 2. Verify Supabase keys tại https://app.supabase.com

# 3. Test kết nối:
npm run dev
# Nếu vẫn lỗi, check browser console (F12)
```

---

### 6. Lỗi "Port 3000 already in use"

**Nguyên nhân:** Có process khác dùng port 3000

**Cách fix (Windows):**
```bash
# Tìm process dùng port 3000
netstat -ano | findstr :3000

# Kill process (ganti PID)
taskkill /PID <PID> /F

# Hoặc dùng port khác
npm run dev -- -p 3001
```

---

### 7. Lỗi TypeScript compilation

**Nguyên nhân:** File .ts/.tsx có lỗi syntax

**Cách fix:**
```bash
# Check lỗi
npm run build

# Fix theo lỗi báo cáo
# Reload editor VS Code
```

---

## Lỗi khi sử dụng features

### 8. Admin login không được

**Nguyên nhân:** Password sai hoặc .env.local không đúng

**Cách fix:**
```bash
# 1. Kiểm tra password trong .env.local
cat .env.local | grep ADMIN_PASSWORD

# 2. Dùng password đúng
# 3. Nếu quên, cập nhật .env.local rồi restart dev server
```

---

### 9. Ảnh không hiển thị

**Nguyên nhân:** 
- Supabase Storage chưa setup
- CORS settings sai
- Image URL sai

**Cách fix:**
```bash
# 1. Check Supabase Storage setup
# Dashboard → Storage → Buckets → artifacts

# 2. Verify CORS:
# Settings → CORS configuration

# 3. Test image URL trong browser
# Network tab (F12) → check image requests
```

---

### 10. Form submit không lưu message

**Nguyên nhân:**
- Database không có table `messages`
- Supabase RLS policy sai

**Cách fix:**
```bash
# 1. Chạy schema lại
# supabase/001_schema.sql

# 2. Check table `messages` tồn tại
# Supabase → Table Editor

# 3. Check policies: Table → RLS
```

---

## Lỗi khi deploy

### 11. Deploy Vercel bị fail

**Nguyên nhân:** Environment variables chưa setup

**Cách fix:**
```bash
# Vercel Dashboard → Project → Settings → Environment Variables
# Thêm các biến:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
# NEXT_PUBLIC_ADMIN_PASSWORD

# Redeploy
```

---

## Debug tips

### Xem server logs
```bash
npm run dev
# Logs hiển thị ở terminal
```

### Xem browser console
```
F12 → Console tab
```

### Xem network requests
```
F12 → Network tab
# Filter: XHR để xem API calls
```

### Xem Supabase logs
```
Supabase Dashboard → Logs
```

---

## Liên hệ hỗ trợ

Nếu vấn đề vẫn không giải quyết:

1. Đọc [INSTALL.md](./INSTALL.md) lại
2. Check [REQUIREMENTS.md](./REQUIREMENTS.md)
3. Xem [../../DEPLOY.md](../../DEPLOY.md)
4. Hỏi thầy cô hoặc bạn cùng lớp

---

## Kiểm tra danh sách

- [ ] Node.js 18+ đã cài
- [ ] npm cache đã clear
- [ ] .env.local có keys đúng
- [ ] Supabase database schema chạy xong
- [ ] npm run dev chạy thành công
- [ ] http://localhost:3000 tải được
