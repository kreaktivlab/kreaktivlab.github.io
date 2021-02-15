import React from 'react';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <div id="Footer">
      <div className="container-fluid">
        Copyright © kreaktivlab.com {currentYear}.<br />
        All rights reserved.
      </div>
    </div>
  );
}
