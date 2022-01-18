import React, { useState } from "react";
import ScatterPlotControl from "./components/ScatterPlotControl";
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
    case (0): {
      innerComponent = <ScatterPlotControl />
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
        <Tabs
          value={tabIndex}
          onChange={handleChangeTabIndex}
        >
          <Tab label="IBD Similarities" />
          <Tab label="GIS" />
          <Tab label="About" />
        </Tabs>
        <div className="tabContent">
          {innerComponent}
        </div>
      </header>
    </div>
  );
};

export default App;
