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
import Divider from "@mui/material/Divider";


const PhecodePage = () => {
  const [groupLabel, setGroupLabel] = useState("group1");
  const [disease, setDisease] = useState("GERD");


  const handleGroupChange = (event) => {
    const newGroupLabel = event.target.value;
    if (!lineData[newGroupLabel][disease]){
      setDisease(Object.keys(lineData[newGroupLabel])[0])
    }
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
        <Typography variant="h2">Diagnosis Proportion Over Time</Typography>
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
            <InputLabel id="disease-selection">Phecode</InputLabel>
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
        <div className={css.sectionHeader}>
            <Divider textAlign="left">About</Divider>
          </div>
          <p>
            This plot is the proportion of the selected IBD Community that received a phecode in a given year. For each year, the total 
            number of unique individuals with a diagnosis in that year is divided by the total community size for that year. Phecodes 
            with at least 30 diagnoses per IBD community are shown. 
          </p>
        </Typography>
      </div>
    </div>
  );
};

export default PhecodePage;
