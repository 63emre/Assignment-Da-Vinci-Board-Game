import React from 'react';
import { Link } from 'react-router-dom';
import { FcBusinessman, FcDocument, FcInfo } from 'react-icons/fc';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to Da Vinci Board Game</h1>
        <p>Manage users and posts with our comprehensive CRUD application</p>
      </div>
      
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">
            <FcBusinessman size={64} />
          </div>
          <h3>User Management</h3>
          <p>Create, read, update, and delete users. View user profiles with detailed information including contact details.</p>
          <Link to="/users" className="feature-button">
            Manage Users
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FcDocument size={64} />
          </div>
          <h3>Post Management</h3>
          <p>Handle all post operations. Create new posts, edit existing ones, and see the relationship between users and their posts.</p>
          <Link to="/posts" className="feature-button">
            Manage Posts
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FcInfo size={64} />
          </div>
          <h3>Features</h3>
          <div className="features-list">
            <ul>
              <li>Full CRUD operations</li>
              <li>User-Post relationships</li>
              <li>Real-time updates</li>
              <li>Responsive design</li>
              <li>Clean UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
