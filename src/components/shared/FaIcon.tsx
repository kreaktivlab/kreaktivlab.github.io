import React from 'react';

type FaIconProps = {
  color?: string;
  shape?: string;
  icon: string;
};

export function FaIcon({
  color = '#000000',
  shape = 'fa-circle',
  icon
}: FaIconProps): JSX.Element {
  return (
    <span className="fa-stack fa-lg" style={{ color: color }}>
      <i className={`fa ${shape} fa-stack-2x`} />
      <i className={`fa ${icon} fa-stack-1x fa-inverse`} />
    </span>
  );
}
