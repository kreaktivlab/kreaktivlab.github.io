import React from 'react';

const data = {
  email: 'hello@kreaktivlab.com',
  faIcons: [
    {
      link: 'https://facebook.com/kreaktivlab',
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

      <p className="social">
        <a href="https://facebook.com/kreaktivlab" target="_blank">
          <span className="fa-stack fa-lg" style={{color: '#3b5999'}}>
            <i className={`fa fa-circle fa-stack-2x`} />
            <i className={`fa fa-facebook fa-stack-1x fa-inverse`} />
          </span>
        </a>
      </p>
    </div>
  );
}
