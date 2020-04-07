import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Dropdown(props) {
  const {
    onChange,
    options,
    placeholder,
    selectedValue,
    ...rest
  } = props;
  
  return (
    <select
      className="dropdown"
      defaultValue={selectedValue}
      onChange={onChange}
      {...rest}
    >
      <option value="">{placeholder}</option>
      { options.map(
        ({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        )
      )}
    </select>
  );
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    }),
  ),
  placeholder: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

Dropdown.defaultProps = {
  onChange: () => {},
  options: [],
  placeholder: 'Default',
  selectedValue: '',
};

export default Dropdown;