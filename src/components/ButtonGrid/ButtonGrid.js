import React from 'react'
import ButtonGridStyles from './ButtonGridStyles'
import Button from '@material-ui/core/Button'

export default function ButtonGrid({ inputChange, inputClear, evaluateInput }) {
   const classes = ButtonGridStyles()
   
   const handleInputChange = (e) => {
      inputChange(e.currentTarget.value)
   }

   return (
      <div className={classes.ButtonGrid}>
         <Button onClick={handleInputChange} variant='contained' value={1}>1</Button>
         <Button onClick={handleInputChange} variant='contained' value={2}>2</Button>
         <Button onClick={handleInputChange} variant='contained' value={3}>3</Button>
         <Button onClick={handleInputChange} className={classes.operation} variant='contained' value={'+'}>+</Button>
         
         <Button onClick={handleInputChange} variant='contained' value={4}>4</Button>
         <Button onClick={handleInputChange} variant='contained' value={5}>5</Button>
         <Button onClick={handleInputChange} variant='contained' value={6}>6</Button>
         <Button onClick={handleInputChange} className={classes.operation} variant='contained' value={'-'}>-</Button>
         
         <Button onClick={handleInputChange} variant='contained' value={7}>7</Button>
         <Button onClick={handleInputChange} variant='contained' value={8}>8</Button>
         <Button onClick={handleInputChange} variant='contained' value={9}>9</Button>
         <Button onClick={handleInputChange} className={classes.operation} variant='contained' value={'*'}>×</Button>
         
         <Button onClick={handleInputChange} variant='contained' value={'.'}>.</Button>
         <Button onClick={handleInputChange} variant='contained' value={0}>0</Button>
         <Button onClick={evaluateInput} variant='contained' value={'='}>=</Button>
         <Button onClick={handleInputChange} className={classes.operation} variant='contained' value={'/'}>/</Button>
         
         <Button onClick={inputClear} className={classes.clear} variant='contained' value={'/'}>Clear</Button>
      </div>
   )
}