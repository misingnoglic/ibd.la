import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { realData, realDataOptions } from "../data/realScatterData";
import { erRealData, erRealDataOptions } from "../data/erRealScatterData";

import groupNameMap from "../data/groupNameMap";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import "./PhecodePage.css";

const validSecondGroups = (data, primaryGroup) => {
  const primary = Object.keys(data[primaryGroup] || {});
  const secondary = Object.entries(data).map();
};

const PhecodePage = () => {
  const [primaryGroupLabel, setPrimaryGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group6");

  const handleFirstGroupChange = (event) => {
    setPrimaryGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    setSecondGroupLabel(event.target.value);
  };

  let graph;
  let graphData;
  let negate = false;
  if (
    primaryGroupLabel &&
    secondGroupLabel &&
    primaryGroupLabel !== secondGroupLabel
  ) {
    if (
      realData.hasOwnProperty(primaryGroupLabel) &&
      realData[primaryGroupLabel].hasOwnProperty(secondGroupLabel)
    ) {
      graphData = realData[primaryGroupLabel][secondGroupLabel];
    } else if (
      realData.hasOwnProperty(secondGroupLabel) &&
      realData[secondGroupLabel].hasOwnProperty(primaryGroupLabel)
    ) {
      graphData = realData[secondGroupLabel][primaryGroupLabel];
      negate = true;
    }
  }
  if (graphData) {
    graph = (
      <ScatterPlot
        firstGroupLabel={groupNameMap[primaryGroupLabel]}
        secondGroupLabel={groupNameMap[secondGroupLabel]}
        listOfComparisons={graphData}
        plotColor="#C7CEEA"
        negate={negate}
      />
    );
  } else {
    graph = <Skeleton variant="rectangular" width={"100%"} height={"100%"} />;
  }

  const options = realDataOptions
    .sort((a, b) => (groupNameMap[a] > groupNameMap[b] ? 1 : -1))
    .map((option) => (
      <MenuItem value={option} key={option}>
        {groupNameMap[option]}
      </MenuItem>
    ));
  return (
    <div className="scatterplotBox">
      <Typography variant="h3">Phecode Distribution</Typography>
      <div className="scatterGraph">{graph}</div>
      <div className="selectionForm">
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group1-selection">Community 1</InputLabel>
            <Select
              labelId="group1-selection"
              value={primaryGroupLabel}
              label="First Group"
              onChange={handleFirstGroupChange}
            >
              {options}
            </Select>
          </FormControl>
        </div>
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group2-selection">Community 2</InputLabel>
            <Select
              labelId="group2-selection"
              value={secondGroupLabel}
              label="Second Group"
              onChange={handleSecondGroupChange}
            >
              {/* Filter out any options that don't have data for the other group */}
              {options.filter((option) => {
                const group = option.props.value;
                return (
                  (realData[primaryGroupLabel].hasOwnProperty(group) && realData[primaryGroupLabel][group].length !== 0) ||
                  (realData.hasOwnProperty(group) &&
                    realData[group].hasOwnProperty(primaryGroupLabel) && realData[group][primaryGroupLabel].length !== 0)
                );
              })}
              {/* <MenuItem value="All" key="All">
                All
              </MenuItem> */}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default PhecodePage;
