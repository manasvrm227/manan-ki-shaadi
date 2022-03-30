import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  font-family: "Kalam", cursive;
  font-weight: bold;
  /* background-color: beige; */
  /* .carousel-wrapper {
    height: 95vh;
  } */
  .carousel-container {
    /* background-color: beige; */
    display: flex;
    @media (max-width: 425px) {
      flex-direction: column;
    }
  }
  .carousel-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-text-container {
    width: 60%;
    @media (max-width: 425px) {
      width: 100%;
    }
  }
  .quote-title {
    font-size: 2em;
    font-weight: bold;
    color: #ac3b61;
  }
  .quote-description {
    color: #123c69;
  }

  .swiper {
    width: 100%;
    /* height: 100%; */
  }
  .swiper-wrapper {
    height: auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
