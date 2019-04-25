import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotellCollectionScene } from './scenes';
import {routerSwitchRoutes} from 'core';

ReactDOM.render(
  <HashRouter>
      <Switch>
        <Route exact={true} path={routerSwitchRoutes.login} component={LoginScene} />
        <Route path={routerSwitchRoutes.hotelCollection} component={HotellCollectionScene} />
      </Switch>
  </HashRouter>,
  document.getElementById('root')
);
