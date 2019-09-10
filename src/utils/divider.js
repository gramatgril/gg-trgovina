import styled from "styled-components";
import * as styles from "./styles";

const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${styles.colors.green};
  margin: 1em 0;
  padding: 0;
`;

export default Divider;
