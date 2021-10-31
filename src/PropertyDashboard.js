import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import AppTheme from './layout/AppTheme';
import Paperbase from './layout/Paperbase';
import background from "./layout/background.JPG";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter
} from "react-router-dom";

function PropertyDashboard(props) {
  //let { slug } = useParams();
  const [loggedInUser, setLoggedInUser] = React.useState("");
  const [loggedInUserLoaded, setLoggedInUserLoaded] = React.useState(false);
  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  const setSelectedRow = (address) => {
    props.setSelectedRow(address);
  }
  return (

    <div>
    <AppTheme
          title="Real Estate Portal"
          description={`A page that mimics Firebase.
            This item includes theming using the theme provider component.`}
        >
          <Paperbase loggedInUser = {loggedInUser} setSelectedRow = {setSelectedRow}/>
      </AppTheme>
    </div>



);
}
export default PropertyDashboard;
