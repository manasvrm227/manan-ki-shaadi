import { Grid } from "@mui/material";
import { Wrapper } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} className="header-container">
          <div className="img-container">
            <div>
              <img
                src="https://res.cloudinary.com/dkksvxoms/image/upload/v1648616519/manan-shaadi/flower-left-min_efkpsn.png"
                alt="corner-flowers"
                className="flower-img"
              />
            </div>
            <div className="heading-text">ManAn</div>
            <div>
              <img
                src="https://res.cloudinary.com/dkksvxoms/image/upload/v1648616519/manan-shaadi/flower-min_jg20vk.png"
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
