import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: isDark => !isDark ? 'linear-gradient(0deg, rgba(221,221,221,1) 0%, rgba(255,255,255,1) 100%)'
         : 'linear-gradient(0deg, rgba(75,75,75,1) 0%, rgba(103,103,103,1) 100%)'
   },
   paper: {
      width: '400px',
      height: '600px',
      padding: '1rem',
      background: isDark => !isDark ? 'linear-gradient(0deg, rgba(246,242,242,1) 0%, rgba(228,228,228,1) 50%, rgba(246,242,242,1) 100%)'
         : 'linear-gradient(0deg, rgba(20,19,19,1) 0%, rgba(0,0,0,0.9472163865546218) 50%, rgba(20,19,19,1) 100%)'
   }
})