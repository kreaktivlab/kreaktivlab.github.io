import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Contact, Footer, Header } from '../shared';
import { BaseLayout } from './BaseLayout';

type PageLayoutProps = {
  children: ReactNode | Array<ReactNode>;
};

const styles = {
  div: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0 1.0875rem 1.45rem'
  },
  footer: {
    marginTop: '2rem'
  }
};

export function PageLayout({ children }: PageLayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <BaseLayout>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
    </BaseLayout>
  );
}
