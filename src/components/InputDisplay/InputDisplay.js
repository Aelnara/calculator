import React from 'react'
import InputDisplayStyles from './InputDisplayStyles'

export default function InputDisplay({ displayValue }) {
   const classes = InputDisplayStyles()
   
   return (
      <input className={classes.InputDisplay} value={displayValue} disabled />
   )
}