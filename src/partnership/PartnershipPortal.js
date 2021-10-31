import * as React from 'react';
import PartnershipAppTheme from './PartnershipAppTheme';
import background from "../layout/background.JPG";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import PartnershipPortalContainer from './PartnershipPortalContainer.js';
import {Link, useLocation,withRouter,useParams} from "react-router-dom";

function PartnershipPortal(props) {
  

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
          <PartnershipPortalContainer />
      </PartnershipAppTheme>
    </div>
   );
}
export default PartnershipPortal;
