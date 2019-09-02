import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="center">
        <form
          className="form"
          action="https://formspree.io/praecorloth@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name">Ime:</label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Miha Novak"
            />
          </div>
          <div>
            <label htmlFor="name">Email naslov:</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Miha.Novak@email.com"
            />
          </div>
          <div>
            <label htmlFor="name">Sporočilo:</label>
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
            <input type="submit" value="pošlji" className="submit" />
          </div>
        </form>
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    .center {
      width: 50vw;
      margin: 0 auto;
    }
  }

  label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
  }

  .form-control,
  .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid ${styles.colors.mainGrey};
    border-radius: 0.25rem;
  }

  .submit {
    background-color: ${styles.colors.mainWhite};
    border-color: ${styles.colors.mainGrey};
    text-transform: uppercase;
    color: ${styles.colors.mainGrey};
    transition: ${styles.linearTransition}
    cursor: pointer;
  }
  .submit:hover {
    background: ${styles.colors.mainGrey};
    color: ${styles.colors.mainWhite};
    border-color: ${styles.colors.mainGrey};
  }
`;

export default Contact;
