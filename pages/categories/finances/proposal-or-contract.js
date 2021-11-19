import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.pandadoc.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b18eb65cbaf16e7adc_panda%20doc.png",
    name: "Panda Doc",
  },
  {
    link: "https://ironcladapp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b16526af0e40b1fc49_ironclad.png",
    name: "Ironclad",
  },
  {
    link: "https://www.contractworks.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b2c78551464c54966b_ContractWorks.jpg",
    name: "Contract Works",
  },
  {
    link: "https://dealhub.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b05515cca24987005c_dealhub-io.png",
    name: "Dealhub",
  },
  {
    link: "https://www.concordnow.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b0dfd8364f5b27a838_concord%20contracts.png",
    name: "Concord",
  },
  {
    link: "https://www.icertis.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b03f5d237747b2b6dc_icertis-contract-management-software.png",
    name: "Icertis",
  },
  {
    link: "https://www.proposify.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b0ac256f4c301c750a_proposify.png",
    name: "Proposify",
  },
  {
    link: "https://qwilr.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b1f1e39eed95823036_qwilr.png",
    name: "Qwilr",
  },
  {
    link: "https://www.bidsketch.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b140aec062d27c718d_bidsketch.png",
    name: "Bidsketch",
  },
  {
    link: "https://loopio.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b040aec080757c718c_loopio.png",
    name: "Loopio",
  },
];

export default function Proposal() {
  return <MarketingLayout toolsList={toolsList} />;
}
