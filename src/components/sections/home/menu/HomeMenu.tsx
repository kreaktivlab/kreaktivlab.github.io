import * as jQuery from 'jquery';
import React, { useCallback, useEffect } from 'react';
import { Link } from 'gatsby';

import './HomeMenu.css';

export function HomeMenu(): JSX.Element {
  const toggleBackground = useCallback((isOpened: boolean = false) => {
    const nav = jQuery('nav');
    const color = 'bg-white';

    if (isOpened || 0 < window.scrollY) {
      nav.removeClass('bg-transparent').addClass(color);
    } else {
      nav.removeClass(color).addClass('bg-transparent');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => toggleBackground());
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Header">
          <img
            src="assets/kreaktivlab-c.svg"
            className="d-none d-sm-inline-block align-top"
            alt="Logo"
            style={{ height: '52px' }}
          />
          <img
            src="assets/kreaktivlab-c.svg"
            className="d-inline-block d-sm-none align-top"
            alt="Logo"
            style={{ height: '26px' }}
          />
        </a>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-0">
            <li className="nav-item">
              <a href="#Services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#Games" className="nav-link">
                Games
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a href="#Team" className="nav-link">
                Team
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a href="#Blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
