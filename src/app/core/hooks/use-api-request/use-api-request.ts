import fetch from 'cross-fetch';
import { useCallback, useEffect, useState } from 'react';

// XXX: This should be specified in a environment variable
const apiBaseUrl = 'https://frontend-exercise-api.netlify.app/.netlify/functions/server';

export interface ApiRequestManagement<T> {
  loading: boolean;
  error: any | null;
  data: T | null;
  refetch: () => void;
}

export function useApiRequest<T>(endpoint: string): ApiRequestManagement<T> {
  const [attempts, setAttempts] = useState(0);

  const [state, setState] = useState<Partial<ApiRequestManagement<T>>>({
    loading: false,
    error: null,
    data: null
  });

  const refetch = useCallback(() => setAttempts((attempts) => attempts + 1) as unknown, [
    setAttempts
  ]);

  useEffect(
    () => {
      setState({ ...state, loading: true });

      fetch(`${apiBaseUrl}${endpoint}`)
        .then((res) => res.json())
        .then((data) => setState({ loading: false, error: null, data }))
        .catch((error) => setState({ ...state, error }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [endpoint, attempts]
  );

  return { ...state, refetch } as ApiRequestManagement<T>;
}
