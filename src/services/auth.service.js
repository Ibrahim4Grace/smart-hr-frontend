// src/services/auth.service.js
import { api } from './api';

class AuthService {
  constructor() {
    this.token = localStorage.getItem('auth_token');
    this.user = JSON.parse(localStorage.getItem('user_data') || 'null');
    
    // Set up listeners for auth events
    window.addEventListener('auth:unauthorized', this.handleUnauthorized.bind(this));
  }
  
  isAuthenticated() {
    return !!this.token;
  }
  
  async login(email, password) {
    try {
      const response = await api.auth.login({ email, password });
      
      if (response && response.token) {
        this.setAuthData(response.token, response.user);
        return response.user;
      }
      
      throw new Error('Authentication failed');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
  
  async register(userData) {
    const response = await api.auth.register(userData);
    
    if (response && response.token) {
      this.setAuthData(response.token, response.user);
      return response.user;
    }
    
    return response;
  }
  
  async logout() {
    try {
      // Call backend to invalidate token if needed
      await api.auth.logout();
    } finally {
      // Clear local auth data regardless of API response
      this.clearAuthData();
    }
  }
  
  async getCurrentUser() {
    // Return cached user if available
    if (this.user) {
      return this.user;
    }
    
    // Otherwise fetch fresh user data
    try {
      const userData = await api.auth.getCurrentUser();
      if (userData) {
        this.user = userData;
        localStorage.setItem('user_data', JSON.stringify(userData));
      }
      return userData;
    } catch (error) {
      this.clearAuthData();
      throw error;
    }
  }
  
  setAuthData(token, user) {
    this.token = token;
    this.user = user;
    
    localStorage.setItem('auth_token', token);
    
    if (user) {
      localStorage.setItem('user_data', JSON.stringify(user));
    }
    
    // Dispatch event for components to react
    window.dispatchEvent(new CustomEvent('auth:login', { detail: { user } }));
  }
  
  clearAuthData() {
    this.token = null;
    this.user = null;
    
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    
    // Dispatch event for components to react
    window.dispatchEvent(new CustomEvent('auth:logout'));
  }
  
  handleUnauthorized() {
    this.clearAuthData();
  }
}

// Export a singleton instance
export const authService = new AuthService();