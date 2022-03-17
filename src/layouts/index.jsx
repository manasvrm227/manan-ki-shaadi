import { Grid } from "@mui/material";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} className="menu-wrapper">
          <Grid container>
            <Grid item xs={4} lg={8} md={8}>
              <div>
                <p style={{ paddingLeft: "20px" }}>Manan</p>
              </div>
            </Grid>
            <Grid item xs={2} md={1} lg={1}>
              <p>Home</p>
            </Grid>
            <Grid item xs={2} md={1} lg={1}>
              <p>Our Story</p>
            </Grid>
            <Grid item xs={2} md={1} lg={1}>
              <p>Gallery</p>
            </Grid>
            <Grid item xs={2} md={1} lg={1}>
              <p>LAB</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1} className="sidebar">
              {/* <p>Sidebar</p> */}
            </Grid>
            <Grid item xs={12} md={11}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
