import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Settings from '../pages/Settings';
import Ranking from '../pages/Ranking';
import FeedBack from '../components/FeedBack';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/game" exact component={ Game } />
        <Route path="/settings" exact component={ Settings } />
        <Route path="/ranking" exact component={ Ranking } />
        <Route path="/feedback" exact component={ FeedBack } />
      </Switch>
    );
  }
}

export default App;
