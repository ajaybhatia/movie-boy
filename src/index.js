import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';

//layouts
import App from './layouts/App';
//pages
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetails';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/details/:imdbID" component={MovieDetail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
