import { User, Post } from '../types';

const BASE_URL = '/api';

export class ApiService {
  // User CRUD operations
  static async getUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }

  static async getUser(id: number): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  }

  static async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    return response.json();
  }

  static async updateUser(id: number, user: Partial<User>): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    return response.json();
  }

  static async deleteUser(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
  }

  // Post CRUD operations
  static async getPosts(): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  }

  static async getPost(id: number): Promise<Post> {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return response.json();
  }

  static async getPostsByUser(userId: number): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user posts');
    }
    return response.json();
  }

  static async createPost(post: Omit<Post, 'id'>): Promise<Post> {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return response.json();
  }

  static async updatePost(id: number, post: Partial<Post>): Promise<Post> {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    return response.json();
  }

  static async deletePost(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  }
}