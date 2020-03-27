import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import sidebarMenus from 'router/sidebar.routes';
// Styling Sidebar
import './styles.scss';

function Sidebar(props) {
  const { content: ContentComponent } = props;
  const [onExpand, setOnExpand] = useState(false);
  const onExpandButtonClick = () => setOnExpand(!onExpand);
  const expandClassname = onExpand ? 'sidebar-wrapper--full-width' : '';
  
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className='sidebar'>
      <div className={`sidebar-wrapper ${expandClassname}`}>
        {sidebarMenus.map((menu, index) => {
          const {
            Icon,
            path,
            title
          } = menu;

          return (
            <Link
              key={index}
              className={`sidebar-menu-wrapper sidebar-item ${currentPath === path ? 'active' : ''}`}
              to={path}
            >
              <Icon />
              { onExpand ? <span className='sidebar-item-title'>{title}</span> : null}
            </Link>
          )
        })}
        <div className='sidebar-separator' />
        <div
          className='sidebar-expand-wrapper sidebar-item'
          role='presentation'
          onClick={onExpandButtonClick}
        >
          { onExpand ? (
            <React.Fragment>
              <MdClose />
              <span className='sidebar-item-title'>Hide</span>
            </React.Fragment>
          ) : <MdMenu />}
        </div>
      </div>
      <div className='sidebar-content'>
        <ContentComponent />
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  content: PropTypes.func.isRequired,
}

export default Sidebar;