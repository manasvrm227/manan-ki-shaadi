import { Grid } from "@mui/material";

import { Wrapper } from "./styles";

const OurStory = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} className="header-container">
          <p className="heading">Our Story</p>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Wrapper>
  );
};

export default OurStory;
