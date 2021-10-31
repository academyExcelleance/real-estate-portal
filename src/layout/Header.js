import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import background from "./background.JPG";
import Link from '@mui/material/Link';
import ModalSignIn from '../login/ModalSignIn';
import Button from '@mui/material/Button';
import ModalSignUp from '../login/ModalSignUp';




const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: '#E1D9D1',
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const {classes, onDrawerToggle } = props;
  const [loaded, setLoaded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  }

  const handleAlreadySignIn = () => {
    setOpenSignUp(false);
    setOpen(true);
  }

  const handleNewSignUp = () => {
    setOpenSignUp(true);
    setOpen(false);
  }

  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  }
  return (
    <React.Fragment>
    <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
              <Grid container spacing={1} alignItems="center">
                <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle}
                    edge="start"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item xs />
                <Grid item>
                <Link underline="hover" onClick={() => {
                  setOpen(true);
                }}
                href="#"  variant="#E1D9D1">
                  <strong>Login</strong>
                </Link>
                </Grid>
                <Grid item>
                  <Link underline="hover" onClick={() => {
                    setOpenSignUp(true);
                  }}
                   href="#" variant="body2">
                    <strong>SignUp</strong>
                  </Link>
                </Grid>
                <Grid item>
                <Link underline="hover" href="#" variant="body2">
                    <strong>Advertise</strong>
                </Link>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
      <AppBar position="sticky" elevation={0}>

        <div style={{height:'100px'}}
        >
        <ModalSignIn handleClose ={handleClose} signInProcess = {open} handleNewSignUp ={handleNewSignUp} />
        <ModalSignUp handleCloseSignUp = {handleCloseSignUp} signUpProcess = {openSignUp} handleAlreadySignIn ={handleAlreadySignIn}/>

         </div>
      </AppBar>

    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
