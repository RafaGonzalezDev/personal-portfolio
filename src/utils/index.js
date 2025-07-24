/**
 * Archivo de utilidades para funciones comunes reutilizables
 */

/**
 * Función para generar un id único
 * @returns {string} Un identificador único
 */
export const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substring(2, 9);
};

/**
 * Función para formatear una fecha en formato legible
 * @param {Date} date - La fecha a formatear
 * @returns {string} Fecha formateada
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es-ES', options);
};

/**
 * Función para validar un correo electrónico
 * @param {string} email - El correo electrónico a validar
 * @returns {boolean} True si el correo es válido
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};