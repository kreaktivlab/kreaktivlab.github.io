import React from 'react';

type FaIconProps = {
  href: string;
  color: string;
  shape: string;
  icon: string;
};

export function FaIcon({ href, color, shape, icon }: FaIconProps): JSX.Element {
  return (
    <a href={href} target="_blank">
      <span className="fa-stack fa-lg" style={{ color: color }}>
        <i className={`fa ${shape} fa-stack-2x`} />
        <i className={`fa ${icon} fa-stack-1x fa-inverse`} />
      </span>
    </a>
  );
}
