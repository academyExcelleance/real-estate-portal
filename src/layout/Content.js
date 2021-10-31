import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropertyHeader from '../PropertyHeader.js';
import RealEstateProperty from '../RealEstateProperty.js';


const styles = (theme) => ({
  paper: {
    maxWidth: 1500,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});


function Content(props) {
  const { classes } = props;
  const [propertyHeaderPopulated, setPropertyHeaderPopulated] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState(false);

const searchProperty = (propertyHeader,selectedState) => {
  alert("In Content " + selectedState);
  setPropertyHeaderPopulated(propertyHeader);
  setSelectedState(selectedState);
}
  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            <PropertyHeader searchProperty = {props.searchProperty}/>
            </Grid>
        </Grid>

        </Toolbar>

      </AppBar>

    </Paper>
  );
}


Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
