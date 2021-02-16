import React from 'react';

import {
  PageLayout,
  SEO,
  HomeMenu,
  Services,
  TechPlat,
  Games,
  Team,
  Blog
} from '../components';

export default function IndexPage(): JSX.Element {
  return (
    <PageLayout>
      <SEO title="Home" />
      <HomeMenu />

      <div className="container-fluid text-center">
        <h1>Coming Soon!</h1>
        <p>Something really good is coming very soon.</p>
      </div>

      <Services />
      <TechPlat />
      <Games />
      <Team />
      <Blog />
    </PageLayout>
  );
}
