import React from 'react';

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