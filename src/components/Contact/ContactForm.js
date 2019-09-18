import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

import PrimaryButton from "../Button";

const ContactForm = () => {
  return (
    <StyledContactForm>
      <form
        className="form"
        action="https://formspree.io/praecorloth@gmail.com"
        method="POST"
      >
        <div>
          <input
            autoComplete="off"
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Ime in Priimek"
          />
        </div>
        <div>
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="E-mail naslov"
          />
        </div>
        <div>
          <textarea
            autoComplete="off"
            type="email"
            rows="10"
            name="message"
            id="message"
            className="form-control"
            placeholder="Sporočilo"
          />
        </div>
        <div>
          <PrimaryButton text="Pošlji" type="submit" className="submit" />
        </div>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;

const StyledContactForm = styled.div`
margin-top: 1.5rem;

label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
  }

  .form-control,
  .submit {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid ${styles.colors.grey};
    border-radius: 0.25rem;
  }

  .submit {
    text-transform: uppercase;
    transition: ${styles.linearTransition}
    cursor: pointer;
  }
  `;
