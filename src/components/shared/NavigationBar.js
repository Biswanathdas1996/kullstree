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
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import VoiceFile from "../../VoiceFile/Create";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  let history = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "hotpink", color: "#fff" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => history("/")}
          >
            Kullstree
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              <MenuItem key={4} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => history("/")}>
                  Home
                </Typography>
                <Typography
                  textAlign="center"
                  onClick={() => history("/trainings")}
                >
                  Training
                </Typography>
                <Typography
                  textAlign="center"
                  onClick={() => history("/products")}
                >
                  Products
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            onClick={() => history("/")}
          >
            Kullstree
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={8}
              onClick={() => history("/")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              home
            </Button>
            <Button
              key={8}
              onClick={() => history("/trainings")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Training
            </Button>
            <Button
              key={8}
              onClick={() => history("/products")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>
            <Button
              key={8}
              onClick={() => history("/job")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Job
            </Button>
            <Button
              key={8}
              onClick={() => history("/support")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Support
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <VoiceFile />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              key={8}
              onClick={() => history("/profile")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Account
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button key={8} sx={{ my: 2, color: "white", display: "block" }}>
              Pincode: 721444
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
