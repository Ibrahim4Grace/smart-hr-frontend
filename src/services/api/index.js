// src/services/api/index.js
import { authApi } from './auth.api';
import { usersApi } from './users.api';
import { productsApi } from './products.api';
// Import other domain-specific API modules

// Set base configuration
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';

// Configure request defaults
const getDefaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  const token = localStorage.getItem('auth_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

// Core API client for making requests
export const apiClient = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      ...options,
      headers: {
        ...getDefaultHeaders(),
        ...options.headers
      },
      credentials: 'include', // For cookies, if needed
    };
    
    try {
      const response = await fetch(url, config);
      
      // Handle session expiration consistently
      if (response.status === 401) {
        // Clear authentication state
        localStorage.removeItem('auth_token');
        
        // You could emit a global event for unauthorized requests
        const event = new CustomEvent('auth:unauthorized');
        window.dispatchEvent(event);
        
        // Redirect to login
        window.location.href = '/login';
        return null;
      }
      
      // Handle other server errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          status: response.status,
          statusText: response.statusText,
          ...errorData
        };
      }
      
      // Parse JSON if possible, otherwise return raw response
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return await response.text();
    } catch (error) {
      console.error(`API Request failed for ${url}:`, error);
      throw error;
    }
  },
  
  // HTTP method shortcuts
  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  },
  
  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  },
  
  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
};

// Export domain-specific APIs
export const api = {
  auth: authApi,
  users: usersApi,
  products: productsApi,
  // Other domain APIs
};