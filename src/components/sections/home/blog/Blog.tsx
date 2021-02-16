import React from 'react';

import './Blog.css';
import { Post } from './Post';

const data = [
  {
    title: 'Creating a DigitalOcean Droplet with Vagrant',
    content:
      'DigitalOcean provides developers cloud services that help to deploy and scale applications that run simultaneously on multiple computers.',
    href:
      'https://medium.com/@rdarida/creating-and-provisioning-a-digitalocean-droplet-dca8ba0f87f1'
  },
  {
    title: 'Electron & Angular: The Boilerplate',
    content:
      'In this article, I will show you how you can make a boilerplate project for your cross-platform desktop application development with Electron 6 & Angular 8.',
    href:
      'https://medium.com/@rdarida/electron-angular-the-boilerplate-a8db7f411416'
  },
  {
    title: 'Electron & Angular: Live Reload',
    content:
      'Live reloading is feature in Angular. The ng serve command starts a development server which listens to http://localhost:4200 and watches file changes in the src folder. Every file changes will trigger a reload.',
    href:
      'https://medium.com/@rdarida/electron-angular-live-reload-13ebc9808bb5'
  }
];

export function Blog(): JSX.Element {
  return (
    <div id="Blog" className="d-none d-md-block">
      <div className="container text-center">
        <h1>From The Blog</h1>

        <div className="row">
          {data.map((v, i) => (
            <Post key={i} id={i} {...v} />
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <a
              href="https://medium.com/@rdarida"
              target="_blank"
              className="btn btn-outline-dark btn-lg"
            >
              Read us on <b>Medium</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
