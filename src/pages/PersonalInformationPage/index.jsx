import React from 'react';

import './index.scss';
import { MdEmail, MdPhone, MdPermIdentity } from 'react-icons/md';

function PersonalInformationPage() {

  const informations = [
    {
      icon: <MdPermIdentity />,
      label: 'Name',
      value: 'Willy',
    },
    {
      icon: <MdEmail />,
      label: 'Email',
      value: 'Willy.tan434@gmail.com',
    },
    {
      icon: <MdPhone />,
      label: 'Whatsapp / Phone',
      value: '(+62) 813-9085-4753',
    }
  ]

  return (
    <React.Fragment>
      <h3 className="heading-3">Personal Information</h3>
      <div>
        {informations.map((information, index) => (
          <div className='information-row' key={index}>
            <div className='information-row-label'>
              <div className='information-icon'>{information.icon}</div>
              <div className='information-label'>{information.label}</div>
              <div className='separator'>:</div>
            </div>
            <div>
              {information.value}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default PersonalInformationPage;
