import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Form from './User';
import Button from 'react-bootstrap/Button';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function User() {
  return (
    <h2 className="User">Passenger</h2>
  )
}

function Default() {
  return (<Router>
    <div>
    <ul>
      <Link to="/user"><Button variant="/passenger">User Details</Button>{ '---->'}</Link>           
      <Link to="/enquiry"><Button variant="/enquiry">Helpline</Button>{ '---->' }</Link>
      <Link to="/cancellation"><Button variant="/cancellation">Cancellation</Button></Link>
    </ul> 
      <Switch>
        <Route path="/user">
          <Form/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}


ReactDOM.render(
    <Default/>,
  document.getElementById('root')
);
