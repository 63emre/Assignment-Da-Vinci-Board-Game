import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcHome, FcBusinessman, FcDocument } from 'react-icons/fc';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Da Vinci Board Game</h1>
      </div>
      <ul className="navbar-nav">
        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <Link to="/" className="nav-link">
            <FcHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li className={`nav-item ${isActive('/users') ? 'active' : ''}`}>
          <Link to="/users" className="nav-link">
            <FcBusinessman className="nav-icon" />
            Users
          </Link>
        </li>
        <li className={`nav-item ${isActive('/posts') ? 'active' : ''}`}>
          <Link to="/posts" className="nav-link">
            <FcDocument className="nav-icon" />
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
