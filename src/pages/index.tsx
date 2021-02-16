import React from 'react';

import {
  BaseLayout,
  SEO,
  HomeMenu,
  Header,
  Services,
  TechPlat,
  Games,
  Team,
  Blog
} from '../components';

export default function IndexPage(): JSX.Element {
  return (
    <BaseLayout>
      <SEO title="Home" />
      <HomeMenu />
      <Header />
      <Services />
      <TechPlat />
      <Games />
      <Team />
      <Blog />
    </BaseLayout>
  );
}
