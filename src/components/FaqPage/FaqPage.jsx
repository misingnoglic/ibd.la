import React from "react";
import Markdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import css from "./FaqPage.module.css";


/*
* Right now, I don't know how to load text from a file. So edit FAQ.md in the same folder, and copy and paste
* into the below variables. Make sure to separate beginning and text.
* TOC is auto generated.
* */

const FAQ_BEGINNING = `
# FAQ

## Background

This study involves concepts of ancestry, race, ethnicity, and identity. These terms have a fraught history,
[especially in the United States](https://nmaahc.si.edu/learn/talking-about-race/topics/historical-foundations-race),
which is the context of this study. This history is complicated further in medicine, where non-White people have a
[history of discrimination](https://www.npr.org/templates/story/story.php?storyId=7046077) and abuse at the hands of
the medical establishment.

The goal of this research was to examine different distributions of health traits in clusters of patients that share
ancestry with each other. We strongly emphasize that our research does not support a genetic basis for any of the
differences reported here. Instead, a more likely explanation is that complex sociocultural, environmental, and 
genetic factors all interact to shape how and why an individual would seek medical care. The clusters reported here 
may have some overlap in these factors, leading to the differences observed.

Here, we attempt to define the relevant terms of the paper, along with what conclusions our research does and does 
not support. Further questions can be addressed to christa@g.ucla.edu

## Table of Contents
`;

const FAQ_TEXT = `

## What were the main results of this study?
We used an unsupervised machine learning algorithm coupled with
genetic information to identify clusters of related people who visit
the UCLA Health System. These clusters might be a more effective and
precise way to study people in the context of medical research.
Using our approach, we were able to study clusters that would be
hard to identify via self-reported data alone. Some of these
clusters represent groups of people who are not regularly studied in
American biomedical literature, like Iranian Jews or Armenians.

We found that some of the clusters we identified had health
differences. These differences could be in terms of the diagnoses
the people in the cluster received, what specialties they visited,
or the genetic risk variants common in the cluster. Our data can be
used to examine health disparities that exist in Los Angeles, and
the complex generative processes that might be causing different
clusters to access care.

## What are limitations to this study?

The results here are strictly correlative. The reasons why a cluster
is more likely to be diagnosed with a specific disease or see a
particular doctor are complicated and not necessarily related to
their actual health. Factors that could affect how a cluster
interacts with the health system could relate to insurance coverage,
socioeconomic status, biases of the medical establishment, travel
time to the hospitals, among many others. Thus, belonging to a
cluster is not causal for any of the associations reported in our
work.

Furthermore, the sample we are using is not random. Firstly, the
participants are people who visited the hospital and had a blood
draw, which is a subset of the population. Beyond that, people who
agree to take part in a biobank are likely not representative of the
general population. Lastly, the setting of this study was Southern
California, and most participants live in the US full time. It is
unclear how a cluster of people from the US generalize to analogous
populations outside of the US.

## How is this study useful?

A natural question to ask, then, is if these associations are not casual, are they useful?
We argue that they are, because they provide opportunities to learn about the
[structural and social determinants of health](https://dph.illinois.gov/topics-services/life-stages-populations/infant-mortality/toolkit/understanding-sdoh.html)
that may be affecting care in Los Angeles. For example, if a cluster is visiting an emergency room 
more often than other clusters, that could provide an opportunity to investigate whether there is a 
structural cause for this difference. Maybe people in that cluster have worse insurance coverage or 
they travel farther to a doctor’s office. We hope our work provides the foundation to look at these 
questions and design interventions to address potential inequities.

## What is a health disparity?

[Health disparities are differences in the health outcomes](https://www.healthypeople.gov/2020/about/foundation-health-measures/Disparities) 
of groups due to factors such as race, ethnicity, sexual or gender identity, socioeconomic status, disability, 
and geographic location. They are 
[preventable](https://www.cdc.gov/aging/disparities/index.htm#:~:text=Health%20disparities%20are%20preventable%20differences,other%20population%20groups%2C%20and%20communities).
Resolving health disparities are a [key goal of](https://www.cdc.gov/minorityhealth/) healthcare systems that 
seek to improve care for all people.

Health disparities typically affect minorities and communities of color. 
[For example,](https://jamanetwork.com/journals/jama/fullarticle/2775687) Black, Hispanic, Native American, 
and Asian people had higher rates of Covid-19 infection and subsequent hospitalization than White people. 
These differences were likely related to socioeconomic factors, like neighborhood density, insurance coverage, 
or type of work (such as service industry jobs). All these things are entangled in [America’s history of 
discrimination](https://www.healthaffairs.org/doi/10.1377/hlthaff.2021.01466) and must be systematically 
corrected to achieve the goal of a healthier society.

## Are humans genetically different?

A common statistic to hear is that humans share
[99.9% of our DNA](https://www.genome.gov/about-genomics/fact-sheets/Genetics-vs-Genomics) with each other.
This statistic is [largely true](https://genetics.thetech.org/original_news/news38) and speaks to the shared
evolutionary history of humans. The research presented here, then, is almost paradoxical: how can we identify
such fine-scale genetic differences, if humans are so similar to each other? The answer is that the differences
truly are fine-scale. The approximately 0.01% of the genome where humans differ can lead to
[subtle differences](https://qz.com/936525/personal-dna-testing-and-genetic-scientists-are-proving-that-youre-unique-just-like-everyone-else/)
that may be important in health and disease. Nonetheless, it is important to keep the similarity of humans in mind when
consuming genetics research that discusses between-group differences. This study, and all modern human genetics
research, do not dispute the fundamental similarities between all humans.

## What is genetic ancestry?

Genetic ancestry is a complicated term that encompasses many different meanings in common usage. In all cases,
it is based on the fundamental biological concept that we all inherit DNA from our relatives. Your DNA is
[50%](https://customercare.23andme.com/hc/en-us/articles/212170668-Average-Percent-DNA-Shared-Between-Relatives)
identical to the DNA of each of your parents. As the distance between you and another person on your family tree
grows (e.g. grandparent, great-grandparent, etc.), your DNA becomes less identical to that person.

Additionally, with each generation, [DNA undergoes recombination.](https://www.youtube.com/watch?v=RZWB_xt0chY)
This means, for example, that a pair of your mom’s chromosomes might swap DNA, and you end up inheriting some
proportion of DNA from both your grandmother and your grandfather in the same region. Because of recombination,
the amount of DNA you share with your ancestors gets progressively smaller with time, but it also means that you
are a [mosaic of DNA](https://genetics.thetech.org/ask/ask445) originating from different ancestors. In this
context, genetic ancestry could simply mean that you share stretches of your genome with your family members.

In this work, however, and often in informal language, genetic ancestry often means how you share DNA with
people from a specific geographic area or cultural group. This is because we share DNA with a long line of
individuals, way beyond what we could recognize as our family tree. Many of these distant ancestors primarily
interacted with others in a similar geographic area (e.g., the Austrian Alps) or within a sociocultural boundary
(e.g., others who spoke Urdu). Over time, our ancestors accumulated unique mutations that they passed on to their
offspring. Since they often married or mated with other people from their area or culture, these mutations stayed
in the gene pool in that group. These patterns often persist into the present moment, as religion, language, and
ancestry often still influence marriage decisions. Thus, today there are 
[patterns of DNA mutations](https://www.internationalgenome.org/about) that exist at higher prevalence in a
particular location or group due to a shared history.

Genetic ancestry is a continuum, which makes it particularly difficult to encapsulate. For example, it is common
for an individual to have parents with different ancestral backgrounds. Consider the offspring of a woman from
Population A and a man from Population B. While it is correct to say that the baby has ancestry shared equally
with Population A and B, at any given position on one of the baby’s chromosomes, it is either completely Population A or Population B. This subtle difference is the difference between [global ancestry and local ancestry.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4339867/#:~:text=Local%20ancestry%20is%20defined%20as,derived%20from%20each%20ancestral%20population) Both concepts might be useful to biomedical researchers, and both are regularly studied. And crucially, neither concept determines how the baby will ultimately identify, which could be completely divorced from ancestry altogether (see below).

It is important to note that this conceptualization of genetic ancestry does not necessarily map on to the concepts
of nations that we are familiar with today. Many states that exist today did not exist in even the recent past.
In some places, such as 
[colonial Africa,](https://www.theatlantic.com/international/archive/2012/09/the-dividing-of-a-continent-africas-separatist-problem/262171/)
nations were drawn without regard to the preexisting populations, deeply complicating how genetic ancestry may
relate to our understanding of the world today. Furthermore, colonialism has 
[profoundly changed](https://www.nature.com/articles/ncomms14238) patterns of genetic relatedness across the
globe through voluntary migration and forced migration in the form of slavery. Genetic ancestry may also not
map directly onto geography. There have been many factors that affected who our ancestors had children with,
including religion or caste. All of these things shape genetic ancestry and contribute to the complicated
relationship between genetic ancestry and race/ethnicity, discussed more below.

## How are race and ethnicity different from genetic ancestry?

Simply put, race and ethnicity are [social constructs.](https://www.scientificamerican.com/article/race-is-a-social-construct-scientists-argue/) They have meaning only within the society in which they were conceived. For example, in post-slavery America, the “one drop” rule meant that an individual with any African ancestry was considered black, despite many Black Americans having appreciable amounts of European ancestry (often resulting from the [exploitation of female slaves](https://psmag.com/news/how-slavery-changed-the-dna-of-african-americans) by white male slave owners). At the same time, in many parts of Latin America, mixed-race people were (and continue to be) recognized as separate groups, stemming from the [historic Spanish caste system.](https://dcc.newberry.org/?p=14438) In this example, it is clear that race has no meaning biologically, as groups who could have potentially identical genetic makeup are assigned different racial groups in different countries.

Today in the United States, people typically identify as one of several races delineated by the US Census, such as White, Black, Asian, Native American, Native Hawaiian, or Other Pacific Islander. Ethnicity in the US Census is usually considered to be Hispanic or not Hispanic. Race and ethnicity can interact in complex ways with an individual’s identity, which may be limited to their race/ethnicity (e.g. someone identifying as white non-Hispanic) or could span cultural lines separate from the typical US designations (e.g. Pakistani Muslim).

On a population level, these categories might be roughly [correlated](https://www.nejm.org/doi/full/10.1056/NEJMms2029562#:~:text=Genetic%20ancestry%20is%20the%20genetic,ancestry%20is%20a%20better%20predictor) with genetic ancestry. Black people in America do, on average, share more stretches of DNA with people from Africa than white people do on average. A Black individual, however, could have genetic ancestry [predominantly from Europe,](https://humgenomics.biomedcentral.com/articles/10.1186/s40246-014-0023-x) and yet still identify as Black.

Therefore, the concept of genetic ancestry is completely separate from how an individual identifies in terms of race/ethnicity. It is important to emphasize that both concepts are useful in biomedical contexts. For example, despite there being no biological underpinning to race, different racial groups in America have been [treated differently](https://www.urban.org/features/structural-racism-america) in the modern era and historically, and different treatment can ultimately lead to health inequities. Race and identity are highly relevant factors in a person’s experience of the world, including their [medical care.](https://www.bmj.com/racism-in-medicine) Thus, both race and genetic ancestry are crucial variables to study, depending on the specific scientific question being asked.

## How was genetic ancestry studied here?

Here, we identify [identity-by-descent](https://isogg.org/wiki/Identical_by_descent) (IBD) segments. To be identical by descent means that two stretches of DNA (from two people or possibly, within an individual) are the same due to shared ancestry. People who share large amounts of IBD with each other are more likely to be closely related. However, even small amounts of IBD shared between people can be informative, since they indicate shared ancestors in the more distant past.

In this study, we used an algorithm to make a network of individuals. We used a machine-learning algorithm to identify clusters of people who shared more IBD between them than other groups of people. IBD cluster detection done in this manner has been shown to find groups who likely have genetic ancestors in common. This approach is functionally different from assigning an ancestry at each point in the genome but can still give us information on how individuals in our biobank are related, which is useful when asking about health risks in the Los Angeles area.

## Why is identity-by-descent a useful thing to study?

We were particularly interested in IBD in the context of a biobank because it offered more information about clusters than information contained in the EHR alone. While doctor’s offices regularly take down information about race and ethnicity, sometimes it may be inaccurate or not included for whatever reason. As a result, our sample size would decrease, and substantially limit our ability to identify health inequities.

Additionally, the racial and ethnic categories typically included on forms are usually simplistic. For example, there is [currently no category](https://www.npr.org/2022/02/17/1079181478/us-census-middle-eastern-white-north-african-mena) for “Middle Eastern or North African” on most race/ethnicity questionnaires. This would limit our ability to identify clusters of people with these ancestries, which could even contribute to inequities in health research.

Genetic ancestry is an alternative approach to identifying groups of people. It is complementary to measures of race and ethnicity, as even though genetic ancestry and race may be [roughly correlated](https://sitn.hms.harvard.edu/flash/2017/science-genetics-reshaping-race-debate-21st-century/) , they can tag different things. Using IBD specifically can help us identify clusters of people who are related in network space, and who have been shown in other publications to share health risks.

## How do companies like 23andMe assess genetic ancestry?

When many people think of “genetic ancestry” they might think of direct-to-consumer ancestry tests, such as [23andMe](https://www.23andme.com/) or [Ancestry](https://www.ancestry.com/dna/) . These tests, roughly speaking, compare select regions of your DNA against a reference panel of DNA. The reference panel is composed of individuals who the company has confirmed have ancestors who were part of a particular group for an extended period of time (see [here](https://support.ancestry.com/s/article/AncestryDNA-White-Papers?language=en_US) for more technical details on how this process is done). These tests are [imperfect](https://www.livescience.com/63997-dna-ancestry-test-results-explained.html) but have been demonstrated to be broadly informative in identifying an individual’s ancestry.

## What does genetic ancestry mean for identity?

Identity is fundamentally a different concept than genetic ancestry. Often, people turn to genetic ancestry tests to learn who “they really are,” but this is impossible to do with only a genetic test.

For example, many Indigenous groups in the United States [reject the idea that genetic tests can determine tribal affiliation.](https://www.amacad.org/publication/genetic-ancestry-testing-tribes-ethics-identity-health-implications#:~:text=Despite%20advances%20in%20genetic%20tests,definitively%20prove%20Native%20American%20ancestry) Instead, their traditions, experiences, and community relationships are [more important](https://www.genome.gov/news/news-release/DNA-tests-stand-on-shaky-ground-to-define-Native-American-identity) in creating their Indigenous identities. Similarly, in Judism, while the conservative definition is that Jewish identity is determined matrilineally, the Jewish identity is also [shaped](https://sinaiandsynapses.org/content/where-is-the-overlap-of-jewish-identity-and-jewish-ancestry/) by a person’s relationship to Jewish texts and communities and cannot be delineated only by a genetic test. This is broadly true for many other racial, ethnic, and cultural groups- belonging to that group is far more about one’s lived experiences than the results of a test.

In some cases, a person’s [self-perception](https://news.stanford.edu/2021/05/17/ancestry-tests-affect-race-self-identification/) may change after a genetic test. However, what this change in self-perception might mean practically is unclear, especially as people who are more likely to change their identities are already of [European ancestry.](https://www.journals.uchicago.edu/doi/abs/10.1086/697487?journalCode=ajs) Is it meaningful to say that someone who thought they had Scottish descent is “actually” French? Instead, it reinforces the point that identity is complex. It is wrapped up in both how we see ourselves and the perception of our communities.

## What is a PheCode?

When you go to any medical establishment in the US, your provider will give you a diagnosis and code it in an [Electronic Health System.](https://www.healthit.gov/faq/what-electronic-health-record-ehr) These diagnoses are often in the form of an [ICD code.](https://icd.codes/) ICD codes are meant to be standardized and highly specific. For example, all injuries stemming from being a [passenger in a motorcycle collision with other non motor vehicles in a traffic accident](https://icd.codes/icd10cm/V265) should be coded as V26.5, but if you are the [driver of that motorcycle,](https://icd.codes/icd10cm/V264) you should be coded as V26.4.

However, in practice, there is variation in how ICD codes are assigned. There are many ways to [code for headaches,](https://icd.codes/?term=headache) for example. Further, for some analyses, the level of specificity offered in ICD codes might not be meaningful (e.g., it might not matter if the person was the motorcycle driver or passenger if you are just interested in traffic injuries overall). Thus, PheCodes were developed to [group related ICD codes together.](https://phewascatalog.org/phecodes) Recent work has shown that this might be more [useful](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175508) for research, especially genetics research.

## What does it mean for a PheCode to have a higher or lower odds ratio in a cluster?

While we examined whether a PheCode was more or less prevalent in a cluster, our results do not say that belonging to a cluster is causal for having a disease.

The results displayed here are statistical associations, meaning that we observed a relationship between cluster membership and ever being diagnosed with a PheCode (or visiting a specialty or a zip code). These observations can be considered robust under some mathematical guidelines commonly used in science (such as [p-values](https://www.nature.com/articles/nmeth.4210) and [false discovery rate](https://www.publichealth.columbia.edu/research/population-health-methods/false-discovery-rate) ), but they do not say anything about causality. In other words, there may be some observed correlation of individuals within a particular cluster who are more likely to be diagnosed with a PheCode than individuals in another cluster, however, this does not mean cluster membership is causal for these differences.

There are many possible explanations for what we see in our data. Of course, the population could truly have that disease at a higher rate than other groups. This is easy to imagine in cases like sickle cell anemia. We observed that sickle cell anemia is more likely to be diagnosed in Black people in our study, and there has been a large body of [medical research](https://europepmc.org/article/NBK/nbk1377) before our study demonstrating that individuals with African ancestry are in fact [more likely](https://www.cdc.gov/ncbddd/sicklecell/data.html#:~:text=SCD%20occurs%20among%20about%201,sickle%20cell%20trait%20(SCT).) to have sickle cell anemia than people from other groups. However, many of the associations we found have less clear explanations. It is possible that certain groups receive or seek care at greater rates or that there is an environmental factor affecting the diagnoses. In some cases, it might be true that certain doctors that see specific populations are more likely to code an illness in a specific way. There are likely biases in the way diseases are diagnosed. For example, in sickle cell anemia, it could be true that doctors are familiar with the research on the association between the disease and Black Americans, and thus test or treat it at higher rates in this group, despite it also being common in [the Middle East.](https://www.nature.com/articles/d41586-021-02144-y)

Taken together, all these considerations mean that there is likely a complex explanation for the results that we see. Future research directions can focus on untangling the structural processes (like race, socioeconomic factors, sexual and gender identity, or others) that cause patients to receive a particular diagnosis to address health disparities.

## Does a PheCode association in a genetic ancestry cluster mean the disease is genetic?

In this study, we did not examine the relationship between genetics
and disease. While it may be true that some of the associations that
we observe may have some genetic basis, the data presented here are
not sufficient to make these kinds of conclusions. Instead, there
could be other social and structural factors contributing to the
associations.

A concrete example is that while we observed that the Armenian
cluster was more likely to receive codes relating to heart
transplants, the actual reason for this could be more complicated
than genetics alone. Perhaps people in the Armenian cluster share
some sort of unmeasured environmental factor that affects heart
health. Or, maybe the Armenian cluster doesn’t receive more heart
transplants overall, they just receive more at UCLA because other
clusters chose to get cardiovascular care from other Los Angeles
hospitals. Until these other hypotheses are evaluated, along with
rigorous genetic experiments, we are unable to completely understand
the pathways that lead from biology to disease in this study.

## Further Reading

### __General__

*   _Superior: The Return of Race Science_, Angela Saini
*   _How to Argue with a Racist: History, Science, Race and Reality_ , Adam Rutherford
*   _Caste: The Origins of Our Discontents_, Isabel Wilkerson
*   _Medical Apartheid_, Harriet Washington
*   [Historical Foundations of Race](https://nmaahc.si.edu/learn/talking-about-race/topics/historical-foundations-race) , David Roediger
*   [The limits of ancestry DNA tests, explained](https://www.vox.com/science-and-health/2019/1/28/18194560/ancestry-dna-23-me-myheritage-science-explainer) , Brian Resnick
*   [Ancestry Composition Guide](https://www.23andme.com/ancestry-composition-guide/) , 23andMe
*   [How Ancient DNA Can Help Recast Colonial History](https://www.theatlantic.com/science/archive/2019/09/what-ancient-dna-says-about-puerto-ricos-history/598246/) , Ed Yong
*   [What's the difference between race and ethnicity?](https://www.livescience.com/difference-between-race-ethnicity.html) , Emma Brice

### __Academic__

*   Mathieson and Scally, [What is Ancestry?](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7082057/), PLoS Genetics, 2020
*   Borell et al, [Race and Genetic Ancestry in Medicine — A Time for Reckoning with Racism](https://www.nejm.org/doi/full/10.1056/NEJMms2029562#:~:text=Genetic%20ancestry%20is%20the%20genetic,ancestry%20is%20a%20better%20predictor), NEJM, 2021
*   Lewis et al, [Getting genetic ancestry right for science and society](https://www.science.org/doi/10.1126/science.abm7530), Science, 2022
*   Burchard et al, [The Importance of Race and Ethnic Background in Biomedical Research and Clinical Practice](https://doi.org/10.1056/NEJMsb025007), NEJM, 2003
*   Birney et al, [The language of race, ethnicity, and ancestry in human genetic research](http://arxiv.org/abs/2106.10041), ArXiv, 2021
*   Yaeger et al, [Comparing Genetic Ancestry and Self-Described Race in African Americans Born in the United States and in Africa](http://cebp.aacrjournals.org/cgi/doi/10.1158/1055-9965.EPI-07-2505), CEBP, 2008
*   Yudell et al, [Taking race out of human genetics](https://www.science.org/doi/abs/10.1126/science.aac4951), Science, 2016

## Acknowledgements

We are extremely grateful to Aaron Panofsky, Anna Lewis, Ella
Petter, and Mike Thomspon for helpful comments on the content
presented here.
`;

// Autogenerate table of contents from the text
const tableOfContents = FAQ_TEXT.split("\n")
  .filter((s) => s.startsWith("## "))
  .map((s) => {
    const trimmed = s.substring(3).trim()
    return `[${trimmed}](#${encodeURIComponent(trimmed)})`;
  }).join('\n\n');

const FULL_FAQ = FAQ_BEGINNING+tableOfContents+FAQ_TEXT
const WrappedTypography = ({ variant, className, children }) => {
  return (
    <div className={className}>
      <Typography variant={variant}>{children}</Typography>
    </div>
  );
};

const AnchoredLink = ({ children }) => {
  return (
    <a name={children}>
      <div className={css.titleText}>
        <Typography variant="h4">{children}</Typography>
      </div>
    </a>
  );
};

const CustomList = ({ children }) => {
  return (
    <div className={css.faqText}>
      <ul>{children}</ul>
    </div>
  );
};

const CustomListItem = ({ children }) => {
  return (
    <li>
      <Typography variant="body1">{children}</Typography>
    </li>
  );
};

const options = {
  overrides: {
    h1: {
      component: WrappedTypography,
      props: {
        className: css.titleText,
        variant: "h2",
      },
    },
    h2: {
      component: AnchoredLink,
      props: {
        className: css.titleText,
        variant: "h4",
      },
    },
    h3: {
      component: WrappedTypography,
      props: {
        className: css.faqText,
        variant: "h5",
      },
    },
    p: {
      component: WrappedTypography,
      props: {
        className: css.faqText,
        variant: "body1",
      },
    },
    ul: {
      component: CustomList,
      props: {
        className: css.faqText,
        variant: "body1",
      },
    },
    li: {
      component: CustomListItem,
    },
  },
};

const FaqPage = () => {
  return (
    <div className={css.faqPage}>
      <Markdown options={options}>{FULL_FAQ}</Markdown>
    </div>
  );
};

export default FaqPage;
