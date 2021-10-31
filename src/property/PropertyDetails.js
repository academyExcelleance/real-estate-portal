import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link }  from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import ModalSignIn from '../login/ModalSignIn';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function PropertyDetails(props) {
  const classes = useStyles();
  const [propertyDetails, setPropertyDetails] = React.useState([]);
  const [queryParams, setQueryParams] = React.useState([]);
  const [propertyDtlsLoaded,setPropertyDtlsLoaded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function sleep(delay = 0) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      alert("parent close");
      setOpen(false);
    }

  React.useEffect(() => {
    let searchParameter = props.location.search.split("&");
    for (let i=0; i<searchParameter.length; i++) {
      let queryString = searchParameter[i].split("=");
      queryParams.push(queryString[1]);
    }
    (async () => {
    const response = await fetch('http://localhost:8080/getPropertyDetails?id=' + queryParams[0] );
    await sleep(1e3);
    const propertyData = await response.json();
    setPropertyDetails(propertyData);
    setPropertyDtlsLoaded(true);
  })();
  },[propertyDtlsLoaded]);
  if (!propertyDtlsLoaded){
      return (
        <div>
          <p> Please wait! Property details is loading...</p>
          <CircularProgress disableShrink />
        </div>
      );
    }
    if (propertyDtlsLoaded){
    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </FormControl><FormControl variant="outlined" className={classes.formControl}>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property Details </strong></label>

        </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
            <label><strong>Name: </strong>{unescape(propertyDetails.name)}</label>
            <br/>
            <label><strong>Price: </strong>{unescape(propertyDetails.price)}</label><br/>
            <label><strong>Address: </strong>{unescape(propertyDetails.address)}</label><br/>
            <label><strong>State: </strong>{unescape(propertyDetails.state)}</label><br/>
            <label><strong>City: </strong>{unescape(propertyDetails.city)}</label><br/>
            <label><strong>Description: </strong>{unescape(propertyDetails.description)}</label><br/>
            <br/>
            <ImageList variant="masonry" cols={4} gap={8}>
            {propertyDetails.allImages.map((imageUrl) => (
              <ImageListItem>
                <img
                  src={imageUrl}
                  srcSet={imageUrl}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
            <label><strong>URL: </strong><a target = '_blank' rel="noreferrer" href = {unescape(propertyDetails.url)}>{unescape(propertyDetails.url)}</a></label><br/>
          </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <label><strong>Please login or signup below to purchase this property with other members using the Partnership Portal</strong></label><br/>
                <Link target="_blank"
                    to={{
                      pathname: "/signIn",
                      search:"id=" + propertyDetails.id ,
                      state: { fromDashboard : "true"   }
                    }}
                  >Purchase</Link>
                  <Link target="_blank"
                      to={{
                        pathname: "/signUp",
                        search:"id=" + propertyDetails.id ,
                        state: { fromDashboard : "true"   }
                      }}
                    >SignUp</Link>
            </FormControl>
        </div>
      );
    }
}
export default withRouter(PropertyDetails);
