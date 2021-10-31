import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';


const propertySearch = [
  {
    id: 'searchFilter',
    categoryList: [
      {
        id: 'Coworking Space',
        value:'Coworking Space'
      },
      {
        id: 'Flex',
        value:'Flex'
      },
      {
        id: 'Health Care',
        value:'Health Care'
      },
      {
        id: 'Hospitality',
        value:'Hospitality'
      },
      {
        id: 'Industrial',
        value:'Industrial'
      },
      {
        id: 'Land',
        value:'Land'
      },
      {
        id: 'Medical',
        value:'Medical'
      },
      {
        id: 'Multifamily',
        value:'Multifamily'
      },
      {
        id: 'None',
        value:'None'
      },
      {
        id: 'Office',
        value:'Office'
      },
      {
        id: 'Office/Retail',
        value:'Office/Retail'
      },
      {
        id: 'Retail',
        value:'Retail'
      },
      {
        id: 'Specialty',
        value:'Specialty'
      },
      {
        id: 'Specialty',
        value:'Specialty'
      },
      {
        id: 'Sports & Entertainment',
        value:'Sports & Entertainment'
      }
    ],
    stateList: [
      {
        id: 'Alabama',
        value:'Alabama'
      },
      {
        id: 'Alaska',
        value:'Alaska'
      },
      {
        id: 'Arizona',
        value:'Arizona'
      },
      {
        id: 'Arkansas',
        value:'Arkansas'
      },
      {
        id: 'California',
        value:'California'
      },
      {
        id: 'Colorado',
        value:'Colorado'
      },
      {
        id: 'Connecticut',
        value:'Connecticut'
      },
      {
        id: 'Delaware',
        value:'Delaware'
      },
      {
        id: 'District of Columbia',
        value:'District of Columbia'
      },
      {
        id: 'Florida',
        value:'Florida'
      },
      {
        id: 'Georgia',
        value:'Georgia'
      },
      {
        id: 'Hawaii',
        value:'Hawaii'
      },
      {
        id: 'Idaho',
        value:'Idaho'
      },
      {
        id: 'Illinois',
        value:'Illinois'
      },
      {
        id: 'Indiana',
        value:'Indiana'
      },
      {
        id: 'Iowa',
        value:'Iowa'
      },
      {
        id: 'Kansas',
        value:'Kansas'
      },
      {
        id: 'Kentucky',
        value:'Kentucky'
      },
      {
        id: 'Louisiana',
        value:'Louisiana'
      },
      {
        id: 'Maine',
        value:'Maine'
      },
      {
        id: 'Manitoba',
        value:'Manitoba'
      },
      {
        id: 'Maryland',
        value:'Maryland'
      },
      {
        id: 'Massachusetts',
        value:'Massachusetts'
      },
      {
        id: 'Michigan',
        value:'Michigan'
      },

        {
  id:"Minnesota",
        value:'Minnesota'
      },

        {
  id:"Mississippi",
        value:'Mississippi'
      },

        {
  id:"Missouri",
        value:'Missouri'
      },

        {
  id:"Montana",
        value:'Montana'
      },

        {
  id:"Nebraska",
        value:'Nebraska'
      },

        {
  id:"Nevada",
        value:'Nevada'
      },

        {
  id:"New Hampshire",
        value:'New Hampshire'
      },

        {
  id:"New Jersey",
        value:'New Jersey'
      },

        {
  id:"New Mexico",
        value:'New Mexico'
      },

        {
  id:"New York",
        value:'New York'
      },

        {
  id:"North Carolina",
        value:'North Carolina'
      },

        {
  id:"North Dakota",
        value:'North Dakota'
      },

        {
  id:"Ohio",
        value:'Ohio'
      },

        {
  id:"Oklahoma",
        value:'Oklahoma'
      },

        {
  id:"Oregon",
        value:'Oregon'
      },

        {
  id:"Pennsylvania",
        value:'Pennsylvania'
      },

        {
  id:"Rhode Island",
        value:'Rhode Island'
      },

        {
  id:"South Carolina",
        value:'South Carolina'
      },

        {
  id:"South Dakota",
        value:'South Dakota'
      },

        {
  id:"Tennessee",
        value:'Tennessee'
      },

        {
  id:"Texas",
        value:'Texas'
      },

        {
  id:"Utah",
        value:'Utah'
      },

        {
  id:"Vermont",
        value:'Vermont'
      },

        {
  id:"Virginia",
        value:'Virginia'
      },

        {
  id:"Washington",
        value:'Washington'
      },

        {
  id:"West Virginia",
        value:'West Virginia'
      },

        {
  id:"Wisconsin",
        value:'Wisconsin'
      },

        {
  id:"Wyoming",
        value:'Wyoming'
        }
    ],
    cityList: [
      {
        id: 'Fairbanks, AK',
        value:'Fairbanks, AK'
      },
      {
        id: 'Delta Junction, AK',
        value:'Delta Junction, AK'
      },
      {
        id: 'Anchorage, AK',
        value:'Anchorage, AK'
      },
      {
        id: 'Soldotna, AK',
        value:'Soldotna, AK'
      },
      {
        id: 'Kenai, AK',
        value:'Kenai, AK'
      },
      {
        id: 'Skagway, AK',
        value:'Skagway, AK'
      },
      {
        id: 'Anchorage, AK',
        value:'Anchorage, AK'
      },
      {
        id: 'Delaware',
        value:'Delaware'
      },
      {
        id: 'District of Columbia',
        value:'District of Columbia'
      },
      {
        id: 'Craig, AK',
        value:'Craig, AK'
      }
    ]
  }
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function PropertyHeader(props) {
  const classes = useStyles();
  const [selectedStateValue, setSelectedStateValue] = React.useState('');
  const [selectedCityValue, setSelectedCityValue] = React.useState('');
  const [selectedKeywordValue, setSelectedKeywordValue] = React.useState('');
  const [selectedMaxPrice, setSelectedMaxPrice] = React.useState();
  const [selectedMinPrice, setSelectedMinPrice] = React.useState();
  React.useEffect(() => {
  });

  function onChangeTextMinPrice (val) {
      setSelectedMinPrice(val.target.value);

  };
  function onChangeTextMaxPrice (val) {
    setSelectedMaxPrice(val.target.value);

};
  function onChangeKeywordValue (val) {
    setSelectedKeywordValue(val.target.value);
};

function onChangeCityValue (val) {
  setSelectedCityValue(val.target.value);
};

  const searchProperty = () => {
    var stateVal = '';
    var cityVal = '';
    if (selectedStateValue != null){
      stateVal = selectedStateValue.id;
    }

    props.searchProperty(true,stateVal,selectedCityValue,selectedKeywordValue,selectedMinPrice, selectedMaxPrice);
  }
  return (
    <div>
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
      id="outlined-search"
      label="Keyword"
      type="search"
      onChange={onChangeKeywordValue}
      value = {selectedKeywordValue}
      />
    </FormControl>

  <FormControl variant="outlined" className={classes.formControl}>
  <Autocomplete
  id="state-list"
  style={{width: 250}}
  getOptionSelected={(stateValue, value) => {return stateValue.id === value.id}}
  getOptionLabel={(stateValue) => stateValue.value}
  options={propertySearch[0].stateList}
  value = {selectedStateValue}
    onChange={(event, newValue) => {
        setSelectedStateValue(newValue);
      }}
  renderInput={(params) => (
    <TextField
      {...params}
      label="State"
      variant="outlined"
      InputProps={{
        ...params.InputProps
      }}
    />
  )}
/>
</FormControl>
<FormControl variant="outlined" className={classes.formControl}>
  <TextField
  id="outlined-search"
  label="City"
  type="search"
  onChange={onChangeCityValue}
  value = {selectedCityValue}
  />
  </FormControl>
  <FormControl variant="outlined" className={classes.formControl}>
<TextField

    id="outlined-number_MinPrice"
    label="Min Price"
    type="number"
    onChange={onChangeTextMinPrice}
    InputLabelProps={{
    shrink: true,
    }}
  />
  </FormControl>
  <FormControl variant="outlined" className={classes.formControl}>
<TextField
            id="outlined-number_MaxPrice"
            label="Max Price"
            type="number"
            onChange={onChangeTextMaxPrice}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </FormControl>
  <FormControl variant="outlined" className={classes.formControl}>
          <LoadingButton
       endIcon={<SendIcon />}
       onClick = {searchProperty}
       loading={false}
       loadingPosition="end"
       variant="contained"
     >
       Search
     </LoadingButton>
     </FormControl>

    </div>

  );
}
