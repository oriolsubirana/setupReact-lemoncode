import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotellCollectionScene } from './scenes';

ReactDOM.render(
  <HashRouter>
      <Switch>
        <Route exact={true} path={['/', '/login']} component={LoginScene} />
        <Route path="/hotel-collection" component={HotellCollectionScene} />
      </Switch>
  </HashRouter>,
  document.getElementById('root')
);
