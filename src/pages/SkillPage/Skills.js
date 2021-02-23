import React from 'react';

import html from '../../images/logo/html.png';
import css from '../../images/logo/css.png';
import bootstrap from '../../images/logo/bootstrap.png';
import js from '../../images/logo/JS.png';
import react from '../../images/logo/react.png';
import redux from '../../images/logo/redux.png';
import node from '../../images/logo/node.png';
import express from '../../images/logo/express.png';
import antd from '../../images/logo/antd.png';
import material from '../../images/logo/material.png';
import mongo from '../../images/logo/mongo.png';
import styled from '../../images/logo/styled.png';

import { Wrapper } from './SkillElements';

const Skills = () => {
  return (
    <Wrapper className='slider'>
      <div className='slide-track'>
        <div className='slide'>
          <img src={html} alt={html} />
        </div>
        <div className='slide'>
          <img src={css} alt={css} />
        </div>
        <div className='slide'>
          <img src={styled} alt={styled} />
        </div>
        <div className='slide'>
          <img src={bootstrap} alt={bootstrap} />
        </div>
        <div className='slide'>
          <img src={js} alt={js} />
        </div>
        <div className='slide'>
          <img src={react} alt={react} />
        </div>
        <div className='slide'>
          <img src={redux} alt={redux} />
        </div>
        <div className='slide'>
          <img src={node} alt={node} />
        </div>
        <div className='slide'>
          <img src={express} alt={express} />
        </div>
        <div className='slide'>
          <img src={mongo} alt={mongo} />
        </div>
        <div className='slide'>
          <img src={antd} alt={antd} />
        </div>
        <div className='slide'>
          <img src={material} alt={material} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
