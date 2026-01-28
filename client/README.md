# 👟 ShoesStore

Modern bir ayakkabı e-ticaret uygulaması.  
React, TypeScript ve React Query kullanılarak geliştirilmiştir.

> Admin ve User rolleri, authentication, ürün yönetimi ve modern frontend mimarisi içerir.

---

## 🎥 Demo

![ShoesStore Demo](screenshots/demo.gif)

> Login → Admin panel → Ürün ekleme & düzenleme → Liste güncelleme akışı

---

## 🚀 Özellikler

- 🔐 JWT + Cookie tabanlı authentication
- 🔄 Otomatik access token refresh (Axios Interceptor)
- 🧠 React Query ile cache & state yönetimi
- ✏️ Ürün ekleme / düzenleme / silme (CRUD)
- 🔒 Rol bazlı yetkilendirme (Admin / User)
- 🔔 Hata ve bildirimler için Toast mesajları
- ⚡ Vite ile hızlı geliştirme ortamı
- 📱 Responsive tasarım

---

## 🛠 Kullanılan Teknolojiler

- **React**
- **TypeScript**
- **Vite**
- **React Router v6**
- **@tanstack/react-query**
- **Axios**
- **React Toastify**
- **Tailwind CSS**

---

## 👥 Roller & Yetkilendirme

### 👤 User
![User Flow](screenshots/user-flow.gif)

- Ürünleri görüntüleyebilir
- Ürün detay sayfasına erişebilir
- Giriş gerektiren sayfalara erişebilir
- Admin işlemlerine erişemez

---

### 🛠 Admin
![Admin Flow](screenshots/admin-flow.gif)

- Ürün ekleyebilir
- Ürün düzenleyebilir
- Ürün silebilir
- Admin paneline erişebilir
- Tüm user yetkilerine sahiptir

> Rol kontrolü frontend’de **Protected Route**, backend’de yetkilendirme ile sağlanmaktadır.

---



## 🔐 Authentication Akışı

1. Kullanıcı login olur
2. Backend cookie üzerinden token set eder
3. Access token süresi dolarsa:
   - otomatik refresh token isteği atılır
4. Refresh başarısız olursa logout edilir
5. Login / register / refresh endpoint’leri interceptor dışında tutulur

---



### 1️⃣ Repo’yu klonla
```bash
git clone https://github.com/kullanici-adi/shoesStore.git
cd shoesStore
Proje eğitim ve portföy amaçlı geliştirilmiştir

Hasan Erol
Frontend Developer 🚀
React • TypeScript • Modern Web
