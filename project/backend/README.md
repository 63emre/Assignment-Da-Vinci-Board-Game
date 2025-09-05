# 🚀 Da Vinci Board Game - Backend API

<div align="center">

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

<div align="center">
  <h3>🇬🇧 English | 🇹🇷 Türkçe</h3>
</div>

---

## 🇬🇧 English Version

### 🚀 Overview

A robust **NestJS + TypeScript backend API** providing comprehensive CRUD operations for users and posts with **interactive Swagger documentation** and **bilingual API descriptions (English/Turkish)**. Built with modern architecture patterns and best practices.

### ✨ Features

- 📚 **RESTful API**: Full CRUD operations for users and posts
- 🌍 **Bilingual Swagger**: Interactive API documentation in English and Turkish
- 💾 **In-Memory Storage**: No database required - data persists during runtime
- ✅ **Input Validation**: Comprehensive request validation with class-validator
- 🔒 **CORS Enabled**: Cross-origin requests supported for frontend integration
- 🎯 **TypeScript**: Full type safety throughout the application
- 🛡️ **Error Handling**: Comprehensive error responses with proper HTTP status codes
- 🔗 **Relationship Support**: Posts linked to users via userId
- 📊 **Auto-Documentation**: API endpoints automatically documented

### 🛠 Tech Stack

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) **NestJS** | Progressive Node.js Framework | 10.x |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) **TypeScript** | Type Safety | 5.x |
| ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black) **Swagger/OpenAPI** | API Documentation | 3.x |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) **Express** | HTTP Server | Latest |
| ![Class Validator](https://img.shields.io/badge/Class_Validator-FF6B6B?style=flat-square) **Class Validator** | Request Validation | Latest |
| ![Class Transformer](https://img.shields.io/badge/Class_Transformer-4ECDC4?style=flat-square) **Class Transformer** | Object Transformation | Latest |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) **ESLint** | Code Quality | Latest |

</div>

### 📁 Project Structure

```
src/
├── 🎮 controllers/         # API route controllers
│   ├── 👥 users.controller.ts    # User endpoints with Swagger docs
│   └── 📝 posts.controller.ts    # Post endpoints with Swagger docs
├── 🔧 services/           # Business logic services
│   ├── 👤 users.service.ts       # User service with CRUD operations
│   └── 📄 posts.service.ts       # Post service with CRUD operations
├── 📝 dto/                # Data Transfer Objects
│   ├── 👤 user.dto.ts            # User DTOs with validation
│   └── 📄 post.dto.ts            # Post DTOs with validation
├── 🏗️ entities/           # Type definitions
│   ├── 👤 user.entity.ts         # User interface
│   └── 📄 post.entity.ts         # Post interface
├── 🏠 app.controller.ts   # Root controller
├── 🔧 app.service.ts      # Root service
├── 📦 app.module.ts       # Main application module
└── 🚀 main.ts             # Application entry point with CORS
```

### 🏗 Setup and Installation

#### Prerequisites

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white) Node.js (v18+ recommended)
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm&logoColor=white) npm or yarn

#### Installation Steps

1. **Navigate to backend directory**
   ```bash
   cd project/backend
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run start:dev
   ```

4. **Access the API**
   ```
   🌐 API: http://localhost:3001
   📚 Swagger Docs (English): http://localhost:3001/api/docs
   🇹🇷 Swagger Docs (Turkish): http://localhost:3001/api/docs?lang=tr
   ```

### 🔧 Available Scripts

| Script | Purpose | Description |
|--------|---------|-------------|
| `npm run start` | 🚀 Production | Start production server |
| `npm run start:dev` | 🔥 Development | Start with hot reload |
| `npm run start:debug` | 🐛 Debug | Start in debug mode |
| `npm run build` | 🏗️ Build | Build for production |
| `npm run lint` | 🔍 Lint | Run ESLint for code quality |
| `npm run format` | 🎨 Format | Format code with Prettier |
| `npm run test` | 🧪 Test | Run unit tests |
| `npm run test:watch` | 👀 Test Watch | Run tests in watch mode |
| `npm run test:cov` | 📊 Coverage | Run tests with coverage |

### 📚 API Documentation

#### 🌐 Interactive Swagger UI

<div align="center">

| Language | URL | Features |
|----------|-----|----------|
| 🇬🇧 **English** | `http://localhost:3001/api/docs` | Complete API documentation |
| 🇹🇷 **Turkish** | `http://localhost:3001/api/docs?lang=tr` | Türkçe API dokümantasyonu |

</div>

#### API Endpoints Overview

<div align="center">

| Resource | Endpoints | Description |
|----------|-----------|-------------|
| 👥 **Users** | 5 endpoints | Complete user management |
| 📝 **Posts** | 6 endpoints | Complete post management |
| 🏠 **Root** | 1 endpoint | API information |

</div>

#### Users API

| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| 📋 GET | `/users` | Get all users | ![200](https://img.shields.io/badge/200-OK-green) |
| 👤 GET | `/users/:id` | Get user by ID | ![200](https://img.shields.io/badge/200-OK-green) ![404](https://img.shields.io/badge/404-Not_Found-red) |
| ➕ POST | `/users` | Create new user | ![201](https://img.shields.io/badge/201-Created-brightgreen) ![400](https://img.shields.io/badge/400-Bad_Request-orange) |
| ✏️ PATCH | `/users/:id` | Update user | ![200](https://img.shields.io/badge/200-OK-green) ![404](https://img.shields.io/badge/404-Not_Found-red) |
| 🗑️ DELETE | `/users/:id` | Delete user | ![204](https://img.shields.io/badge/204-No_Content-blue) ![404](https://img.shields.io/badge/404-Not_Found-red) |

#### Posts API

| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| 📋 GET | `/posts` | Get all posts | ![200](https://img.shields.io/badge/200-OK-green) |
| 🔍 GET | `/posts?userId=:id` | Get posts by user ID | ![200](https://img.shields.io/badge/200-OK-green) |
| 📝 GET | `/posts/:id` | Get post by ID | ![200](https://img.shields.io/badge/200-OK-green) ![404](https://img.shields.io/badge/404-Not_Found-red) |
| ➕ POST | `/posts` | Create new post | ![201](https://img.shields.io/badge/201-Created-brightgreen) ![400](https://img.shields.io/badge/400-Bad_Request-orange) |
| ✏️ PATCH | `/posts/:id` | Update post | ![200](https://img.shields.io/badge/200-OK-green) ![404](https://img.shields.io/badge/404-Not_Found-red) |
| 🗑️ DELETE | `/posts/:id` | Delete post | ![204](https://img.shields.io/badge/204-No_Content-blue) ![404](https://img.shields.io/badge/404-Not_Found-red) |

### 📝 Request/Response Examples

#### Create User

**POST** `/users`

```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "website": "johndoe.com"
}
```

**Response** ![201](https://img.shields.io/badge/201-Created-brightgreen)
```json
{
  "id": 11,
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "website": "johndoe.com"
}
```

#### Create Post

**POST** `/posts`

```json
{
  "title": "My First Post",
  "body": "This is the content of my first post.",
  "userId": 1
}
```

**Response** ![201](https://img.shields.io/badge/201-Created-brightgreen)
```json
{
  "id": 11,
  "title": "My First Post",
  "body": "This is the content of my first post.",
  "userId": 1
}
```

### 🔒 Validation Rules

#### User Validation
- ✅ **name**: Required, must be string
- ✅ **username**: Required, must be string, unique
- ✅ **email**: Required, must be valid email format
- ⚪ **phone**: Optional, must be string
- ⚪ **website**: Optional, must be string

#### Post Validation
- ✅ **title**: Required, must be string, min 1 character
- ⚪ **body**: Optional, must be string
- ✅ **userId**: Required, must be number, must reference existing user

### 🌐 CORS Configuration

CORS is enabled for the following origins:

| Environment | URL | Purpose |
|-------------|-----|---------|
| 🚀 **Development** | `http://localhost:5173` | Vite dev server |
| 🔄 **Alternative** | `http://localhost:3000` | Alternative frontend port |

**Allowed Methods**: GET, POST, PUT, PATCH, DELETE, OPTIONS

### 💾 Data Storage

#### In-Memory Storage Features
- 🚀 **Fast Access**: Lightning-fast data operations
- 🔄 **Runtime Persistence**: Data persists during server runtime
- 📊 **Initial Seed Data**: 10 users and 10 posts pre-populated
- 🆔 **Auto-increment IDs**: New entities get auto-incremented IDs
- 🔄 **Reset on Restart**: Fresh data on server restart

#### Initial Data
- 👥 **Users**: 10 realistic user profiles with complete information
- 📝 **Posts**: 10 diverse posts linked to various users
- 🔗 **Relationships**: Posts properly linked to users via userId

---

## 🇹🇷 Türkçe Versiyon

### 🚀 Genel Bakış

Kullanıcılar ve gönderiler için kapsamlı CRUD işlemleri, **interaktif Swagger dokümantasyonu** ve **iki dilli API açıklamaları (İngilizce/Türkçe)** sunan güçlü bir **NestJS + TypeScript backend API**. Modern mimari kalıpları ve en iyi uygulamalarla oluşturulmuştur.

### ✨ Özellikler

- 📚 **RESTful API**: Kullanıcılar ve gönderiler için tam CRUD işlemleri
- 🌍 **İki Dilli Swagger**: İngilizce ve Türkçe interaktif API dokümantasyonu
- 💾 **Bellek İçi Depolama**: Veritabanı gerekmez - veriler çalışma zamanında kalır
- ✅ **Giriş Doğrulama**: class-validator ile kapsamlı istek doğrulama
- 🔒 **CORS Etkin**: Frontend entegrasyonu için cross-origin istekleri desteklenir
- 🎯 **TypeScript**: Uygulama boyunca tam tip güvenliği
- 🛡️ **Hata İşleme**: Uygun HTTP durum kodları ile kapsamlı hata yanıtları
- 🔗 **İlişki Desteği**: Gönderiler userId aracılığıyla kullanıcılara bağlı
- 📊 **Otomatik Dokümantasyon**: API uç noktaları otomatik olarak belgelenir

### 🛠 Teknoloji Yığını

<div align="center">

| Teknoloji | Amaç | Versiyon |
|-----------|------|----------|
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) **NestJS** | İlerici Node.js Framework | 10.x |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) **TypeScript** | Tip Güvenliği | 5.x |
| ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black) **Swagger/OpenAPI** | API Dokümantasyonu | 3.x |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) **Express** | HTTP Sunucu | Güncel |
| ![Class Validator](https://img.shields.io/badge/Class_Validator-FF6B6B?style=flat-square) **Class Validator** | İstek Doğrulama | Güncel |
| ![Class Transformer](https://img.shields.io/badge/Class_Transformer-4ECDC4?style=flat-square) **Class Transformer** | Nesne Dönüşümü | Güncel |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) **ESLint** | Kod Kalitesi | Güncel |

</div>

### 📁 Proje Yapısı

```
src/
├── 🎮 controllers/         # API rota kontrolcüleri
│   ├── 👥 users.controller.ts    # Swagger dokümanları ile kullanıcı uç noktaları
│   └── 📝 posts.controller.ts    # Swagger dokümanları ile gönderi uç noktaları
├── 🔧 services/           # İş mantığı servisleri
│   ├── 👤 users.service.ts       # CRUD işlemleri ile kullanıcı servisi
│   └── 📄 posts.service.ts       # CRUD işlemleri ile gönderi servisi
├── 📝 dto/                # Veri Transfer Nesneleri
│   ├── 👤 user.dto.ts            # Doğrulama ile kullanıcı DTO'ları
│   └── 📄 post.dto.ts            # Doğrulama ile gönderi DTO'ları
├── 🏗️ entities/           # Tip tanımları
│   ├── 👤 user.entity.ts         # Kullanıcı arayüzü
│   └── 📄 post.entity.ts         # Gönderi arayüzü
├── 🏠 app.controller.ts   # Kök kontrolcü
├── 🔧 app.service.ts      # Kök servis
├── 📦 app.module.ts       # Ana uygulama modülü
└── 🚀 main.ts             # CORS ile uygulama giriş noktası
```

### 🏗 Kurulum ve Yükleme

#### Ön Koşullar

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white) Node.js (v18+ önerilir)
- ![npm](https://img.shields.io/badge/npm-güncel-CB3837?style=flat-square&logo=npm&logoColor=white) npm veya yarn

#### Kurulum Adımları

1. **Backend dizinine gidin**
   ```bash
   cd project/backend
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run start:dev
   ```

4. **API'ye erişin**
   ```
   🌐 API: http://localhost:3001
   📚 Swagger Dokümanları (İngilizce): http://localhost:3001/api/docs
   🇹🇷 Swagger Dokümanları (Türkçe): http://localhost:3001/api/docs?lang=tr
   ```

### 🔧 Kullanılabilir Betikler

| Betik | Amaç | Açıklama |
|-------|------|----------|
| `npm run start` | 🚀 Üretim | Üretim sunucusunu başlat |
| `npm run start:dev` | 🔥 Geliştirme | Hot reload ile başlat |
| `npm run start:debug` | 🐛 Debug | Debug modunda başlat |
| `npm run build` | 🏗️ Yapı | Üretim için yapı oluştur |
| `npm run lint` | 🔍 Lint | Kod kalitesi için ESLint çalıştır |
| `npm run format` | 🎨 Format | Prettier ile kod formatla |
| `npm run test` | 🧪 Test | Birim testleri çalıştır |
| `npm run test:watch` | 👀 Test İzle | İzleme modunda testleri çalıştır |
| `npm run test:cov` | 📊 Kapsam | Kapsam ile testleri çalıştır |

### 📚 API Dokümantasyonu

#### 🌐 İnteraktif Swagger UI

<div align="center">

| Dil | URL | Özellikler |
|-----|-----|-----------|
| 🇬🇧 **İngilizce** | `http://localhost:3001/api/docs` | Tam API dokümantasyonu |
| 🇹🇷 **Türkçe** | `http://localhost:3001/api/docs?lang=tr` | Türkçe API dokümantasyonu |

</div>

#### API Uç Noktaları Genel Bakış

<div align="center">

| Kaynak | Uç Noktalar | Açıklama |
|--------|-------------|----------|
| 👥 **Kullanıcılar** | 5 uç nokta | Tam kullanıcı yönetimi |
| 📝 **Gönderiler** | 6 uç nokta | Tam gönderi yönetimi |
| 🏠 **Kök** | 1 uç nokta | API bilgileri |

</div>

### 🚦 Hata İşleme

#### HTTP Durum Kodları
- ![200](https://img.shields.io/badge/200-Başarılı-green) **200** - Başarılı
- ![201](https://img.shields.io/badge/201-Oluşturuldu-brightgreen) **201** - Oluşturuldu
- ![204](https://img.shields.io/badge/204-İçerik_Yok-blue) **204** - İçerik Yok (DELETE işlemleri için)
- ![400](https://img.shields.io/badge/400-Kötü_İstek-orange) **400** - Kötü İstek (doğrulama hataları)
- ![404](https://img.shields.io/badge/404-Bulunamadı-red) **404** - Bulunamadı
- ![500](https://img.shields.io/badge/500-Sunucu_Hatası-darkred) **500** - İç Sunucu Hatası

### 🧪 Test Etme

#### Test Türleri
```bash
# Birim testleri
npm run test

# Test kapsamı
npm run test:cov

# E2E testleri
npm run test:e2e

# İzleme modunda testler
npm run test:watch
```

### 📊 Performans

| Metrik | Değer | Açıklama |
|--------|-------|----------|
| 🚀 **Başlangıç Zamanı** | ~2-3 saniye | Sunucu başlangıç süresi |
| 💾 **Bellek Kullanımı** | ~50MB | Temel bellek kullanımı |
| ⚡ **Yanıt Süresi** | <10ms | Bellek içi işlemler için |
| 🔄 **Eşzamanlı İstekler** | Yüksek | Çoklu eşzamanlı istekleri işler |

### 🐛 Sorun Giderme

#### Yaygın Sorunlar

1. **3001 portu zaten kullanımda**
   ```bash
   # 3001 portunu kullanan işlemi sonlandır
   npx kill-port 3001
   ```

2. **Bağımlılık sorunları**
   ```bash
   # Legacy peer deps ile yükle
   npm install --legacy-peer-deps
   ```

3. **TypeScript derleme hataları**
   ```bash
   # Temizle ve yeniden yapılandır
   npm run build
   ```

4. **CORS sorunları**
   - main.ts'de frontend URL'sini CORS yapılandırmasında kontrol edin
   - Frontend'in izin verilen kaynaklarda çalıştığından emin olun

### 🔮 Gelecek Geliştirmeler

- [ ] Veritabanı entegrasyonu (PostgreSQL/MongoDB)
- [ ] Kullanıcı kimlik doğrulama ve yetkilendirme
- [ ] Hız sınırlama
- [ ] Önbellekleme katmanı (Redis)
- [ ] Dosya yükleme desteği
- [ ] WebSocket'ler ile gerçek zamanlı güncellemeler
- [ ] API versiyonlama
- [ ] Günlük kayıt ve izleme
- [ ] Docker konteynerizasyonu

---

<div align="center">

### 🌟 Özellikler

✅ **Modern NestJS** ile güçlü backend  
✅ **TypeScript** ile tam tip güvenliği  
✅ **Swagger UI** ile interaktif dokümanlar  
✅ **İki dilli destek** (TR/EN)  
✅ **CORS** frontend entegrasyonu için  
✅ **Bellek içi** hızlı veri işleme  

**Made with ❤️ by Da Vinci Team**

</div>