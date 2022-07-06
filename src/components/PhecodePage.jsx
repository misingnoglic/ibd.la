import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import {
  outpatientGraphData,
  outpatientOptions,
} from "../data/phecodeData/outpatient";
import { erGraphData, erOptions } from "../data/phecodeData/er";

import { groupNameMap, groupSizeMap } from "../data/groupInfo";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import css from "./PhecodePage.module.css";

const PhecodePage = () => {
  const [primaryGroupLabel, setPrimaryGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group20");
  // For now outpatient or emergencyRoom
  const [dataCategory, setDataCategory] = useState("Outpatient");

  const handleFirstGroupChange = (event) => {
    setSecondGroupLabel(null);
    setPrimaryGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    setSecondGroupLabel(event.target.value);
  };

  const handleDataCategoryChange = (event) => {
    setPrimaryGroupLabel(null);
    setSecondGroupLabel(null);
    setDataCategory(event.target.value);
  };

  let graph;
  let graphData;
  let negate = false;
  let fullData;
  let fullDataOptions;
  switch (dataCategory) {
    case "Outpatient":
      fullData = outpatientGraphData;
      fullDataOptions = outpatientOptions;
      break;
    case "Emergency Room":
      fullData = erGraphData;
      fullDataOptions = erOptions;
      break;
  }
  const graphColorOptions = {
    Outpatient: "#C7CEEA",
    "Emergency Room": "#FFB7B2",
  };
  if (
    primaryGroupLabel &&
    secondGroupLabel &&
    primaryGroupLabel !== secondGroupLabel
  ) {
    if (
      fullData.hasOwnProperty(primaryGroupLabel) &&
      fullData[primaryGroupLabel].hasOwnProperty(secondGroupLabel)
    ) {
      graphData = fullData[primaryGroupLabel][secondGroupLabel];
    } else if (
      fullData.hasOwnProperty(secondGroupLabel) &&
      fullData[secondGroupLabel].hasOwnProperty(primaryGroupLabel)
    ) {
      graphData = fullData[secondGroupLabel][primaryGroupLabel];
      negate = true;
    }
  }
  if (graphData) {
    graph = (
      <ScatterPlot
        firstGroupLabel={`${groupNameMap[primaryGroupLabel]} (n=${groupSizeMap[primaryGroupLabel]})`}
        secondGroupLabel={`${groupNameMap[secondGroupLabel]} (n=${groupSizeMap[secondGroupLabel]})`}
        listOfComparisons={graphData}
        plotColor={graphColorOptions[dataCategory]}
        negate={negate}
        width={866}
        height={900}
      />
    );
  } else {
    graph = <Skeleton variant="rectangular" width={"100%"} height={"100%"} />;
  }

  let groupOptions = fullDataOptions
    .sort((a, b) => (groupNameMap[a] > groupNameMap[b] ? 1 : -1))
    .map((option) => (
      <MenuItem value={option} key={option}>
        {groupNameMap[option]}
      </MenuItem>
    ));

  let filteredGroupOptions = [];
  if (!!primaryGroupLabel && fullData.hasOwnProperty(primaryGroupLabel)) {
    // Filter out any options that don't have data for the other group
    filteredGroupOptions = groupOptions.filter((option) => {
      const group = option.props.value;
      return (
        (fullData[primaryGroupLabel].hasOwnProperty(group) &&
          fullData[primaryGroupLabel][group].length !== 0) ||
        (fullData.hasOwnProperty(group) &&
          fullData[group].hasOwnProperty(primaryGroupLabel) &&
          fullData[group][primaryGroupLabel].length !== 0)
      );
    });
  }

  // remove the "all" group from the primary options.
  groupOptions = groupOptions.filter(
    (option) => option.props.value !== "group20"
  );

  const dataCategoryOptions = ["Emergency Room", "Outpatient"].map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));
  return (
    <div className={css.scatterplotBox}>
      <div>
        <Typography variant="h2">Phecode Diagnoses</Typography>
      </div>
      <div>
        <Typography variant="h5">
          {groupNameMap[primaryGroupLabel]} (n={groupSizeMap[primaryGroupLabel]}
          ) vs {groupNameMap[secondGroupLabel]} (n=
          {groupSizeMap[secondGroupLabel]})
        </Typography>
      </div>
      <div className={css.scatterGraph}>{graph}</div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="group1-selection">Community 1</InputLabel>
            <Select
              labelId="group1-selection"
              value={primaryGroupLabel}
              label="First Group"
              onChange={handleFirstGroupChange}
            >
              {groupOptions}
            </Select>
          </FormControl>
        </div>
        <div className={css.selectionBox}>
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
        </div>
        <div className={css.selectionBox}>
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="dataCategory-selection">Data Category</InputLabel>
            <Select
              labelId="dataCategory-selection"
              value={dataCategory}
              label="Data Category"
              onChange={handleDataCategoryChange}
            >
              {dataCategoryOptions}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={css.bodyText2}>
        <Typography variant="body1" gutterBottom>
          <div className={css.sectionHeader}>
            <Divider textAlign="left">Model</Divider>
          </div>
          Logistic regression test: Phecode ~ Community Status + Age + Sex + BMI
          <div className={css.sectionHeader}>
            <Divider textAlign="left">About</Divider>
          </div>
          <p>
            This plot is the result of a statistical test for the association
            between being assigned a{" "}
            <Link href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175508">
              phecode{" "}
            </Link>
            and being a part of community 1, relative to community 2. Results
            are displayed for phecodes that are FDR significant at 5%. We test
            phecodes with more than 30 individuals who recieved that phecodes.
            For IBD community with more than 40 phecodes that meet this
            criteria, we display the 40 phecodes with largest absolute log odds
            ratio for this plot.{" "}
          </p>
          <p>
            <b>Note</b> that this plot does not demonstrate that belonging to a
            IBD community is causal for the disease, as there are many factors
            that could influence an individual receiving a diagnosis in a
            medical setting. For further discussion of this, see the FAQ page.
          </p>
        </Typography>
      </div>
    </div>
  );
};

PhecodePage.displayName = 'PhecodePage';
export default PhecodePage;
