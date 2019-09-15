import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { styles } from "../../utils";
import ContactForm from "./ContactForm";
import GoogleMap from "../GoogleMap/GoogleMap";

const propTypes = {
  companyInfo: PropTypes.shape({
    nameLong: PropTypes.string.isRequired,
    nameShort: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    ceo: PropTypes.string.isRequired,
    companyId: PropTypes.string.isRequired,
    vatId: PropTypes.string.isRequired,
    companyDesc: PropTypes.string.isRequired,
  }).isRequired,
  contactInfo: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    fax: PropTypes.string.isRequired,
    web: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }).isRequired,
};

const Contact = ({ companyInfo, contactInfo }) => {
  const {
    companyDesc,
    nameLong,
    nameShort,
    address,
    ceo,
    companyId,
    vatId,
    street,
    city,
  } = companyInfo;
  const { phone, fax, mail, web } = contactInfo;

  return (
    <Wrapper>
      <div className="center">
        <div className="segment">
          <h2>Kontaktni podatki</h2>
          <div className="info-block">
            <p className="company-name">{nameShort}</p>
            <p>{nameLong}</p>
            <p>{street}</p>
            <p>{city}</p>
            <div className="info-block">
              <p>t: {phone}</p>
              <p>f: {fax}</p>
              <p>e: {mail}</p>
              <p>w: {web}</p>
            </div>
            <div className="info-block">
              <p>Matična številka: {companyId}</p>
              <p>ID številka za DDV: {vatId}</p>
            </div>
            <div className="info-block">
              <p>pon - pet: 7.00 - 19.00</p>
              <p>sob: 7.00 - 13.00</p>
            </div>
          </div>
        </div>
        <div className="segment">
          <h2>Pustite nam sporočilo</h2>
          <ContactForm />
        </div>
      </div>
      <div className="about">
        <h2>O nas</h2>
        <p>{companyDesc}</p>
      </div>
      <GoogleMap />
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .center {
    padding: 2rem 0;
    width: 90vw;
    margin: 0 auto;
  }

  h2 {
    padding-bottom: 0.2rem;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid ${styles.colors.green};
  }

  p {
    font-size: 0.9rem;
    padding: 0.1rem 0;
  }

  .segment {
    text-align: left;
    padding: 1rem 1rem;
  }

  .info-block {
    padding: 1rem 0;
  }

  .company-name {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .about {
    width: 90vw;
    margin 0 auto;
    padding: 0 0 5rem;

    p {
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    .center {
      width: 80vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

  }

  @media (min-width: 1200px) {
    .center, .about {
      width: 60vw;
    }
  }
`;

Contact.propTypes = propTypes;

export default Contact;
