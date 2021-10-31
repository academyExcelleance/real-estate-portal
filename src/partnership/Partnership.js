import * as React from 'react';
import PartnershipAppTheme from './PartnershipAppTheme';
import background from "../layout/background.JPG";
import PartnershipMainContainer from './PartnershipMainContainer';
import {Link, useLocation,withRouter,useParams} from "react-router-dom";

function Partnership(props) {
  const [selectedPropertyDetails, setSelectedPropertyDetails] = React.useState([]);
  const [propertyDtlsLoaded,setPropertyDtlsLoaded] = React.useState(false);

  function sleep(delay = 0) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }

  React.useEffect(() => {

    const requestOptions  = {
      method: 'GET',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization':'Bearer ' + props.token
       }
     };
     (async () => {
         const response = await fetch('http://localhost:8080/loadPropertyForm?id=' + props.propertyId + '&token=Bearer ' + props.token);
         await sleep(1e3);
         const propertyData = await response.json();
         setSelectedPropertyDetails(propertyData);
         setPropertyDtlsLoaded(true);
       })();
     },[propertyDtlsLoaded]);

  return (
    <div style={{ backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
     height:'500px'  }}
    >
    <PartnershipAppTheme
          title="Real Estate Portal"
          description={`A page that mimics Firebase.
            This item includes theming using the theme provider component.`}
        >
          <PartnershipMainContainer propertyDetails = {selectedPropertyDetails}/>
      </PartnershipAppTheme>
    </div>
   );
}
export default Partnership;
