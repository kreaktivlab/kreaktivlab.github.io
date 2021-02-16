import React from 'react';
import { Link } from 'gatsby';

import { PageLayout, SEO } from '../components';

const styles = {
  pnf: {
    padding: '100px 0 60px 0',
    width: '100%',
    margin: '0',
    lineHeight: '1em',
    textTransform: 'uppercase'
  },
  h1: {
    fontSize: '16vmin'
  }
};

export default function NotFoundPage(): JSX.Element {
  return (
    <PageLayout>
      <SEO title="Page Not Found!" />

      <div className="container-fluid text-center" style={styles.pnf}>
        <div className="row">
          <div className="col-12">
            <h2 style={styles.h1}>Page<br />Not<br />Found!</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
