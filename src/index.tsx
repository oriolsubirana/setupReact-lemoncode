import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotellCollectionScene } from './scenes';
import { routerSwitchRoutes, SessionProvider } from 'core';
import { usePromiseTracker } from "react-promise-tracker";
import { LoadingIndicator } from 'common/components/loading-indicator.component';
import { HotelEditScene } from 'scenes/hotel-edit.scene';

ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route exact={true} path={routerSwitchRoutes.login} component={LoginScene} />
        <Route path={routerSwitchRoutes.hotelCollection} component={HotellCollectionScene} />
        <Route path={routerSwitchRoutes.hotelEdit} component={HotelEditScene} />
      </Switch>
    </HashRouter>
    <LoadingIndicator />
  </SessionProvider>
  ,
  document.getElementById('root')
);
