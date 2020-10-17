import { useCallback, useEffect, useState } from 'react';

// Hooks
import { useGet } from './useGet';

// Types
import { IFetchReturn } from '../interfaces/hooks/UseFetch';

export function useFetch<T = unknown>(URL: string): IFetchReturn<T> {
  const apiGet = useGet<T>();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const fetchFromApi = useCallback(async () => {
    setLoading(true);
    setErrors(false);

    const result = await apiGet(URL);
    if (!result) setErrors(true);

    setData(result);
    setLoading(false);
  }, [URL, apiGet]);

  useEffect(() => {
    fetchFromApi();
  }, [fetchFromApi]);

  return {
    data,
    loading,
    errors,
  };
}
