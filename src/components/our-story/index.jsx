import { Grid } from "@mui/material";
import { Wrapper } from "./styles";

const OurStory = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} className="header-container">
          <p>Our Story</p>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default OurStory;
