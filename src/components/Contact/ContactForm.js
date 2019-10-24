import React, { useState } from "react";
import styled from "styled-components";

import PrimaryButton from "../Button";

// "https://ggtrgovina.netlify.com/.netlify/functions/sendMail"
// "http://localhost:9000/sendMail"
const path = "https://ggtrgovina.netlify.com/.netlify/functions/sendMail";
const initialValues = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch(path, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    setValues(initialValues);

    const data = await res.json();

    if (res.status !== 200) {
      console.log(`Status: ${data.msg} - ${res.status}`);
    }
    console.log(`Status: ${data.msg} - ${res.status}`);
  };

  return (
    <Wrapper>
      <form className="form" name="contact">
        <div>
          <input
            autoComplete="off"
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Ime in Priimek"
            onChange={e => handleChange(e)}
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
            onChange={e => handleChange(e)}
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
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <PrimaryButton
            text="Pošlji"
            type="submit"
            onClick={handleSubmit}
            className="submit"
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  margin-top: 1.5rem;

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
    border: 1px solid ${({ theme }) => theme.grey};
    border-radius: 0.25rem;
  }

  .submit {
    text-transform: uppercase;
    transition: ${({ theme }) => theme.linear};
    cursor: pointer;
  }
`;
