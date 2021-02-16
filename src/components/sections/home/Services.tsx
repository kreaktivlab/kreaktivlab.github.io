import React from 'react';

export function Services(): JSX.Element {
  return (
    <div className="container text-center">
      <h2>What We Do</h2>

      <div className="row d-none d-md-flex">
        <div className="col-lg-3 col-md-6 mb">
          <Icon />
        </div>

        <h2 className="intro">
          we turn
          <br />
          your
          <br />
          <span>idea</span>
        </h2>
      </div>
    </div>
  );
}

function Icon({ icon = 'fa-lightbulb-o' }): JSX.Element {
  return (
    <span className="fa-stack fa-lg">
      <i className="fa fa-circle fa-stack-2x" />
      <i className={`fa ${icon} fa-stack-1x fa-inverse`} />
    </span>
  );
}
