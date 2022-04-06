import { Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import useStyles from "./styles";

const Layout = (props: any) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div>
        <Header />
        <Typography
          variant="subtitle1"
          sx={{ padding: "0px 102px", marginTop: "44px" }}
        >
          Home{history.location.pathname.replaceAll("/", " / ")}
        </Typography>
      </div>
      <main className={classes.container}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
