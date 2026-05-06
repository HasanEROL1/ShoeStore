# 👟 Kicks - Full Stack Shoe Store
Bu proje, React (Frontend) ve Node.js/Express (Backend) kullanılarak geliştirilmiş, MongoDB Atlas veritabanı ile tam entegre çalışan bir ayakkabı mağazası uygulamasıdır.



![🚀gif](shoestore.gif)
🚀 Özellikler
- Kullanıcı Sistemi: JWT (JSON Web Token) tabanlı Register ve Login işlemleri.

- Dinamik Ürün Listesi: MongoDB'den çekilen, indirimli ve yeni ürün etiketlerine sahip ayakkabı modelleri.

- Veritabanı Yönetimi: MongoDB Atlas entegrasyonu ve Mongoose ODM kullanımı.

- Seed Sistemi: Tek bir komutla tüm ürün verilerini veritabanına otomatik yükleme.

- Responsive Tasarım: Modern ve şık kullanıcı arayüzü.

## 🛠 Kullanılan Teknolojiler ve Kütüphaneler
# Frontend (İstemci)
* React 19 & TypeScript: Tip güvenliği ve modern bileşen yapısı.

* *  TanStack Query (React Query) v5: Sunucu durum yönetimi, veri çekme (fetching) ve otomatik cache yönetimi.

* Vite: Hızlı geliştirme ortamı ve build aracı.

* Tailwind CSS v4: Modern ve hızlı UI tasarımı.

* React Router Dom v7: Sayfalar arası yönlendirme ve dinamik route yönetimi.

* Formik & Yup: Form yönetimi ve şema tabanlı doğrulama (validation).

* Axios: HTTP istekleri için optimize edilmiş kütüphane.

* React Toastify: Kullanıcı bildirimleri ve hata mesajları için şık pop-up'lar.

* React Icons: Geniş ikon kütüphanesi desteği.

* DOMPurify: HTML içeriklerini sanitize ederek XSS saldırılarına karşı güvenlik.

# Backend (Sunucu)
* Node.js & Express: Hızlı ve ölçeklenebilir sunucu altyapısı.

* MongoDB Atlas: Bulut tabanlı NoSQL veritabanı.

* Mongoose: MongoDB için nesne veri modelleme (ODM).

* JSON Web Token (JWT): Güvenli kullanıcı kimlik doğrulama.

* Dotenv: Çevresel değişken yönetimi (.env).

````bash
📦 Kurulum
Projeyi yerelinizde çalıştırmak için şu adımları izleyin:

1. Depoyu Klonlayın
Bash
git clone https://github.com/HasanEROL1/ShoeStore.git
cd ShoeStore
2. Backend Kurulumu
Bash
cd api
npm install
.env dosyasını oluşturun ve MONGO_URI değişkenini ekleyin.

3. Veritabanını Başlatma (Seed)
Ürünleri veritabanına yüklemek için:

Bash
npm run seed
4. Uygulamayı Çalıştırma
Backend (api klasöründe):

Bash
npm run dev
Frontend (ana klasörde):

Bash
npm run dev
````
