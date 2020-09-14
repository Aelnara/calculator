import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
   const [isDark, setIsDark] = useState(false)
   
   return (
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
         {props.children}
      </ThemeContext.Provider>
   );
}