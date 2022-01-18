import React from 'react';
import Plot from 'react-plotly.js';

const ScatterPlot = (props) => {
    const layout = {
        width: 1000,
        height: 500,
        title: {
            text: `${props.firstGroupLabel} vs ${props.secondGroupLabel}`,
            font: {
                size: 24
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
          title: {
                text: 'ICD code',
                font: {
                    size: 16,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            range: [-3, 3],
            title: {
                text: 'Coefficient',
                font: {
                    size: 16,
                    color: '#7f7f7f'
                }
            }
        },
    };

    const graphData = {
        x: props.listOfComparisons.map((c) => c.phenotype),
        y: props.listOfComparisons.map((c) => c.coeff*props.negate),
        text: props.listOfComparisons.map((c) => `p=${c.pval}`),
        error_y: {
            type: 'data',
            array: props.listOfComparisons.map((c) => c.cint),
            visible: true
        },
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: 'rgb(199, 206, 234)',
            size: 8
        },
        line: {
            color: 'rgb(199, 206, 234)',
            width: 1
        }
    };
    const config = {
        responsive: true,
    }
    return (
        <Plot
            data={[graphData]}
            layout={layout}
            config={config}
        />
    );
}

export default ScatterPlot;