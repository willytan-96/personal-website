import React from 'react';
import { Commons } from 'components';

import { text, stylesText } from './text';

function Dropdown() {
  const defaultOptions = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    }
  ];

  return (
    <React.Fragment>
      <h5 className="heading-5">Result :</h5>
      <Commons.Dropdown options={defaultOptions} selectedValue="2" />
      

      <h5 className="heading-5">Dropdown.jsx :</h5>
      <pre>{text}</pre>

      <h5 className="heading-5">index.scss</h5>
      <pre>{stylesText}</pre>
      
    </React.Fragment>
  );
}

const param = 'dropdown';
const Component = Dropdown;

export default {
  param,
  Component,
};