import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcHome, FcBusinessman, FcDocument } from 'react-icons/fc';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <h1>Assignment</h1>
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <Link to="/" className="nav-link">
            <FcHome className="nav-icon" />
            {t.nav.home}
          </Link>
        </li>
        <li className={`nav-item ${isActive('/users') ? 'active' : ''}`}>
          <Link to="/users" className="nav-link">
            <FcBusinessman className="nav-icon" />
            {t.nav.users}
          </Link>
        </li>
        <li className={`nav-item ${isActive('/posts') ? 'active' : ''}`}>
          <Link to="/posts" className="nav-link">
            <FcDocument className="nav-icon" />
            {t.nav.posts}
          </Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
