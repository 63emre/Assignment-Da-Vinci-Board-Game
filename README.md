# 🎯 Da Vinci Board Game - Full Stack Application

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

<div align="center">
  <h3>🇬🇧 English | 🇹🇷 Türkçe</h3>
</div>

---

## 🇬🇧 English Version

### 🚀 Project Overview

A complete full-stack web application with **React 19 + TypeScript frontend** and **NestJS + TypeScript backend**, featuring comprehensive CRUD operations for users and posts with **bilingual support (English/Turkish)**.

### ✨ Key Features

- 🌍 **Bilingual Support**: Complete Turkish and English language support
- 🏠 **Modern Frontend**: React 19 + Vite + TypeScript + React Icons
- 🚀 **Robust Backend**: NestJS + TypeScript + Swagger UI + In-memory storage
- 📚 **Interactive API Docs**: Comprehensive Swagger UI documentation
- 🎨 **Beautiful UI/UX**: Modern design with smooth animations
- 🔄 **Real-time Operations**: Instant CRUD operations with user feedback
- 📱 **Responsive Design**: Works perfectly on all devices

### 🛠 Tech Stack

<div align="center">

| Frontend | Backend | Tools |
|----------|---------|-------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) React 19 | ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) NestJS | ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black) Swagger UI |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) TypeScript | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) TypeScript | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ESLint |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) Vite | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) Express | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) Git |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) React Router | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) Node.js | ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) npm |

</div>

### 🚀 Quick Start

#### Prerequisites
- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm&logoColor=white)

#### 🪟 Windows Quick Start
**Just double-click one of these files:**
- `start_local.bat` - Windows Batch file
- `start_local.ps1` - PowerShell script

#### 🔧 Manual Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd Assignment-Da-Vinci-Board-Game

# 2. Install backend dependencies
cd project/backend
npm install --legacy-peer-deps

# 3. Install frontend dependencies  
cd ../frontend
npm install

# 4. Start backend (Terminal 1)
cd ../backend
npm run start:dev
# Backend: http://localhost:3001
# Swagger: http://localhost:3001/api/docs

# 5. Start frontend (Terminal 2)
cd ../frontend
npm run dev
# Frontend: http://localhost:5173
```

### 📁 Project Structure

```
Assignment-Da-Vinci-Board-Game/
├── 📁 project/
│   ├── 🌐 frontend/           # React + Vite frontend
│   │   ├── 📁 src/
│   │   │   ├── 🧩 components/ # React components
│   │   │   ├── 🔧 services/   # API services
│   │   │   ├── 📝 types/      # TypeScript types
│   │   │   ├── 🌍 i18n/       # Internationalization
│   │   │   └── ...
│   │   └── 📄 README.md
│   │
│   └── 🚀 backend/            # NestJS backend
│       ├── 📁 src/
│       │   ├── 🎮 controllers/ # API controllers
│       │   ├── 🔧 services/    # Business logic
│       │   ├── 📝 dto/         # Data transfer objects
│       │   ├── 🏗️ entities/    # Type definitions
│       │   └── ...
│       └── 📄 README.md
│
├── 📄 README.md
└── 🚀 start_local.*
```

### 🌟 Features

#### 🌐 Frontend Features
- 🏠 **Homepage**: Bilingual welcome page with feature overview
- 👥 **User Management**: Full CRUD operations for users
- 📝 **Post Management**: Full CRUD operations for posts
- 🔗 **Relationships**: View posts by specific users
- 🌍 **Language Switcher**: Toggle between English and Turkish
- 🎨 **Modern UI**: Clean, responsive design with React Icons
- ✅ **Validation**: Client-side form validation
- 🔄 **Real-time**: Instant feedback for all operations

#### 🚀 Backend Features
- 📚 **RESTful API**: Complete REST API with proper HTTP methods
- 📊 **Swagger UI**: Interactive API documentation (English/Turkish)
- ✅ **Validation**: Request validation with decorators
- 🔒 **CORS**: Cross-origin requests enabled
- 💾 **In-Memory**: No database setup required
- 🎯 **TypeScript**: Full type safety throughout

### 📚 API Documentation

Visit **Swagger UI** for interactive API documentation:
- 🌐 **English**: http://localhost:3001/api/docs
- 🇹🇷 **Turkish**: http://localhost:3001/api/docs?lang=tr

#### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| 📋 GET | `/users` | Get all users |
| 👤 GET | `/users/:id` | Get user by ID |
| ➕ POST | `/users` | Create new user |
| ✏️ PATCH | `/users/:id` | Update user |
| 🗑️ DELETE | `/users/:id` | Delete user |
| 📋 GET | `/posts` | Get all posts |
| 🔍 GET | `/posts?userId=:id` | Get posts by user |
| 📝 GET | `/posts/:id` | Get post by ID |
| ➕ POST | `/posts` | Create new post |
| ✏️ PATCH | `/posts/:id` | Update post |
| 🗑️ DELETE | `/posts/:id` | Delete post |

### 🎨 UI/UX Highlights

- 🌈 **Modern Design**: Gradient-based color scheme
- ✨ **Smooth Animations**: Hover effects and transitions
- 📱 **Responsive Layout**: Mobile-first design approach
- 🔄 **User Feedback**: Loading states and error messages
- ♿ **Accessibility**: Keyboard navigation and screen reader support
- 🌍 **Bilingual**: Complete Turkish and English support

---

## 🇹🇷 Türkçe Versiyon

### 🚀 Proje Genel Bakış

**React 19 + TypeScript frontend** ve **NestJS + TypeScript backend** ile **iki dilli destek (İngilizce/Türkçe)** içeren, kullanıcılar ve gönderiler için kapsamlı CRUD işlemleri sunan eksiksiz bir full-stack web uygulaması.

### ✨ Temel Özellikler

- 🌍 **İki Dilli Destek**: Tam Türkçe ve İngilizce dil desteği
- 🏠 **Modern Frontend**: React 19 + Vite + TypeScript + React Icons
- 🚀 **Güçlü Backend**: NestJS + TypeScript + Swagger UI + Bellek içi depolama
- 📚 **İnteraktif API Dokümanları**: Kapsamlı Swagger UI dokümantasyonu
- 🎨 **Güzel UI/UX**: Akıcı animasyonlarla modern tasarım
- 🔄 **Gerçek Zamanlı İşlemler**: Kullanıcı geri bildirimi ile anlık CRUD işlemleri
- 📱 **Duyarlı Tasarım**: Tüm cihazlarda mükemmel çalışır

### 🛠 Teknoloji Yığını

<div align="center">

| Frontend | Backend | Araçlar |
|----------|---------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) React 19 | ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) NestJS | ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black) Swagger UI |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) TypeScript | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) TypeScript | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ESLint |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) Vite | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) Express | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) Git |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) React Router | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) Node.js | ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) npm |

</div>

### 🚀 Hızlı Başlangıç

#### Ön Koşullar
- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-güncel-CB3837?style=flat-square&logo=npm&logoColor=white)

#### 🪟 Windows Hızlı Başlangıç
**Bu dosyalardan birine çift tıklayın:**
- `start_local.bat` - Windows Batch dosyası
- `start_local.ps1` - PowerShell betiği

#### 🔧 Manuel Kurulum

```bash
# 1. Depoyu klonlayın
git clone <repository-url>
cd Assignment-Da-Vinci-Board-Game

# 2. Backend bağımlılıklarını yükleyin
cd project/backend
npm install --legacy-peer-deps

# 3. Frontend bağımlılıklarını yükleyin
cd ../frontend
npm install

# 4. Backend'i başlatın (Terminal 1)
cd ../backend
npm run start:dev
# Backend: http://localhost:3001
# Swagger: http://localhost:3001/api/docs

# 5. Frontend'i başlatın (Terminal 2)
cd ../frontend
npm run dev
# Frontend: http://localhost:5173
```

### 🌟 Özellikler

#### 🌐 Frontend Özellikleri
- 🏠 **Ana Sayfa**: Özellik genel bakışı ile iki dilli karşılama sayfası
- 👥 **Kullanıcı Yönetimi**: Kullanıcılar için tam CRUD işlemleri
- 📝 **Gönderi Yönetimi**: Gönderiler için tam CRUD işlemleri
- 🔗 **İlişkiler**: Belirli kullanıcıların gönderilerini görüntüleme
- 🌍 **Dil Değiştirici**: İngilizce ve Türkçe arasında geçiş
- 🎨 **Modern UI**: React Icons ile temiz, duyarlı tasarım
- ✅ **Doğrulama**: İstemci tarafı form doğrulama
- 🔄 **Gerçek Zamanlı**: Tüm işlemler için anlık geri bildirim

#### 🚀 Backend Özellikleri
- 📚 **RESTful API**: Uygun HTTP yöntemleri ile eksiksiz REST API
- 📊 **Swagger UI**: İnteraktif API dokümantasyonu (İngilizce/Türkçe)
- ✅ **Doğrulama**: Dekoratörlerle istek doğrulama
- 🔒 **CORS**: Cross-origin istekleri etkin
- 💾 **Bellek İçi**: Veritabanı kurulumu gerektirmez
- 🎯 **TypeScript**: Baştan sona tam tip güvenliği

### 📚 API Dokümantasyonu

İnteraktif API dokümantasyonu için **Swagger UI**'yi ziyaret edin:
- 🌐 **İngilizce**: http://localhost:3001/api/docs
- 🇹🇷 **Türkçe**: http://localhost:3001/api/docs?lang=tr

#### API Uç Noktaları

| Yöntem | Uç Nokta | Açıklama |
|--------|----------|----------|
| 📋 GET | `/users` | Tüm kullanıcıları getir |
| 👤 GET | `/users/:id` | ID'ye göre kullanıcı getir |
| ➕ POST | `/users` | Yeni kullanıcı oluştur |
| ✏️ PATCH | `/users/:id` | Kullanıcıyı güncelle |
| 🗑️ DELETE | `/users/:id` | Kullanıcıyı sil |
| 📋 GET | `/posts` | Tüm gönderileri getir |
| 🔍 GET | `/posts?userId=:id` | Kullanıcıya göre gönderileri getir |
| 📝 GET | `/posts/:id` | ID'ye göre gönderi getir |
| ➕ POST | `/posts` | Yeni gönderi oluştur |
| ✏️ PATCH | `/posts/:id` | Gönderiyi güncelle |
| 🗑️ DELETE | `/posts/:id` | Gönderiyi sil |

### 🎨 UI/UX Öne Çıkanlar

- 🌈 **Modern Tasarım**: Gradyan tabanlı renk şeması
- ✨ **Akıcı Animasyonlar**: Hover efektleri ve geçişler
- 📱 **Duyarlı Düzen**: Mobil öncelikli tasarım yaklaşımı
- 🔄 **Kullanıcı Geri Bildirimi**: Yükleme durumları ve hata mesajları
- ♿ **Erişilebilirlik**: Klavye navigasyonu ve ekran okuyucu desteği
- 🌍 **İki Dilli**: Tam Türkçe ve İngilizce desteği

---

### 🔧 Geliştirme

#### Kod Kalitesi
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ESLint yapılandırması
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) TypeScript strict mode
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black) Tutarlı kod biçimlendirme

#### Geliştirme İş Akışı
1. Backend geliştirme sunucusunu başlat
2. Frontend geliştirme sunucusunu başlat
3. Her iki sunucu da hot reload destekler
4. API değişiklikleri otomatik olarak Swagger dokümanlarına yansır

### 🧪 Test Etme

```bash
# Frontend
cd project/frontend
npm run lint

# Backend
cd project/backend
npm run test
npm run test:cov
npm run lint
```

### 🐛 Sorun Giderme

#### Yaygın Sorunlar

1. **Port zaten kullanımda**
   ```bash
   npx kill-port 3001  # Backend portu
   npx kill-port 5173  # Frontend portu
   ```

2. **Backend başlamıyor**
   ```bash
   cd project/backend
   npm install --legacy-peer-deps
   ```

3. **Frontend backend'e bağlanamıyor**
   - Backend'in 3001 portunda çalıştığından emin olun
   - Backend'de CORS yapılandırmasını kontrol edin

### 🔮 Gelecek Geliştirmeler

- [ ] Kullanıcı kimlik doğrulama ve yetkilendirme
- [ ] Veritabanı entegrasyonu (PostgreSQL/MongoDB)
- [ ] WebSocket'ler ile gerçek zamanlı güncellemeler
- [ ] Dosya yükleme yetenekleri
- [ ] Gelişmiş arama ve filtreleme
- [ ] Büyük veri setleri için sayfalama
- [ ] Koyu/açık tema değiştirici
- [ ] Docker konteynerizasyonu

### 📄 Lisans

Bu proje Da Vinci Board Game ödevinin bir parçasıdır.

---

<div align="center">

### 🌟 Katkıda Bulunun

Bu projeyi beğendiyseniz ⭐ vermeyi unutmayın!

**Made with ❤️ by Da Vinci Team**

</div>