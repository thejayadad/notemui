import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
  return (
    <>
    <Box
      component='form'
      sx={{ mt: 1 }}
      noValidate
    >
      <TextField
        margin='normal'
        required
        fullWidth
        id='username'
        label='Username'
        name='username'

      />
      <TextField
        margin='normal'
        required
        fullWidth
        id='password'
        label='Password'
        name='password'
        type='password'

      />
      <TextField
        margin='normal'
        required
        fullWidth
        id='confirmPassword'
        label='Confirm Password'
        name='confirmPassword'
        type='password'

      />

    </Box>
    <Button
      component={Link}
      to='/login'
      sx={{ textTransform: 'none' }}
    >
      Already have an account? Login
    </Button>
  </>
  )
}

export default Signup