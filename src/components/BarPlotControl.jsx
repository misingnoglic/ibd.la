import React, { useState } from "react";
import BarPlot from "./BarPlot";
import { fakeBarData } from "../data/fakeBarData";
import groupNameMap from "../data/groupNameMap";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import "./BarPlotControl.css";

const BarPlotControl = () => {
  const [primaryGroup, setPrimaryGroup] = useState("group1");

  const handleChangeGroup = (event) => {
    setPrimaryGroup(event.target.value);
  };

  let graph;
  if (primaryGroup) {
    const groups = Object.keys(fakeBarData[primaryGroup]);
    const y = groups.map((group) => fakeBarData[primaryGroup][group].value);
    const error = groups.map((group) => fakeBarData[primaryGroup][group].cint);
    const x = groups.map((group) => groupNameMap[group]);
    graph = (
      <BarPlot
        graphLabel={groupNameMap[primaryGroup]}
        x={x}
        y={y}
        error={error}
      />
    );
  } else {
    graph = (
      <Skeleton
        variant="rectangular"
        animation={false}
        width={500}
        height={500}
      />
    );
  }

  const options = Object.keys(fakeBarData).map((option) => (
    <MenuItem value={option} key={option}>
      {groupNameMap[option]}
    </MenuItem>
  ));

  return (
    <div>
      <div className="graph">{graph}</div>
      <div className="selectionForm">
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="community-selection">Community</InputLabel>
            <Select
              labelId="community-selection"
              value={primaryGroup}
              label="Community"
              onChange={handleChangeGroup}
            >
              {options}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default BarPlotControl;
