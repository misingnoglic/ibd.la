import React from "react";
import Plot from "react-plotly.js";

const BarPlot = (props) => {
  const layout = {
    autosize: true,
    title: {
      font: {
        size: 24,
      },
      xref: "paper",
      x: 0.05,
    },
    xaxis: {
      type: "log",
      automargin: true,
      title: {
        text: "log IBD (cM)",
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
    yaxis: {
      title: {
        // automargin: true,
        // text: "Group",
        font: {
          size: 10,
          color: "#7f7f7f",
        },
      },
    },
  };

  const graphData = {
    y: props.x,
    x: props.y,
    // text: props.listOfComparisons.map((c) => `p=${c.pval}`),
    error_x: {
      type: "data",
      array: props.error,
      visible: true,
    },
    // mode: "markers",
    type: "bar",
    orientation: "h", 
    marker: {
      color: "#E2F0CB",
    },
    line: {
      color: "#E2F0CB",
    },
  };
  const config = {
    responsive: true,
  };
  return <Plot data={[graphData]} layout={layout} config={config} />;
};

export default BarPlot;
