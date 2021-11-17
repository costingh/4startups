import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://reply.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448dc89fd9fc2c74a9b0_reply%20(2).png",
    name: "Reply",
  },
  {
    link: "https://www.klenty.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448ebd0dde7c3f142879_klenty.png",
    name: "Klenty",
  },
  {
    link: "https://snov.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b644902edb4512e5fc9926_snovio.png",
    name: "Snov.io",
  },
  {
    link: "https://woodpecker.co",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448e7d92b566b6e95a95_woodpecker.jpg",
    name: "Woodpecker",
  },
  {
    link: "https://www.persistiq.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448ea486561900a53518_persistiq.png",
    name: "Persist IQ",
  },
  {
    link: "https://smartreach.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448ef4e5738af5f0c6e9_smart%20reach.jpg",
    name: "Smart Reach",
  },
  {
    link: "https://autoklose.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448ee8dfd1ca081a2034_autoklose.png",
    name: "Autoklose",
  },
  {
    link: "https://www.lemlist.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448e4077360d46e3b899_lemlist.png",
    name: "Lemlist",
  },
  {
    link: "https://www.outreach.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448ea48656aa45a5351a_outreach.png",
    name: "Outreach",
  },
  {
    link: "https://www.saleshandy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6448ee6b82b265484a625_saleshandy.png",
    name: "Saleshandy",
  },
];

export default function EmailOutreach() {
  return <MarketingLayout toolsList={toolsList} />;
}
