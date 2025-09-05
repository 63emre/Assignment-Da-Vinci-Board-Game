import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Homepage from './components/Homepage';
import UserList from './components/UserList';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import './App.css';

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    flexDirection: 'column'
  }}>
    <div style={{
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 2s linear infinite'
    }}></div>
    <p style={{ marginTop: '10px', color: '#666' }}>Loading...</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/posts" element={<PostList />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
