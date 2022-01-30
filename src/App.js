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

  let innerComponent;

  switch (tabIndex) {
    case 0: {
      innerComponent = <Home />;
      break;
    }
    case 1: {
      innerComponent = <PhecodePage />;
      break;
    }
    case 2: {
      innerComponent = <DeckGlMap />;
      break;
    }
    case 3: {
      innerComponent = <BarPlotControl />;
      break;
    }
    case 4: {
      innerComponent = <About />;
      break;
    }
    case 5: {
      innerComponent = <Contact />;
      break;
    }
    default: {
      innerComponent = null;
      break;
    }
  }

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
        <p> 2022</p>
      </div>
    </div>
  );
};

export default App;
