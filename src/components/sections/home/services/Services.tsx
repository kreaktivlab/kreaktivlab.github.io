import React from 'react';

import './Services.css';
import { FaIcon } from '../../../shared';
import { Accordion } from './Accordion';

const data = [
  { faIcon: 'fa-lightbulb-o', words: ['we turn', 'your', 'idea'] },
  { faIcon: 'fa-magic', words: ['with', 'some', 'magic'] },
  { faIcon: 'fa-code', words: ['and a', 'little', 'coding'] },
  { faIcon: 'fa-gamepad', words: ['into an', 'amazing', 'game'] }
];

export function Services(): JSX.Element {
  return (
    <div id="Services">
      <div className="container text-center">
        <h1>What We Do</h1>

        <div className="row d-none d-md-flex">
          {data.map((v, i) => (
            <Service key={i} {...v} />
          ))}
        </div>

        <div className="row text-left d-md-none">
          <table className="table table-borderless">
            <tbody>
              {data.map((v, i) => (
                <Row key={i} {...v} />
              ))}
            </tbody>
          </table>
        </div>

        <Accordion />
      </div>
    </div>
  );
}

type ServiceProps = {
  faIcon: string;
  words: Array<string>;
};

function Service({ faIcon, words }: ServiceProps): JSX.Element {
  const [first, second, third] = words;

  return (
    <div className="col-lg-3 col-md-6 mb">
      <FaIcon icon={faIcon} />

      <h2 className="intro">
        {first}
        <br />
        {second}
        <br />
        <span>{third}</span>
      </h2>
    </div>
  );
}

function Row({ faIcon, words }: ServiceProps): JSX.Element {
  return (
    <tr>
      <td className="align-middle">
        <FaIcon icon={faIcon} />
      </td>

      <td className="align-middle">
        <h2>
          {words[0]} {words[1]} <span>{words[2]}</span>
        </h2>
      </td>
    </tr>
  );
}
