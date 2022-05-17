import React from "react";
import Plot from "react-plotly.js";

const LinePlot = (props) => {
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
        text: "Proportion of total group",
        font: {
          size: 16,
          color: "#7f7f7f",
        },
      },
    },
    xaxis: {
      autotick: false,
      title: {
        text: "Year",
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
    type: "scatter",
    mode: "lines+markers",
    marker: {
      color: "#FFDAC1",
    },
    line: {
      color: "#FFDAC1",
    },
  };
  const config = {
    responsive: true,
  };
  return <Plot data={[graphData]} layout={layout} config={config} />;
};

export default LinePlot;
