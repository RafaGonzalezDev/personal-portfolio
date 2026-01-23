/**
 * Función para generar un id único
 * @returns {string} Un identificador único
 */
export const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substring(2, 9);
};