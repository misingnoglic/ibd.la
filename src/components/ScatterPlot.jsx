import React from "react";
import Plot from "react-plotly.js";

const ScatterPlot = (props) => {
  const layout = {
    autosize: true,
    title: {
      text: `${props.firstGroupLabel} vs ${props.secondGroupLabel}`,
      font: {
        size: 18,
      },
      xref: "paper",
      x: 0.05,
    },
    yaxis: {
      automargin: true,
      dtick: 1,
      title: {
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
    xaxis: {
      // range: [-4, 4],
      title: {
        text: "Log Odds",
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
  };

  const modifier = props.negate ? -1 : 1;

  const graphData = {
    y: props.listOfComparisons.map((c) => c.phenotype),
    x: props.listOfComparisons.map((c) => c.coeff.toFixed(2) * modifier),
    text: props.listOfComparisons.map((c) => `p=${c.pval.toExponential(2)}`),
    error_x: {
      type: "data",
      array: props.listOfComparisons.map((c) => c.cint.toFixed(2)),
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
