import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  
top:'35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  
  overflowY:'auto',
//   height:'500px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{color:'black'}} onClick={handleOpen}>Sign up</Button>
      <Modal
      sx={{marginTop:'100px'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vitae ipsum aliquam numquam cupiditate a non aspernatur reiciendis nulla illum dignissimos quibusdam modi eveniet incidunt, quos odio. Nesciunt voluptate voluptatem, quod doloribus mollitia inventore quia provident illum asperiores culpa. Soluta, ad eius. Sint tempora quidem exercitationem reprehenderit impedit facere, eligendi placeat molestias fugiat, nisi perferendis cum recusandae, ducimus deserunt ea.mollitia inventore quia provident illum asperiores culpa. Soluta, ad eius. Sint tempora quidem exercitationem reprehenderit impedit facere, eligendi placeat molestias fugiat, nisi perferendis cum recusandae, ducimus deserunt ea
                      
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}