import React from 'react'
import AppBarStyles from './AppBarStyles'
import Switch from '@material-ui/core/Switch';

export default function AppBar() {
   const classes = AppBarStyles()
   
   return (
      <div className={classes.AppBar}>
         <h1>Calculator</h1>
         <Switch
            color="default"
         />
      </div>
   )
}