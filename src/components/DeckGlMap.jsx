import React from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { scaleThreshold } from "d3-scale";
import ReactDOMServer from "react-dom/server";
import "./DeckGlMap.css";

const getTooltip = ({ object }) => {
  const response = object && {
    html: ReactDOMServer.renderToString(
      <div>
        <div>
          <b>Average Property Value</b>
        </div>
        <div>
          {object.properties.valuePerSqm} / m<sup>2</sup>
        </div>
        <div>
          <b>Growth</b>
        </div>
        <div>{Math.round(object.properties.growth * 100)}%</div>
      </div>
    ),
  };
  return response;
};

const DeckGlMap = () => {
  // Source data GeoJSON
  const mapboxAccessToken =
    "pk.eyJ1IjoiYXJ5YWJvdWRhaWUiLCJhIjoiY2t5bDhrZWJhMDk4MzJ2bWZjNmlkc3RhdyJ9.LN9-CljDFkZX2GnbEk1LLA";
  const dataUrl =
    "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/geojson/vancouver-blocks.json"; // eslint-disable-line

  const colorScale = scaleThreshold()
    .domain([
      -0.6, -0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 1.2,
    ])
    .range([
      [65, 182, 196],
      [127, 205, 187],
      [199, 233, 180],
      [237, 248, 177],
      // zero
      [255, 255, 204],
      [255, 237, 160],
      [254, 217, 118],
      [254, 178, 76],
      [253, 141, 60],
      [252, 78, 42],
      [227, 26, 28],
      [189, 0, 38],
      [128, 0, 38],
    ]);

  const initialViewState = {
    latitude: 49.254,
    longitude: -123.13,
    zoom: 11,
    maxZoom: 16,
    pitch: 45,
    bearing: 0,
  };

  const layers = [
    new GeoJsonLayer({
      id: "geojson",
      data: dataUrl,
      getFillColor: (f) => colorScale(f.properties.growth),
      getLineColor: [255, 255, 255],
      pickable: true,
    }),
  ];

  return (
    <div className="deckGlContainer">
      <DeckGL
        layers={layers}
        initialViewState={initialViewState}
        controller={true}
        getTooltip={getTooltip}
      >
        <StaticMap reuseMaps mapboxApiAccessToken={mapboxAccessToken} />
      </DeckGL>
    </div>
  );
};

export default DeckGlMap;
