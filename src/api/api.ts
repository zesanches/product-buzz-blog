import axios from 'axios';
import { toast } from 'sonner';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});


// Intercept errors globally
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 500) {
      toast.error('Internal server error. Please try again later.', {
        description: error.response.data?.message || 'An unexpected error occurred.',
        duration: 5000,
        action: {
          label: 'Dismiss',
          onClick: () => {
            toast.dismiss();
          }
        }
      });
    }

    return Promise.reject(error);
  }
);

export { api };