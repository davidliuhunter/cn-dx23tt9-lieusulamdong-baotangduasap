# Yêu cầu Hệ thống

---

## Phần cứng (Hardware)

| Yêu cầu | Chi tiết |
|---------|---------|
| RAM tối thiểu | 4 GB |
| Không gian đĩa | 500 MB (cho project + node_modules) |
| CPU | Bất kỳ CPU hiện đại |
| Internet | Kết nối để tải dependencies |

---

## Phần mềm (Software)

### Bắt buộc

| Thành phần | Phiên bản | Tải xuống |
|-----------|----------|----------|
| Node.js | 18.0.0+ | [nodejs.org](https://nodejs.org) |
| npm | 9.0.0+ | (đi kèm Node.js) |
| Git | 2.30.0+ | [git-scm.com](https://git-scm.com) |

### Tùy chọn

| Thành phần | Mục đích |
|-----------|---------|
| Docker | Chạy trong container |
| VS Code | Editor (khuyến nghị) |
| Postman | Test API |

---

## Hệ điều hành

Hoạt động trên:
- Windows 10/11
- macOS 10.15+
- Ubuntu 18.04+

---

## Kiểm tra cài đặt

```bash
# Kiểm tra Node.js
node --version
# Output: v18.x.x hoặc cao hơn

# Kiểm tra npm
npm --version
# Output: 9.x.x hoặc cao hơn

# Kiểm tra Git
git --version
# Output: git version 2.x.x
```

---

## Internet & Tài khoản

### Tài khoản cần thiết

1. **GitHub** (miễn phí)
   - Để clone repository
   - https://github.com

2. **Supabase** (miễn phí)
   - Database PostgreSQL
   - https://supabase.com

3. **Vercel** (miễn phí, optional)
   - Deploy production
   - https://vercel.com

### Tốc độ Internet

- Tải dependencies: yêu cầu ~200 MB
- Khuyến nghị: 10+ Mbps
- Thời gian: ~5 phút

---

## Khi đã sẵn sàng

Xem [INSTALL.md](./INSTALL.md) để bắt đầu cài đặt.
