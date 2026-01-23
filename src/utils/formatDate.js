/**
 * Función para formatear una fecha en formato legible
 * @param {Date} date - La fecha a formatear
 * @returns {string} Fecha formateada
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es-ES', options);
};