// src/services/api/users.api.js
import { apiClient } from './index';

export const usersApi = {
  getAll(params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    return apiClient.get(`/users${queryParams ? '?' + queryParams : ''}`);
  },
  
  getById(id) {
    return apiClient.get(`/users/${id}`);
  },
  
  create(userData) {
    return apiClient.post('/users', userData);
  },
  
  update(id, userData) {
    return apiClient.put(`/users/${id}`, userData);
  },
  
  delete(id) {
    return apiClient.delete(`/users/${id}`);
  }
};

// Create similar modules for other domain entities (products, orders, etc.)