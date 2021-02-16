import React, { ReactNode } from 'react';

import { Contact, Footer } from '../shared';

type BaseLayoutProps = {
  children: ReactNode | Array<ReactNode>;
};

export function BaseLayout({ children }: BaseLayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Contact />
      <Footer />
    </>
  );
}
