import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IosShareIcon from '@mui/icons-material/IosShare';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '14px',
  p: 4
};

const style1 = {
    position: 'relative',
    bottom: '8px',
    fontWeight: 'bold',
    color: 'grey',
    cursor: 'pointer'
}

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <IosShareIcon onClick={handleOpen} sx={{ color:"#979595", cursor: 'pointer' }} />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <h3 style={{textAlign: 'center', marginTop: '0px'}}>Share This Event</h3>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <FacebookIcon /> <span style={style1}>Facebook</span>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <InstagramIcon /> <span style={style1}>Instagram</span>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TwitterIcon /> <span style={style1}>Twitter</span>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <EmailIcon /> <span style={style1}>Email</span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
