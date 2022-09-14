import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { ReactComponent as LogoIcon } from "src/assets/icons/logo-toeic.svg";
import AppDropDown from "src/components/core/app-dropdown";
import useStyles from "./styles";

const pages = [
  {
    label: "",
    link: "",
  },
  {
    label: "Practice",
    link: "practice",
  },
  {
    label: "Testing Online",
    link: "exam",
  },
  {
    label: "Blog",
    link: "blog",
  },
  {
    label: "Forum",
    link: "forum",
  },
  {
    label: "Tutorial",
    link: "tutorial",
  },
];

const Header = () => {
  const classes = useStyles();
  const [isActive, setIsActive] = React.useState(0);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography component={Link} href="/">
            <LogoIcon />
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Box
            sx={{
              flexGrow: 1,
              ml: "36px",
              columnGap: "50px",
              display: { xs: "none", md: "flex" },
              height: "inherit",
              alignItems: "center",
              transition: "all .5s ease-in-out 0s",
            }}
          >
            {pages.map((page, index) => (
              <Box
                // sx={{
                //   height: "inherit",
                //   borderBottom: index === isActive ? "4px solid #fff" : "",
                // }}
                key={index}
              >
                <Typography
                  component={Link}
                  href={`/${page.link}`}
                  className={classes.navbarItem}
                  variant="subtitle1"
                  onClick={() => {
                    setIsActive(index);
                  }}
                  sx={{
                    my: "22px",
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {page.label}
                </Typography>
                {index === isActive && (
                  <div className={classes.navbarBaseline}></div>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <AppDropDown
              title="Account"
              listItem={["Setting", "Logout"]}
            ></AppDropDown>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
