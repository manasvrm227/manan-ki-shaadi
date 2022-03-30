import styled from "styled-components";
import Loader from "../../assets/images/loader.gif";

const LoadingScreen = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  return (
    <Wrapper>
      <img src={Loader} alt="loading..." height="500" width="500" />
    </Wrapper>
  );
};

export default LoadingScreen;
