import React, { useState } from "react";
import LinePlot from "./LinePlot";
import { lineData } from "../data/timeLinePlotData";
import { groupNameMap } from "../data/groupInfo";
import GraphPage from "./GraphPage/GraphPage";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const TimePage = () => {
  const [groupLabel, setGroupLabel] = useState("group1");
  const [disease, setDisease] = useState("GERD");

  const handleGroupChange = (event) => {
    const newGroupLabel = event.target.value;
    if (!lineData[newGroupLabel][disease]) {
      setDisease(Object.keys(lineData[newGroupLabel])[0]);
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

  const diseases = Object.keys(lineData[groupLabel])
    .sort()
    .map((option) => (
      <MenuItem value={option} key={option}>
        {option}
      </MenuItem>
    ));

  const xAxis = lineData[groupLabel][disease].map((i) => i.year);
  const yAxis = lineData[groupLabel][disease].map((i) => i.prop);

  return (
    <GraphPage
      title="Diagnosis Proportion Over Time"
      subtitle={`Group: ${groupNameMap[groupLabel]} | PheCode: ${disease}`}
      graph={<LinePlot x={xAxis} y={yAxis} />}
      graphControls={[
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
        </FormControl>,
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
        </FormControl>,
      ]}
      textSections={[
        {
          title: "About",
          content: (
            <Typography variant="body1" gutterBottom>
              This plot is the proportion of the selected IBD cluster that
              received a phecode in a given year. For each year, the total
              number of unique individuals with a diagnosis in that year is
              divided by the total cluster size for that year. Phecodes with at
              least 30 diagnoses per IBD cluster are shown.
            </Typography>
          ),
        },
      ]}
    />
  );
};
export default TimePage;
