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

const DataCategoryEnum = {
  Outpatient: "Outpatient",
  ER: "Emergency Room",
};

const dataByCategory = {
  [DataCategoryEnum.Outpatient]: outpatientGraphData,
  [DataCategoryEnum.ER]: erGraphData,
};

const optionsByCategory = {
  [DataCategoryEnum.Outpatient]: outpatientOptions,
  [DataCategoryEnum.ER]: erOptions,
};

const graphColorsByCategory = {
  [DataCategoryEnum.Outpatient]: "#C7CEEA",
  [DataCategoryEnum.ER]: "#FFB7B2",
};

const PhecodePage = () => {
  const [primaryGroupLabel, setPrimaryGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group20");
  const [dataCategory, setDataCategory] = useState(DataCategoryEnum.Outpatient);

  const handleFirstGroupChange = (event) => {
    if (!pairExists(event.target.value, secondGroupLabel, dataCategory)) {
      setSecondGroupLabel(null);
    }
    setPrimaryGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    if (pairExists(primaryGroupLabel, event.target.value, dataCategory)) {
      setSecondGroupLabel(event.target.value);
    } else {
      console.error(
        `Invalid group pair ${primaryGroupLabel} and ${event.target.value}`
      );
    }
  };

  const handleDataCategoryChange = (event) => {
    if (!pairExists(primaryGroupLabel, secondGroupLabel, event.target.value)) {
      // primary, secondary not in group, set to null
      setPrimaryGroupLabel(null);
      setSecondGroupLabel(null);
    }
    setDataCategory(event.target.value);
  };

  const pairExists = (primaryGroupLabel, secondGroupLabel, category) => {
    return (
      primaryGroupLabel &&
      secondGroupLabel &&
      primaryGroupLabel !== secondGroupLabel &&
      getDataDirection(primaryGroupLabel, secondGroupLabel, category) !==
        dataDirections.none
    );
  };

  const dataDirections = {
    normal: "normal", // label1, label2 is in object
    reverse: "reverse", // label2, label1 is in object
    none: "none", // neither order is in object
  };

  const getDataDirection = (primaryGroupLabel, secondGroupLabel, category) => {
    const fullData = dataByCategory[category];
    if (
      fullData.hasOwnProperty(primaryGroupLabel) &&
      fullData[primaryGroupLabel].hasOwnProperty(secondGroupLabel) &&
      fullData[primaryGroupLabel][secondGroupLabel].length > 0
    ) {
      return dataDirections.normal;
    } else if (
      fullData.hasOwnProperty(secondGroupLabel) &&
      fullData[secondGroupLabel].hasOwnProperty(primaryGroupLabel) &&
      fullData[secondGroupLabel][primaryGroupLabel].length > 0
    ) {
      return dataDirections.reverse;
    } else {
      return dataDirections.none;
    }
  };

  let graph;
  let graphData;
  let graphTitle;
  let negate = false;
  const fullData = dataByCategory[dataCategory];
  const fullDataOptions = optionsByCategory[dataCategory];

  if (pairExists(primaryGroupLabel, secondGroupLabel, dataCategory)) {
    graphTitle = `
        ${groupNameMap[primaryGroupLabel]} (n=${groupSizeMap[primaryGroupLabel]}) vs ${groupNameMap[secondGroupLabel]} (n=${groupSizeMap[secondGroupLabel]})`;

    if (
      getDataDirection(primaryGroupLabel, secondGroupLabel, dataCategory) ===
      dataDirections.normal
    ) {
      graphData = fullData[primaryGroupLabel][secondGroupLabel];
    } else if (
      getDataDirection(primaryGroupLabel, secondGroupLabel, dataCategory) ===
      dataDirections.reverse
    ) {
      graphData = fullData[secondGroupLabel][primaryGroupLabel];
      negate = true;
    } else {
      console.error(
        `Invalid categories ${primaryGroupLabel} ${secondGroupLabel}`
      );
    }
  } else {
    graphTitle = "Select valid groups and category to generate graph";
  }
  if (graphData) {
    graph = (
      <ScatterPlot
        firstGroupLabel={`${groupNameMap[primaryGroupLabel]} (n=${groupSizeMap[primaryGroupLabel]})`}
        secondGroupLabel={`${groupNameMap[secondGroupLabel]} (n=${groupSizeMap[secondGroupLabel]})`}
        listOfComparisons={graphData}
        plotColor={graphColorsByCategory[dataCategory]}
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
    // Filter out any options for group2 that don't have data for primary group
    filteredGroupOptions = groupOptions.filter((option) => {
      const group = option.props.value;
      return (
        pairExists(primaryGroupLabel, group, dataCategory) ||
        pairExists(group, primaryGroupLabel, dataCategory)
      );
    });
  }

  // remove the "all" group from the primary options.
  groupOptions = groupOptions.filter(
    (option) => option.props.value !== "group20"
  );

  const dataCategoryOptions = Object.values(DataCategoryEnum).map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));
  return (
    <div className={css.scatterplotBox}>
      <div>
        <Typography variant="h2" component="h1">
          Phecode Diagnoses
        </Typography>
      </div>
      <div>
        <Typography variant="h5" component="h2">
          {graphTitle}
        </Typography>
      </div>
      <div className={css.scatterGraph}>{graph}</div>
      <div className={css.selectionForm}>
        <div className={css.selectionBox}>
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="group1-selection">Cluster 1</InputLabel>
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
            <InputLabel id="group2-selection">Cluster 2</InputLabel>
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
        <div className={css.sectionHeader}>
          <Divider textAlign="left">Model</Divider>
        </div>
        <Typography variant="body1" gutterBottom>
          Logistic regression test: Phecode ~ Cluster Status + Age + Sex + BMI
        </Typography>
        <div className={css.sectionHeader}>
          <Divider textAlign="left">About</Divider>
        </div>
        <Typography variant="body1" gutterBottom>
          This plot is the result of a statistical test for the association
          between being assigned a{" "}
          <Link
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175508"
            rel="noopener"
            target="_blank"
          >
            phecode
          </Link>{" "}
          and being a part of cluster 1, relative to cluster 2. Results are
          displayed for phecodes that are FDR significant at 5%. We test
          phecodes with more than 30 individuals who recieved that phecodes. For
          IBD cluster with more than 40 phecodes that meet this criteria, we
          display the 40 phecodes with largest absolute log odds ratio for this
          plot.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Note</b> that this plot does not demonstrate that belonging to a
          IBD cluster is causal for the disease, as there are many factors that
          could influence an individual receiving a diagnosis in a medical
          setting. For further discussion of this, see the FAQ page.
        </Typography>
      </div>
    </div>
  );
};

PhecodePage.displayName = "PhecodePage";
export default PhecodePage;
