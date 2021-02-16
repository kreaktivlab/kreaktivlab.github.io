import React from 'react';

import {
  PageLayout,
  SEO,
  Services,
  Games,
  TechPlat,
  Blog
} from '../components';

export default function IndexPage(): JSX.Element {
  const email = 'hello@kreaktivlab.com';

  return (
    <PageLayout>
      <SEO title="Home" />

      <div className="container-fluid text-center">
        <h1>Coming Soon!</h1>
        <p>Something really good is coming very soon.</p>
      </div>

      <Services />
      <Games />
      <TechPlat />
      <Blog />
    </PageLayout>
  );
}
