# Da Vinci Board Game - Full Stack Application

A complete full-stack web application with React + TypeScript frontend and NestJS + TypeScript backend, featuring comprehensive CRUD operations for users and posts.

## 🎯 Project Overview

This project demonstrates a modern full-stack development approach with:
- **Frontend**: React 19 + Vite + TypeScript + React Icons
- **Backend**: NestJS + TypeScript + Swagger + In-memory storage
- **Features**: Complete CRUD operations, user-post relationships, modern UI/UX
- **Documentation**: Comprehensive API docs with Swagger UI

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone and Setup
```bash
# Clone the repository
git clone <repository-url>
cd Assignment-Da-Vinci-Board-Game

# Install backend dependencies
cd project/backend
npm install --legacy-peer-deps

# Install frontend dependencies  
cd ../frontend
npm install
```

### 2. Start Backend (Terminal 1)
```bash
cd project/backend
npm run start:dev
```
Backend will run on: http://localhost:3001
Swagger docs: http://localhost:3001/api/docs

### 3. Start Frontend (Terminal 2)
```bash
cd project/frontend
npm run dev
```
Frontend will run on: http://localhost:5173

## 📁 Project Structure

```
Assignment-Da-Vinci-Board-Game/
├── project/
│   ├── frontend/           # React + Vite frontend
│   │   ├── src/
│   │   │   ├── components/ # React components
│   │   │   ├── services/   # API services
│   │   │   ├── types/      # TypeScript types
│   │   │   └── ...
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── backend/            # NestJS backend
│       ├── src/
│       │   ├── controllers/ # API controllers
│       │   ├── services/    # Business logic
│       │   ├── dto/         # Data transfer objects
│       │   ├── entities/    # Type definitions
│       │   └── ...
│       ├── package.json
│       └── README.md
│
├── .gitignore
└── README.md
```

## ✨ Features

### Frontend Features
- 🏠 **Homepage**: Welcome page with feature overview
- 👥 **User Management**: Full CRUD operations for users
- 📝 **Post Management**: Full CRUD operations for posts
- 🔗 **Relationships**: View posts by specific users
- 🎨 **Modern UI**: Clean, responsive design with React Icons
- ✅ **Validation**: Client-side form validation
- 🔄 **Real-time**: Instant feedback for all operations
- 📱 **Responsive**: Works on desktop, tablet, and mobile

### Backend Features
- 🚀 **RESTful API**: Complete REST API with proper HTTP methods
- 📊 **Swagger Docs**: Interactive API documentation
- ✅ **Validation**: Request validation with decorators
- 🔒 **CORS**: Cross-origin requests enabled
- 💾 **In-Memory**: No database setup required
- 🎯 **TypeScript**: Full type safety throughout
- 🔍 **Error Handling**: Comprehensive error responses
- 🔄 **Hot Reload**: Development server with auto-restart

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with gradients and animations

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety and modern JavaScript
- **Swagger/OpenAPI** - API documentation
- **Class Validator** - Request validation
- **Class Transformer** - Object transformation
- **Express** - Underlying HTTP server

## 📚 API Endpoints

### Users API
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID  
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Posts API
- `GET /posts` - Get all posts
- `GET /posts?userId=:id` - Get posts by user
- `GET /posts/:id` - Get post by ID
- `POST /posts` - Create new post
- `PATCH /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

## 🎨 UI/UX Highlights

- **Modern Design**: Gradient-based color scheme
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **User Feedback**: Loading states and error messages
- **Accessibility**: Keyboard navigation and screen reader support
- **Form Validation**: Real-time validation with error highlighting

## 🔧 Development

### Code Quality
- ESLint configuration for both frontend and backend
- TypeScript strict mode enabled
- Consistent code formatting
- Proper error handling and logging

### Development Workflow
1. Start backend development server
2. Start frontend development server
3. Both servers support hot reload
4. API changes automatically reflected in Swagger docs
5. Frontend automatically connects to backend API

## 🧪 Testing

### Frontend Testing
```bash
cd project/frontend
npm run lint  # ESLint check
```

### Backend Testing
```bash
cd project/backend
npm run test        # Unit tests
npm run test:cov    # Test coverage
npm run lint        # ESLint check
```

## 📖 Documentation

- **Frontend README**: `project/frontend/README.md`
- **Backend README**: `project/backend/README.md`
- **API Documentation**: http://localhost:3001/api/docs (when backend is running)

## 🚦 Phase Implementation

### Phase 1: Frontend with JSONPlaceholder ✅
- React + Vite + TypeScript setup
- Homepage with navigation
- User and Post components with CRUD
- Integration with JSONPlaceholder API
- Modern UI with React Icons
- Form validation and error handling

### Phase 2: Backend Integration ✅
- NestJS backend with TypeScript
- In-memory CRUD services for users and posts
- Swagger API documentation
- CORS configuration for frontend
- Frontend updated to use backend API
- Comprehensive error handling

## 🌟 Key Achievements

1. **Full-Stack TypeScript**: End-to-end type safety
2. **Modern Architecture**: Clean separation of concerns
3. **Developer Experience**: Hot reload, comprehensive docs
4. **User Experience**: Responsive design, real-time feedback
5. **Code Quality**: ESLint, proper error handling
6. **Documentation**: Comprehensive README files and API docs

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**
   ```bash
   cd project/backend
   npm install --legacy-peer-deps
   ```

2. **Frontend can't connect to backend**
   - Ensure backend is running on port 3001
   - Check CORS configuration in backend

3. **Port conflicts**
   ```bash
   npx kill-port 3001  # Kill backend port
   npx kill-port 5173  # Kill frontend port
   ```

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time updates with WebSockets
- [ ] File upload capabilities
- [ ] Advanced search and filtering
- [ ] Pagination for large datasets
- [ ] Dark/light theme toggle
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Unit and integration tests

## 📄 Assignment Requirements Fulfilled

✅ **Frontend Requirements**
- React + TypeScript + Vite
- Homepage with links to Users and Posts
- Sample data integration (initially JSONPlaceholder, then backend)
- CRUD operations for users and posts
- User-post relationships via userId
- Modern UI/UX with React Icons
- ESLint compliance
- Comprehensive README

✅ **Backend Requirements**
- NestJS + TypeScript backend
- CRUD API endpoints for users and posts
- In-memory data storage (no database)
- CORS enabled for frontend communication
- Swagger API documentation
- ESLint compliance
- Separate port (3001) from frontend (5173)
- Comprehensive README

✅ **Integration Requirements**
- Frontend updated to use backend API
- Proper error handling and validation
- Clean project structure
- Both servers run independently
- Complete documentation

## 👨‍💻 Developer Notes

This project showcases modern full-stack development practices with:
- Type-safe development with TypeScript
- Component-based architecture
- RESTful API design
- Comprehensive documentation
- Professional code organization
- Production-ready error handling

Perfect for demonstrating full-stack development skills with modern technologies!
