import { Grid } from "@mui/material";
import { Wrapper } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} className="header-container">
          <div className="img-container">
            <div>
              <img
                src="https://res.cloudinary.com/dkksvxoms/image/upload/v1648616521/manan-shaadi/flower-left-down_aho3op.png"
                alt="corner-flowers"
                className="flower-img"
              />
            </div>
            <div className="heading-text">
              Made with &#9829; by Anushka & Manas
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dkksvxoms/image/upload/v1648616521/manan-shaadi/flower-right-down_vqodcq.png"
                alt="corner-flowers"
                className="flower-img"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
