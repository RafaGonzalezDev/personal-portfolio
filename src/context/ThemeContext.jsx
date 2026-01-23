import { createContext } from 'react';

/**
 * Theme context for managing light/dark mode
 * @typedef {Object} ThemeContextValue
 * @property {'light' | 'dark'} theme - Current theme
 * @property {() => void} toggleTheme - Function to toggle between light and dark themes
 */

/**
 * @type {import('react').Context<ThemeContextValue | undefined>}
 */
export const ThemeContext = createContext(undefined);