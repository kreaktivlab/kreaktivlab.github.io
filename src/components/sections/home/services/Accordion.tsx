import React, { useState } from 'react';

import './Accordion.css';

const data = {
  main: {
    title: 'We Love, Play, & Create Games',
    description:
      'We are a young, independent game development studio. We do not only develop our own HTML5 games, but we also offer full-development cycle from creating a concept to release.'
  },
  cards: [
    {
      title: 'Outsource Game Development',
      description:
        'We can create an exclusive HTML5 game on your request. You will receive a high-quality product delivered on time and on budget all the way up.'
    },
    {
      title: 'Flash to HTML5 Conversion',
      description:
        'In 2017, Adobe had made a formal announcement stating that by 2020, the company would no longer support the flash player plug-in. Google and Microsoft too have announced their intention to disable the plug-in in their browsers. We offer flash to HTML5 porting service for developers and publishers to save the quality and user experience of their games.'
    },
    {
      title: 'HTML5 Playable Ads',
      description:
        'We offer the development of an HTML5 demo version of your game with a limited amount of content and a "Get it on store" button.'
    }
  ],
  visibility: [true, false, false]
};

export function Accordion(): JSX.Element {
  const { title, description } = data.main;
  const [visibilities, setVisibilities] = useState([true, false, false]);

  return (
    <div className="acc col-lg-12">
      <div className="accordion" id="accordionServices">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <div className="card-text">{description}</div>
          </div>
        </div>

        {data.cards.map((v, i) => (
          <Card
            key={i}
            index={i}
            {...v}
            visibility={visibilities[i]}
            setVisibilities={setVisibilities}
          />
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  index: number;
  title: string;
  description: string;
  visibility: boolean;
  setVisibilities: (visibilities: Array<boolean>) => void;
};

function Card({
  index,
  title,
  description,
  visibility,
  setVisibilities
}: CardProps): JSX.Element {
  const onClickButton = () => {
    const visibilities = [false, false, false];
    visibilities[index] = !visibility;
    setVisibilities(visibilities);
  };

  return (
    <div className="card">
      <div className="card-header" id={`heading${index}`}>
        <h5 className="mb-0">
          <button
            onClick={onClickButton}
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
          >
            <i
              className={`fa ${
                visibility ? 'fa-chevron-down' : 'fa-chevron-right'
              }`}
            />{' '}
            {title}
          </button>
        </h5>
      </div>

      <div
        id={`collapse${index}`}
        className={`collapse ${visibility ? 'show' : ''}`}
        data-parent="#accordionServices"
      >
        <div className="card-body">{description}</div>
      </div>
    </div>
  );
}
