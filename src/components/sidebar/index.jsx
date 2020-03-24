import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { MdHome, MdInfo } from "react-icons/md"

// Styling Sidebar
import "./index.scss";

function Sidebar(props) {
  const { content: ContentComponent, menus } = props;

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {menus.map((menu) => {
          const {
            Icon,
            path,
            title
          } = menu;

          return (
            <NavLink className="sidebar-menu-wrapper" to={path}>
              <Icon />
            </NavLink>
          )
        })}
      </div>
      <div className="sidebar-content">
        <ContentComponent />
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  content: PropTypes.func.isRequired,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.func.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
}

Sidebar.defaultProps = {
  menus: [],
}

export default Sidebar;