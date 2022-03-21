import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { realData, realDataOptions } from "../data/deptScatterData";

import {groupNameMap} from "../data/groupInfo";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import "./DepartmentPage.css";

const DeptPage = () => {
  const [firstGroupLabel, setFirstGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group6");

  const handleFirstGroupChange = (event) => {
    setFirstGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    setSecondGroupLabel(event.target.value);
  };

  let graph;
  let graphData;
  let negate = false;
  if (
    firstGroupLabel &&
    secondGroupLabel &&
    firstGroupLabel !== secondGroupLabel
  ) {
    if (
      realData.hasOwnProperty(firstGroupLabel) &&
      realData[firstGroupLabel].hasOwnProperty(secondGroupLabel)
    ) {
      graphData = realData[firstGroupLabel][secondGroupLabel];
    } else if (
      realData.hasOwnProperty(secondGroupLabel) &&
      realData[secondGroupLabel].hasOwnProperty(firstGroupLabel)
    ) {
      graphData = realData[secondGroupLabel][firstGroupLabel];
      negate = true;
    }
  }
  if (graphData) {
    graph = (
      <ScatterPlot
        firstGroupLabel={groupNameMap[firstGroupLabel]}
        secondGroupLabel={groupNameMap[secondGroupLabel]}
        listOfComparisons={graphData}
        plotColor="#B5EAD7"
        negate={negate}
      />
    );
  } else {
    graph = (
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"100%"}
      />
    );
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
      <Typography variant="h3">Community Speciality Associations</Typography>
      <div className="scatterGraph">{graph}</div>
      <div className="selectionForm">
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group1-selection">Community 1</InputLabel>
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
            <InputLabel id="group2-selection">Community 2</InputLabel>
            <Select
              labelId="group2-selection"
              value={secondGroupLabel}
              label="Second Group"
              onChange={handleSecondGroupChange}
            >
              {options}
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

export default DeptPage;
