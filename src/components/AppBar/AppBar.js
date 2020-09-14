import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import AppBarStyles from './AppBarStyles'
import Switch from '@material-ui/core/Switch';

export default function AppBar() {
   const { isDark, setIsDark } = useContext(ThemeContext);
   const classes = AppBarStyles(isDark)
   
   const toggleTheme = () => {
      setIsDark(!isDark)
   }
   
   return (
      <div className={classes.AppBar}>
         <h1>Calculator</h1>
         <Switch
            checked={isDark}
            onChange={toggleTheme}
            color="default"
         />
      </div>
   )
}