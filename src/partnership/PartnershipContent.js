import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PartnershipDetails from './PartnershipDetails';


const styles = (theme) => ({
  paper: {
    maxWidth: 800,
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


function PartnershipContent(props) {
  const { classes } = props;
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
            <PartnershipDetails propertyDetails = {props.propertyDetails} />
            </Grid>

        </Grid>

        </Toolbar>

      </AppBar>

    </Paper>
  );
}


PartnershipContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnershipContent);
