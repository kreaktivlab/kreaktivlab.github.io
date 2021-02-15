import React from 'react';

export function Contact(): JSX.Element {
  const email = 'hello@kreaktivlab.com';

  return (
    <div id="Contact" className="container-fluid">
      <h2>Contact</h2>

      <div className="row">
        <div className="col-12">
          If you have any questions or a game idea,
          please contact us at <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
}
