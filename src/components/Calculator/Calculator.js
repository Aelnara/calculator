import React, { useState } from 'react'
import CalculatorStyles from './CalculatorStyles'
import { evaluate } from 'mathjs'
import Paper from '@material-ui/core/Paper';
import InputDisplay from '../InputDisplay/InputDisplay'
import AppBar from '../AppBar/AppBar'
import ButtonGrid from '../ButtonGrid/ButtonGrid'

export default function Calculator() {
   const classes = CalculatorStyles()
   const [input, setInput] = useState('0')
   
   const inputChange = (val) => {
      if(input === '0'){
         setInput(val)
         return
      }
      setInput(input.concat(val))
   }
   
   const inputClear = () => {
      setInput('0')
   }
   
   const evaluateInput = () => {
      try {
         setInput(`${evaluate(input)}`)
      } catch (error) {
         
      }
   }
   
   return (
      <div className={classes.root}>
         <Paper className={classes.paper}>
            <AppBar />
            <InputDisplay displayValue={input}/>
            <ButtonGrid inputChange={inputChange} inputClear={inputClear} evaluateInput={evaluateInput}/>
         </Paper>
      </div>
   )
}