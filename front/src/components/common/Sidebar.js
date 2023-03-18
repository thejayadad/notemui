import React from 'react'
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'


const Sidebar = () => {
  const sidebarWidth = 250



  return (
    <Drawer
    container={window.document.body}
    variant='permanent'
    open={true}
    sx={{
      width: sidebarWidth,
      height: '100vh',
      '& > div': { borderRight: 'none' }
    }}
  >
     <List
        disablePadding
        sx={{
          width: sidebarWidth,
          height: '100vh',
          backgroundColor: "#222"
        }}
      >
        <ListItem>

        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant='body2' fontWeight='700'>
              Username
            </Typography>
            <IconButton>
              <LogoutOutlinedIcon fontSize='small' />
            </IconButton>
          </Box>
        </ListItem>
      </List>

    </Drawer>
  )
}

export default Sidebar