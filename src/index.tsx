import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotellCollectionScene } from './scenes';
import { routerSwitchRoutes, SessionProvider } from 'core';
import { usePromiseTracker } from "react-promise-tracker";
import { LoadingIndicator } from 'common/components/loading-indicator.component';

ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route exact={true} path={routerSwitchRoutes.login} component={LoginScene} />
        <Route path={routerSwitchRoutes.hotelCollection} component={HotellCollectionScene} />
      </Switch>
    </HashRouter>
    <LoadingIndicator />
  </SessionProvider>
  ,
  document.getElementById('root')
);
