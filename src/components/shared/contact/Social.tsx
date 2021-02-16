import React from 'react';

import { FaIcon } from '../FaIcon';

type SocialProps = {
  href: string;
  color: string;
  shape: string;
  icon: string;
};

export function Social({ href, ...props }: SocialProps): JSX.Element {
  return (
    <a href={href} target="_blank">
      <FaIcon {...props} />
    </a>
  );
}
