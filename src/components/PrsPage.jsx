import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { simulatedPrsData } from "../data/prs/simulatedPrs";
import GraphPage from "./GraphPage/GraphPage";

import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import css from "./PrsPage.module.css";

const PrsPage = () => {
  const [group, setGroup] = useState("Northern European");
  const [covariate, setCovariate] = useState("Smoker");

  let graph;
  const graphData = simulatedPrsData[group][covariate];
  if (graphData) {
    graph = (
      <ScatterPlot
        flip={true}
        listOfComparisons={graphData.map((d) => {
          return { value: d.mean, stdev: d.std, label: d.label };
        })}
        plotColor="#B5EAD7"
        width={650}
        height={500}
        xLabel="Score"
      />
    );
  } else {
    graph = <Skeleton variant="rectangular" width={"100%"} height={"100%"} />;
  }

  let groupOptions = Object.keys(simulatedPrsData).map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));

  let covariateOptions = Object.keys(simulatedPrsData[group]).map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));

  return (
    <GraphPage
      title="BETA PRS PAGE - SIMULATED DATA"
      subtitle={`${group} | ${covariate}`}
      graph={graph}
      graphControls={[
        <FormControl>
          <InputLabel id="group1-selection">Cluster 1</InputLabel>
          <Select
            labelId="group1-selection"
            value={group}
            label="Group"
            onChange={(e) => setGroup(e.target.value)}
          >
            {groupOptions}
          </Select>
        </FormControl>,
        <FormControl>
          <InputLabel id="group2-selection">Cluster 2</InputLabel>
          <Select
            labelId="group2-selection"
            value={covariate}
            label="Covariate"
            onChange={(e) => setCovariate(e.target.value)}
          >
            {covariateOptions}
          </Select>
        </FormControl>,
      ]}
      textSections={[
        { title: "Model", content: "TODO" },
        { title: "About", content: "TODO" },
      ]}
    />
  );
};

export default PrsPage;
