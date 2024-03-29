import React, { useState } from "react";
import BarPlot from "./BarPlot";
import IbdTable from "./IbdTable";
import { barData } from "../data/barData";
import { alleleFrequencies, groupNameMap } from "../data/groupInfo";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import GraphPage from "./GraphPage/GraphPage";

const IbdPage = () => {
  const [primaryGroup, setPrimaryGroup] = useState("group3");

  const handleChangeGroup = (event) => {
    setPrimaryGroup(event.target.value);
  };

  let graph;
  if (primaryGroup) {
    const groups = Object.keys(barData[primaryGroup]);
    const y = groups.map((group) => barData[primaryGroup][group].zero);
    const error = groups.map((group) => barData[primaryGroup][group].zero_se);
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
    <GraphPage
      title="Identity by Descent"
      subtitle={`${groupNameMap[primaryGroup]}`}
      graph={graph}
      graphControls={[
        <FormControl>
          <InputLabel id="community-selection">Cluster</InputLabel>
          <Select
            labelId="community-selection"
            value={primaryGroup}
            label="Community"
            onChange={handleChangeGroup}
          >
            {options}
          </Select>
        </FormControl>,
        <Button
          href={alleleFrequencies[primaryGroup]}
          style={{ textTransform: "none" }}
          target="_blank"
          variant="outlined"
        >
          Download Allele Frequencies
        </Button>,
      ]}
      textSections={[
        {
          title: "About",
          content: (
            <>
              <Typography variant="body1" gutterBottom>
                We calculated two types of IBD summary metrics. First, we
                calculated the average amount of total IBD shared between an
                individual of one cluster and an individual in a second cluster.
                We refer to this as the <b>"mean IBD of iLASH reported,"</b> as
                iLASH only reports IBD that is present and that is greater than
                3cM. This metric is the same as many other group IBD averages
                reported in the literature.
              </Typography>

              <Typography variant="body1" gutterBottom>
                We defined a second metric, which we call the{" "}
                <b>"mean IBD of all possible pairs."</b> For every cluster,
                there might be many pairs of people who do not share any IBD,
                and thus, would not be reported by iLASH. This observation bias
                means that the first metric could be biased upwards and not be
                an accurate representation of the actual amount of relatedness
                between two clusters. Therefore, we find all possible pairs of
                individuals between two clusters. We set their IBD sharing to be
                the total IBD estimated by iLASH. If the pair had no estimated
                sharing, we assign that pair a 0. We then take the average of
                this vector for our second metric.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <b>The "proportion of pairs sharing IBD"</b> refers to the
                proportion of all possible pairs of individuals between two
                clusters that share any IBD detected by iLASH (greater than
                3cM).
              </Typography>
            </>
          ),
        },
        { title: "Data", content: <IbdTable data={barData[primaryGroup]} /> },
      ]}
    />
  );
};

export default IbdPage;
