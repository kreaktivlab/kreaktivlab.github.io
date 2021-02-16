import * as jQuery from 'jquery';
import React, { useCallback, useEffect } from 'react';

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

    const toggler = jQuery('.navbar-toggler');
    const navbar = jQuery('.navbar-collapse');

    toggler.on('click', () => {
      toggleBackground(navbar.css('display') === 'none');
    });

    jQuery('nav a').on('click', (event: Event) => {
      if (toggler.css('display') !== 'none') {
        if (navbar.css('display') !== 'none') {
          toggler.trigger('click');
        }
      }
    });
  }, []);

  const onClick = useCallback((event) => {
    event.preventDefault();
    const hash = (event.target as HTMLAnchorElement).hash || '#Header';

    jQuery('html, body').animate(
      { scrollTop: jQuery(hash).offset().top },
      'slow'
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Header" onClick={onClick}>
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
            <MenuItem name="Services" onClick={onClick} />
            <MenuItem name="Games" onClick={onClick} />
            <MenuItem
              name="Team"
              onClick={onClick}
              className="d-none d-md-block"
            />
            <MenuItem
              name="Blog"
              onClick={onClick}
              className="d-none d-md-block"
            />
            <MenuItem name="Contact" onClick={onClick} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

type MenuItemProps = {
  name: string;
  href?: string;
  onClick: (event) => void;
  className?: string;
};

function MenuItem({
  name,
  href,
  onClick,
  className = ''
}: MenuItemProps): JSX.Element {
  if (!href) {
    href = `#${name}`;
  }

  return (
    <li className={`nav-item ${className}`}>
      <a href={href} onClick={onClick} className="nav-link">
        {name}
      </a>
    </li>
  );
}
