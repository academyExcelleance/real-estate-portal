import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Partnership from "../partnership/Partnership"
import {Link, useLocation,withRouter,useParams} from "react-router-dom";
import Modal from '@mui/material/Modal';

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

function SignIn(props) {
   const [token, setToken] = React.useState("notvalid");

   const [validUserName, setValidUserName] = React.useState(true);
   const [helperTextUserName, setHelperTextUserName] = React.useState("");

   const [validPassword, setValidPassword] = React.useState(true);
   const [helperTextPassword, setHelperTextPassword] = React.useState("");

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
      email: data.get('email'),
      password: data.get('password'),
    });

    let validData = true;

    let userName = data.get("username");
    if (userName.trim().length == 0) {
      setValidUserName (false);
      setHelperTextUserName("Please provide user name");
      validData = false;
    }

    let password = data.get("password");
    if (password.trim().length == 0) {
      setValidPassword(false);
      setHelperTextPassword("Please provide password");
      validData = false;
    }

    if(validData) {
    //(async () => {
      const requestOptions  = {
        method: 'POST',
        headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           username:data.get('username'),
           password:data.get('password')
         })
       };
      fetch('http://localhost:8080/authenticate',requestOptions)
                              .then(response => response.json())
                              .then(data => {
                                   setToken(data.token)
                                });

      }
    };
   if(token != null && token != 'notvalid'){
      return (
        <Partnership token = {token} propertyId = {props.location.search.split("=")[1]} />
      );
   }else{
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <label style={{ align: 'center' , color: 'red'}}>{token == "" || token == null ? "Please provide valid user and password!" : ""}</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              error = {!validUserName}
              helperText= {helperTextUserName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error = {!validPassword}
              helperText= {helperTextPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                </Link>
              </Grid>
              <Grid item>
              <Link
                  to={{
                    pathname: "/signUp",
                    search:props.location.search,
                    state: { fromDashboard : "true"   }
                  }}
                >Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
}

export default withRouter(SignIn);
