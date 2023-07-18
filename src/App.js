import React, { useState } from "react";
import AppRouter from "./components/AppRouter";

import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BiotechIcon from "@mui/icons-material/Biotech";

import logoImage from "./data/images/logo.png";

import "./App.css";

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const changeRoute = (path) => {
    const { CustomEvent } = window;
    const event = new CustomEvent("changeroute", { detail: path });
    window.dispatchEvent(event);
  };

  const handleChangeTabIndex = (newIndex) => {
    setTabIndex(newIndex);
    changeRoute(getTabUrl(newIndex));
    setMobileOpen(false);
  };

  // Runs in the beginning to set the tab based on the URL
  const setInitialTabIndex = (initialTab) => {
    setTabIndex(tabUrls.indexOf(initialTab));
  };

  const tabUrls = [
    "/",
    "/phecodes",
    "/specialties",
    "/zipcodes",
    "/genetics",
    "/time",
    "/faq",
  ];

  const getTabUrl = (tabIndex) => {
    return tabUrls[tabIndex];
  };

  const drawerWidth = 200;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Home",
          "PheCodes",
          "Specialties",
          "Zip Codes",
          "Genetics",
          "Time",
          "FAQ",
        ].map((text, idx) => (
          <ListItem
            component={Link}
            sx={{color: '#555e84'}}
            onClick={() => handleChangeTabIndex(idx)}
            to={getTabUrl(idx)}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <BiotechIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="fixed"
          sx={{ backgroundColor: "#C7CEEA", color: "black", width: "100%" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              sx={{
                height: 25,
                paddingRight: "15px",
              }}
              alt="Your logo."
              src={logoImage}
            />
            <Typography variant="h6" noWrap component="div">
              ibd.la
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav" aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <SwipeableDrawer
            variant={isMobile ? "temporary" : 'permanent'}
            open={mobileOpen || !isMobile}
            onOpen={() => setMobileOpen(true)}
            onClose={() => setMobileOpen(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box className="tabContent" sx={{ paddingTop: "20px" }}>
            <AppRouter setInitialTabIndex={setInitialTabIndex} />
          </Box>
        </Box>
      </Box>
      <div className="footer">
        <p>
          © {new Date().getFullYear()} -{" "}
          <Link href="https://github.com/misingnoglic/ibd.la">
            Contribute on GitHub
          </Link>
        </p>
      </div>
    </div>
  );
};

export default App;
