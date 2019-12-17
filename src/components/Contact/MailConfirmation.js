import React from 'react';
import styled from 'styled-components';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const propTypes = {
  formStatus: PropTypes.shape({
    statusCode: PropTypes.number.isRequired,
    msg: PropTypes.string
  })
};

const MailConfirmation = ({ formStatus }) => {
  const { statusCode } = formStatus;

  if (statusCode === 200) {
    return (
      <Wrapper>
        {/* <h3 className="message">{msg}</h3> */}
        <h3 className="message">
          Sporočilo je bilo uspešno poslano. Hvala za vaš odziv, odgovorimo vam v najkrajšem možnem času. Hvala!
        </h3>
        <p className="icon-success">
          <FaRegCheckCircle />
        </p>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {/* <h3 className="message">{msg}</h3> */}
        <h3 className="message">
          Nekaj se je zalomilo. Poskusite pozneje ali nas pa pokličite po telefonu ali e-pošti!
        </h3>
        <p className="icon-fail">
          <FaRegTimesCircle />
        </p>
      </Wrapper>
    );
  }
};

MailConfirmation.propTypes = propTypes;

export default MailConfirmation;

const Wrapper = styled.div`
  height: 457px;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .message {
    line-height: 1.5;
    text-align: left;
    font-weight: 500;
  }

  .icon-success {
    font-size: 6rem;
    color: ${({ theme }) => theme.primary[500]};
  }

  .icon-fail {
    font-size: 6rem;
    color: ${({ theme }) => theme.red};
  }
`;
