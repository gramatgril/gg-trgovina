import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { styles, Container } from "../../styles";
import ContactForm from "./ContactForm";
import GoogleMap from "../GoogleMap/GoogleMap";

const propTypes = {
  companyInfo: PropTypes.shape({
    nameLong: PropTypes.string.isRequired,
    nameShort: PropTypes.string.isRequired,
    companyId: PropTypes.string.isRequired,
    vatId: PropTypes.string.isRequired,
    companyDesc: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
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
    companyId,
    vatId,
    street,
    city,
  } = companyInfo;
  const { phone, fax, mail, web } = contactInfo;

  return (
    <Wrapper>
      <Container>
        <div className="contact-panels">
          <div className="info-segment">
            <h2>Kontaktni podatki</h2>
            <StyledInfoBlock>
              <p className="company-name">{nameShort}</p>
              <p className="long-name">{nameLong}</p>
              <p>{street}</p>
              <p>{city}</p>
              <StyledInfoBlock>
                <p>t: {phone}</p>
                <p>f: {fax}</p>
                <p>e: {mail}</p>
                <p>w: {web}</p>
              </StyledInfoBlock>
              <div>
                <p>Matična številka: {companyId}</p>
                <p>ID številka za DDV: {vatId}</p>
              </div>
              <StyledInfoBlock>
                <p>pon - pet: 7.00 - 19.00</p>
                <p>sob: 7.00 - 13.00</p>
              </StyledInfoBlock>
            </StyledInfoBlock>
          </div>
          <div className="form-segment">
            <h2>Pustite nam sporočilo</h2>
            <ContactForm />
          </div>
        </div>
        <div className="about-segment">
          <h2>O nas</h2>
          <p>{companyDesc}</p>
        </div>
      </Container>
      <GoogleMap />
    </Wrapper>
  );
};

Contact.propTypes = propTypes;

export default Contact;

const Wrapper = styled.section`
  padding: 1rem 0 0;

  h2 {
    padding-bottom: 0.2rem;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid ${styles.colors.green};
  }

  p {
    padding: 0.1rem 0;
  }

  .info-segment,
  .form-segment {
    text-align: left;
  }

  .company-name {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .about-segment {
    padding-bottom: 5rem;

    p {
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    .contact-panels {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .long-name {
      width: 70%;
    }
  }
`;

const StyledInfoBlock = styled.div`
  padding: 1rem 0;
`;
