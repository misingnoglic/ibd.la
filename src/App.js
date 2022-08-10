import React, { useState } from "react";
import AppRouter from "./components/AppRouter";

import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./App.css";

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const changeRoute = (path) => {
    const { CustomEvent } = window;
    const event = new CustomEvent("changeroute", { detail: path });
    window.dispatchEvent(event);
  };

  const handleChangeTabIndex = (unusedEvent, newIndex) => {
    setTabIndex(newIndex);
    changeRoute(getTabUrl(newIndex));
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

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={handleChangeTabIndex}
            style={{ backgroundColor: "#C7CEEA", color: "white" }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Home" />
            <Tab label="PheCodes" />
            <Tab label="Specialties" />
            <Tab label="Zip Codes" />
            <Tab label="Genetics" />
            <Tab label="Time" />
            <Tab label="FAQ" />
          </Tabs>
        </AppBar>
        <div className="tabContent">
          <AppRouter setInitialTabIndex={setInitialTabIndex} />
        </div>
      </header>
      <div className="footer">
        <p>
          © 2022 -{" "}
          <Link href="https://github.com/misingnoglic/ibd.la">
            Contribute on GitHub
          </Link>
        </p>
      </div>
    </div>
  );
};

export default App;
