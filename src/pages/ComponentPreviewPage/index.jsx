import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import list from './commons';

function ComponentPreviewPage() {
  const location = useLocation();
  const history = useHistory();
  // get search params value
  const componentName = new URLSearchParams(location.search).get('name');
  
  useEffect(() => {
    if (!componentName) {
      history.replace("/components");
    }
  }, [location, history, componentName])

  const item = list.find((item) => item.param === componentName.toLowerCase());;

  if (!item) {
    // Send back to components list
    history.push("/components")
  }

  const { param, Component } = item;

  return (
    <React.Fragment>
      <h3 className="heading-3">{param}</h3>
      <Component />
    </React.Fragment>
  )
}

export default ComponentPreviewPage;