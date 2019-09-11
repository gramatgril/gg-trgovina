import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";
import { PrimaryButton } from "../Button/Button";

const Contact = () => {
  return (
    <Wrapper>
      <div className="center">
        <div className="title">
          <h1>Obrazec za povpraševanje</h1>
        </div>
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
            <PrimaryButton text="Pošlji" type="submit" className="submit" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    padding-bottom: 1rem;
  }

  h1 {
    color: ${styles.colors.green};
    opacity: 1;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 8px;
    }

  @media (min-width: 992px) {
    .center {
      width: 50vw;
      margin: 0 auto;
    }

    h1{
      font-size: 2rem;
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
    border: 1px solid ${styles.colors.grey};
    border-radius: 0.25rem;
  }

  .submit {
    background-color: ${styles.colors.white};
    border-color: ${styles.colors.green};
    text-transform: uppercase;
    color: ${styles.colors.green};
    transition: ${styles.linearTransition}
    cursor: pointer;
  }
  .submit:hover {
    background: ${styles.colors.green};
    color: ${styles.colors.white};
    border-color: ${styles.colors.grey};
  }
`;

export default Contact;
