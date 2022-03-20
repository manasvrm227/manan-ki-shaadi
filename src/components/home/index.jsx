import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Wrapper } from "./styles";
import { Grid } from "@mui/material";
import Eng1 from "../../assets/images/eng-1.jpg";
import Eng2 from "../../assets/images/eng-2.jpg";
import Eng3 from "../../assets/images/eng-3.jpg";
import Eng4 from "../../assets/images/eng-4.jpg";

const Home = () => {
  return (
    <Wrapper conatiner>
      <Grid item xs={12} lg={12} className="carousel-wrapper">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {CarouselDisplay.map((item) => {
            return (
              <SwiperSlide>
                <Grid container className="carousel-container">
                  <Grid item xs={12} md={6} lg={6}>
                    <img src={item.image} alt={item.quote1} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    className="carousel-text-wrapper"
                  >
                    <div className="carousel-text-container">
                      <p>{item.quote}</p>
                      <p>{item.description}</p>
                    </div>
                  </Grid>
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
    </Wrapper>
  );
};

export default Home;

const CarouselDisplay = [
  {
    quote: "Quote 1",
    image: Eng4,
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    quote: "Quote 2",
    image: Eng1,
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    quote: "Quote 3",
    image: Eng3,
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    quote: "Quote 4",
    image: Eng2,
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
];
