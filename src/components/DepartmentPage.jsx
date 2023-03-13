import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { realData, realDataOptions } from "../data/deptScatterData";

import { groupNameMap, groupSizeMap } from "../data/groupInfo";

import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import css from "./DepartmentPage.module.css";

const DeptPage = () => {
  const [firstGroupLabel, setFirstGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group20");

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
        width={650}
        height={500}
      />
    );
  } else {
    graph = <Skeleton variant="rectangular" width={"100%"} height={"100%"} />;
  }

  const options = realDataOptions
    .sort((a, b) => (groupNameMap[a].localeCompare(groupNameMap[b])))
    .map((option) => (
      <MenuItem value={option} key={option}>
        {groupNameMap[option]}
      </MenuItem>
    ));

  return (
    <div className={css.scatterplotBox}>
      <Typography variant="h2">Medical Specialities</Typography>
      <Typography variant="h5">
        {groupNameMap[firstGroupLabel]} (n={groupSizeMap[firstGroupLabel]}) vs{" "}
        {groupNameMap[secondGroupLabel]} (n={groupSizeMap[secondGroupLabel]}){" "}
      </Typography>
      <div className={css.scatterGraph}>{graph}</div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
          <FormControl>
            <InputLabel id="group1-selection">Cluster 1</InputLabel>
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
        <div className={css.selectionBox}>
          <FormControl>
            <InputLabel id="group2-selection">Cluster 2</InputLabel>
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
      <div className={css.bodyText2}>
        <div className={css.sectionHeader}>
          <Divider textAlign="left"><Typography variant="h4">Model</Typography></Divider>
        </div>
        <Typography variant="body1" gutterBottom>
          Logistic regression test: Specialty ~ Cluster Status + Age + Sex + BMI
        </Typography>
        <div className={css.sectionHeader}>
          <Divider textAlign="left"><Typography variant="h4">About</Typography></Divider>
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
