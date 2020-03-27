import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Sidebar } from 'components';
import sidebarRoutes from './sidebar.routes';

function Router() {
  const routes = Array.from(sidebarRoutes).reverse();

  return (
    <BrowserRouter>
      <Switch>
        { routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={() => <Sidebar content={route.Component} />}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;