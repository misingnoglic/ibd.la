import React, { useState } from "react";
import PhecodePage from "./components/PhecodePage";
import BarPlotControl from "./components/BarPlotControl";
import DeckGlMap from "./components/DeckGlMap";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./App.css";

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTabIndex = (event, newIndex) => {
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
        return <DeckGlMap />;
      }
      case 3: {
        return <BarPlotControl />;
      }
      case 4: {
        return <About />;
      }
      case 5: {
        return <Contact />;
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
            <Tab label="PheCode" />
            <Tab label="GIS" />
            <Tab label="IBD" />
            <Tab label="FAQ" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <div className="tabContent">{innerComponent}</div>
      </header>
      <div class="footer">
        <p>© 2022</p>
      </div>
    </div>
  );
};

export default App;
