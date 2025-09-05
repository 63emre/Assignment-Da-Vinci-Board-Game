import React, { useState, useEffect } from 'react';
import type { Post, User } from '../types';
import { ApiService } from '../services/api';
import { FcPlus, FcEditImage, FcEmptyTrash, FcBusinessman } from 'react-icons/fc';
import PostForm from './PostForm';
import Modal from './Modal';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [postsData, usersData] = await Promise.all([
        ApiService.getPosts(),
        ApiService.getUsers()
      ]);
      setPosts(postsData);
      setUsers(usersData);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowModal(true);
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setShowModal(true);
  };

  const handleDeletePost = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await ApiService.deletePost(id);
        setPosts(posts.filter(post => post.id !== id));
      } catch (err) {
        setError('Failed to delete post. Please try again.');
        console.error('Error deleting post:', err);
      }
    }
  };

  const handlePostSubmit = async (postData: Omit<Post, 'id'>) => {
    try {
      if (editingPost) {
        const updatedPost = await ApiService.updatePost(editingPost.id, postData);
        setPosts(posts.map(post => post.id === editingPost.id ? updatedPost : post));
      } else {
        const newPost = await ApiService.createPost(postData);
        setPosts([newPost, ...posts]);
      }
      setShowModal(false);
      setEditingPost(null);
    } catch (err) {
      setError('Failed to save post. Please try again.');
      console.error('Error saving post:', err);
    }
  };

  const getUserName = (userId: number): string => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : `User ${userId}`;
  };

  const getFilteredPosts = () => {
    if (selectedUserId) {
      return posts.filter(post => post.userId === selectedUserId);
    }
    return posts;
  };

  const handleUserFilter = (userId: number | null) => {
    setSelectedUserId(selectedUserId === userId ? null : userId);
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <button onClick={fetchData} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  const filteredPosts = getFilteredPosts();

  return (
    <div className="post-list-container">
      <div className="page-header">
        <h2>Post Management</h2>
        <button onClick={handleCreatePost} className="primary-button">
          <FcPlus className="button-icon" />
          Add New Post
        </button>
      </div>

      <div className="filters-section">
        <h3>Filter by User:</h3>
        <div className="user-filters">
          <button
            onClick={() => handleUserFilter(null)}
            className={`filter-button ${selectedUserId === null ? 'active' : ''}`}
          >
            All Posts ({posts.length})
          </button>
          {users.map(user => {
            const userPostCount = posts.filter(post => post.userId === user.id).length;
            return (
              <button
                key={user.id}
                onClick={() => handleUserFilter(user.id)}
                className={`filter-button ${selectedUserId === user.id ? 'active' : ''}`}
              >
                <FcBusinessman className="button-icon" />
                {user.name} ({userPostCount})
              </button>
            );
          })}
        </div>
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-card-header">
              <div className="post-meta">
                <span className="post-id">#{post.id}</span>
                <span className="post-author">by {getUserName(post.userId)}</span>
              </div>
              <div className="post-actions">
                <button
                  onClick={() => handleEditPost(post)}
                  className="action-button"
                  title="Edit Post"
                >
                  <FcEditImage />
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="action-button delete"
                  title="Delete Post"
                >
                  <FcEmptyTrash />
                </button>
              </div>
            </div>
            
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              {post.body && <p className="post-body">{post.body}</p>}
            </div>

            <div className="post-footer">
              <span className="user-id-badge">User ID: {post.userId}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="empty-state">
          {selectedUserId 
            ? `No posts found for ${getUserName(selectedUserId)}`
            : 'No posts found. Create your first post!'
          }
        </div>
      )}

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingPost(null);
        }}
        title={editingPost ? 'Edit Post' : 'Create New Post'}
      >
        <PostForm
          post={editingPost}
          users={users}
          onSubmit={handlePostSubmit}
          onCancel={() => {
            setShowModal(false);
            setEditingPost(null);
          }}
        />
      </Modal>
    </div>
  );
};

export default PostList;
