import React from "react";
import Typography from "@mui/material/Typography";
import "./AboutPage.css";

const About = () => {
  return (
    <div className="titleText">
      <Typography variant="h2">FAQ</Typography>

      <div className="faqText">
        <div className="titleText">
          {" "}
          <Typography variant="h4">Background </Typography>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            This study involves concepts of ancestry, race, ethnicity, and
            identity. These terms have a fraught history, especially in the
            United States, which is the context of this study. This history is
            complicated further in medicine, where non-White people have a long
            history of discrimination and abuse at the hands of the medical
            establishment.
          </p>
          <p>
            The goal of this research was to examine different distributions of
            health traits in communities that share ancestry with each other. We
            strongly emphasize that our research does not support a genetic
            basis for any of the differences reported here. Instead, a more
            likely explanation is that complex sociocultural, environmental, and
            genetic factors all interact to shape how and why an individual
            would seek medical care. The communities reported here may have some
            overlap in these factors, leading to the differences observed.
          </p>
          <p>
            Here, we attempt to define the relevant terms of the paper, along
            with what conclusions our research does and does not support.
            Further questions can be addressed to christa@g.ucla.edu
          </p>
        </Typography>

        <div className="titleText">
          {" "}
          <Typography variant="h4">Table of Contents </Typography>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            <a href="#section1">What are some main conclusions of this work?</a>
          </p>
          <p>
            <a href="#section2">Are humans genetically different?</a>
          </p>
          <p>
            <a href="#section3">What is genetic ancestry?</a>
          </p>
          <p>
            <a href="#section4">
              How are race and ethnicity different from genetic ancestry?
            </a>
          </p>
          <p>
            <a href="#section5">How was genetic ancestry studied here?</a>
          </p>
          <p>
            <a href="#section6">
              How do companies like 23andMe assess genetic ancestry?
            </a>
          </p>
          <p>
            <a href="#section7">What is a PheCode?</a>
          </p>
          <p>
            <a href="#section8">
              What does it mean for a PheCode to have a higher or lower odds
              ratio in a community?
            </a>
          </p>
          <p>
            <a href="#section9">
              Does a PheCode association in a genetic ancestry community mean
              the disease is genetic?
            </a>
          </p>
        </Typography>

        <div className="titleText">
          <a name="section1">
            {" "}
            <Typography variant="h6">
              What are some main conclusions of this work?{" "}
            </Typography>{" "}
          </a>
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            This work primarily illustrates the utility of genetic ancestry in
            identifying groups of people in a large medical record system. It
            might be a more effective and precise way to study people in the
            context of medical research in the future. Using our approach, we
            were able to identify groups that would be hard to identify via
            self-reported data alone. Our data can be used to examine health
            disparities that exist in Los Angeles, and the complex generative
            processes that might be causing different populations to access
            care.{" "}
          </p>
        </Typography>

        <div className="titleText">
          {" "}
          <a name="section2">
            <Typography variant="h6">
              Are humans genetically different?{" "}
            </Typography>{" "}
          </a>
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            A common statistic to hear is that humans share 99.9% of our DNA
            with each other. This statistic is largely true and speaks to the
            shared evolutionary history of humans. The research presented here,
            then, is almost paradoxical: how can we identify such fine-scale
            genetic differences, if humans are so similar to each other? The
            answer is that the differences truly are fine-scale. The
            approximately 0.01% of the genome where humans differ can lead to
            subtle differences that may be important in health and disease.
            Nonetheless, it is important to keep the similarity of humans in
            mind when consuming genetics research that discusses between-group
            differences. This study, and all modern human genetics research, do
            not dispute the fundamental similarities between all humans.{" "}
          </p>
        </Typography>

        <div className="titleText">
          {" "}
          <a name="section3">
            {" "}
            <Typography variant="h6">What is genetic ancestry? </Typography>
          </a>{" "}
        </div>

        <Typography variant="body1" gutterBottom>
          <p>
            Genetic ancestry is a complicated term that encompasses many
            different meanings in common usage. In all cases, it is based on the
            fundamental biological concept that we all inherit DNA from our
            relatives. You share 50% of your DNA with each of your parents. As
            you get less related to a person (e.g. grandparent,
            great-grandparent, etc), you share progressively less DNA with that
            person. Additionally, with each generation, DNA undergoes
            recombination. This means, for example, that a pair of your mom’s
            chromosomes might swap DNA, and you end up inheriting some
            proportion of DNA from both your grandmother and from your
            grandfather in one region. Because of recombination, the amount of
            DNA you share with your ancestors gets progressively smaller with
            time, but it also means that you are a mosaic of DNA originating
            from different ancestors. In this context, genetic ancestry could
            simply mean that you share stretches of your genome with your family
            members.
          </p>
          <p>
            In this work, however, and often in informal language, genetic
            ancestry is often used to mean how you share DNA in relation to a
            geographic area or cultural group. This is because we share DNA with
            a long line of individuals, way beyond what we could recognize as
            our family tree. Many of these distant ancestors were confined to
            one geographic location. Over time, our ancestors accumulated unique
            mutations that they passed on to their offspring. Since they often
            married or mated with other people from the surrounding area, these
            mutations stayed in the gene pool in this area. Thus, today there
            are patterns of DNA mutations that exist at higher prevalences in a
            particular location or group.
          </p>
          <p>
            Genetic ancestry is a continuum, which makes it particularly
            difficult to encapsulate. For example, it is common for an
            individual to have parents with different ancestral backgrounds.
            Consider the offspring of a woman from Population A and a man from
            Population B. While it is correct to say that the baby has ancestry
            shared equally with Population A and B, at any given position on one
            of the baby’s chromosomes, it is either completely Population A or
            Population B. This is local ancestry vs global ancestry. Both
            concepts might be useful to biomedical researchers, and both are
            regularly studied. And crucially, neither concept determines how the
            baby will ultimately identify, which could be completely divorced
            from ancestry altogether (see below).{" "}
          </p>
          <p>
            It is important to note that this conceptualization of genetic
            ancestry does not necessarily map on to the concepts of nations that
            we are familiar with today. Many states that exist today did not
            exist in even the recent past. In some places, such as colonial
            Africa, nations were drawn without regard to the preexisting
            populations, deeply complicating how genetic ancestry may relate to
            our understanding of the world today. Furthermore, colonialism has
            profoundly changed patterns of genetic relatedness across the globe
            through voluntary and forced migration in the form of slavery.
            Genetic ancestry may also not map directly onto geography. There
            have been many factors that affected who our ancestors had children
            with, including religion or caste. All of these things shape genetic
            ancestry and contribute to the complicated relationship between
            genetic ancestry and race/ethnicity, discussed more below.{" "}
          </p>
        </Typography>

        <div className="titleText">
          {" "}
          <a name="section4">
            <Typography variant="h6">
              How are race and ethnicity different from genetic ancestry?{" "}
            </Typography>
          </a>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            Simply put, race and ethnicity are social constructs. They have
            meaning only within the society in which they were conceived. For
            example, in post-slavery America, the “one drop” rule meant that an
            individual with any African ancestry was considered black, despite
            many Black Americans having appreciable amounts of European ancestry
            (often resulting from the exploitation of female slaves by white
            male slave owners). At the same time, in many parts of Latin
            America, mixed-race people were recognized as separate groups,
            stemming from the historic Spanish caste system. In this example, it
            is clear that race has no meaning biologically, as groups who could
            have potentially identical genetic makeup are assigned different
            racial groups in different countries.{" "}
          </p>
          <p>
            oday in the United States, people typically identify as one of
            several races delineated by the US Census, such as White, Black,
            Asian, Native American, Native Hawaiian or Other Pacific Islander.
            Ethnicity in the US is normally considered to be Hispanic or not
            Hispanic. Race and ethnicity can interact in complex ways with an
            individual’s identity, which may be limited to their race/ethnicity
            (e.g. someone identifying as white non-hispanic) or could span
            country or religious lines separate from the typical US racial
            designations (e.g. Pakistani Muslim).{" "}
          </p>
          <p>
            On a population level, these categories might be roughly correlated
            with genetic ancestry. Black people in America do, on average, share
            more stretches of DNA with people from Africa than white people do
            on average. A Black individual, however, could have genetic ancestry
            predominantly from Europe, and yet still identify as Black.{" "}
          </p>
          <p>
            Therefore, the concept of genetic ancestry is completely separate
            from how an individual identifies in terms of race/ethnicity. It is
            important to emphasize that both concepts are useful in biomedical
            contexts. For example, despite there being no biological
            underpinning to race, different racial groups in America have been
            treated differently, in the modern era and historically. Race and
            identity are highly relevant factors in a person’s experience of the
            world, including their medical care. Thus, both race and genetic
            ancestry are crucial variables to study, depending on the specific
            scientific question being asked.
          </p>
        </Typography>

        <div className="titleText">
          <a name="section5">
            {" "}
            <Typography variant="h6">
              How was genetic ancestry studied here?{" "}
            </Typography>
          </a>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            Here, we identify identity-by-descent (IBD) segments. To be
            identical by descent means that two stretches of DNA (from two
            people or possibly, within an individual) are the same due to shared
            ancestry. People who share large amounts of IBD with each other are
            more likely to be closely related. However, even small amounts of
            IBD shared between people can be informative, since they indicate
            shared ancestors in the more distant past.{" "}
          </p>
          <p>
            In this study, we used an algorithm to make a network of
            individuals. We used a machine learning algorithm to identify
            communities of people who shared more IBD between them than other
            groups of people. IBD community detection done in this manner has
            been shown to find groups who likely have genetic ancestors in
            common. This approach is functionally different than assigning an
            ancestry at each point in the genome, but can still give us
            information on how individuals in our biobank are related, which is
            particularly useful when asking about health risks in the Los
            Angeles community.{" "}
          </p>
        </Typography>

        <div className="titleText">
          <a name="section6">
            {" "}
            <Typography variant="h6">
              How do companies like 23andMe assess genetic ancestry?{" "}
            </Typography>
          </a>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            When many people think of “genetic ancestry” they might think of
            direct-to-consumer ancestry tests, such as 23andMe or Ancestry.
            These tests, roughly speaking, compare select regions of your DNA
            against a reference panel of DNA from individuals whose ancestors
            have lived in a particular geographical area for long periods of
            time (see here for more technical details on how this process is
            done). These tests are imperfect but have been demonstrated to be
            broadly informative in identifying an individual’s geographic
            origins.{" "}
          </p>
        </Typography>

        <div className="titleText">
          <a name="section7">
            {" "}
            <Typography variant="h6">What is a PheCode? </Typography>
          </a>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            When you go to any medical establishment in the US, your provider
            will give you a diagnosis and code it in a Electronic Health System.
            These diagnosis are often in the form of an ICD code, which
            standards for International Classification of Disease. ICD codes are
            meant to be standardized and highly specific. For example, all
            injuries stemming from being a passenger in a motorcycle collision
            with other nonmotor vehicle in traffic accident should be coded as
            V26.5, but if you are the driver of that motorcycle, you should be
            coded as V26.4. However, in practice there is variation in how ICD
            codes are assigned. There are many different ways to code for
            headaches, for example. Further, for some analyses, the level of
            specificity offered in ICD codes might not be meaningful (e.g. it
            might not matter if the person was the motorcycle driver or
            passenger if you are just interested in traffic injuries overall).
            Thus, PheCodes were developed to group related ICD codes together.
            Recent work has shown that this might be more useful for research,
            especially genetics research.{" "}
          </p>
        </Typography>

        <div className="titleText">
          {" "}
          <a name="section8">
            <Typography variant="h6">
              What does it mean for a PheCode to have a higher or lower odds
              ratio in a community?{" "}
            </Typography>
          </a>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            The results displayed here are statistical associations, meaning
            that we observed a relationship between community membership and
            ever being diagnoses with a PheCode (or visiting a specialty or a
            zip code). These observations can be considered robust under some
            mathematical guidelines commonly used in science (such as p-values
            and false discovery rate), but they do not say anything about
            causality.{" "}
          </p>
          <p>
            There are many possible explanations for what we see in our data. Of
            course, the population could truly have that disease at a higher
            rate than other groups. This is easy to imagine in cases like sickle
            cell anemia. We observed that sickle cell anemia is more likely to
            be diagnosed in Black people in our study, and there has been a
            large body of medical research before our study demonstrating that
            individuals with African ancestry are in fact more likely to have
            sickle cell anemia. However, many of the associations we found have
            less clear explanations. It is possible that certain groups receive
            or seek care at greater rates or that there is an environmental
            factor affecting the diagnoses. In some cases, it might be true that
            certain doctors that see specific populations are more likely to
            code an illness in a specific way. There are likely biases in the
            way diseases are diagnosed. For example, in sickle cell anemia, it
            could be true that doctors are familiar with the research on the
            association between the disease and Black Americans, and thus test
            or treat it at higher rates in this group, despite it also being
            common in the Middle East.{" "}
          </p>
          <p>
            Taken together, all these considerations mean that there is likely a
            complex explanation for the results that we see. Future research
            directions can focus on untangling the processes that cause patients
            to receive a particular diagnosis in order to alleviate any health
            disparity that may exist.{" "}
          </p>
        </Typography>

        <div className="titleText">
          {" "}
          <a name="section9">
            <Typography variant="h6">
              Does a PheCode association in a genetic ancestry community mean
              the disease is genetic?{" "}
            </Typography>
          </a>{" "}
        </div>
        <Typography variant="body1" gutterBottom>
          <p>
            In this study, we did not examine the relationship between genetics
            and disease. While it may be true that some of the associations that
            we observe have some genetic basis, the data presented here are not
            sufficient to make these kinds of conclusions.{" "}
          </p>
        </Typography>
      </div>
    </div>
  );
};

export default About;
