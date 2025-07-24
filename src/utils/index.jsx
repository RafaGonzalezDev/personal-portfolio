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

/**
 * Función utilitaria para parsear texto con formato markdown
 * Convierte **texto** en elementos <strong>texto</strong>
 * 
 * @param {string} text - Texto con formato markdown
 * @returns {Array} Array de elementos React con formato aplicado
 */
export const parseHighlight = (text) => {
  // Divide el texto en partes, manteniendo los **...**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
    }
    return part;
  });
};
