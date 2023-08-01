import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { simulatedPrsData } from "../data/prs/simulatedPrs";

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
    <div className={css.scatterplotBox}>
      <Typography variant="h2">BETA PRS PAGE - SIMULATED DATA</Typography>
      <Typography variant="h5">
        Group={group} | Covariate={covariate}
      </Typography>
      <div className={css.scatterGraph}>{graph}</div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
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
          </FormControl>
        </div>
        <div className={css.selectionBox}>
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
          </FormControl>
        </div>
      </div>
      <div className={css.bodyText2}>
        <div className={css.sectionHeader}>
          <Divider textAlign="left">
            <Typography variant="h4">Model</Typography>
          </Divider>
        </div>
        <Typography variant="body1" gutterBottom>
          TODO
        </Typography>
        <div className={css.sectionHeader}>
          <Divider textAlign="left">
            <Typography variant="h4">About</Typography>
          </Divider>
        </div>
        <Typography variant="body1" gutterBottom>
          TODO
        </Typography>
      </div>
    </div>
  );
};

export default PrsPage;
