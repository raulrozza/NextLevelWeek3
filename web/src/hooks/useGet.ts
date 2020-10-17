import { useCallback } from 'react';

// Services
import api from '../services/api';

// Types
import { ApiGet } from '../interfaces/hooks/UseGet';

export function useGet<T = unknown>(): ApiGet<T> {
  const apiGet = useCallback(async (URL: string) => {
    try {
      const response = await api.get<T>(URL);

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return apiGet;
}
