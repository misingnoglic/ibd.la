import React, { useState } from "react";
import LinePlot from "./LinePlot";
import { lineData } from "../data/timeLinePlotData";
import { groupNameMap } from "../data/groupInfo";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import css from "./TimePage.module.css";

const PhecodePage = () => {
  const [groupLabel, setGroupLabel] = useState("group1");
  const [disease, setDisease] = useState("GERD");


  const handleGroupChange = (event) => {
    setDisease(null);
    setGroupLabel(event.target.value);
  };

  const handleDiseaseChange = (event) => {
    setDisease(event.target.value);
  };

  const groups = Object.keys(lineData)
  .sort((a, b) => (groupNameMap[a] > groupNameMap[b] ? 1 : -1))
  .map((option) => (
    <MenuItem value={option} key={option}>
      {groupNameMap[option]}
    </MenuItem>
  ));

  const diseases = Object.keys(lineData[groupLabel]).sort().map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));

  const xAxis = lineData[groupLabel][disease].map((i) => i.year)
  const yAxis = lineData[groupLabel][disease].map((i) => i.prop)

  return (
    <div className={css.scatterplotBox}>
      <div className={css.titleText}>
        <Typography variant="h2">Diagnosis Proportion over Time</Typography>
      </div>
      <div className={css.subTitleText}>
        <Typography variant="h5">
          Group: {groupNameMap[groupLabel]} 
        </Typography>
      </div>
      <div className={css.subTitleText}>
        <Typography variant="h5" gutterBottom>
         PheCode: {disease}
        </Typography>
      </div>

      <div className={css.scatterGraph}>
        <LinePlot x={xAxis} y={yAxis} />
      </div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="group-selection">Community</InputLabel>
            <Select
              labelId="group-selection"
              value={groupLabel}
              label="Group"
              onChange={handleGroupChange}
            >
              {groups}
            </Select>
          </FormControl>
        </div>
        <div className={css.selectionBox}>
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="disease-selection">Community</InputLabel>
            <Select
              labelId="group-selection"
              value={disease}
              label="Disease"
              onChange={handleDiseaseChange}
            >
              {diseases}
            </Select>
          </FormControl>
        </div>

        {/* <div className={css.selectionBox}>
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
            </Select>
          </FormControl>
        </div> */}
      </div>
      <div className={css.bodyText2}>
        <Typography variant="body1" gutterBottom>
          <p>
            This plot is the proportion of the selected group that received a PheCode in a given year. 
          </p>
        </Typography>
      </div>
    </div>
  );

  // return <LinePlot />;

};

export default PhecodePage;
