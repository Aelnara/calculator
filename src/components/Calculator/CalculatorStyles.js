import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },
   paper: {
      width: '400px',
      height: '600px',
      padding: '1rem',
      background: 'linear-gradient(0deg, rgba(246,242,242,1) 0%, rgba(228,228,228,1) 50%, rgba(246,242,242,1) 100%)',
   }
})