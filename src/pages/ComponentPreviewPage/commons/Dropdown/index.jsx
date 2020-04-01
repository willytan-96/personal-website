import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

function Dropdown({
  options,
  ...rest
}) {

  const text = `
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

function Dropdown({
  options,
  ...rest,
}) {
  return (
    <select className="dropdown" {...rest}>
      { options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    }),
  )
};

Dropdown.defaultProps = {
  options: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    }
  ],
};
  `;

  const stylesText = `
.dropdown {
  padding: 10;
  border-radius: 5;
  outline: 0;
}
  `;

  return (
    <React.Fragment>
      <h5 className="heading-5">Result :</h5>
      <select className="dropdown" {...rest}>
        { options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      

      <h5 className="heading-5">Dropdown.jsx :</h5>
      <pre>{text}</pre>

      <h5 className="heading-5">Styles.scss</h5>
      <pre>{stylesText}</pre>
      
    </React.Fragment>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    }),
  )
};

Dropdown.defaultProps = {
  options: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    }
  ],
};

const param = 'dropdown';
const Component = Dropdown;

export default {
  param,
  Component,
};