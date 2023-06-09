import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, Radio, RadioGroup } from '@mui/material';

const Form = ({ setData, hasMultipleServers }) => {
  const [hasLimit, setHasLimit] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setData({
      hasLimit: JSON.parse(formData.get('has-limit')),
      limit: Number(formData.get('limit-amount')) + ((Number(formData.get('servers-amount')) > 0) ? Number(formData.get('servers-amount')) : 1),
      serversAmount: ((Number(formData.get('servers-amount')) > 0) ? Number(formData.get('servers-amount')) : 1),
      arrivalTime: Number(formData.get('arrival-time')),
      responseTime: Number(formData.get('response-time')),
    })
  };

  return (
    <Container maxWidth='md' justifyContent='flex-end'>
      <Box component='form' onSubmit={handleSubmit} m='auto'>
        <Grid container spacing={1}>
          <Grid item container xs={12}>
            <FormControl>
              <RadioGroup
                row
                defaultValue={false}
                name="has-limit"
                onChange={e => setHasLimit(JSON.parse(e.target.value))}
              >
                <FormControlLabel value={false} control={<Radio />} label='Sin Limite' />
                <FormControlLabel value={true} control={<Radio />} label='Con Limite' />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item container xs={12} sm={12} spacing={1}>
            

            <Grid item xs={12}>
              <TextField
                disabled={!hasLimit}
                required
                fullWidth
                type='number'
                name="limit-amount"
                label="Limite en espera"
                inputProps={{
                  min: 0
                }}
              />
            </Grid>
          </Grid>
          
          <Grid item container xs={12} sm={12} spacing={1}>
            
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                type='number'
                name="arrival-time"
                label="Llegada (λ)"
                inputProps={{
                  min: 0
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                type='number'
                name="response-time"
                label="Atencion (μ)"
                inputProps={{
                  min: 0,
                  step: 'any'
                }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} justifyContent='center'>
            <Button type='submit' variant='contained'>Calcular</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Form;