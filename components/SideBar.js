import { AccountBox, Groups, Home, Mail, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const SideBar = ({mode, setMode}) => {
  const ref = useRef()
  const [width, setWidth] = useState(null)


  useEffect(() => {
      setTimeout(() => {
        setWidth(ref?.current?.offsetWidth)
      }, 1500);
  }, [])
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(ref?.current?.offsetWidth)
    })
  }, [])
console.log(width)
  return (
    <Box  
      ref = {ref}
      sx = {{display: {xs: "none", sm: "block"}, flex: {xs: 1.6, lg: 1.3} }}
    >
      <Box position="fixed" sx = {{ width }}>
        <List>
          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary = "Homepage" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <Pages />
                  </ListItemIcon>
                  <ListItemText primary = "Pages" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <Groups />
                  </ListItemIcon>
                  <ListItemText primary = "Groups" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <Storefront />
                  </ListItemIcon>
                  <ListItemText primary = "Marketplace" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary = "Friends" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary = "Settings" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary = "Profile" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <ModeNight />
                  </ListItemIcon>
                  <Switch onChange = {() => setMode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Box>
  )
}

export default SideBar