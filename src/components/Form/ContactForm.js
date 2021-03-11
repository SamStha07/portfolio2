import React from 'react';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer } from 'react-toastify';
import { toastifySuccess, toastifyError } from '../ToastifyNotifications';

import { Wrapper } from './ContactFormElements';

const SERVICE_ID = 'service_q0ygmxc';
const TEMPLATE_ID = 'template_kpa7ulb';
const USER_ID = 'user_kyzClTZC1a2P1BgQ7vGWb';

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      reset();
      toastifySuccess();
    } catch (e) {
      toastifyError();
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type='text'
          name='name'
          ref={register({
            required: {
              value: true,
              message: 'Please enter your name',
            },
            maxLength: {
              value: 30,
              message: 'Please use 30 characters or less',
            },
          })}
          className='form-control formInput'
          placeholder='Name'
        ></input>
        {errors.name && (
          <span className='errorMessage'>*{errors.name.message}</span>
        )}

        <input
          type='email'
          name='email'
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          className='form-control formInput'
          placeholder='Email address'
        ></input>
        {errors.email && (
          <span className='errorMessage'>
            *Please enter a valid email address
          </span>
        )}

        <input
          type='text'
          name='subject'
          ref={register({
            required: {
              value: true,
              message: 'Please enter a subject',
            },
            maxLength: {
              value: 75,
              message: 'Subject cannot exceed 75 characters',
            },
          })}
          className='form-control formInput'
          placeholder='Subject'
        ></input>
        {errors.subject && (
          <span className='errorMessage'>*{errors.subject.message}</span>
        )}

        <textarea
          rows={3}
          name='message'
          ref={register({
            required: true,
          })}
          className='form-control formInput'
          placeholder='Message'
        ></textarea>
        {errors.message && (
          <span className='errorMessage'>*Please enter a message</span>
        )}

        <button className='submit-btn' type='submit'>
          Submit
        </button>
      </form>

      <ToastContainer />
    </Wrapper>
  );
};

export default ContactForm;
