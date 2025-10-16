/**
 * Basit e-posta formatı kontrolü
 * @param email - Kontrol edilecek e-posta dizesi
 * @returns Geçerli ise true, değilse false
 */
export const isValidEmail = (email: string): boolean => {
  // Basit regex kontrolü (Gereksinim 8'i karşılıyor: Basit e-posta format kontrolü)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Alanın boş olup olmadığını kontrol eder (Gereksinim 8: boş alan uyarıları)
 * @param value - Kontrol edilecek dize
 * @returns Boşsa true, değilse false
 */
export const isFieldEmpty = (value: string): boolean => {
  return value.trim() === '';
};