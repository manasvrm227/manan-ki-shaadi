import { Grid } from "@mui/material";
import FlowersCornerLeft from "../../assets/images/flower-left-down.png";
import FlowersCornerRight from "../../assets/images/flower-right-down.png";
import { Wrapper } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} className="header-container">
          <div className="img-container">
            <div>
              <img
                src={FlowersCornerLeft}
                alt="corner-flowers"
                className="flower-img"
              />
            </div>
            <div className="heading-text">
              Made with &#9829; by Anushka & Manas
            </div>
            <div>
              <img
                src={FlowersCornerRight}
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
