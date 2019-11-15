import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../../styles';
import ContactForm from './ContactForm';
import LeafletMap from './../Map';
import MailConfirmation from './MailConfirmation';
import { theme } from './../../styles/theme';

const propTypes = {
  companyInfo: PropTypes.shape({
    nameLong: PropTypes.string.isRequired,
    nameShort: PropTypes.string.isRequired,
    companyId: PropTypes.string.isRequired,
    vatId: PropTypes.string.isRequired,
    companyDesc: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired,
  contactInfo: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    fax: PropTypes.string.isRequired,
    web: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired
  }).isRequired
};

const Contact = ({ companyInfo, contactInfo }) => {
  const { companyDesc, nameLong, nameShort, companyId, vatId, street, city } = companyInfo;
  const { phone, fax, mail, web } = contactInfo;
  // When the form is submitted, state and msg are received from the server and sent to the MailConfirmation component
  const [formStatus, setFormStatus] = useState({ statusCode: null, msg: '' });

  return (
    <Wrapper>
      <Container>
        <div className="contact-panels">
          <div className="info-segment">
            <div className="title">
              <h1>Kontaktni podatki</h1>
            </div>
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
                <h4>Delovni čas: </h4>
                <p>pon - pet: 7.00 - 19.00</p>
                <p>sob: 7.00 - 13.00</p>
              </StyledInfoBlock>
            </StyledInfoBlock>
          </div>
          {/* Contact Form */}
          <div className="form-segment">
            <div className="title">
              <h1>Pustite nam sporočilo</h1>
            </div>
            {/* Renders confirmation component when mail is sent*/}
            {!formStatus.statusCode ? (
              <ContactForm setFormStatus={setFormStatus} />
            ) : (
              <MailConfirmation formStatus={formStatus} />
            )}
          </div>
        </div>
        <div className="about-segment">
          <div className="title">
            <h1>O nas</h1>
          </div>
          <p>{companyDesc}</p>
        </div>
      </Container>
      <LeafletMap />
    </Wrapper>
  );
};

Contact.propTypes = propTypes;

export default Contact;

const StyledInfoBlock = styled.div``;

const Wrapper = styled.section`
  padding: 3rem 0 0;

  ${StyledInfoBlock} {
    padding: 1rem 0;
  }

  .title {
    display: inline-block;
    h1 {
      border-bottom: 2px solid ${({ theme }) => theme.primary[300]};
      font-weight: 500;
    }
  }

  h4 {
    padding: 0.5rem 0 0.25rem;
  }
  .info-segment,
  .form-segment {
    text-align: left;
  }

  .company-name {
    font-size: 1.25rem;
    font-weight: 600;
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
