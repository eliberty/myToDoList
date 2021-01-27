import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsList from './containers/PostsList';
import PostDetailed from './containers/PostDetailed';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/post/:id">
          <PostDetailed />
        </Route>
        <Route exact path="/">
          <PostsList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
