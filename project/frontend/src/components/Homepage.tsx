import React from 'react';
import { Link } from 'react-router-dom';
import { FcBusinessman, FcDocument, FcInfo, FcGlobe } from 'react-icons/fc';
import { useLanguage } from '../contexts/LanguageContext';

const Homepage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>{t.home.title}</h1>
        <p className="hero-subtitle">{t.home.subtitle}</p>
        <p className="hero-description">{t.home.description}</p>
        
        <div className="hero-actions">
          <Link to="/users" className="hero-button primary">
            <FcBusinessman className="button-icon" />
            {t.home.getStarted}
          </Link>
          <a 
            href={`http://localhost:3001/api/docs${language === 'tr' ? '/tr' : ''}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-button secondary"
          >
            <FcGlobe className="button-icon" />
            {t.home.apiDocs}
          </a>
        </div>
      </div>
      
      <div className="features-section">
        <h2>{t.home.features.title}</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <FcBusinessman size={64} />
            </div>
            <h3>{t.home.features.userManagement.title}</h3>
            <p>{t.home.features.userManagement.description}</p>
            <Link to="/users" className="feature-button">
              {t.nav.users}
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FcDocument size={64} />
            </div>
            <h3>{t.home.features.postManagement.title}</h3>
            <p>{t.home.features.postManagement.description}</p>
            <Link to="/posts" className="feature-button">
              {t.nav.posts}
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FcInfo size={64} />
            </div>
            <h3>{t.home.features.realTime.title}</h3>
            <p>{t.home.features.realTime.description}</p>
            <div className="features-list">
              <ul>
                <li>{t.home.features.responsive.title}</li>
                <li>{t.home.features.responsive.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-stack-section">
        <h2>{t.home.techStack.title}</h2>
        <div className="tech-info">
          <p><strong>Frontend:</strong> {t.home.techStack.frontend}</p>
          <p><strong>Backend:</strong> {t.home.techStack.backend}</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
