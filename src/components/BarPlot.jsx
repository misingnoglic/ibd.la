import React from "react";
import Plot from "react-plotly.js";

const BarPlot = (props) => {
  const layout = {
    autosize: true,
    title: {
      text: props.graphLabel,
      font: {
        size: 24,
      },
      xref: "paper",
      x: 0.05,
    },
    yaxis: {
      type: "log",
      automargin: true,
      title: {
        text: "IBD (cM)",
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
    xaxis: {
      title: {
        automargin: true,
        // text: "Group",
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
  };

  const graphData = {
    y: props.y,
    x: props.x,
    // text: props.listOfComparisons.map((c) => `p=${c.pval}`),
    error_y: {
      type: "data",
      array: props.error,
      visible: true,
    },
    // mode: "markers",
    type: "bar",
    marker: {
      color: "rgb(181, 234, 215)",
    },
    line: {
      color: "rgb(181, 234, 215)",
    },
  };
  const config = {
    responsive: true,
  };
  return <Plot data={[graphData]} layout={layout} config={config} />;
};

export default BarPlot;
