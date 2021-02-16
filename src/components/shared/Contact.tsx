import React from 'react';

import { FaIcons } from './FaIcons';

const data = {
  email: 'hello@kreaktivlab.com',
  faIcons: [
    {
      href: 'https://facebook.com/kreaktivlab',
      color: '#3b5999',
      shape: 'fa-circle',
      icon: 'fa-facebook'
    }
  ]
};

export function Contact(): JSX.Element {
  const { email, faIcons } = data;

  return (
    <div id="Contact" className="container-fluid">
      <h2>Contact</h2>

      <div className="row">
        <div className="col-12">
          If you have any questions or a game idea,
          please contact us at <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>

      <FaIcons faIcons={faIcons} />
    </div>
  );
}
