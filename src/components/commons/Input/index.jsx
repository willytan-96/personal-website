import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Input(props) {
  const {
    onChange,
    placeholder,
    value,
    ...rest
  } = props;

  return (
    <input
      className="input"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  placeholder: '',
  value: '',
}

export default Input;