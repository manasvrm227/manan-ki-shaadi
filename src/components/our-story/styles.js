import styled from "styled-components";
import { SectionHeader } from "../../commonStyles";

export const Wrapper = styled.div`
  font-family: "Kalam", cursive;
  font-weight: bold;
  height: 100vh;
  .header-container {
    text-align: center;
  }
  .heading {
    ${SectionHeader}
  }
`;
