import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import louvain_graph from "../data/images/louvain_graph.jpg";

import css from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={css.titleText}>
        <Typography variant="h2">
          Fine-scale health utilization in the UCLA Biobank
        </Typography>
        <Typography variant="h4">*Not peer reviewed*</Typography>
      </div>
      <Typography variant="h6"></Typography>
      <div className={css.homePageContent}>
        <div className={css.graphImage}>
          <img height="90%" width="90%" src={louvain_graph}></img>
        </div>
        <div className={css.homeBodyText}>
          <Typography variant="body1" gutterBottom>
            <p>
              This browser explores health in Los Angeles within a biobank collected at
              the UCLA Health System. The data is apart of the{" "}
              <Link href="https://www.uclahealth.org/precision-health/atlas">
                UCLA ATLAS Community Health Initiative.
              </Link>{" "}
              Here, we explore several aspects of health that may be of interest
              to researchers and community members, particularly those who have an 
              interest in studying health disparities.{" "}
            </p>

            <p>
              We identified clusters of related individuals using an unsupervised
              machine learning approach and genotyping data. This found hundreds 
              of clusters of patients, representing many understudied groups in the 
              context of Southern California. Here, we focus on the 21 largest clusters, 
              representing 97% of our sample.
            </p>  

            <p>
              We then explore how each cluster interacts with the health
              system. For this analysis, we considered what diagnoses, in the
              form of PheCodes, were more likley to be recieved by a cluster,
              and what medical specialties the cluster was more or less likely
              to visit. We also examined whether there were Los Angeles zipcodes
              where members of a cluster were more likely to visit a doctor's
              office. Lastly, we examined properties of genetic sharing within
              the cluster, something that might be useful for researchers seeking to
              learn about genetic risk for disease.
            </p>

            <p>
              <b>
                Note: These results are only <i>correlations</i>. They do not indicate that 
                cluster membership or genetics is the cause of the results reported here.{" "}
              </b>
              Health is a complex phenomenon that is strongly influenced by structural factors 
              like the environment, socioeconomic status, race, sex, diasbility and other
              and sociocultural factors. The explicit goal of this
              research is to provide opportunities to identity differences in health 
              outcomes within the UCLA Health System. Please see our FAQ page for a full discussion of what these 
              results do or do not
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

Home.displayName = 'Home';
export default Home;
