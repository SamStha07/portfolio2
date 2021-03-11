import React from 'react';

import { Wrapper } from './CardElements';

const Card = ({ name, img, demoLink, codeLink }) => {
  return (
    <Wrapper>
      <div className='project-card'>
        <div className='content-overlay'></div>

        <img src={img} alt='' />

        <div className='project-name'>{name}</div>

        <div className='project-links'>
          <button className='left'>
            <a href={demoLink} target='_blank' rel='noopener noreferrer'>
              <span className='btn-name'>Demo</span>
            </a>
          </button>

          <button className='right'>
            <a href={codeLink} target='_blank' rel='noopener noreferrer'>
              <span className='btn-name'>View Code</span>
            </a>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
