import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import background from "../layout/background.JPG";
import { Auth } from '@aws-amplify/auth';



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
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function PartnershipHeader(props) {
  const { classes, onDrawerToggle } = props;
  const [loaded, setLoaded] = React.useState(false);
  const [classList, setClassList] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState("knowledgeTest");
  const loading = loaded && classList.length === 0;

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  const [loggedInUser, setLoggedInUser] = React.useState("");
  const [loggedInUserLoaded, setLoggedInUserLoaded] = React.useState(false);


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
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                  {loggedInUser}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
      <AppBar position="sticky" elevation={0}>

        <div style={{ backgroundImage: `url(${background})`,
         height:'200px'}}
        >
         </div>
      </AppBar>

    </React.Fragment>
  );
}

PartnershipHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(PartnershipHeader);
