import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  .carousel-wrapper {
    height: 95vh;
  }
  .carousel-container {
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
  .swiper {
    width: 100%;
    height: 100%;
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
