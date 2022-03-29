import { Grid } from "@mui/material";
import styled from "styled-components";
import { SectionHeader } from "./commonStyles";
import Header from "./components/header";
import Home from "./components/home";
import Deck from "./components/our-story";
// import OurStory from "./components/our-story";

const Wrapper = styled.div`
  .deck-container {
    /* background: lightblue; */
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
        39 39,
      auto;
  }
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

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <Grid container>
        <Grid item xs={12} className="header-container">
          <p className="heading">Our Story</p>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <div className="deck-container">
        <Deck />
      </div>
    </Wrapper>
  );
}

export default App;
