import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

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
};

const CompanyInfo = ({ companyInfo }) => {
  const { nameLong, nameShort, address, ceo, companyId, vatId } = companyInfo;

  return (
    <Wrapper>
      <table>
        <tbody>
          <tr>
            <td>Dolgi naziv:</td>
            <td>{nameLong}</td>
          </tr>
          <tr>
            <td>Krajši naziv:</td>
            <td>{nameShort}</td>
          </tr>
          <tr>
            <td>Naslov:</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>Direktor:</td>
            <td>{ceo}</td>
          </tr>
          <tr>
            <td>Matična številka:</td>
            <td>{companyId}</td>
          </tr>
          <tr>
            <td>Ident. št. za DDV in davčna številka:</td>
            <td>{vatId}</td>
          </tr>
          <tr>
            <td>Davčni zavezanec:</td>
            <td>Da</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  text-align: left;
  margin 0 auto;

  table {
   width: 100%;
  }

  td {
    vertical-align: top;
    width: 200px;
    justify-content: top;
    padding: 0.5rem;
    font-size: 0.8rem;
    text-align: right;
  }

  td:nth-child(even) {
    text-align: left;
    border-left: 1px solid ${styles.colors.green};
  }

  @media (min-width: 576px) {
    width: 40vw;
  }

  @media (min-width: 1200px) {
    width: 40vw;
  }
`;

CompanyInfo.propTypes = propTypes;

export default CompanyInfo;
