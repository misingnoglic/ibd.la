import React, { useState } from "react";
import ScatterPlotControl from "./components/ScatterPlotControl";
// import LeafletMap from "./components/LeafletMap";
import DeckGlMap from "./components/DeckGlMap";
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
      innerComponent = <ScatterPlotControl />;
      break;
    }
    case 1: {
      innerComponent = <DeckGlMap />;
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
        <Tabs value={tabIndex} onChange={handleChangeTabIndex}>
          <Tab label="PheCode" />
          <Tab label="GIS" />
          <Tab label="IBD" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
        <div className="tabContent">{innerComponent}</div>
      </header>
    </div>
  );
};

export default App;
