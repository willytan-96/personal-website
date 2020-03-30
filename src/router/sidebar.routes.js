import {
  HomePage,
  PersonalInformationPage,
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
    Component: PersonalInformationPage,
    exact: true,
    Icon: MdPermIdentity,
    path: '/personal-information',
    title: 'Personal Information',
  }
];

export default routes;