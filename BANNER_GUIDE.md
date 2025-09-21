# Hướng dẫn lấy ảnh banner từ TopCV

## Cách lấy ảnh banner thực từ trang TopCV:

### 1. Truy cập trang dashboard TopCV:
https://tuyendung.topcv.vn/app/dashboard

### 2. Mở Developer Tools (F12):
- Right-click vào banner → Inspect Element
- Tìm thẻ <img> hoặc background-image trong CSS

### 3. Copy URL ảnh:
- Market Insights banner: Tìm URL ảnh của banner "Market Insights"
- CV Scoring banner: Tìm URL ảnh của banner "CV Scoring"  
- HappyTime banner: Tìm URL ảnh của banner "HappyTime"

### 4. Download ảnh:
- Paste URL vào browser và save as PNG
- Hoặc right-click → Save image as

### 5. Thay thế placeholder:
- Thay thế các file trong /public/images/banners/
- market-insights.png
- cv-scoring.png  
- happytime.png

### 6. Nếu muốn dùng trực tiếp URL từ TopCV:
Thay đổi src trong Image component thành URL trực tiếp:
```tsx
src="https://static.topcv.vn/banners/market-insights.jpg"
```

**Lưu ý:** Sử dụng ảnh từ TopCV cần tuân thủ bản quyền và điều khoản sử dụng.