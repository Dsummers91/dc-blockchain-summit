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
import UNHCR from './pages/UNHCR';
import Phone from './pages/Phone';
import Provider from './pages/Provider';

import './css/App.css';
import './css/home.css';
import './css/UNHCR.css';
import './css/phone.css';
import './css/provider.css';

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
        <Route exact path='/UNHCR' component={ UNHCR } />
        <Route exact path='/user' component={ Phone } />
        <Route exact path='/provider' component={ Provider } />
      </Switch>

    </Router>
  ,document.getElementById('root')
);
