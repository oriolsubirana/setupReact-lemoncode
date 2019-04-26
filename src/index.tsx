import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotellCollectionScene } from './scenes';
import { routerSwitchRoutes, SessionProvider } from 'core';

ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route exact={true} path={routerSwitchRoutes.login} component={LoginScene} />
        <Route path={routerSwitchRoutes.hotelCollection} component={HotellCollectionScene} />
      </Switch>
    </HashRouter>
  </SessionProvider>,
  document.getElementById('root')
);
