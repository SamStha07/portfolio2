import React from 'react';

import { Wrapper } from './CardElements';

const Card = ({
  name,
  imgStatic,
  imgActive,
  description,
  demoLink,
  codeLink,
  // disabled,
}) => {
  return (
    <Wrapper>
      <div className='project-card'>
        <div className='content-overlay'></div>

        <img className='static' src={imgStatic} alt='' />
        <img className='active' src={imgActive} alt='' />

        <div className='project-name'>{name}</div>

        <div className='description'>{description}</div>

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
