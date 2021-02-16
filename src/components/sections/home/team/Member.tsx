import React from 'react';

import './Member.css';

type MemberProps = {
  image: string;
  firstName: string;
  lastName: string;
  job: string;
};

export function Member({
  image,
  firstName,
  lastName,
  job
}: MemberProps): JSX.Element {
  const fullName = [firstName, lastName].join(' ');

  return (
    <div className="col-md-4">
      <div className="member my-3">
        <img
          className="img-fluid rounded-circle"
          src={image}
          alt={`Profile Picture of ${fullName}`}
        />

        <h4>
          {firstName}
          <br />
          {lastName}
        </h4>

        <div className="color-black">
          <h5>{job}</h5>

          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
    </div>
  );
}
