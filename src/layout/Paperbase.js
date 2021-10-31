import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Content from './Content';
import Header from './Header';
import RealEstateProperty from '../RealEstateProperty.js';
import CircularProgress from '@material-ui/core/CircularProgress';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 30,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 30,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#18202c',
          backgroundImage:'IMG_0916.JPG'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        label: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#404854',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          marginRight: 0,
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 200;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};

function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedState,setSelectedState] = React.useState("");
  const [selectedCity,setSelectedCity] = React.useState("");
  const [propertyList, setPropertyList] = React.useState([]);
  const [selectedLeftNavigationDescription,setSelectedLeftNavigationDescription] = React.useState("Real estate property portal");
  const [propertyLoaded, setPropertyLoaded] = React.useState(false);
  const [headerLoaded, setHeaderLoaded] = React.useState(false);
  const [selectedKeywordValue, setSelectedKeywordValue] = React.useState('');
  const [selectedMinPrice, setSelectedMinPrice] = React.useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = React.useState("");


    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const searchProperty = (filterData,selectedState,selectedCity,selectedKeywordValue,selectedMinPrice, selectedMaxPrice) => {
    //alert("http://localhost:8080/getPropertyTest?state=" + selectedState + "&minprice=" + selectedMinPrice + "&maxprice=" + selectedMaxPrice + "&city=" + selectedCity + "&keywordValue=" + selectedKeywordValue);
    setSelectedState(selectedState);
    setSelectedCity(selectedCity);
    setSelectedKeywordValue(selectedKeywordValue);
    setSelectedMinPrice(selectedMinPrice);
    setSelectedMaxPrice(selectedMaxPrice);
    setHeaderLoaded(true);
    setPropertyLoaded(false);

    setPropertyList([]);
    (async () => {
    //const response = await fetch("http://webscrapservice-env.eba-kzpzmeby.ap-south-1.elasticbeanstalk.com/getProperty?state=" + selectedState + "&price=98500000&city=" + selectedCity + "&keyword=");
    const response = await fetch("http://localhost:8080/getAllListing?state=" + selectedState + "&minprice=" + selectedMinPrice + "&maxprice=" + selectedMaxPrice + "&city=" + selectedCity + "&keywordValue=" + selectedKeywordValue);
    await sleep(1e3);
    const propertyData = await response.json();
    setPropertyList(propertyData);
    setPropertyLoaded(true);
  })();
 };

 const setSelectedRow = (address) => {
   props.setSelectedRow(address);
 }
 function sleep(delay = 0) {
   return new Promise((resolve) => {
     setTimeout(resolve, delay);
   });
 }

  if (headerLoaded && propertyLoaded && propertyList.length > 0){
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} selectedLeftNavigation = {selectedLeftNavigationDescription} loggedInUser = {props.loggedInUser} />
          <main className={classes.main}>
            <Content searchProperty = {searchProperty}/>
            <RealEstateProperty selectedState ={selectedState} propertyList = {propertyList} setSelectedRow = {setSelectedRow}/>
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
else if (headerLoaded && !propertyLoaded && propertyList.length  == 0){
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} selectedLeftNavigation = {selectedLeftNavigationDescription} loggedInUser = {props.loggedInUser} />
          <main className={classes.main}>
            <Content searchProperty = {searchProperty}  setSelectedRow = {props.setSelectedRow}/>
            <p> Please wait! Result is loading...</p>
            <CircularProgress disableShrink />
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
else if (headerLoaded && propertyLoaded && propertyList.length  == 0){
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} selectedLeftNavigation = {selectedLeftNavigationDescription} loggedInUser = {props.loggedInUser} />
          <main className={classes.main}>
            <Content searchProperty = {searchProperty}  setSelectedRow = {props.setSelectedRow}/>
            <p> There is not property as per search criteria!</p>
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}else{
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} selectedLeftNavigation = {selectedLeftNavigationDescription} loggedInUser = {props.loggedInUser} />
          <main className={classes.main}>
            <Content searchProperty = {searchProperty}/>
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
}
Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
