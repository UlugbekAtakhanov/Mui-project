import React, { useState } from 'react'
import Image from 'next/image';
import { AppBar, Avatar, Badge, Box, Button, Input, InputBase, Menu, MenuItem, styled, TextField, Toolbar, Typography } from '@mui/material'
import {Mail, NotificationAdd, Notifications, Search, Spa} from "@mui/icons-material"


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})



const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='sticky'>
      <StyledToolbar>

        <Typography variant = "h6"
          sx = {{display: {xs: "none", sm: "block"}}}
        >Mui Project</Typography>

        <Spa
          sx = {{display: {xs: "block", sm: "none"}}}
        />

        <Box   bgcolor = {"background.default"} color = {"text.primary"}  sx = {{borderRadius: "4px", padding: "0 10px",display: "flex", alignItems: "center", width: {xs: "50%", sm: "30%"}}}>
          <Search sx = {{color: "#888"}} />
          <InputBase placeholder='search...' size = "small" />
        </Box>

        <Box sx = {{display: {xs: "none", sm: "flex"}, gap: "1rem", alignItems: "center"}}>
          <Badge badgeContent = {1} color = "error" >
            <Mail />
          </Badge>
          <Badge badgeContent = {2} color = "error" >
            <Notifications />
          </Badge>
          <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                <Avatar  src = "/profile2.png" alt = "U" sx = {{bgcolor: "#eee"}} />
          </Button>
        </Box>

        <Box sx = {{display: {xs: "block", sm: "none"}}}>
          <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
              <Avatar  src = "/profile2.png" alt = "U" sx = {{bgcolor: "#eee"}} />
        </Button>
        </Box>

      </StyledToolbar>


      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar