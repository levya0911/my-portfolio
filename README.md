# 🕹️ Pixel Arcade Portfolio — Nguyễn Tiến Phát

Đây là website portfolio cá nhân, phong cách **Pixel Arcade** (retro – neon – CRT),
tổng hợp 6 bài tập cá nhân của học phần **Công nghệ số và Ứng dụng AI**.

Website được xây dựng bằng **HTML + CSS + JavaScript thuần** (không cần cài Node.js,
không cần chạy lệnh build) — nghĩa là bạn có thể mở file lên xem ngay, và triển khai
(deploy) lên Internet chỉ bằng cách **kéo-thả thư mục**, cực kỳ đơn giản kể cả khi bạn
không rành về công nghệ thông tin.

---

## 📁 Cấu trúc thư mục

```
portfolio/
├── index.html            → Trang Giới thiệu (About Me) — có màn hình khởi động arcade
├── projects.html          → Trang Dự án (danh sách 6 bài tập)
├── conclusion.html         → Trang Tổng kết
├── projects/
│   ├── bai-1.html          → Chi tiết Bài 1
│   ├── bai-2.html          → Chi tiết Bài 2
│   ├── bai-3.html          → Chi tiết Bài 3
│   ├── bai-4.html          → Chi tiết Bài 4
│   ├── bai-5.html          → Chi tiết Bài 5
│   └── bai-6.html          → Chi tiết Bài 6
├── assets/
│   ├── css/style.css       → Toàn bộ giao diện (màu sắc, hiệu ứng neon, CRT...)
│   ├── js/main.js          → Hiệu ứng: màn hình khởi động, con trỏ pixel, particle nền,
│   │                          hiệu ứng cuộn trang, huy hiệu "Achievement Unlocked"
│   └── img/                → Logo trường, avatar pixel, ảnh minh hoạ 6 bài
└── README.md               → Chính là file bạn đang đọc
```

> 💡 **Khu vực "SẢN PHẨM" trong mỗi trang chi tiết bài tập đang để trống (placeholder)**
> theo đúng yêu cầu — bạn tự chèn file PDF, hình ảnh hoặc link video của mình vào sau.
> Xem mục "Cách chèn sản phẩm của bạn" bên dưới.

---

## ✅ Vì sao không cần cài Node.js / npm?

Website này viết bằng HTML/CSS/JS thuần, **chạy được ngay trên mọi trình duyệt**
mà không cần bước "biên dịch" (build) nào cả. Điều này giúp bạn:

- Không cần cài đặt phần mềm lập trình phức tạp.
- Có thể xem trước bằng cách nhấp đúp vào file `index.html`.
- Triển khai lên Internet chỉ bằng thao tác kéo-thả (chi tiết bên dưới).

Nếu sau này bạn muốn nâng cấp lên Next.js/React để có thêm tính năng, cấu trúc thư mục
rõ ràng (assets, projects tách biệt) ở trên sẽ giúp việc chuyển đổi dễ dàng hơn.

---

## 👀 Cách xem thử trên máy tính của bạn (trước khi đăng lên mạng)

**Cách nhanh nhất:** vào thư mục `portfolio`, nhấp đúp vào file `index.html`
→ trình duyệt (Chrome/Edge/Firefox) sẽ tự mở lên.

*(Một số hiệu ứng có thể đẹp hơn khi mở qua "địa chỉ web thật" thay vì mở file trực
tiếp — nếu muốn xem chuẩn 100% như lúc lên mạng, bạn có thể dùng ngay Cách 1 hoặc
Cách 3 bên dưới, chúng đều có bước "xem trước" miễn phí trước khi công khai.)*

---

## 🚀 Hướng dẫn triển khai (deploy) lên Internet

Bạn chỉ cần chọn **MỘT** trong ba cách dưới đây. **Cách 1 (Vercel)** hoặc
**Cách 3 (Netlify)** được khuyên dùng vì đơn giản nhất cho người mới.

### 🔹 Cách 1: Deploy bằng Vercel (khuyên dùng — dễ nhất)

**Bước 1 — Tạo tài khoản GitHub** (nơi lưu trữ code của bạn)
1. Vào trang: https://github.com/signup
2. Nhập email, tạo mật khẩu, đặt tên người dùng (username) → làm theo hướng dẫn để xác
   thực tài khoản.

**Bước 2 — Tạo một "kho chứa" (repository) mới trên GitHub**
1. Sau khi đăng nhập GitHub, bấm nút **"+"** ở góc trên bên phải → chọn **"New repository"**.
2. Đặt tên, ví dụ: `portfolio-arcade`.
3. Chọn **Public** (công khai).
4. Bấm **"Create repository"**.

**Bước 3 — Tải (upload) toàn bộ thư mục `portfolio` lên GitHub**
1. Trong trang repository vừa tạo, tìm dòng chữ **"uploading an existing file"**
   (hoặc vào tab **Add file → Upload files**).
2. Kéo-thả **toàn bộ nội dung bên trong thư mục `portfolio`** (không kéo cả thư mục
   `portfolio`, mà kéo các file/thư mục con: `index.html`, `projects.html`,
   `conclusion.html`, `assets/`, `projects/`, `README.md`) vào khung upload.
3. Cuộn xuống, bấm **"Commit changes"** để lưu lại.

**Bước 4 — Tạo tài khoản Vercel và kết nối GitHub**
1. Vào trang: https://vercel.com/signup
2. Chọn **"Continue with GitHub"** → cho phép Vercel truy cập tài khoản GitHub của bạn.

**Bước 5 — Import project và Deploy**
1. Sau khi đăng nhập Vercel, bấm **"Add New..." → "Project"**.
2. Chọn đúng repository `portfolio-arcade` bạn vừa tạo → bấm **"Import"**.
3. Ở phần cấu hình, **không cần chỉnh gì cả** (vì đây là site tĩnh HTML/CSS/JS thuần) →
   bấm thẳng **"Deploy"**.
4. Chờ khoảng 30 giây đến 1 phút, Vercel sẽ báo **"Congratulations!"**.

**Bước 6 — Lấy link website**
1. Sau khi deploy xong, Vercel hiển thị một đường link dạng:
   `https://portfolio-arcade-xxxx.vercel.app`
2. Bấm vào link đó (hoặc nút **"Visit"**) — đây chính là website của bạn, đã có thể
   chia sẻ cho bất kỳ ai!

> 🔁 Mỗi khi bạn sửa file trên GitHub (ví dụ thêm PDF sản phẩm), Vercel sẽ **tự động
> deploy lại** sau vài chục giây — bạn không cần làm gì thêm.

---

### 🔹 Cách 2: Deploy bằng GitHub Pages

**Bước 1–3:** Làm giống hệt **Bước 1, 2, 3 của Cách 1** ở trên (tạo tài khoản GitHub,
tạo repository, upload toàn bộ file của thư mục `portfolio`).

**Bước 4 — Bật GitHub Pages**
1. Vào repository vừa upload → bấm tab **"Settings"** (ở thanh menu trên cùng).
2. Ở cột bên trái, chọn mục **"Pages"**.
3. Ở phần **"Build and deployment" → "Source"**, chọn **"Deploy from a branch"**.
4. Ở phần **"Branch"**, chọn nhánh **`main`** (hoặc `master`) và thư mục **`/ (root)`**
   → bấm **"Save"**.

**Bước 5 — Lấy link website**
1. Chờ khoảng 1–2 phút, tải lại trang Settings → Pages.
2. Bạn sẽ thấy dòng chữ **"Your site is live at..."** kèm đường link dạng:
   `https://ten-tai-khoan.github.io/portfolio-arcade/`
3. Đó chính là website của bạn.

> ⚠️ Lưu ý: GitHub Pages cần vài phút để cập nhật sau mỗi lần bạn sửa file — nếu chưa
> thấy thay đổi, hãy đợi thêm rồi tải lại trang (nhấn Ctrl + F5 để xoá cache trình duyệt).

---

### 🔹 Cách 3: Deploy bằng Netlify (kéo-thả, không cần GitHub)

Đây là cách **đơn giản nhất nếu bạn không muốn dùng GitHub**.

**Bước 1 — Tạo tài khoản Netlify**
1. Vào trang: https://app.netlify.com/signup
2. Có thể chọn đăng ký bằng email, Google, hoặc GitHub — chọn cách nào tiện nhất cho bạn.

**Bước 2 — Kéo-thả thư mục để deploy**
1. Sau khi đăng nhập, ở trang chủ Netlify, tìm khung có dòng chữ
   **"Drag and drop your site output folder here"** (kéo-thả thư mục vào đây).
2. Mở thư mục `portfolio` trên máy tính, **kéo cả thư mục `portfolio`** thả vào khung đó.
3. Netlify sẽ tự động tải lên và deploy — chỉ mất khoảng 10–30 giây.

**Bước 3 — Lấy link website**
1. Sau khi deploy xong, Netlify hiển thị một đường link ngẫu nhiên dạng:
   `https://tenmau-abc123.netlify.app`
2. Bấm vào để xem website — vậy là xong!
3. (Tuỳ chọn) Bạn có thể đổi tên link cho dễ nhớ hơn: vào **"Site configuration" →
   "Change site name"**, đổi thành ví dụ `phat-portfolio-arcade` → link sẽ thành
   `https://phat-portfolio-arcade.netlify.app`.

> 🔁 Muốn cập nhật sau này? Chỉ cần quay lại trang site trên Netlify, vào mục
> **"Deploys"**, kéo-thả lại thư mục `portfolio` (đã chỉnh sửa) vào đúng khung đó.

---

## 🌐 Mua tên miền riêng (tuỳ chọn — nếu muốn địa chỉ web đẹp hơn)

Mặc định, các link từ Vercel/GitHub Pages/Netlify đều dùng tên miền miễn phí của họ
(ví dụ `.vercel.app`, `.netlify.app`). Nếu bạn muốn có địa chỉ riêng như
`tienphat.com` hoặc `tienphat.id.vn`, bạn cần **mua tên miền** (domain).

**Bước 1 — Chọn nơi mua tên miền**, ví dụ:
- https://www.namecheap.com (giá rẻ, phổ biến quốc tế)
- https://matbao.net hoặc https://www.tenten.vn (nếu muốn thanh toán bằng VND, hỗ trợ tiếng Việt)

**Bước 2 — Tìm và mua tên miền**
1. Vào trang nhà cung cấp, gõ tên bạn muốn (ví dụ `tienphat-portfolio`) vào ô tìm kiếm.
2. Chọn đuôi tên miền còn trống (`.com`, `.id.vn`, `.online`...) → thêm vào giỏ hàng
   → thanh toán.

**Bước 3 — Gắn tên miền vào website đã deploy**
- Với **Vercel**: vào project → tab **"Settings" → "Domains"** → nhập tên miền bạn vừa
  mua → Vercel sẽ hiển thị các bản ghi DNS (CNAME/A record) cần khai báo bên nhà cung
  cấp tên miền → làm theo hướng dẫn hiển thị.
- Với **Netlify**: vào **"Site configuration" → "Domain management" → "Add a domain"**
  → làm tương tự.
- Với **GitHub Pages**: vào **Settings → Pages → Custom domain** → nhập tên miền →
  làm theo hướng dẫn cấu hình DNS của GitHub.

> 💡 Việc trỏ tên miền thường mất từ vài phút đến 24 giờ để có hiệu lực hoàn toàn — đây
> là điều bình thường, không phải lỗi.

---

## 🖼️ Cách chèn sản phẩm của bạn (PDF / Hình ảnh / Video)

Mỗi trang chi tiết bài tập (`projects/bai-1.html` đến `bai-6.html`) đều có khu vực:

```
═══ SẢN PHẨM ═══
[ PDF ]      [ IMG ]      [ ▶ ]
```

Đây là **placeholder** — khung trống để bạn tự chèn nội dung. Cách chèn:

1. **Với PDF:** đặt file PDF vào thư mục `assets/` (ví dụ tạo thêm thư mục
   `assets/files/`), sau đó trong file `bai-X.html`, tìm đến đoạn:
   ```html
   <div class="asset-slot">
     <div class="ico">[ PDF ]</div>
     ...
   </div>
   ```
   và thay bằng:
   ```html
   <a class="asset-slot" href="../assets/files/bai-1-baocao.pdf" target="_blank">
     <div class="ico">[ PDF ]</div>
     <div class="lbl">XEM BÁO CÁO PDF</div>
   </a>
   ```

2. **Với hình ảnh:** đặt ảnh vào `assets/img/`, rồi thay khối `[ IMG ]` bằng:
   ```html
   <img src="../assets/img/bai-1-anh1.jpg" alt="Ảnh minh hoạ bài 1" style="border-radius:8px;">
   ```

3. **Với video:** nếu video để trên YouTube/Drive, thay khối `[ ▶ ]` bằng:
   ```html
   <a class="asset-slot" href="https://youtu.be/xxxxxxx" target="_blank">
     <div class="ico">[ ▶ ]</div>
     <div class="lbl">XEM VIDEO</div>
   </a>
   ```

Nếu bạn không rành chỉnh sửa code HTML, có thể nhờ ai đó hỗ trợ, hoặc hỏi lại để được
hướng dẫn chi tiết hơn cho từng trường hợp cụ thể.

---

## 🛠️ Tuỳ chỉnh nhanh khác

- **Đổi tên/MSSV/thông tin cá nhân:** mở `index.html`, tìm phần `<div class="info-list">`.
- **Đổi màu chủ đạo:** mở `assets/css/style.css`, sửa các biến màu ở đầu file, trong
  khối `:root { ... }` (ví dụ `--neon-purple`, `--neon-cyan`).
- **Tắt màn hình khởi động (boot screen):** trong `assets/js/main.js`, hàm `initBoot()`
  — hoặc đơn giản là xoá thẻ `<div id="boot-screen">...</div>` trong mỗi file HTML.

---

## ❓ Câu hỏi thường gặp

**Q: Em không biết code, có tự làm được không?**
A: Có. Toàn bộ hướng dẫn deploy ở trên chỉ cần thao tác chuột (kéo-thả, bấm nút), không
cần viết bất kỳ dòng lệnh nào.

**Q: Sau khi deploy, em muốn sửa nội dung thì làm sao?**
A: Sửa trực tiếp file `.html` bằng phần mềm soạn thảo văn bản đơn giản (Notepad, VS Code),
lưu lại, rồi upload lại file đó lên GitHub/Netlify theo đúng cách bạn đã chọn ở trên.

**Q: Website có xem được trên điện thoại không?**
A: Có, giao diện đã được tối ưu để hiển thị tốt trên điện thoại, máy tính bảng và máy
tính để bàn.

---

Chúc bạn triển khai thành công! 🕹️✨
