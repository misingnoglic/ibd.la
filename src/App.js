import React, { useState } from "react";
import PhecodePage from "./components/PhecodePage";
import DeptPage from "./components/DepartmentPage";
import TimePage from "./components/TimePage";
import IbdPage from "./components/IbdPage";
import DeckGlMap from "./components/DeckGlMap";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ReactGA from "react-ga";

import "./App.css";

ReactGA.initialize("G-XSD3FL1WE4");

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTabIndex = (event, newIndex) => {
    ReactGA.event({
      category: 'navigation',
      action: 'Switched tab',
      value: tabIndex
    });
    setTabIndex(newIndex);
  };

  const getTabComponent = (tabIndex) => {
    switch (tabIndex) {
      case 0: {
        return <Home />;
      }
      case 1: {
        return <PhecodePage />;
      }
      case 2: {
        return <DeptPage />;
      }
      case 3: {
        return <DeckGlMap />;
      }
      case 4: {
        return <IbdPage />;
      }
      case 5: {
        return <TimePage />;
      }
      case 6: {
        return <About />;
      }

      default: {
        return null;
      }
    }
  };

  const innerComponent = getTabComponent(tabIndex);

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={handleChangeTabIndex}
            style={{ backgroundColor: "#C7CEEA", color: "white" }}
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
        <div className="tabContent">{innerComponent}</div>
      </header>
      <div className="footer">
        <p>© 2022</p>
      </div>
    </div>
  );
};

export default App;
