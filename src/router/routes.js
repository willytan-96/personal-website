import {
  HomePage,
  PersonalInformationPage,
  ComponentListPage,
  ComponentPreviewPage,
} from 'pages';
import { MdHome, MdPermIdentity, MdList } from 'react-icons/md';

const sidebarRoutes = [
  {
    Component: HomePage,
    exact: true,
    Icon: MdHome,
    path: '/',
    title: 'Home',
  },
  {
    Component: ComponentListPage,
    exact: true,
    Icon: MdList,
    path: '/components',
    title: 'Components',
  },
  {
    Component: PersonalInformationPage,
    exact: true,
    Icon: MdPermIdentity,
    path: '/personal-information',
    title: 'Personal Information',
  },
];

const routes = [
  {
    path: '/components/preview',
    exact: true,
    Component: ComponentPreviewPage,
  }
];

export {
  sidebarRoutes,
  routes,
};