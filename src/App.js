import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import NotFound from './pages/404/404';

function App() {

  return (
    <div className="App">
      this is app page
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route component={NotFound}/>
      </Switch>

    </div>
  );
}

export default App;
