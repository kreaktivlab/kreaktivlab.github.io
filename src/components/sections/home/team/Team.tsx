import React from 'react';

import './Team.css';
import { Member } from './Member';

const data = [
  {
    image: 'assets/members/default-user.svg',
    firstName: 'Kurt',
    lastName: 'Cobain',
    job: 'Vocals / Guitar'
  },
  {
    image: 'assets/members/default-user.svg',
    firstName: 'Krist',
    lastName: 'Novoselic',
    job: 'Bass'
  },
  {
    image: 'assets/members/default-user.svg',
    firstName: 'Dave',
    lastName: 'Grohl',
    job: 'Drums'
  }
];

export function Team(): JSX.Element {
  return (
    <div id="Team" className="d-none d-md-block">
      <div className="container text-center">
        <h1>Who We Are</h1>

        <div className="row">
          {data.map((v, i) => (
            <Member key={i} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
}
