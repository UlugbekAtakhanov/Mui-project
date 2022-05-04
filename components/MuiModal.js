import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField, Box } from '@mui/material';
import { EmojiEmotionsOutlined, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import MuiAlert from './MuiAlert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "min(400px, 90vw)",
  p: 4,
};

export default function BasicModal({modalOpen, setModalOpen}) {

  const handleClose = () => setModalOpen(false);
  const [alert, setAlert] = React.useState(false)
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  bgcolor = {"background.default"} color = {"text.primary"}>
            <Box sx = {{marginBottom: "1rem", display: alert ? "block" : "none"}}>
                <MuiAlert />
            </Box>
          <Typography sx = {{textAlign: "center"}} id="modal-modal-title" variant="h6" component="h2">
            Create a Post
          </Typography>
          <TextField fullWidth id="standard-basic" label="Add post" variant="standard" />
          <Stack direction = "row" spacing = ".7rem" sx = {{marginTop: "1rem"}}>
            <EmojiEmotionsOutlined color = "secondary" />
            <Image color = "info" />
            <VideoCameraBack color = "error" />
            <PersonAdd color = "warning" />
          </Stack>
          <Stack sx = {{marginTop: "1rem"}}>
              <Button variant = "contained" onClick = {() => {
                  setAlert(true)
                  setTimeout(() => {
                      setModalOpen(false)
                      setAlert(false)
                  }, 5000);
              }}>Add Post</Button>

            


          </Stack>
        </Box>
      </Modal>
    </div>
  );
}