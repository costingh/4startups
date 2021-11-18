import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://oribi.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5d0ed3510e48ba7865_oribi.png",
    name: "Oribi",
  },
  {
    link: "https://supermetrics.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5d70d320995be692a1_supermetrics-compact-logo-1.png",
    name: "Supermetrics",
  },
  {
    link: "https://analytics.google.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5dc3a3a9f308faaa4f_google-analtyics-setup-fee.png",
    name: "Google Analytics",
  },
  {
    link: "https://www.similarweb.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5d43835562530367b2_similarweb.png",
    name: "SimilarWeb",
  },
  {
    link: "https://www.jepto.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5d829aff66af9613c6_jepto.png",
    name: "Jepto",
  },
  {
    link: "https://www.owox.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5d1574a61682c5b65e_owox.png",
    name: "OWOX",
  },
  {
    link: "https://usefathom.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5dca5c1533340a9d03_fathom%20analytics.jpg",
    name: "Fathom Analytics",
  },
  {
    link: "https://www.visitor-analytics.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c221147c11df4fc9d88640_visitoranalytics.png",
    name: "Visitor Analytics",
  },
  {
    link: "https://baremetrics.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5ed5f5a5087ca23a84_baremetrics_logo_d.png",
    name: "Baremetrics",
  },
  {
    link: "https://www.woopra.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5eee8e20594672aa44_woopra.png",
    name: "Woopra",
  },
  {
    link: "https://www.kissmetrics.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5e1574a608aec5b65f_kismetrics-demo-logo.png",
    name: "Kissmetrics",
  },
  {
    link: "https://www.pathfactory.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5e2179eb9c6eca3740_pathfactory.jpg",
    name: "Path Factory",
  },
];

export default function Analytics() {
  return <MarketingLayout toolsList={toolsList} />;
}
