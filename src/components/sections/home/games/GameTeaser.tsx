import React from 'react';

import './GameTeaser.css';

type GameTeaserProps = {
  index: number,
  id: string,
  title: string
};

export function GameTeaser({ index, id, title }: GameTeaserProps): JSX.Element {
  return (
    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <a href="#" className="game-teaser">
        <img className="d-block w-100 rounded" src={`assets/games/teaser-${id}.jpg`} alt={`${title} Image`} />
      </a>
    </div>
  );
}
