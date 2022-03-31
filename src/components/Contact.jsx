import React from "react";
import Typography from "@mui/material/Typography";
import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={css.titleText}>
      <Typography variant="body1" gutterBottom>
        Please contact christa@g.ucla.edu
      </Typography>
    </div>
  );
};

export default Contact;
