import styled from "styled-components";

export const Wrapper = styled.div`
  .menu-wrapper {
    background: #ffefba;
    background: -webkit-linear-gradient(to top, #ffffff, #ffefba);
    background: linear-gradient(to top, #ffffff, #ffefba);
  }
  .sidebar {
    min-height: 100vh;
    background-size: cover;
    background: #ffefba;
    background: -webkit-linear-gradient(to bottom, #ffffff, #ffefba);
    background: linear-gradient(to bottom, #ffffff, #ffefba);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
