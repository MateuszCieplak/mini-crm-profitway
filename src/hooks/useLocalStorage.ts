import { useState, useEffect, type Dispatch, type SetStateAction } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if(typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    if(saved !== null) {
      try {
        return JSON.parse(saved) as T;
      } catch (e) {
        console.error("Błąd parsowania JSON z Local Storage:", e)
        return defaultValue;
      }
    }
  }
 return defaultValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
