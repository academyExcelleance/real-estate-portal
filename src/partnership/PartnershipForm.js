import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function PartnershipForm(props) {
  const classes = useStyles();
    return (
        <div>
        <br/>
        <FormControl component="fieldset">
        <label><strong>What percentage would you like to own?</strong></label>
            <RadioGroup
            name="radio-buttons-group"
            >
              <FormControlLabel value="100" control={<Radio />} label="100% (no partners are required)" />
              <FormControlLabel value="50" control={<Radio />} label="50% (1 partner required)" />
              <FormControlLabel value="25" control={<Radio />} label="25% (3 additional partners required)" />
              <FormControlLabel value="10" control={<Radio />} label="10% (9 additional partners required)" />
          </RadioGroup>
        </FormControl>
        <br/><br/>
        <FormControl component="fieldset">
           <label><strong>What type of Ownership are you seeking?</strong></label>
            <RadioGroup
            name="radio-buttons-group"
            >
              <FormControlLabel value="Silent" control={<Radio />} label="Silent" />
              <FormControlLabel value="Operational" control={<Radio />} label="Operational" />
              <FormControlLabel value="No preference" control={<Radio />} label="No preference" />
          </RadioGroup>
        </FormControl>

        <br/><br/>
        <FormControl component="fieldset">
           <label><strong>What type of Partnership are you seeking?</strong></label>
            <RadioGroup
            name="radio-buttons-group"
            >
              <FormControlLabel value="General" control={<Radio />} label="General Partnership" />
              <FormControlLabel value="LLC" control={<Radio />} label="LLC" />
              <FormControlLabel value="Corporation" control={<Radio />} label="Corporation" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">

        </FormControl>
        <br/>
        <FormControl component="fieldset">
          <Button variant="contained">Submit</Button>
        </FormControl>
        <br/>
        </div>
      );
}
export default PartnershipForm;
