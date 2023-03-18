import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
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

      </Box>
      <Button
        component={Link}
        to='/signup'
        sx={{ textTransform: 'none' }}
      >
        Don't have an account? Signup
      </Button>


    </>
  )
}

export default Login