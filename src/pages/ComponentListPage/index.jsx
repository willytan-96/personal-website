import React from 'react';
import list from 'pages/ComponentPreviewPage/commons';
import { Link } from 'react-router-dom';

import './index.scss';

function ComponentListPage() {
  return (
    <React.Fragment>
      <h3 className="heading-3">Components List Page</h3>
      <div>Here's some creation of mine :</div>
      <ul>
        { list.map((item, index) => (
          <li className="component-list-item" key={index}>
            <Link to={`/components/preview?name=${item.param}`}>{item.param}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ComponentListPage;
