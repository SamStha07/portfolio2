import React from 'react';

import Svg from '../../components/Svg';
import ScrollBtn from '../../components/ScrollBtn';
import { Wrapper } from './LandingElements';

const Landing = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { duration: 2 } });

  //   tl.from('.content', { opacity: 0, y: -100, stagger: 1 });
  // }, []);

  return (
    <>
      <Wrapper className='content'>
        <div className='left-items'>
          <span>Hello,</span>
          <p>
            I'm <span>Sam Shrestha</span>.
          </p>
          <p>
            I'm a <span>fullstack Web Developer</span>.
          </p>

          <div className='btn-socialIcons'>
            <a
              href={'https://github.com/SamStha07?tab=repositories'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>

            <a
              href={'https://www.linkedin.com/in/sam-shrestha-4798241aa/'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
          <div className='btn'>
            <button className='btn-work'>
              View My Work <i className='fa fa-arrow-right'></i>
            </button>
          </div>
        </div>

        <div className='right-items'>
          <Svg />
        </div>
      </Wrapper>

      <div className='btn-scroll'>
        <ScrollBtn />
      </div>
    </>
  );
};

export default Landing;
