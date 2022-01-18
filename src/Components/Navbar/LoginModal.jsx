import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./navbar.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { fetchUserData } from "./fetchUserData";
import { ClipLoader, BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  verifyLogin,
  wrongCredentials
} from "../../redux/auth/action";

const style = {
  position: "absolute",
  top: "42%",

  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  overflowY: "scroll",
  height: "570px",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "45px",
  boxShadow: 24,
  p: 4
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, handleState] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const [values, setValues] = React.useState({
    password: "",

    email: email,
    showPassword: false
  });

  const { isAuth, isLoading, isError } = useSelector((state) => state.auth);
  console.log("auth", isAuth, isLoading, isError);
  const dispatch = useDispatch();
  let pass=values.password
  const handleLogin = () => {
   dispatch(verifyLogin({email,pass}))
   
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        Log in
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
            
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.logincont}>
              <div className={styles.loginimgcont}>
                <img src="./login.svg" alt="img" />
              </div>
              <h2 className={styles.loginh1}>Log in</h2>
              <p className="styles loginp">
                Not a Member yet ? <a href="">Sign Up</a>
              </p>
            </div>
            <ClipLoader
              css={override}
              color="red"
              loading={isLoading}
              size={50}
            />
            <Typography
              sx={{ marginLeft: "40px", fontWeight: "550", fontSize: "16px" }}
              variant="h6"
            >
              Email
            </Typography>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "80%", m: 1, marginLeft: "40px" }}
              id="outlined-basic"
              size="small"
              variant="outlined"
            />
            <Typography
              sx={{ marginLeft: "40px", fontWeight: "550", fontSize: "16px" }}
              variant="h6"
            >
              Password
            </Typography>
            <FormControl
              sx={{ m: 1, width: "80%", marginLeft: "40px" }}
              variant="outlined"
            >
              <OutlinedInput
                size="small"
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              sx={{
                backgroundColor: "#F65858",
                width: "320px",
                padding: "10px",
                m: 2,
                borderRadius: "5px",
                marginLeft: "40px"
              }}
              variant="contained"
              onClick={handleLogin}
            >
              Log in
            </Button>
          </Typography>

          <div className={styles.loginhr}>
            <hr />
            Or
            <hr />
          </div>

          <div className={styles.loginsocial}>
            <FacebookIcon />
            Login With Facebook
          </div>
          <div className={styles.loginsocial}>
            <GoogleIcon sx={{ marginLeft: "-10px" }} />
            Login With Google
          </div>
          <div className={styles.loginsocial}>
            <AppleIcon sx={{ marginLeft: "-15px" }} fontSize="large" />
            Login With Apple
          </div>
        </Box>
      </Modal>
    </div>
  );
}
