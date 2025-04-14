// src/services/api/auth.api.js
import { apiClient } from './index';

export const authApi = {
  login(credentials) {
    return apiClient.post('/auth/login', credentials);
  },
  
  register(userData) {
    return apiClient.post('/auth/register', userData);
  },
  
  logout() {
    return apiClient.post('/auth/logout').finally(() => {
      localStorage.removeItem('auth_token');
    });
  },
  
  refreshToken() {
    return apiClient.post('/auth/refresh');
  },
  
  forgotPassword(email) {
    return apiClient.post('/auth/forgot-password', { email });
  },
  
  resetPassword(token, newPassword) {
    return apiClient.post('/auth/reset-password', { token, newPassword });
  },
  
  getCurrentUser() {
    return apiClient.get('/auth/me');
  }
};


