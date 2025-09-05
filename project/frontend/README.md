# Da Vinci Board Game - Frontend

A modern React + TypeScript frontend application for managing users and posts with full CRUD operations.

## 🚀 Features

- **User Management**: Create, read, update, and delete users
- **Post Management**: Create, read, update, and delete posts  
- **User-Post Relationships**: View posts by specific users
- **Modern UI/UX**: Clean, responsive design with React Icons
- **Real-time Updates**: Instant feedback for all operations
- **Form Validation**: Client-side validation with error handling
- **Modal Dialogs**: User-friendly forms in modal windows

## 🛠 Tech Stack

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icons
- **CSS3** - Modern styling with gradients and animations
- **ESLint** - Code linting and quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Homepage.tsx     # Landing page
│   ├── Navbar.tsx       # Navigation component
│   ├── UserList.tsx     # User management page
│   ├── UserForm.tsx     # User create/edit form
│   ├── PostList.tsx     # Post management page
│   ├── PostForm.tsx     # Post create/edit form
│   └── Modal.tsx        # Modal wrapper component
├── services/            # API services
│   └── api.ts           # API communication layer
├── types/               # TypeScript type definitions
│   └── index.ts         # User and Post interfaces
├── App.tsx              # Main app component
├── App.css              # Global styles
└── main.tsx             # App entry point
```

## 🏗 Setup and Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation Steps

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
   http://localhost:5173
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The frontend communicates with the NestJS backend API running on `http://localhost:3001`.

### API Endpoints Used

- `GET /users` - Fetch all users
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user
- `GET /posts` - Fetch all posts
- `GET /posts?userId=:id` - Fetch posts by user
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time input validation
- **Hover Effects**: Interactive elements with smooth transitions
- **Color Scheme**: Modern gradient-based design
- **Accessibility**: Keyboard navigation and screen reader support

## 🔄 State Management

The application uses React's built-in state management:
- `useState` for component state
- `useEffect` for side effects
- Props for data passing between components

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px and below
- **Mobile**: Optimized for small screens

## 🚦 Development

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for code quality
- Consistent component structure
- Proper error boundaries and loading states

### Component Guidelines

- Functional components with hooks
- TypeScript interfaces for props
- Proper error handling
- Accessible markup

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process using port 5173
   npx kill-port 5173
   ```

2. **API connection issues**
   - Ensure backend is running on port 3001
   - Check CORS configuration in backend

3. **Build issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Real-time notifications
- [ ] Dark/light theme toggle
- [ ] Advanced search and filtering
- [ ] Pagination for large datasets
- [ ] File upload capabilities
- [ ] Offline support with service workers

## 📄 License

This project is part of the Da Vinci Board Game assignment.

