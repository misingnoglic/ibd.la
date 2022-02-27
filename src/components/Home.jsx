import React from "react";
import Typography from "@mui/material/Typography";

import sharingGraph from '../data/images/sharingGraph.png';

const Home = () => {
  return (
    <div>
      <Typography variant="h2">Home</Typography>
      <Typography variant="h6">
      </Typography>
      <img width="1000" height="650" src={sharingGraph}></img>
      {/* <Typography variant="body1" gutterBottom>
        Citation: Caggiano et al 2022
      </Typography> */}
    </div>
  );
};

export default Home;
