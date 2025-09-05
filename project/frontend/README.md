# 🌐 Da Vinci Board Game - Frontend

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</div>

<div align="center">
  <h3>🇬🇧 English | 🇹🇷 Türkçe</h3>
</div>

---

## 🇬🇧 English Version

### 🚀 Overview

A modern **React 19 + TypeScript frontend** application for managing users and posts with full CRUD operations and **bilingual support (English/Turkish)**. Built with Vite for lightning-fast development experience.

### ✨ Features

- 🌍 **Bilingual Support**: Complete Turkish and English language support
- 👥 **User Management**: Create, read, update, and delete users
- 📝 **Post Management**: Create, read, update, and delete posts  
- 🔗 **User-Post Relationships**: View posts by specific users
- 🎨 **Modern UI/UX**: Clean, responsive design with React Icons
- 🔄 **Real-time Updates**: Instant feedback for all operations
- ✅ **Form Validation**: Client-side validation with error handling
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🌍 **Language Switcher**: Toggle between languages seamlessly

### 🛠 Tech Stack

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) **React** | Frontend Framework | 19.x |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) **TypeScript** | Type Safety | 5.x |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite** | Build Tool & Dev Server | Latest |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) **React Router** | Client-side Routing | 6.x |
| ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat-square&logo=react&logoColor=black) **React Icons** | Beautiful Icons | Latest |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3** | Modern Styling | - |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) **ESLint** | Code Quality | Latest |

</div>

### 📁 Project Structure

```
src/
├── 🧩 components/          # React components
│   ├── 🏠 Homepage.tsx     # Bilingual landing page
│   ├── 🧭 Navbar.tsx       # Navigation with language switcher
│   ├── 👥 UserList.tsx     # User management page
│   ├── 📝 UserForm.tsx     # User create/edit form
│   ├── 📋 PostList.tsx     # Post management page
│   ├── ✏️ PostForm.tsx     # Post create/edit form
│   ├── 🪟 Modal.tsx        # Modal wrapper component
│   ├── 🌍 LanguageSwitcher.tsx # Language toggle component
│   └── 🛡️ ErrorBoundary.tsx # Error handling boundary
├── 🔧 services/            # API services
│   └── 📡 api.ts           # API communication layer
├── 📝 types/               # TypeScript type definitions
│   └── 🏗️ index.ts         # User and Post interfaces
├── 🌍 i18n/                # Internationalization
│   ├── 🇬🇧 en.ts           # English translations
│   ├── 🇹🇷 tr.ts           # Turkish translations
│   └── ⚙️ index.ts         # i18n configuration
├── 🎨 App.tsx              # Main app component
├── 🎨 App.css              # Global styles
└── 🚀 main.tsx             # App entry point
```

### 🏗 Setup and Installation

#### Prerequisites

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white) Node.js (v18+ recommended)
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm&logoColor=white) npm or yarn

#### Installation Steps

1. **Navigate to frontend directory**
   ```bash
   cd project/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   🌐 http://localhost:5173
   ```

### 🔧 Available Scripts

| Script | Purpose | Description |
|--------|---------|-------------|
| `npm run dev` | 🚀 Development | Start development server with hot reload |
| `npm run build` | 🏗️ Build | Build for production |
| `npm run preview` | 👀 Preview | Preview production build |
| `npm run lint` | 🔍 Lint | Run ESLint for code quality |

### 🌐 API Integration

The frontend communicates with the NestJS backend API running on `http://localhost:3001`.

#### API Endpoints Used

| Method | Endpoint | Purpose |
|--------|----------|---------|
| 📋 GET | `/users` | Fetch all users |
| ➕ POST | `/users` | Create new user |
| ✏️ PUT | `/users/:id` | Update user |
| 🗑️ DELETE | `/users/:id` | Delete user |
| 📋 GET | `/posts` | Fetch all posts |
| 🔍 GET | `/posts?userId=:id` | Fetch posts by user |
| ➕ POST | `/posts` | Create new post |
| ✏️ PUT | `/posts/:id` | Update post |
| 🗑️ DELETE | `/posts/:id` | Delete post |

### 🎨 UI/UX Features

- 📱 **Responsive Design**: Mobile-first approach, works on all devices
- ⏳ **Loading States**: Visual feedback during API calls
- 🚨 **Error Handling**: User-friendly error messages in both languages
- ✅ **Form Validation**: Real-time input validation with error highlighting
- ✨ **Hover Effects**: Interactive elements with smooth transitions
- 🌈 **Color Scheme**: Modern gradient-based design
- ♿ **Accessibility**: Keyboard navigation and screen reader support
- 🌍 **Bilingual UI**: Complete interface in Turkish and English

### 🌍 Internationalization

#### Language Support
- 🇬🇧 **English**: Complete English interface
- 🇹🇷 **Turkish**: Complete Turkish interface
- 🔄 **Dynamic Switching**: Change language without page reload
- 💾 **Persistence**: Language preference saved in localStorage

#### Translation Files
```typescript
// English (en.ts)
export const en = {
  nav: {
    home: "Home",
    users: "Users",
    posts: "Posts"
  },
  // ... more translations
};

// Turkish (tr.ts)
export const tr = {
  nav: {
    home: "Ana Sayfa",
    users: "Kullanıcılar", 
    posts: "Gönderiler"
  },
  // ... more translations
};
```

### 🔄 State Management

The application uses React's built-in state management:
- `useState` for component state
- `useEffect` for side effects
- `useContext` for language state
- Props for data passing between components

### 📱 Responsive Breakpoints

| Device | Breakpoint | Optimizations |
|--------|------------|---------------|
| 🖥️ **Desktop** | > 768px | Full layout with sidebars |
| 📱 **Tablet** | ≤ 768px | Stacked layout |
| 📱 **Mobile** | ≤ 480px | Compact design, touch-friendly |

---

## 🇹🇷 Türkçe Versiyon

### 🚀 Genel Bakış

Kullanıcılar ve gönderiler için tam CRUD işlemleri ve **iki dilli destek (İngilizce/Türkçe)** ile modern bir **React 19 + TypeScript frontend** uygulaması. Yıldırım hızında geliştirme deneyimi için Vite ile oluşturulmuştur.

### ✨ Özellikler

- 🌍 **İki Dilli Destek**: Tam Türkçe ve İngilizce dil desteği
- 👥 **Kullanıcı Yönetimi**: Kullanıcıları oluştur, oku, güncelle ve sil
- 📝 **Gönderi Yönetimi**: Gönderileri oluştur, oku, güncelle ve sil
- 🔗 **Kullanıcı-Gönderi İlişkileri**: Belirli kullanıcıların gönderilerini görüntüle
- 🎨 **Modern UI/UX**: React Icons ile temiz, duyarlı tasarım
- 🔄 **Gerçek Zamanlı Güncellemeler**: Tüm işlemler için anlık geri bildirim
- ✅ **Form Doğrulama**: Hata işleme ile istemci tarafı doğrulama
- 📱 **Duyarlı Tasarım**: Masaüstü, tablet ve mobilde mükemmel çalışır
- 🌍 **Dil Değiştirici**: Diller arasında sorunsuz geçiş

### 🛠 Teknoloji Yığını

<div align="center">

| Teknoloji | Amaç | Versiyon |
|-----------|------|----------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) **React** | Frontend Framework | 19.x |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) **TypeScript** | Tip Güvenliği | 5.x |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite** | Yapı Aracı ve Geliştirme Sunucusu | Güncel |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) **React Router** | İstemci Tarafı Yönlendirme | 6.x |
| ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat-square&logo=react&logoColor=black) **React Icons** | Güzel İkonlar | Güncel |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3** | Modern Stil | - |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) **ESLint** | Kod Kalitesi | Güncel |

</div>

### 📁 Proje Yapısı

```
src/
├── 🧩 components/          # React bileşenleri
│   ├── 🏠 Homepage.tsx     # İki dilli açılış sayfası
│   ├── 🧭 Navbar.tsx       # Dil değiştirici ile navigasyon
│   ├── 👥 UserList.tsx     # Kullanıcı yönetim sayfası
│   ├── 📝 UserForm.tsx     # Kullanıcı oluştur/düzenle formu
│   ├── 📋 PostList.tsx     # Gönderi yönetim sayfası
│   ├── ✏️ PostForm.tsx     # Gönderi oluştur/düzenle formu
│   ├── 🪟 Modal.tsx        # Modal sarmalayıcı bileşen
│   ├── 🌍 LanguageSwitcher.tsx # Dil değiştirme bileşeni
│   └── 🛡️ ErrorBoundary.tsx # Hata işleme sınırı
├── 🔧 services/            # API servisleri
│   └── 📡 api.ts           # API iletişim katmanı
├── 📝 types/               # TypeScript tip tanımları
│   └── 🏗️ index.ts         # Kullanıcı ve Gönderi arayüzleri
├── 🌍 i18n/                # Uluslararasılaştırma
│   ├── 🇬🇧 en.ts           # İngilizce çeviriler
│   ├── 🇹🇷 tr.ts           # Türkçe çeviriler
│   └── ⚙️ index.ts         # i18n yapılandırması
├── 🎨 App.tsx              # Ana uygulama bileşeni
├── 🎨 App.css              # Global stiller
└── 🚀 main.tsx             # Uygulama giriş noktası
```

### 🏗 Kurulum ve Yükleme

#### Ön Koşullar

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white) Node.js (v18+ önerilir)
- ![npm](https://img.shields.io/badge/npm-güncel-CB3837?style=flat-square&logo=npm&logoColor=white) npm veya yarn

#### Kurulum Adımları

1. **Frontend dizinine gidin**
   ```bash
   cd project/frontend
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Tarayıcınızı açın**
   ```
   🌐 http://localhost:5173
   ```

### 🔧 Kullanılabilir Betikler

| Betik | Amaç | Açıklama |
|-------|------|----------|
| `npm run dev` | 🚀 Geliştirme | Hot reload ile geliştirme sunucusunu başlat |
| `npm run build` | 🏗️ Yapı | Üretim için yapı oluştur |
| `npm run preview` | 👀 Önizleme | Üretim yapısını önizle |
| `npm run lint` | 🔍 Lint | Kod kalitesi için ESLint çalıştır |

### 🌍 Uluslararasılaştırma

#### Dil Desteği
- 🇬🇧 **İngilizce**: Tam İngilizce arayüz
- 🇹🇷 **Türkçe**: Tam Türkçe arayüz
- 🔄 **Dinamik Değişim**: Sayfa yenilenmeden dil değişimi
- 💾 **Kalıcılık**: Dil tercihi localStorage'da saklanır

#### Çeviri Dosyaları
```typescript
// İngilizce (en.ts)
export const en = {
  nav: {
    home: "Home",
    users: "Users",
    posts: "Posts"
  },
  // ... daha fazla çeviri
};

// Türkçe (tr.ts)
export const tr = {
  nav: {
    home: "Ana Sayfa",
    users: "Kullanıcılar", 
    posts: "Gönderiler"
  },
  // ... daha fazla çeviri
};
```

### 🎨 UI/UX Özellikleri

- 📱 **Duyarlı Tasarım**: Mobil öncelikli yaklaşım, tüm cihazlarda çalışır
- ⏳ **Yükleme Durumları**: API çağrıları sırasında görsel geri bildirim
- 🚨 **Hata İşleme**: Her iki dilde kullanıcı dostu hata mesajları
- ✅ **Form Doğrulama**: Hata vurgulaması ile gerçek zamanlı giriş doğrulama
- ✨ **Hover Efektleri**: Akıcı geçişlerle etkileşimli öğeler
- 🌈 **Renk Şeması**: Modern gradyan tabanlı tasarım
- ♿ **Erişilebilirlik**: Klavye navigasyonu ve ekran okuyucu desteği
- 🌍 **İki Dilli UI**: Türkçe ve İngilizce tam arayüz

### 🚦 Geliştirme

#### Kod Stili
- TypeScript strict mode etkin
- Kod kalitesi için ESLint yapılandırması
- Tutarlı bileşen yapısı
- Uygun hata sınırları ve yükleme durumları

#### Bileşen Rehberi
- Hook'lar ile fonksiyonel bileşenler
- Props için TypeScript arayüzleri
- Uygun hata işleme
- Erişilebilir işaretleme

### 🐛 Sorun Giderme

#### Yaygın Sorunlar

1. **Port zaten kullanımda**
   ```bash
   # 5173 portunu kullanan işlemi sonlandır
   npx kill-port 5173
   ```

2. **API bağlantı sorunları**
   - Backend'in 3001 portunda çalıştığından emin olun
   - Backend'de CORS yapılandırmasını kontrol edin

3. **Yapı sorunları**
   ```bash
   # node_modules'ü temizle ve yeniden yükle
   rm -rf node_modules package-lock.json
   npm install
   ```

### 🔮 Gelecek Geliştirmeler

- [ ] Kullanıcı kimlik doğrulama
- [ ] Gerçek zamanlı bildirimler
- [ ] Koyu/açık tema değiştirici
- [ ] Gelişmiş arama ve filtreleme
- [ ] Büyük veri setleri için sayfalama
- [ ] Dosya yükleme yetenekleri
- [ ] Service worker'lar ile çevrimdışı destek

---

<div align="center">

### 🌟 Özellikler

✅ **Modern React 19** ile güçlü frontend  
✅ **TypeScript** ile tam tip güvenliği  
✅ **Vite** ile hızlı geliştirme  
✅ **İki dilli destek** (TR/EN)  
✅ **Duyarlı tasarım** tüm cihazlar için  
✅ **Gerçek zamanlı** CRUD işlemleri  

**Made with ❤️ by Da Vinci Team**

</div>