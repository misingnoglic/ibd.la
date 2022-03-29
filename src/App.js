import React, { useState } from "react";
import PhecodePage from "./components/PhecodePage";
import DeptPage from "./components/DepartmentPage";
import IbdPage from "./components/IbdPage";
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
        return <DeptPage />;
      }
      case 3: {
        return <DeckGlMap />;
      }
      case 4: {
        return <IbdPage />;
      }
      case 5: {
        return <About />;
      }
      case 6: {
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
            <Tab label="PheCodes" />
            <Tab label="Specialties" />
            <Tab label="Zipcodes" />
            <Tab label="Genetics" />
            <Tab label="FAQ" />
            <Tab label="Contact" />
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
