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
import EmailIcon from "@mui/icons-material/Email";

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

export default function SignupEmail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const [values, setValues] = React.useState({
    password: "",
    name: name,
    email: email,
    showPassword: false
  });

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

  const handleSignup = () => {
    const payload = {
      name: name,
      email: email,
      password: values.password
    };
  };

  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <Button
        sx={{ color: "black", textTransform: "capitalize" }}
        onClick={handleOpen}
      >
        {" "}
        <EmailIcon sx={{ marginLeft: "-27px" }} />
        &emsp; &emsp; &emsp; &emsp; Sign Up With Email
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
            <h2 classname={styles.emailh2}>Finish signing up</h2>
            <Typography
              sx={{ marginLeft: "40px", fontWeight: "550", fontSize: "16px" }}
              variant="h6"
            >
              Your Name
            </Typography>
            <TextField
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "80%", m: 1, marginLeft: "40px" }}
              id="outlined-basic"
              size="small"
              variant="outlined"
            />
            <Typography
              sx={{ marginLeft: "40px", fontWeight: "550", fontSize: "16px" }}
              variant="h6"
            >
              Email
            </Typography>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              type="email"
              sx={{ width: "80%", m: 1, marginLeft: "40px" }}
              id="outlined-basic"
              size="small"
              variant="outlined"
              required
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

            <div
              class="g-recaptcha"
              data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
            ></div>
            <Button
              sx={{
                backgroundColor: "#F65858",
                width: "320px",
                padding: "10px",
                m: 2,
                borderRadius: "9px",
                marginLeft: "40px",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "20px"
              }}
              variant="contained"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <p className={styles.signp}>
              By signing up, you agree to <a href="">Terms of Service</a>,{" "}
              <a href="">Privacy Policy</a>, and <a href="">Cookie Policy</a>.
            </p>
            <p className={styles.signp}>
              Already a Member <a href="">Login</a>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
