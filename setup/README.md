# Hướng dẫn Cài đặt (Setup)

Thư mục này chứa tất cả các tập tin và hướng dẫn cần thiết để **cài đặt, khởi chạy và kiểm tra** Bảo Tàng Di Sản Dừa Sáp.

---

## Cấu trúc thư mục

```
setup/
├── INSTALL.md              # Hướng dẫn cài đặt chi tiết
├── REQUIREMENTS.md         # Yêu cầu hệ thống & dependencies
├── DOCKER.md              # (Tùy chọn) Hướng dẫn Docker setup
├── TEST-DATA.md           # Hướng dẫn dùng test data
└── TROUBLESHOOTING.md     # Xử lý lỗi thường gặp
```

---

## Hướng dẫn nhanh (Quick Start)

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

Xem các file trong thư mục này:

1. **[INSTALL.md](./INSTALL.md)** - Cài đặt từng bước
2. **[REQUIREMENTS.md](./REQUIREMENTS.md)** - Hệ thống yêu cầu
3. **[DOCKER.md](./DOCKER.md)** - Chạy với Docker (nếu cần)
4. **[TEST-DATA.md](./TEST-DATA.md)** - Sử dụng test data
5. **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Fix lỗi

---

## Triển khai Production

Xem file **[../DEPLOY.md](../DEPLOY.md)** để deploy lên Vercel.

---

## Hỗ trợ

Nếu gặp vấn đề, hãy kiểm tra:
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- [REQUIREMENTS.md](./REQUIREMENTS.md)
- [../README.md](../README.md)
