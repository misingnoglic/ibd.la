import React, { useState } from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { scaleThreshold } from "d3-scale";
import ReactDOMServer from "react-dom/server";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import groupNameMap from "../data/groupNameMap";
import { heatmapColorScheme } from "../data/heatmapColorScheme";

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
        <div>{object.properties.coefficient.toFixed(2)}</div>
      </div>
    ),
  };
  return response;
};

const DeckGlMap = () => {
  const [group, setGroup] = useState("group1");

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const mapboxAccessToken =
    "pk.eyJ1IjoiYXJ5YWJvdWRhaWUiLCJhIjoiY2t5bDhrZWJhMDk4MzJ2bWZjNmlkc3RhdyJ9.LN9-CljDFkZX2GnbEk1LLA";

  const maxLogOdds = 5;
  const numColors = heatmapColorScheme.length;
  const domain = []
  for (let i = 1; i<=numColors; i++){
    domain.push( maxLogOdds * (i/numColors) );
  }
  const colorScale = scaleThreshold()
    .domain(domain)
    .range(heatmapColorScheme.map((color) => color.rgb));

  const initialViewState = {
    // UCLA center
    longitude: -118.4452,
    latitude: 34.0689,
    zoom: 9,
    pitch: 0,
    bearing: 0,
  };

  const layers = [
    new GeoJsonLayer({
      id: "geojson",
      data: `https://raw.githubusercontent.com/misingnoglic/atlas-app/main/src/data/geojson/${group}.json`,
      getFillColor: (f) => colorScale(f.properties.coefficient),
      getLineColor: [255, 255, 255],
      getLineWidth: 20,
      pickable: true,
      opacity: 0.5,
      stroked: true,
    }),
  ];

  const groupOptions = [];
  for (let i = 0; i <= 19; i++) {
    const groupKey = `group${i}`;
    const groupName = groupNameMap[groupKey];
    groupOptions.push(
      <MenuItem value={groupKey} key={groupKey}>
        {groupName}
      </MenuItem>
    );
  }

  return (
    <div className="mapPageContainer">
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
      <div className="selectionForm2">
        <div className="selectionBox2">
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel id="dataCategory-selection">Group</InputLabel>
            <Select
              labelId="dataCategory-selection"
              value={group}
              label="Data Category"
              onChange={handleGroupChange}
            >
              {groupOptions}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default DeckGlMap;
