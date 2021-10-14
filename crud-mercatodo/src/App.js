import React from 'react';
import {Switch, Route} from 'react-router-dom'
import User from './components/userview/User';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Switch>
            <Route exact path="/" > <Login/> </Route>
      </Switch>
      <Switch>
            <Route exact path="/admin" > <Admin/> </Route>
      </Switch>
      <Switch>
            <Route exact path="/user" > <User/> </Route>
      </Switch>
    </>
  );
}

export default App;
