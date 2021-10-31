import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function PartnershipDetails(props) {
  const classes = useStyles();
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
            <label><strong>Name</strong></label><br/>
              <label>{unescape(props.propertyDetails.name)}</label>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>

            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <label><strong>Address</strong></label><br/>
              <label>{unescape(props.propertyDetails.address)}</label>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
            <label><strong>Description</strong></label><br/>
              <label>{unescape(props.propertyDetails.description)}</label>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
            <label><strong>Price</strong></label><br/>
              <label>{unescape(props.propertyDetails.price)}</label>
            </FormControl>
        </div>
      );
}
export default PartnershipDetails;
