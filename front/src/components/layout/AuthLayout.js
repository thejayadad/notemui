import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Box } from '@mui/material'


const AuthLayout = () => {
  return (
    <Container component="main" maxWidth="xs">
         <Box sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100px' }} alt='app logo' />
          <Outlet />
        </Box>

    </Container>
  )
}

export default AuthLayout