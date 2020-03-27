import {
  HomePage,
  MyContactPage,
} from 'pages';
import { MdHome, MdPermIdentity } from 'react-icons/md';

const routes = [
  {
    Component: HomePage,
    exact: true,
    Icon: MdHome,
    path: '/',
    title: 'Home',
  },
  {
    Component: MyContactPage,
    exact: true,
    Icon: MdPermIdentity,
    path: '/contact',
    title: 'My Contact',
  }
];

export default routes;