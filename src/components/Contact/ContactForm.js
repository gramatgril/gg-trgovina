import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import PropTypes from 'prop-types';

import PrimaryButton from '../Button';

import { validators } from '../../utils';
const { nameValidation, emailValidation, messageValidation } = validators;

const propTypes = {
  setFormStatus: PropTypes.func.isRequired
};

// "https://ggtrgovina.netlify.com/.netlify/functions/sendMail"
// "http://localhost:9000/sendMail"
const path = 'https://ggtrgovina.netlify.com/.netlify/functions/sendMail';

const ContactForm = ({ setFormStatus }) => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data, e) => {
    // Honeypot break
    if (data.phone) return;

    try {
      // Sends data to server
      const res = await fetch(path, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Defaults input fields to empty
      e.target.reset();

      // Parses response
      const { msg } = await res.json();

      console.log(`Status: ${msg} - ${res.status}`);
      setFormStatus({ statusCode: res.status, msg });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form className="form" name="contact" onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <div className="top-line">
            <label htmlFor="name">Ime</label>
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>
          <input
            autoComplete="off"
            type="text"
            name="name"
            id="name"
            className="input-field"
            placeholder="Jože Novak"
            // ref={register(nameValidation)}
          />
        </FormField>
        <FormField>
          <div className="top-line">
            <label htmlFor="email">Email naslov</label>
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>
          <input
            autoComplete="off"
            type="text"
            name="email"
            id="email"
            className="input-field"
            placeholder="Jože.Novak@gmail.com"
            // ref={register(emailValidation)}
          />
        </FormField>
        <FormField>
          <div className="top-line">
            <label htmlFor="message">Sporočilo</label>
            {errors.message && <p className="error-text">{errors.message.message}</p>}
          </div>
          <textarea
            autoComplete="off"
            type="email"
            rows="10"
            name="message"
            id="message"
            className="input-field"
            placeholder="Sporočilo, mnenje, predlog, naročilo..."
            // ref={register(messageValidation)}
          />
        </FormField>
        <FormField>
          <input
            autoComplete="off"
            type="text"
            name="phone"
            id="phone"
            className="form-control phone"
            placeholder="Telefon"
            ref={register}
          />
        </FormField>
        <FormField>
          <PrimaryButton text="Pošlji" type="submit" className="submit-button" />
        </FormField>
      </form>
    </Wrapper>
  );
};

ContactForm.propTypes = propTypes;

export default ContactForm;

const FormField = styled.div`
  margin-bottom: 0.5rem;

  .top-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .error-text {
      color: ${({ theme }) => theme.red};
    }
  }

  .input-field,
  .submit-button {
    width: 100%;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid;
    border-radius: 6px;
  }

  .submit-button {
    text-transform: uppercase;
    transition: ${({ theme }) => theme.linear};
    cursor: pointer;
  }

  .phone {
    display: none !important;
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  margin: 1.5rem 0;

  #name {
    border-color: ${({ errors, theme }) => (errors && errors.name ? theme.red : theme.grey[500])};
  }

  #email {
    border-color: ${({ errors, theme }) => (errors && errors.name ? theme.red : theme.grey[500])};
  }

  #message {
    border-color: ${({ errors, theme }) => (errors && errors.name ? theme.red : theme.grey[500])};
  }
`;
