import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { realData } from "../data/deptScatterData";

import { groupNameMap, groupSizeMap } from "../data/groupInfo";

import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import css from "./PrsPage.module.css";
import {
  dataDirections,
  anyHasPrimary,
  pairExists,
  getDataDirection,
  generateOptions,
  getFirstPairThatExists,
} from "../utils/groupSelectionUtils";

const DeptPage = () => {
  const realDataOptions = generateOptions(realData);

  const [primaryGroupLabel, setPrimaryGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState(
    getFirstPairThatExists(realData, primaryGroupLabel)
  );

  const handleFirstGroupChange = (event) => {
    if (!pairExists(realData, event.target.value, secondGroupLabel)) {
      setSecondGroupLabel("");
    }
    setPrimaryGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    if (pairExists(realData, primaryGroupLabel, event.target.value)) {
      setSecondGroupLabel(event.target.value);
    } else {
      console.error(
        `Invalid group pair ${primaryGroupLabel} and ${event.target.value}`
      );
    }
  };

  let graph;
  let graphData;
  let negate = false;
  if (pairExists(realData, primaryGroupLabel, secondGroupLabel)) {
    const dataDirection = getDataDirection(
      realData,
      primaryGroupLabel,
      secondGroupLabel
    );

    if (dataDirection === dataDirections.normal) {
      graphData = realData[primaryGroupLabel][secondGroupLabel];
    } else {
      graphData = realData[secondGroupLabel][primaryGroupLabel];
      negate = true;
    }
  }
  if (graphData) {
    graph = (
      <ScatterPlot
        firstGroupLabel={groupNameMap[primaryGroupLabel]}
        secondGroupLabel={groupNameMap[secondGroupLabel]}
        listOfComparisons={graphData.map((d) => {
          return {
            value: d.coeff,
            stdev: d.cint,
            label: d.phenotype,
            pval: d.pval,
          };
        })}
        plotColor="#B5EAD7"
        negate={negate}
        width={650}
        height={500}
        xLabel="Log Odds Ratio"
      />
    );
  } else {
    graph = <Skeleton variant="rectangular" width={"100%"} height={"100%"} />;
  }

  let options = realDataOptions.map((option) => (
    <MenuItem value={option} key={option}>
      {groupNameMap[option]}
    </MenuItem>
  ));

  let filteredGroupOptions = [];
  if (
    !!primaryGroupLabel &&
    (realData.hasOwnProperty(primaryGroupLabel) ||
      anyHasPrimary(realData, primaryGroupLabel))
  ) {
    // Filter out any options for group2 that don't have data for primary group
    filteredGroupOptions = options.filter((option) => {
      const group = option.props.value;
      return pairExists(realData, primaryGroupLabel, group);
    });
  }

  options = options.filter((option) => option.props.value !== "group20");

  return (
    <div className={css.scatterplotBox}>
      <Typography variant="h2">Medical Specialities</Typography>
      <Typography variant="h5">
        {groupNameMap[primaryGroupLabel]} (n={groupSizeMap[primaryGroupLabel]})
        vs {groupNameMap[secondGroupLabel]} (n={groupSizeMap[secondGroupLabel]})
      </Typography>
      <div className={css.scatterGraph}>{graph}</div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
          <FormControl>
            <InputLabel id="group1-selection">Cluster 1</InputLabel>
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
        <div className={css.selectionBox}>
          <FormControl>
            <InputLabel id="group2-selection">Cluster 2</InputLabel>
            <Select
              labelId="group2-selection"
              value={secondGroupLabel}
              label="Second Group"
              onChange={handleSecondGroupChange}
            >
              {filteredGroupOptions}
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
          Logistic regression test: Specialty ~ Cluster Status + Age + Sex + BMI
        </Typography>
        <div className={css.sectionHeader}>
          <Divider textAlign="left">
            <Typography variant="h4">About</Typography>
          </Divider>
        </div>
        <Typography variant="body1" gutterBottom>
          This plot is the result of a statistical test for the association
          between visiting a physician with a particular specialty and being a
          part of cluster 1, relative to cluster 2. Results are displayed for
          specialities that are FDR significant at 5%. We test specialities with
          more than 30 individuals who received visited a practitioner with that
          specialty.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Note</b> that this plot does not demonstrate that belonging to an
          IBD cluster is causal for seeing a medical provider with a particular
          specialty.
        </Typography>
      </div>
    </div>
  );
};

export default DeptPage;
