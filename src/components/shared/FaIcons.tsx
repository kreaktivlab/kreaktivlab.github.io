import React from 'react';

type FaIconsProps = {
  faIcons: Array<FaIconProps>
};

export function FaIcons({ faIcons }: FaIconsProps): JSX.Element {
  return (<p className="social">{faIcons.map((v, i) => (<FaIcon key={i} {...v} />))}</p>);
}

type FaIconProps = {
  href: string,
  color: string,
  shape: string,
  icon: string
};

function FaIcon({ href, color, shape, icon }: FaIconProps): JSX.Element {
  return (
    <a href={href} target="_blank">
      <span className="fa-stack fa-lg" style={{ color: color }}>
        <i className={`fa ${shape} fa-stack-2x`} />
        <i className={`fa ${icon} fa-stack-1x fa-inverse`} />
      </span>
    </a>
  );
}
