import React, { useState } from "react";
import BarPlot from "./BarPlot";
import IbdTable from "./IbdTable";
import { barData } from "../data/barData";
import { groupNameMap } from "../data/groupInfo";

import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import css from "./IbdPage.module.css";

const IbdPage = () => {
  const [primaryGroup, setPrimaryGroup] = useState("group5");

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
          <div className={css.IBDTitleText}>
        <Typography variant="h2">
          IBD Sharing
        </Typography>
      </div> 
      <div className={css.graph}>{graph}</div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
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
      <IbdTable data={barData[primaryGroup]} />
    </div>
  );
};

export default IbdPage;
