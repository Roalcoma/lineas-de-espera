import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const DisplayDataBox = ({ data }) => {

  return (
    <Grid container justifyContent='center'>
      {
        Object.entries(data).map(([key, value], i) => {

          return (

            <Grid key={i} item xs={12} sm={8} display='flex' columnGap='2rem' gridTemplateColumns='2rem, 2rem' justifyContent='center'>
              <Typography component="h5" variant='subtitle1' textAlign='right' fontWeight='bold'>
                {key}
              </Typography>
              <Typography component="p" variant="overline" textAlign='right' fontSize='medium'>
                {value}
              </Typography>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default DisplayDataBox;