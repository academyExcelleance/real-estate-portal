import * as React from 'react';
import PropertyAppTheme from './PropertyAppTheme';
import background from "../layout/background.JPG";
import PropertyMainContainer from './PropertyMainContainer';
import {withRouter} from "react-router-dom";


function Property(props) {

  return (
    <div style={{ backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
     height:'500px'  }}
    >
    <PropertyAppTheme
          title="Real Estate Portal"
          description={`A page that mimics Firebase.
            This item includes theming using the theme provider component.`}
        >
          <PropertyMainContainer />
      </PropertyAppTheme>
    </div>
   );
}
export default withRouter(Property);
