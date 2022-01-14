import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Game from '../pages/Game';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/game" exact component={ Game } />
      </Switch>
    );
  }
}

export default App;
