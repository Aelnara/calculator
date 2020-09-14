import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   ButtonGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '0.5rem',
      '& button': {
         fontSize: '2rem'
      }
   },
   operation: {
      backgroundColor: '#f18f33 !important'
   },
   clear: {
      gridColumn: '1 / 5',
      color: 'white !important',
      backgroundColor: '#a84040 !important'
   }
})