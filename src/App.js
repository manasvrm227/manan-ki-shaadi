import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SectionHeader } from "./commonStyles";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import LoadingScreen from "./components/loading-screen";
import Deck from "./components/our-story";
// import OurStory from "./components/our-story";

const Wrapper = styled.div`
  font-family: "Kalam", cursive;
  font-weight: bold;
  height: 100vh;
  .deck-container {
    width: 100%;
    position: absolute;
    overflow: hidden;
    /* background-color: beige; */
    height: 100%;
    padding-top: 8%;
    cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
        39 39,
      auto;
  }
  .header-container {
    text-align: center;
  }
  .heading {
    margin-top: 8%;
    ${SectionHeader}
  }
`;

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);
  return (
    <>
      {loaded === true ? (
        <Wrapper>
          <Header />
          <Home />
          <Grid container>
            <Grid item xs={12} className="header-container">
              <p className="heading">Our Journey</p>
            </Grid>
          </Grid>
          <div className="deck-container">
            <Deck />
          </div>
          {/* <Footer /> */}
        </Wrapper>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
