import React from 'react';
import { Wrapper } from './ProjectElements';

import techStoreActive from '../../images/projects/techstore.gif';
import techStoreStatic from '../../images/projects/techstore.png';
import ecommerce from '../../images/projects/ecommerce.png';
import Card from '../../components/Card/Card';

const Project = () => {
  return (
    <Wrapper>
      <h2>Projects</h2>

      <div className='projects-list'>
        <Card
          name='TechStore'
          imgStatic={techStoreStatic}
          imgActive={techStoreActive}
          description='Uses react, context API and styled components'
          demoLink={'https://react-store-sam.netlify.app/'}
          codeLink={'https://github.com/SamStha07/react-store'}
        />

        <Card
          name='Ecommerce '
          imgStatic={ecommerce}
          imgActive={techStoreActive}
          description='Uses node, react, redux, express, mongoDB, etc.'
          codeLink={'https://github.com/SamStha07/shop-ecommerce'}
        />
      </div>
    </Wrapper>
  );
};

export default Project;
