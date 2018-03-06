import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

import App from './App';

import './css/App.css';
import './css/home.css';

// CSS font
import '../node_modules/font-awesome/css/font-awesome.min.css';
// CSS ref
import '../node_modules/materialize-css/dist/css/materialize.css';
import 'react-transitions/dist/animations.css';

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>

      <Switch>
        <Route exact path='/' component={ App } />
      </Switch>

    </Router>
  ,document.getElementById('root')
);
