import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./navbar.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import LoginModal from "./LoginModal";
import SignupEmail from "./SignupEmailModal";
const style = {
  position: "absolute",

  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  overflowY: "auto",
  //   height:'500px',
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4
};

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        Sign up
      </Button>
      <Modal
        sx={{ marginTop: "100px" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{}}>
            <div className={styles.logincont}>
              <div className={styles.loginimgcont}>
                <img src="./login.svg" alt="img" />
              </div>
              <h2 className={styles.loginh1}>Sign Up</h2>
              <p className="styles loginp">
                Already a Member? <a href="">Log in</a>
              </p>
            </div>
          </Typography>
          <div className={styles.loginsocial}>
            <FacebookIcon />
            Continue With Facebook
          </div>
          <div className={styles.loginsocial}>
            <GoogleIcon sx={{ marginLeft: "-10px" }} />
            Continue With Google
          </div>
          <div className={styles.loginsocial}>
            <AppleIcon sx={{ marginLeft: "-15px" }} fontSize="large" />
            Continue With Apple
          </div>
          <div className={styles.loginsocial}>
            {/* <EmailIcon sx={{ marginLeft:'-19px'}}  />
            Sign Up With Email */}
            <SignupEmail />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
