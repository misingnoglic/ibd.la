import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import {
  outpatientGraphData,
  outpatientOptions,
} from "../data/phecodeData/outpatient";
import { erGraphData, erOptions } from "../data/phecodeData/er";

import groupNameMap from "../data/groupNameMap";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import "./PhecodePage.css";

const PhecodePage = () => {
  const [primaryGroupLabel, setPrimaryGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group6");
  // For now outpatient or emergencyRoom
  const [dataCategory, setDataCategory] = useState("Outpatient");

  const handleFirstGroupChange = (event) => {
    setSecondGroupLabel(null);
    setPrimaryGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    setSecondGroupLabel(event.target.value);
  };

  const handleDataCategoryChange = (event) => {
    setPrimaryGroupLabel(null);
    setSecondGroupLabel(null);
    setDataCategory(event.target.value);
  };

  let graph;
  let graphData;
  let negate = false;
  let fullData;
  let fullDataOptions;
  switch (dataCategory) {
    case "Outpatient":
      fullData = outpatientGraphData;
      fullDataOptions = outpatientOptions;
      break;
    case "Emergency Room":
      fullData = erGraphData;
      fullDataOptions = erOptions;
      break;
  }
  const graphColorOptions = {
    Outpatient: "#C7CEEA",
    "Emergency Room": "#FFB7B2",
  };
  if (
    primaryGroupLabel &&
    secondGroupLabel &&
    primaryGroupLabel !== secondGroupLabel
  ) {
    if (
      fullData.hasOwnProperty(primaryGroupLabel) &&
      fullData[primaryGroupLabel].hasOwnProperty(secondGroupLabel)
    ) {
      graphData = fullData[primaryGroupLabel][secondGroupLabel];
    } else if (
      fullData.hasOwnProperty(secondGroupLabel) &&
      fullData[secondGroupLabel].hasOwnProperty(primaryGroupLabel)
    ) {
      graphData = fullData[secondGroupLabel][primaryGroupLabel];
      negate = true;
    }
  }
  if (graphData) {
    graph = (
      <ScatterPlot
        firstGroupLabel={groupNameMap[primaryGroupLabel]}
        secondGroupLabel={groupNameMap[secondGroupLabel]}
        listOfComparisons={graphData}
        plotColor={graphColorOptions[dataCategory]}
        negate={negate}
      />
    );
  } else {
    graph = <Skeleton variant="rectangular" width={"100%"} height={"100%"} />;
  }

  const groupOptions = fullDataOptions
    .sort((a, b) => (groupNameMap[a] > groupNameMap[b] ? 1 : -1))
    .map((option) => (
      <MenuItem value={option} key={option}>
        {groupNameMap[option]}
      </MenuItem>
    ));

  let filteredGroupOptions = [];
  if (!!primaryGroupLabel && fullData.hasOwnProperty(primaryGroupLabel)) {
    // Filter out any options that don't have data for the other group
    filteredGroupOptions = groupOptions.filter((option) => {
      const group = option.props.value;
      return (
        (fullData[primaryGroupLabel].hasOwnProperty(group) &&
          fullData[primaryGroupLabel][group].length !== 0) ||
        (fullData.hasOwnProperty(group) &&
          fullData[group].hasOwnProperty(primaryGroupLabel) &&
          fullData[group][primaryGroupLabel].length !== 0)
      );
    });
  }

  const dataCategoryOptions = ["Emergency Room", "Outpatient"].map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));
  return (
    <div className="scatterplotBox">
      <Typography variant="h3">Phecode Distribution</Typography>
      <div className="scatterGraph">{graph}</div>
      <div className="selectionForm">
        <div className="selectionBox">
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="group1-selection">Community 1</InputLabel>
            <Select
              labelId="group1-selection"
              value={primaryGroupLabel}
              label="First Group"
              onChange={handleFirstGroupChange}
            >
              {groupOptions}
            </Select>
          </FormControl>
        </div>
        <div className="selectionBox">
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="group2-selection">Community 2</InputLabel>
            <Select
              disabled={!primaryGroupLabel}
              labelId="group2-selection"
              value={secondGroupLabel}
              label="Second Group"
              onChange={handleSecondGroupChange}
            >
              {filteredGroupOptions}
              {/* <MenuItem value="All" key="All">
                All
              </MenuItem> */}
            </Select>
          </FormControl>
        </div>
        <div className="selectionBox">
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="dataCategory-selection">Data Category</InputLabel>
            <Select
              labelId="dataCategory-selection"
              value={dataCategory}
              label="Data Category"
              onChange={handleDataCategoryChange}
            >
              {dataCategoryOptions}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default PhecodePage;
