import React, { useEffect } from 'react';

import './Header.css';
import './Effect.css';

export function Header(): JSX.Element {
  useEffect(() => {
    import('./Effect').then((effect) => {
      effect.init();
    });
  }, []);

  return (
    <section id="Header">
      <canvas id="canvas" />

      <div id="wcg" className="container-fluid text-center">
        <div className="row">
          <div className="col-lg-12 d-xl-none">
            we
            <br />
            <span>create</span>
            <br />
            games
          </div>

          <div id="Effect" className="col-lg-12 d-none d-xl-block">
            <h2>we</h2>

            <div className="wrap">
              <div className="cube">
                <span className="front">
                  <span>love</span>
                </span>

                <span className="top">
                  <span>create</span>
                </span>

                <span className="bottom">
                  <span>play</span>
                </span>
              </div>
            </div>

            <h2>games</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
