import React from 'react';

import { PageLayout, SEO, Services } from '../components';

export default function IndexPage(): JSX.Element {
  const email = 'hello@kreaktivlab.com';

  return (
    <PageLayout>
      <div className="container-fluid text-center">
        <SEO title="Home" />
        <h1>Coming Soon!</h1>
        <p>Something really good is coming very soon.</p>
        <Services />
      </div>
    </PageLayout>
  );
}
