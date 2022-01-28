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
      automargin: true,

      title: {
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
    xaxis: {
      //   range: [-4, 4],
      title: {
        text: "Group",
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
    // marker: {
    //   color: "rgb(199, 206, 234)",
    //   size: 8,
    // },
    // line: {
    //   color: "rgb(199, 206, 234)",
    //   width: 1,
    // },
  };
  const config = {
    responsive: true,
  };
  return <Plot data={[graphData]} layout={layout} config={config} />;
};

export default BarPlot;
