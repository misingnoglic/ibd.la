import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import louvain_graph from "../data/images/louvain_graph2.png";

import css from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={css.titleText}>
        <Typography variant="h2">
          Fine-scale population health in Los Angeles{" "}
        </Typography>
        <Typography variant="h4">*Not peer reviewed*</Typography>
      </div>
      <Typography variant="h6"></Typography>
      <div className={css.homePageContent}>
        <div className={css.graphImage}>
          <img height="100%" width="100%" src={louvain_graph}></img>
        </div>
        <div className={css.homeBodyText}>
          <Typography variant="body1" gutterBottom>
            <p>
              This browser explores population health in Los Angeles within the
              UCLA health system. The data is apart of the{" "}
              <Link href="https://www.uclahealth.org/precision-health/atlas">
                UCLA ATLAS Community Health Initiative .
              </Link>{" "}
              Here, we explore several aspects of health that may be of interest
              to researchers and community members.{" "}
            </p>

            <p>
              We first identify fine-scale populations using an unsupervised
              machine learning approach over genotyping data that is a part of
              the ATLAS intiative. This found hundreds of clusters of patients.
              Here, we focus on the 21 largest clusters, representing 97% of our
              sample. ATLAS data is connected to electronic health record (EHR)
              data. We use the EHR data to learn about who might be making up
              the clusters. This data involved demographic data, such as
              self-reported race and ethnicity, preferred language, and
              preferred religion.
            </p>

            <p>
              We then explore how each community interacts with the health
              system. For this analysis, we considered what diagnoses, in the
              form of PheCodes, were more likley to be recieved by a cluster,
              and what medical specialties the community was more or less likely
              to visit. We also examined whether there were Los Angeles zipcodes
              where members of a community were more likely to visit a doctor's
              office. Lastly, we examined properties of genetic sharing within
              the community, something that might be useful to know about when
              studying the population's genetic risk for disease.
            </p>

            <p>
              <b>
                Note: the results presented here are not evidence of genetic
                cause for population-disease associations.
              </b>
              Health is a complex phenomenon that is strongly influenced by
              environmental and sociocultural factors. The explicit goal of this
              research is to advance the study of health disparities, especially
              for groups understudied in biomedical research. Please see our FAQ
              page for a full discussion of what these results do or do not
              mean.
            </p>

            <p>
              Website developed by: {" "}
              <Link href="http://www.christa.science/about/">
                Christa Caggiano, 
              </Link>
              <Link href="https://aryaboudaie.com/">{" "}
               Arya Boudaie,
              </Link>
              and {" "}
              <Link href="https://bioscience.ucla.edu/people/noah-zaitlen/">{" "}
              Noah Zaitlen. 
              </Link>
            </p>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
