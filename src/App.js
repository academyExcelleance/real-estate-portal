import * as React from 'react';
import './App.css';
import Property from './property/Property.js';
import PartnershipDashboard from './PropertyDashboard.js';
import SignIn from './login/SignIn.js';
import SignUp from './login/SignUp.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";


function App(props) {
const [address,setAddress] = React.useState("test");
const setSelectedRow = (address) => {
  setAddress("address");
}
React.useEffect(() => {
  document.title = "Partnership Portal"
},[]);

  return (
    <Router>
     <Switch>
      <Route exact path="/" >
          <PartnershipDashboard setSelectedRow = {setSelectedRow} />
      </Route>
      <Route path="/propertyDetails" >
        <Property />
      </Route>
      <Route path="/signIn" >
        <SignIn />
      </Route>
      <Route path="/signUp" >
        <SignUp />
      </Route>
      </Switch>
      </Router>
);
}
export default App;
