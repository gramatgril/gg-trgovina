import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

import CompanyInfo from "./CompanyInfo";
import GoogleMap from "./../GoogleMap";

const About = ({ companyInfo, contactInfo }) => {
  const { companyDesc } = companyInfo;
  const { phone, fax, mail, web } = contactInfo;

  return (
    <Wrapper>
      <div className="center">
        <div className="segment">
          <h4>Kdo smo</h4>
          <p>{companyDesc}</p>
        </div>
        <div className="segment">
          <h4>Kontakt</h4>
          <p>Telefonska številka: {phone}</p>
          <p>Faks: {fax}</p>
          <p>E-mail: {mail}</p>
          <p>
            Web:{" "}
            <a
              className="link"
              href="https://gramat-gril.si/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {web}
            </a>
          </p>
        </div>
        <div className="segment">
          <h4>Delovni čas</h4>
          <p>Od ponedeljka do petka med 7. in 19. uro</p>
          <p>Sobota: med 7. in 13. uro</p>
        </div>
        <div className="segment">
          <h4>Izkaznica podjetja</h4>
          <CompanyInfo companyInfo={companyInfo} />
        </div>
        <div className="segment">
          <h4>Sedež podjetja</h4>
          <p>
            Najdete nas na obrobju industrijske cone Grosuplje na Rožni dolini
            9.
          </p>
        </div>
        <GoogleMap />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  margin: 0 auto;

  .center {
    width: 95vw;
    text-align: center;
  }

  .segment {
    padding-bottom: 2rem;
    p {
      padding: 0.5rem;
    }
  }

  .link {
    text-decoration: none;
    color: ${styles.colors.black};
    :hover {
      color: ${styles.colors.green};
    }
  }

  h4 {
    margin: 1rem 0;
    letter-spacing: ${styles.letterSpacing};
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    letter-spacing: 1.2px;
    text-align: center;
    padding: 2rem 2rem;
  }

  @media (min-width: 576px) {
    .center {
      width: 70vw;
    }
  }
`;

export default About;
