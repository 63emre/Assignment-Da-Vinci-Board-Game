import React, { useState, useEffect } from 'react';
import type { User } from '../types';
import { ApiService } from '../services/api';
import { FcPlus, FcEditImage, FcEmptyTrash, FcDocument } from 'react-icons/fc';
import { useLanguage } from '../contexts/LanguageContext';
import UserForm from './UserForm';
import Modal from './Modal';

const UserList: React.FC = () => {
  const { t } = useLanguage();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(t.messages.networkError);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = async (id: number) => {
    if (window.confirm(t.users.confirmDelete)) {
      try {
        await ApiService.deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        setError(t.messages.errorOccurred);
        console.error('Error deleting user:', err);
      }
    }
  };

  const handleUserSubmit = async (userData: Omit<User, 'id'>) => {
    try {
      if (editingUser) {
        const updatedUser = await ApiService.updateUser(editingUser.id, userData);
        setUsers(users.map(user => user.id === editingUser.id ? updatedUser : user));
      } else {
        const newUser = await ApiService.createUser(userData);
        setUsers([...users, newUser]);
      }
      setShowModal(false);
      setEditingUser(null);
    } catch (err) {
      setError(t.messages.errorOccurred);
      console.error('Error saving user:', err);
    }
  };

  const handleViewUserPosts = (userId: number) => {
    setSelectedUserId(selectedUserId === userId ? null : userId);
  };

  if (loading) {
    return <div className="loading">{t.common.loading}</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <button onClick={fetchUsers} className="retry-button">
          {t.common.retry || 'Retry'}
        </button>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <div className="page-header">
        <h2>{t.users.title}</h2>
        <button onClick={handleCreateUser} className="primary-button">
          <FcPlus className="button-icon" />
          {t.users.addUser}
        </button>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <h3>{user.name}</h3>
              <div className="user-actions">
                <button
                  onClick={() => handleViewUserPosts(user.id)}
                  className="action-button"
                  title={t.users.viewPosts}
                >
                  <FcDocument />
                </button>
                <button
                  onClick={() => handleEditUser(user)}
                  className="action-button"
                  title={t.common.edit}
                >
                  <FcEditImage />
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="action-button delete"
                  title={t.common.delete}
                >
                  <FcEmptyTrash />
                </button>
              </div>
            </div>
            
            <div className="user-details">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
              {user.website && <p><strong>Website:</strong> {user.website}</p>}
            </div>

            {selectedUserId === user.id && (
              <div className="user-posts-preview">
                <h4>Posts by this user will be shown here</h4>
                <p>This feature will be connected when backend is ready</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <div className="empty-state">
          <p>No users found. Create your first user!</p>
        </div>
      )}

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingUser(null);
        }}
        title={editingUser ? t.users.editUser : t.users.addUser}
      >
        <UserForm
          user={editingUser}
          onSubmit={handleUserSubmit}
          onCancel={() => {
            setShowModal(false);
            setEditingUser(null);
          }}
        />
      </Modal>
    </div>
  );
};

export default UserList;
