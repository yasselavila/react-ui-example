import { useCallback } from 'react';

export interface LocalStorageManager<T> {
  setValue: (value: T) => void;
  getValue: () => T | null;
}

export function useLocalStorage<T>(key: string, defaultValue?: T): LocalStorageManager<T> {
  const getValue = useCallback(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  }, [defaultValue, key]);

  const setValue = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return { getValue, setValue };
}
