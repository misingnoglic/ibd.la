import React from "react";
import Plot from "react-plotly.js";

const ScatterPlot = (props) => {
  const layout = {
    autosize: false,
    width: props.width,
    height: props.height,
    margin: {
      b: 20,
      t: 20,
    },
    yaxis: {
      automargin: true,
      fixedrange: true,
      dtick: 1,
      title: {
        font: {
          color: "#7f7f7f",
          size: 16,
        },
      },
    },
    xaxis: {
      automargin: true,
      fixedrange: true,
      title: {
        font: {
          color: "#7f7f7f",
          size: 16,
        },
        text: props.xLabel,
      },
    },
  };

  const modifier = props.negate ? -1 : 1;
  const labelAxis = props.flip ? "x" : "y";
  const valueAxis = props.flip ? "y" : "x";
  const errorAxis = props.flip ? "error_y" : "error_x";

  const graphData = {
    [labelAxis]: props.listOfComparisons.map((c) => c.label),
    [valueAxis]: props.listOfComparisons.map(
      (c) => c.value.toFixed(2) * modifier
    ),
    text: props.listOfComparisons.map((c) =>
      c.pval ? `p=${c.pval.toExponential(2)}` : ""
    ),
    [errorAxis]: {
      type: "data",
      array: props.listOfComparisons.map((c) => c.stdev.toFixed(2)),
      visible: true,
    },
    mode: "markers",
    type: "scatter",
    marker: {
      color: props.plotColor,
      size: 8,
    },
    line: {
      color: props.plotColor,
      width: 1,
    },
  };
  const config = {
    responsive: true,
  };
  return <Plot data={[graphData]} layout={layout} config={config} />;
};

export default ScatterPlot;
