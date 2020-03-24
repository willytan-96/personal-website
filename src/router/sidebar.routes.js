import {
  HomePage,
} from 'pages';
import { MdHome } from 'react-icons/md';

const routes = [
  {
    Component: HomePage,
    exact: true,
    Icon: MdHome,
    path: '/',
    title: 'Home',
  }
];

export default routes;