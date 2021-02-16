import React, { ReactNode } from 'react';

import './TechPlat.css';

const data = {
  tech: [
    {
      src:
        'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
      alt: 'Unity'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/25/WebGL_Logo.svg',
      alt: 'WebGL'
    },
    { src: 'https://pixijs.download/pixijs-text.svg', alt: 'PixiJS' }
  ],
  plat: [
    { icon: 'fa-windows', color: '#00bcf2' },
    { icon: 'fa-apple', color: '#000000' },
    { icon: 'fa-android', color: '#a4c639' }
  ]
};

export function TechPlat(): JSX.Element {
  return (
    <div id="TechPlat" className="d-none d-md-flex">
      <div className="container text-center">
        <div className="row">
          <Panel>
            {data.tech.map((v, i) => (
              <TechItem key={i} {...v} />
            ))}
          </Panel>

          <Panel>
            {data.plat.map((v, i) => (
              <PlatItem key={i} {...v} />
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}

type PanelProps = {
  children?: ReactNode | Array<ReactNode>;
};

function Panel({ children }: PanelProps): JSX.Element {
  return (
    <div className="col-md-6">
      <div className="row">{children}</div>
    </div>
  );
}

type TechItemProps = {
  src: string;
  alt: string;
};

function TechItem(props: TechItemProps): JSX.Element {
  return (
    <div className="col-md-4">
      <img className="img-fluid" {...props} />
    </div>
  );
}

type PlatItemProps = {
  icon: string;
  color: string;
};

function PlatItem({ icon, color }: PlatItemProps): JSX.Element {
  return (
    <div className="col-md-4">
      <i className={`fa ${icon} fa-3x`} style={{ color: color }} />
    </div>
  );
}
