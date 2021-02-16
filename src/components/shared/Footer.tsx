import React from 'react';

const styles = {
  footer: {
    padding: '10px 0',
    backgroundColor: '#000000',
    color: '#666666'
  }
};

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <div style={styles.footer}>
      <div className="container-fluid text-center">
        Copyright © kreaktivlab.com {currentYear}.<br />
        All rights reserved.
      </div>
    </div>
  );
}
