import React, { createContext, useContext, useState } from 'react';
import { theme as defaultTheme } from '../theme';

/**
 * Theme Context for managing app-wide theme
 * Can be extended to support dark mode
 */
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme] = useState(defaultTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    theme,
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

