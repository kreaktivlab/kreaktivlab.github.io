import React from 'react';

import './Contact.css';
import { FaIcon } from './FaIcon';

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
    <div id="Contact">
      <div className="container text-center">
        <h2>Contact</h2>

        <div className="row mail">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            If you have any questions or a game idea,
            please contact us at <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="col-md-2"></div>
        </div>

        <p className="social">
          {faIcons.map((v, i) => (<FaIcon key={i} {...v} />))}
        </p>
      </div>
    </div>
  );
}
