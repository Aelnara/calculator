import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   AppBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& h1': {
         fontWeight: '400',
         letterSpacing: '1px',
         color: isDark => !isDark ? 'black' : 'white'
      }
   }
})