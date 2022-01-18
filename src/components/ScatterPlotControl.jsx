import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import {
  fakeScatterData,
  fakeScatterDataOptions,
} from "../data/fakeScatterData";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./ScatterPlotControl.css";

const ScatterPlotControl = () => {
  const [firstGroupLabel, setFirstGroupLabel] = useState("Group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("Group2");

  const handleFirstGroupChange = (event) => {
    setFirstGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    setSecondGroupLabel(event.target.value);
  };

  let graph = null;
  if (
    firstGroupLabel &&
    secondGroupLabel &&
    firstGroupLabel !== secondGroupLabel
  ) {
    let graphData = null;
    let negate = 1;
    if (
      fakeScatterData.hasOwnProperty(firstGroupLabel) &&
      fakeScatterData[firstGroupLabel].hasOwnProperty(secondGroupLabel)
    ) {
      graphData = fakeScatterData[firstGroupLabel][secondGroupLabel];
    } else if (
      fakeScatterData.hasOwnProperty(secondGroupLabel) &&
      fakeScatterData[secondGroupLabel].hasOwnProperty(firstGroupLabel)
    ) {
      graphData = fakeScatterData[secondGroupLabel][firstGroupLabel];
      negate = -1;
    } else {
      return "Invalid Data";
    }
    graph = (
      <ScatterPlot
        firstGroupLabel={firstGroupLabel}
        secondGroupLabel={secondGroupLabel}
        listOfComparisons={graphData}
        negate={negate}
      />
    );
  }
  const options = fakeScatterDataOptions.map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));

  return (
    <>
      <div className="graph">{graph}</div>
      <div className="selectionForm">
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group1-selection">Group 1</InputLabel>
            <Select
              labelId="group1-selection"
              value={firstGroupLabel}
              label="First Group"
              onChange={handleFirstGroupChange}
            >
              {options}
            </Select>
          </FormControl>
        </div>
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group2-selection">Group 2</InputLabel>
            <Select
              labelId="group2-selection"
              value={secondGroupLabel}
              label="Second Group"
              onChange={handleSecondGroupChange}
            >
              {options}
              <MenuItem value="All" key="All">
                All
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default ScatterPlotControl;
