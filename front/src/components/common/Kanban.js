import React from 'react'
import { Box, Button, Typography, Divider, TextField, IconButton, Card } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'


const Kanban = () => {
  return (
    <>
     <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <Button>
          Add section
        </Button>
        <Typography variant='body2' fontWeight='700'>
          Sections
        </Typography>
      </Box>
      <Divider sx={{ margin: '10px 0' }} />
      


    </>
  )
}

export default Kanban