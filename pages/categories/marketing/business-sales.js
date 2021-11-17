import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://hubspot.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a37ebe3e1a4743c167f5_hubspot%20(2).png",
    name: "Hubspot",
  },
  {
    link: "https://engagebay.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1abb120d3fa53e5eb3_engagebay-logo.jpg",
    name: "Engagebay",
  },
  {
    link: "https://keap.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a2a110f3d4e8d9b7b087_keap%20(2).png",
    name: "Keap",
  },
  {
    link: "https://suitedash.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1ae9e1ce554d90eba6_suitedash-1-logo.png",
    name: "SuiteDash",
  },
  {
    link: "https://www.wishpond.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a4afa9e44f0482915cae_wishpond.png",
    name: "Wishpond",
  },
  {
    link: "https://go.ontraport.net",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a57c644232813e32e44f_ontraport%20(2).png",
    name: "Ontraport",
  },
  {
    link: "https://app.greenrope.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a6e89fbeb6a2307cdc49_greenrope%20grey.png",
    name: "GreenRope",
  },
  {
    link: "https://www.flowlu.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1a628ab5c69659f05d_flowlu.jpg",
    name: "Flowlu",
  },
  {
    link: "https://www.pabbly.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1acf55ac508808c831_pabbly05.png",
    name: "Pabbly",
  },
  {
    link: "https://getgist.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a19a065ab264ccfb19a_Gist%202.png",
    name: "Gist",
  },
  {
    link: "https://sharpspring.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a19b275e350f283c212_sharpspring.jpg",
    name: "SharpSpring",
  },
  {
    link: "https://aritic.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a195bf85233e7d92eaf_aritic.jpg",
    name: "Aritic",
  },
  {
    link: "https://www.accelo.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a642de7d91154b239d4e_accelo-icon-on-grey.png",
    name: "Accelo",
  },
  {
    link: "https://www.salesmanago.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1a0d8c97c955a9a789_salesmanago.png",
    name: "Salesmanago",
  },
  {
    link: "https://teamwave.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1981227d16cc02d556_TeamWave.jpg",
    name: "Teamwave",
  },
  {
    link: "http://www.autopilothq.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3a5ea644232c90432e582_autopilot.png",
    name: "Autopilot",
  },
];

export default function BusinessSales() {
  return <MarketingLayout toolsList={toolsList} />;
}
