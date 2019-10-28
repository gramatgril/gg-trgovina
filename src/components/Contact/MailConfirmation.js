import React from "react";
import styled from "styled-components";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const propTypes = {
  formStatus: PropTypes.shape({
    statusCode: PropTypes.number.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

const MailConfirmation = ({ formStatus }) => {
  const { statusCode, msg } = formStatus;

  if (statusCode === 200) {
    return (
      <Wrapper>
        <h3 className="message">{msg}</h3>
        <p className="icon-success">
          <FaRegCheckCircle />
        </p>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h3 className="message">{msg}</h3>
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
    text-align: left;
    font-weight: 500;
  }

  .icon-success {
    font-size: 6rem;
    color: ${({ theme }) => theme.green};
  }

  .icon-fail {
    font-size: 6rem;
    color: ${({ theme }) => theme.red};
  }
`;
