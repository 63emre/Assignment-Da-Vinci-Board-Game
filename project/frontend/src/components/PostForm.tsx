import React, { useState, useEffect } from 'react';
import type { Post, User } from '../types';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { useLanguage } from '../contexts/LanguageContext';

interface PostFormProps {
  post?: Post | null;
  users: User[];
  onSubmit: (postData: Omit<Post, 'id'>) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, users, onSubmit, onCancel }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1,
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        body: post.body || '',
        userId: post.userId || 1,
      });
    }
  }, [post]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.title.trim()) {
      newErrors.title = t.posts.form.titleRequired;
    }

    if (!formData.userId) {
      newErrors.userId = t.posts.form.userRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        title: formData.title.trim(),
        body: formData.body.trim(),
        userId: formData.userId,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'userId' ? parseInt(value) : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="form-group">
        <label htmlFor="userId">{t.posts.form.user} *</label>
        <select
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className={errors.userId ? 'error' : ''}
        >
          <option value="">{t.posts.form.selectUser}</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name} (@{user.username})
            </option>
          ))}
        </select>
        {errors.userId && <span className="error-text">{errors.userId}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="title">{t.posts.form.title} *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
          placeholder={t.posts.form.title}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="body">{t.posts.form.body}</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder={t.posts.form.body}
          rows={6}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          <FcCheckmark className="button-icon" />
          {post ? t.posts.editPost : t.posts.addPost}
        </button>
        <button type="button" onClick={onCancel} className="cancel-button">
          <FcCancel className="button-icon" />
          {t.common.cancel}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
