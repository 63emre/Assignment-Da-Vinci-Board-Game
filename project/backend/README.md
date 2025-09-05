# Da Vinci Board Game - Backend API

A robust NestJS + TypeScript backend API providing CRUD operations for users and posts with comprehensive Swagger documentation.

## 🚀 Features

- **RESTful API**: Full CRUD operations for users and posts
- **In-Memory Storage**: No database required - data persists during runtime
- **Swagger Documentation**: Interactive API documentation
- **Input Validation**: Request validation with class-validator
- **CORS Enabled**: Cross-origin requests supported
- **TypeScript**: Full type safety
- **Error Handling**: Comprehensive error responses
- **Relationship Support**: Posts linked to users via userId

## 🛠 Tech Stack

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety and modern JavaScript features
- **Swagger/OpenAPI** - API documentation
- **Class Validator** - Request validation
- **Class Transformer** - Object transformation
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting

## 📁 Project Structure

```
src/
├── controllers/         # API route controllers
│   ├── users.controller.ts    # User endpoints
│   └── posts.controller.ts    # Post endpoints
├── services/           # Business logic services
│   ├── users.service.ts       # User service
│   └── posts.service.ts       # Post service
├── dto/                # Data Transfer Objects
│   ├── user.dto.ts            # User DTOs
│   └── post.dto.ts            # Post DTOs
├── entities/           # Type definitions
│   ├── user.entity.ts         # User interface
│   └── post.entity.ts         # Post interface
├── app.controller.ts   # Root controller
├── app.service.ts      # Root service
├── app.module.ts       # Main application module
└── main.ts             # Application entry point
```

## 🏗 Setup and Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation Steps

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
   API: http://localhost:3001
   Swagger Docs: http://localhost:3001/api/docs
   ```

## 🔧 Available Scripts

- `npm run start` - Start production server
- `npm run start:dev` - Start development server with hot reload
- `npm run start:debug` - Start server in debug mode
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage

## 📚 API Documentation

### Swagger UI

Visit `http://localhost:3001/api/docs` for interactive API documentation.

### API Endpoints

#### Users API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Create new user |
| PATCH | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

#### Posts API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| GET | `/posts?userId=:id` | Get posts by user ID |
| GET | `/posts/:id` | Get post by ID |
| POST | `/posts` | Create new post |
| PATCH | `/posts/:id` | Update post |
| DELETE | `/posts/:id` | Delete post |

#### Root API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get API information |

## 📝 Request/Response Examples

### Create User

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

**Response** `201 Created`
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

### Create Post

**POST** `/posts`

```json
{
  "title": "My First Post",
  "body": "This is the content of my first post.",
  "userId": 1
}
```

**Response** `201 Created`
```json
{
  "id": 11,
  "title": "My First Post",
  "body": "This is the content of my first post.",
  "userId": 1
}
```

## 🔒 Validation

The API uses class-validator for request validation:

### User Validation Rules
- `name`: Required, must be string
- `username`: Required, must be string  
- `email`: Required, must be valid email format
- `phone`: Optional, must be string
- `website`: Optional, must be string

### Post Validation Rules
- `title`: Required, must be string
- `body`: Optional, must be string
- `userId`: Required, must be number

## 🌐 CORS Configuration

CORS is enabled for:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative frontend port)

Allowed methods: GET, POST, PUT, PATCH, DELETE

## 💾 Data Storage

### In-Memory Storage
- Data is stored in memory during runtime
- Initial seed data includes 10 users and 10 posts
- Data persists until server restart
- No database configuration required

### Initial Data
- **Users**: 10 pre-populated users with realistic data
- **Posts**: 10 pre-populated posts linked to various users
- **Auto-increment IDs**: New entities get auto-incremented IDs

## 🚦 Error Handling

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `204` - No Content (for DELETE operations)
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

### Error Response Format
```json
{
  "statusCode": 404,
  "message": "User with ID 999 not found",
  "error": "Not Found"
}
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Test Coverage
```bash
npm run test:cov
```

### E2E Tests
```bash
npm run test:e2e
```

## 🔧 Development

### Hot Reload
The development server supports hot reload - changes are automatically reflected.

### Debugging
```bash
npm run start:debug
```
Then attach your debugger to port 9229.

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode enabled

## 📊 Performance

- **Startup Time**: ~2-3 seconds
- **Memory Usage**: ~50MB base
- **Response Time**: <10ms for in-memory operations
- **Concurrent Requests**: Handles multiple concurrent requests

## 🐛 Troubleshooting

### Common Issues

1. **Port 3001 already in use**
   ```bash
   # Kill process using port 3001
   npx kill-port 3001
   ```

2. **Dependency issues**
   ```bash
   # Install with legacy peer deps
   npm install --legacy-peer-deps
   ```

3. **TypeScript compilation errors**
   ```bash
   # Clean and rebuild
   npm run build
   ```

4. **CORS issues**
   - Check frontend URL in main.ts CORS configuration
   - Ensure frontend is running on allowed origins

## 🔮 Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication and authorization
- [ ] Rate limiting
- [ ] Caching layer (Redis)
- [ ] File upload support
- [ ] Real-time updates with WebSockets
- [ ] API versioning
- [ ] Logging and monitoring
- [ ] Docker containerization

## 📄 License

This project is part of the Da Vinci Board Game assignment.
