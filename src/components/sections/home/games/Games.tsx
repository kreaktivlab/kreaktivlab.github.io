import React from 'react';

import './Games.css';
import { DATA } from '../../game';
import { GameTeaser } from './GameTeaser';

const data = [DATA['sudoku-run'], DATA['kakuro-run'], DATA['minesweeper']];

export function Games(): JSX.Element {
  return (
    <div id="Games">
      <div className="container text-center">
        <h1>What Have We Created</h1>

        <div id="carouselGames" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators" style={{ zIndex: 99 }}>
            {data.map((v, i) => (
              <li
                data-target="#carouselGames"
                data-slide-to={`${i}`}
                className={i === 0 ? 'active' : ''}
                key={i}
              />
            ))}
          </ol>

          <div className="carousel-inner shadow rounded">
            {data.map((v, i) => (
              <GameTeaser key={i} index={i} {...v} />
            ))}
          </div>

          <a
            className="carousel-control-prev rounded"
            style={{ zIndex: 100 }}
            href="#carouselGames"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next rounded"
            style={{ zIndex: 100 }}
            href="#carouselGames"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
