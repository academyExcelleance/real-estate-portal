import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation,withRouter,useParams} from "react-router-dom";
import Partnership from "../partnership/Partnership"
import Modal from '@mui/material/Modal';

//https://www.9lessons.info/2017/11/reactjs-login-facebook-google-using-restful.html
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
 function ModalSignUp(props) {
  const [signUpResultMessage,setSignUpResultMessage] = React.useState("");
  const [color,setColor] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [validFirstName, setValidFirstName] = React.useState(true);
  const [helperTextFirstName, setHelperTextFirstName] = React.useState("");

  const [validLastName, setValidLastName] = React.useState(true);
  const [helperTextLastName, setHelperTextLastName] = React.useState("");

  const [validEmail, setValidEmail] = React.useState(true);
  const [helperTextEmail, setHelperTextEmail] = React.useState("");

  const [validUserName, setValidUserName] = React.useState(true);
  const [helperTextUserName, setHelperTextUserName] = React.useState("");

  const [validPassword, setValidPassword] = React.useState(true);
  const [helperTextPassword, setHelperTextPassword] = React.useState("");

  const [token, setToken] = React.useState("notvalid");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    alert("child close");
    setOpen(false);
  }

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    console.log({
      username:data.get('userName'),
      password:data.get('password'),
      firstnName:data.get('firstName'),
      lastName:data.get('lastName'),
      email:data.get('email'),
      event: event.error
    });

    setValidFirstName(true);
    setValidLastName(true);
    setValidEmail(true);
    setValidUserName(true);
    setValidPassword(true);

    setHelperTextFirstName("");
    setHelperTextLastName("");
    setHelperTextUserName("");
    setHelperTextEmail("");
    setHelperTextPassword("");

    let validData = true;
    let firstName = data.get("firstName");
    if (firstName.trim().length == 0) {
      setValidFirstName (false);
      setHelperTextFirstName("Please provide valid first name");
      validData = false;
    }

    let lastName = data.get("lastName");
    if (lastName.trim().length == 0) {
      setValidLastName (false);
      setHelperTextLastName("Please provide valid last name");
      validData = false;
    }

    let userName = data.get("userName");
    if (userName.trim().length == 0) {
      setValidUserName (false);
      setHelperTextUserName("Please provide valid user name");
      validData = false;
    }

    let email = data.get("email");
    if (email.trim().length == 0) {
      setValidEmail(false);
      setHelperTextEmail("Please provide valid email");
      validData = false;
    }else {
      let isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
      if (!isValidEmail){
        validData = false;
        setHelperTextEmail("Please provide valid email");
      }
    }
    let password = data.get("password");
    if (password.trim().length == 0) {
      setValidPassword(false);
      setHelperTextPassword("Please provide valid password");
      validData = false;
    }else if (password.trim().length < 8 ){
        validData = false;
        setValidPassword(false);
      setHelperTextPassword("Password will have minimum 8 characters.");
    }

    if (validData) {
        (async () => {
          const requestOptions  = {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               username:data.get('userName'),
               password:data.get('password'),
               firstName:data.get('firstName'),
               lastName:data.get('lastName'),
               email:data.get('email')
             })
           };

          const signUpResponse = await fetch('http://localhost:8080/register', requestOptions)
                                            .then(response => response.json())
                                            .then(data => {
                                            setToken(data.token)
                                          });

           await sleep(1e3);

           //if (signUpResponse.status == "200"){
             //setSignUpResultMessage("Succesfully registered.");
             //setColor("green");
           //}
           //if (signUpResponse.status == "500"){
             setSignUpResultMessage("There is problem to sign up.");
             setColor("red");
           //}
         })();
      };
    }

    if(token != null && token != 'notvalid'){
       return (
         <Partnership token = {token} propertyId = {props.location.search.split("=")[1]} />
       );
    }else{
   return (
     <Modal
         open={props.signUpProcess}
         onClose={props.handleCloseSignUp}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
        <Box sx={style}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Typography component="h1" variant="h5">
          </Typography>
          <label style={{ align: 'center' , color: color}}>{signUpResultMessage}</label>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required={true}
                  error = {!validFirstName}
                  helperText= {helperTextFirstName}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error = {!validLastName}
                  helperText= {helperTextLastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="user-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  error = {!validUserName}
                  helperText= {helperTextUserName}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error = {!validEmail}
                  helperText= {helperTextEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error = {!validPassword}
                  helperText= {helperTextPassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link
                  href="#"
                  onClick = {props.handleAlreadySignIn}
                >Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Modal>
  );
}
}
export default withRouter(ModalSignUp);
