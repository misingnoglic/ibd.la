import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import css from "./GraphPage.module.css";

const GraphPage = ({ title, subtitle, graph, graphControls, textSections }) => {
  return (
    <div className={css.scatterplotBox}>
      <div>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </div>
      <div>
        <Typography variant="h5" component="h2">
          {subtitle}
        </Typography>
      </div>
      <div className={css.scatterGraph}>{graph}</div>
        <div className={css.selectionForm}>
            {graphControls}
        </div>
      <div className={css.bodyText2}>
        {textSections.map((section) => (
          <>
            <div className={css.sectionHeader}>
              <Divider textAlign="left">
                <Typography variant="h4">{section.title}</Typography>
              </Divider>
            </div>
            <Typography variant="body1" gutterBottom>
              {section.content}
            </Typography>
          </>
        ))}
      </div>
    </div>
  );
};

export default GraphPage;
