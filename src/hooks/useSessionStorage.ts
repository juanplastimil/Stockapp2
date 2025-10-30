import { useEffect, useState } from "react";

/**
 * Guarda/lee estado desde sessionStorage con JSON.
 * Uso: const [valor, setValor] = useSessionStorage("clave", valorInicial);
 */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      // si falla el storage, no rompemos la UI
    }
  }, [key, value]);

  return [value, setValue] as const;
}
