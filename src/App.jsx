import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsList from './containers/PostsList';
import PostDetailed from './containers/PostDetailed';
import './App.css';

const App = () => {
  return (
    // TODO consider adding suspense to display loader when data is being fetch
    // TODO handle 404 errors
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
