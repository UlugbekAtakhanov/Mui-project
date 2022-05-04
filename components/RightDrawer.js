import React, { useEffect, useRef, useState } from 'react'
import { Box, Drawer} from '@mui/material'
import RightBar from './RightBar'

const RightDrawer = ({isDrawerOpen, setIsDrawerOpen,}) => {
  const ref2 = useRef()
  const [width2, setWidth2] = useState(null)

  useEffect(() => {
      setTimeout(() => {
        setWidth2(ref2?.current?.offsetWidth)
      }, 1000);
  }, [isDrawerOpen])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (ref2?.current?.offsetWidth) {
        setWidth2(ref2.current.offsetWidth)
      }
    })
  }, [])

  return (
      <>
        <Drawer anchor = "right" open = {isDrawerOpen} onClose = {() => setIsDrawerOpen(false)}>
            <Box  onClick = {() => setIsDrawerOpen(false)} ref = {ref2} p = "1rem" sx = {{width: {xs: "90vw", sm: "60vw"}}} role = "presentation">
                <RightBar width={width2} />
            </Box>
        </Drawer>
    </>
  )
}

export default RightDrawer