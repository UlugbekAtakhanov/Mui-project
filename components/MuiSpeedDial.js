import React from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Box, Fab } from '@mui/material'
import {FileCopyOutlined } from '@mui/icons-material'
import { Add } from '@mui/icons-material'

const MuiSpeedDial = ({ setModalOpen}) => {
  return (
    <Box onClick = {(() => setModalOpen(true))} sx={{position: "fixed", bottom: {xs: 60, sm: 16}, left: {xs: "50%", sm: 16}, transform: {xs: "translateX(-50%)", sm: "translateX(0)"}}}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
    </Box>
  )
}

export default MuiSpeedDial