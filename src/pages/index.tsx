import React from "react"

import { Layout, SEO } from "../components"

export default function IndexPage(): JSX.Element {
  const email = 'hello@kreaktivlab.com';

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Coming Soon!</h1>
      <p>Something really good is coming very soon.</p>
      <p>
        If you have any question, please contact us at<br />
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </Layout>
  );
}
