import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

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


  td {
    width: 400px;
    padding: 0.5rem;
  }

  td:nth-child(even) {
    width: 800px;
    border-left: 1px solid ${styles.colors.green};
  }

  @media (min-width: 576px) {
    width: 60vw;
  }
  @media (min-width: 1200px) {
    width: 60vw;
`;

export default CompanyInfo;
