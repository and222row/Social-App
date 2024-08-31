"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { reduxStore } from "@/lib/Redux/ReduxStore";
import fakeLogo from "../../../assets/images/fake-logo.jpg";

const pages = ["Home"];
const settings = ["Profile"];

const logoutFn = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("userId");
    window.location.href = "/login";
  }
};

export default function Navbar() {
  let [name, setName] = React.useState<string | null>(null);
  const { userToken } = useSelector(
    (store: ReturnType<typeof reduxStore.getState>) => store.auth
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLoggedUser = typeof window !== "undefined" && localStorage.getItem("loggedUser");

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsKabaddiIcon fontSize="large" />

          <Typography
            variant="h4"
            noWrap
            component="span"
            sx={{
              mx: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Social
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {isLoggedUser
                ? pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link href={`/${page === "Home" ? "" : page.toLowerCase()}`}>
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))
                : ""}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SOCIAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isLoggedUser
              ? pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link href={`/${page === "Home" ? "" : page.toLowerCase()}`}>
                      {page}
                    </Link>
                  </Button>
                ))
              : ""}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoggedUser ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box sx={{ p: 1 }}>
                    <Image
                      src={fakeLogo}
                      alt="fake"
                      width={50}
                      height={50}
                      style={{ borderRadius: "10px" }}
                    />
                  </Box>
                </IconButton>
              </Tooltip>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link href="/register">
                  <Button sx={{ color: "white" }}>Register</Button>
                </Link>
                <Link href="/login">
                  <Button sx={{ color: "white" }}>Login</Button>
                </Link>
              </Box>
            )}

            <Box sx={{ position: "relative" }}>
              {isLoggedUser ? (
                <Button onClick={logoutFn} sx={{ color: "white" }}>
                  Logout
                </Button>
              ) : (
                ""
              )}

              <Menu
                sx={{
                  mt: 1,
                  position: "absolute",
                  right: 0,
                  zIndex: 1300,
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "bottom",
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
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      if (setting === "Logout") {
                        window.location.href = "/login";
                      }
                    }}
                  >
                    <Typography textAlign="center">
                      <Link href={`/${setting.toLowerCase()}`}>{setting}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
