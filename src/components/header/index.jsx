import { Grid } from "@mui/material";
import FlowersCornerLeft from "../../assets/images/flower-left-min.png";
import FlowersCornerRight from "../../assets/images/flower-min.png";
import { Wrapper } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12}>
          <div className="img-container">
            <div>
              <img
                src={FlowersCornerLeft}
                alt="corner-flowers"
                className="flower-img"
              />
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

export default Header;
