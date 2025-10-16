// src/utils/useTheme.tsx

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

/**
 * Temayı yöneten ve yerel depolamayı (localStorage) kullanan özel hook.
 * @returns { theme, toggleTheme }
 */
export const useTheme = () => {
    // LocalStorage'dan temayı yükle veya varsayılanı 'light' olarak ayarla
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem('theme') as Theme;
        return storedTheme || 'light';
    });

    // Temayı değiştiren fonksiyon
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    // Tema değiştiğinde HTML kök elementini ve LocalStorage'ı güncelle
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};

// Bu dosya, Landing.tsx'te 'export { useTheme }' şeklinde çağrılır.
// Bu yüzden 'export const useTheme' kullanımı doğrudur.