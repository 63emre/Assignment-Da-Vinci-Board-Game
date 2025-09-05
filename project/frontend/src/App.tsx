import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import UserList from './components/UserList';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
