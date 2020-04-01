import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Sidebar } from 'components';
import {
  sidebarRoutes,
  routes,
} from './routes';

function Router() {
  const sidebarMenuRoutes = Array.from(sidebarRoutes).reverse();

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
        { sidebarMenuRoutes.map((sidebarMenuRoute, index) => (
          <Route
            key={index}
            path={sidebarMenuRoute.path}
            component={() => <Sidebar content={sidebarMenuRoute.Component} />}
            exact={sidebarMenuRoute.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;