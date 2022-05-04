import { Check } from '@mui/icons-material'
import { Alert, AlertTitle, Button } from '@mui/material'
import React from 'react'

const MuiAlert = () => {
  return (
    <div>
        <Alert sx = {{}} severity="success" color="info">
            Post is created successfully - check it out!
        </Alert>
    </div>
  )
}

export default MuiAlert