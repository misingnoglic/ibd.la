import React from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { scaleThreshold } from "d3-scale";
import ReactDOMServer from "react-dom/server";
import persianJewData from "../data/mapData/persianJew";
import "./DeckGlMap.css";

const getTooltip = ({ object }) => {
  const response = object && {
    html: ReactDOMServer.renderToString(
      <div>
        <div>
          <b>Zip Code</b>
        </div>
        <div>{object.properties.ZIPCODE}</div>
        <div>
          <b>Log Odds Ratio</b>
        </div>
        <div>{object.properties.coeff}</div>
      </div>
    ),
  };
  return response;
};

const DeckGlMap = () => {
  // Source data GeoJSON
  const mapboxAccessToken =
    "pk.eyJ1IjoiYXJ5YWJvdWRhaWUiLCJhIjoiY2t5bDhrZWJhMDk4MzJ2bWZjNmlkc3RhdyJ9.LN9-CljDFkZX2GnbEk1LLA";

  const colorScale = scaleThreshold()
    .domain([0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 2.9, 3.1, 3.3])
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
    // UCLA center
    longitude: -118.4452,
    latitude: 34.0689,
    zoom: 10,
    pitch: 0,
    bearing: 0,
  };

  const layers = [
    new GeoJsonLayer({
      id: "geojson",
      data: persianJewData,
      getFillColor: (f) => colorScale(f.properties.coeff),
      getLineColor: [255, 255, 255],
      getLineWidth: 20,
      pickable: true,
      opacity: 0.5,
      stroked: true,
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
