import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import RouteHistory from '../containers/RouteHistory';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/history" component={RouteHistory} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
