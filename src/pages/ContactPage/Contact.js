import React from 'react';
import ContactForm from '../../components/Form/ContactForm';

const Contact = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          backgroundColor: '#000000ff',
          opacity: '0.9',
        }}
      >
        <h2 style={{ color: 'white', opacity: '0.7' }}>Contact Form</h2>

        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
