import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

export default function NotFoundPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
