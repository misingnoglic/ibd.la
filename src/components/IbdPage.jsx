import React, { useState } from "react";
import BarPlot from "./BarPlot";
import IbdTable from "./IbdTable";
import { barData } from "../data/barData";
import groupNameMap from "../data/groupNameMap";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import "./BarPlotControl.css";

const IbdPage = () => {
  const [primaryGroup, setPrimaryGroup] = useState("group2");

  const handleChangeGroup = (event) => {
    setPrimaryGroup(event.target.value);
  };

  let graph;
  if (primaryGroup) {
    const groups = Object.keys(barData[primaryGroup]);
    const y = groups.map((group) => barData[primaryGroup][group].value);
    const error = groups.map((group) => barData[primaryGroup][group].cint);
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

  const options = Object.keys(barData)
    .sort((a, b) => (groupNameMap[a] > groupNameMap[b] ? 1 : -1))
    .map((option) => (
      <MenuItem value={option} key={option}>
        {groupNameMap[option]}
      </MenuItem>
    ));

  return (
    <div>
      <div className="graph">{graph}</div>
      <IbdTable data={barData[primaryGroup]} />
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

export default IbdPage;
