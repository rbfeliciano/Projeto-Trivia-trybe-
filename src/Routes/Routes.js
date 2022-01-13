import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ Login } />
      </Switch>
    );
  }
}

export default App;
