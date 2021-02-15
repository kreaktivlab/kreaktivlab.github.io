import React from 'react';

import { PageLayout, SEO } from '../components';

export default function IndexPage(): JSX.Element {
  const email = 'hello@kreaktivlab.com';

  return (
    <PageLayout>
      <div className="container-fluid">
        <SEO title="Home" />
        <h1>Coming Soon!</h1>
        <p>Something really good is coming very soon.</p>
      </div>
    </PageLayout>
  );
}
