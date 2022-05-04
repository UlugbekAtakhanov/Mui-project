import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Switch } from '@mui/material'
import { AccountBox, Groups, Home, ModeNight, Pages, Settings, Storefront } from '@mui/icons-material'


const MuiBottomNavigation = ({mode, setMode}) => {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation  bgcolor = {"background.default"} color = {"text.primary"} showLabels sx = {{ display: {sm: "none"}, backdropFilter: "blur(10px)"}}  value = {value} onChange = {(e, newValue) => setValue(newValue)}>
        <BottomNavigationAction label = "Homepage" icon = {<Home />} />
        <BottomNavigationAction label = "Pages" icon = {<Pages />} />
        <BottomNavigationAction label = "Groups" icon = {<Groups />} />
        <BottomNavigationAction onClick = {() => setMode(mode === "light" ? "dark" : "light")} label = "NightMode" icon = {<ModeNight  />} />
    </BottomNavigation>
  )
}

export default MuiBottomNavigation