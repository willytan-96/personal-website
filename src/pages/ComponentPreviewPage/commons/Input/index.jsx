import React, { useState } from 'react';

import { Commons } from 'components';
import { text, stylesText } from './text';

function Input() {
  const [inputValue, setInputValue] = useState('');

  return (
    <React.Fragment>
      <Commons.Input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Placeholder Text"
        value={inputValue}
      />

      <h5 className="heading-5">Input.jsx :</h5>
      <pre>{text}</pre>

      <h5 className="heading-5">index.scss</h5>
      <pre>{stylesText}</pre>
      
    </React.Fragment>
  )
}

const param = 'input';
const Component = Input;

export default {
  param,
  Component,
};