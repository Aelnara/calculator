import React from 'react';
import Calculator from './components/Calculator/Calculator'
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
   return (
      <ThemeProvider>
         <Calculator />
      </ThemeProvider>
   );
}