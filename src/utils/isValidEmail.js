/**
 * Función para validar un correo electrónico
 * @param {string} email - El correo electrónico a validar
 * @returns {boolean} True si el correo es válido
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};