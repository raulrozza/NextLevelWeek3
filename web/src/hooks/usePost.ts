import { useCallback } from 'react';

// Services
import api from '../services/api';

// Types
import { ApiPost } from '../interfaces/hooks/UsePost';

export function usePost<T = unknown>(): ApiPost<T> {
  const apiPost = useCallback(async (URL: string, body: unknown) => {
    try {
      const response = await api.post<T>(URL, body);

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  return apiPost;
}
