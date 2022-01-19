import React from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import aaData from "../data/aaGeo";

const DeckGlMap = () => {
  const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiYXJ5YWJvdWRhaWUiLCJhIjoiY2t5bDhrZWJhMDk4MzJ2bWZjNmlkc3RhdyJ9.LN9-CljDFkZX2GnbEk1LLA";
  const INITIAL_VIEW_STATE = {
    longitude: -118.243683,
    latitude: 34.052235,
    zoom: 13,
    pitch: 0,
    bearing: 0,
  };
  const layer = new GeoJsonLayer(aaData);
  const layers = [layer];
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
};

export default DeckGlMap;
