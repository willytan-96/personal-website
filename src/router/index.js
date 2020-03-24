import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Sidebar } from 'components';
import sidebarRoutes from './sidebar.routes';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        { sidebarRoutes.map((route) => (
          <Route
            path={route.path}
            component={() => <Sidebar menus={sidebarRoutes} content={route.Component} />}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;