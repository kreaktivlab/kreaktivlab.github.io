import React from 'react';

import './Post.css';

type PostProps = {
  id: number;
  title: string;
  content: string;
  href: string;
};

export function Post({ id, title, content, href }: PostProps): JSX.Element {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="post card my-3">
        <img
          className="card-img-top"
          src={`assets/posts/cover${id}.jpg`}
          alt="Card Image"
        />

        <div className="card-body text-left">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{content}</p>

          <a href={href} className="btn btn-lg" target="_blank">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
