import React from 'react';
import { Wrapper } from './ProjectElements';

import js from '../../images/logo/JS.png';
import Card from '../../components/Card/Card';

const Project = () => {
  return (
    <Wrapper>
      <h2>Projects</h2>

      <div className='projects-list'>
        <Card
          name='Ecommerce (TechStore)'
          img={js}
          demoLink={'https://react-store-sam.netlify.app/'}
          codeLink={'https://github.com/SamStha07/react-store'}
        />
      </div>
    </Wrapper>
  );
};

export default Project;
