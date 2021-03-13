import React from 'react';
import ContactForm from '../../components/Form/ContactForm';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #000000ff;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: white;
    opacity: 0.7;
  }

  @media (max-width: 400px) {
    .title {
      font-size: 1.3rem;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='title'>Contact Form</h2>
      <div>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default Contact;
