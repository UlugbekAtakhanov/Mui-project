import Head from 'next/head'

import {Box, Container, Stack, Button, IconButton, SpeedDial, SpeedDialIcon, SpeedDialAction, createTheme, ThemeProvider} from "@mui/material"
import {Menu, ArrowBackIos, Edit, Save, Print, Share, FileCopy} from "@mui/icons-material"


import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar'
import RightDrawer from '../components/RightDrawer'
import { useState, useRef, useEffect } from 'react'
import MuiBottomNavigation from '../components/MuiBottomNavigation'
import MuiSpeedDial from '../components/MuiSpeedDial'
import MuiModal from '../components/MuiModal'
import MuiAlert from '../components/MuiAlert'


export default function Home() {
  const ref = useRef()
  const [width, setWidth] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [mode, setMode] = useState("light")

  useEffect(() => {
      setTimeout(() => {
        setWidth(ref?.current?.offsetWidth)
      }, 1500);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (ref?.current?.offsetWidth) {
        setWidth(ref.current.offsetWidth)
      }
    })
  }, [])


  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme = {darkTheme}>
      <Box bgcolor = {"background.default"} color = {"text.primary"}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

          {/* Drawer */}
          <IconButton onClick = {() => setIsDrawerOpen(true)} size = "large"   
          sx = {{position: "fixed", right: "-1rem", top: "35%", bgcolor: "#1976d2",color: "white",display: {md: "none"},
            "&:hover": {
              bgcolor: "#42a5f5"          
            }
          }}>
              <ArrowBackIos  />
          </IconButton>
          <RightDrawer isDrawerOpen = {isDrawerOpen} setIsDrawerOpen = {setIsDrawerOpen} />

        <Stack direction = "row">
          <SideBar mode = {mode} setMode = {setMode} />
          <Feed />

          {/* RIghtbar */}
          <Box ref = {ref}  sx = {{display: {xs: "none", md: "block"},  flex: 2.2, paddingBlock: "1rem"}}>
            <Box sx = {{position: "fixed", width}}>
              <RightBar width = {width} />
            </Box>
          </Box>

        </Stack>


          <div style = {{width: "100%", position: "fixed", bottom: 0,}}>
            <MuiBottomNavigation mode = {mode} setMode = {setMode} />
          </div>

          <MuiSpeedDial setModalOpen = {setModalOpen} />
          <MuiModal modalOpen = {modalOpen} setModalOpen = {setModalOpen} />


      </Box>
    </ThemeProvider>
  )
}
