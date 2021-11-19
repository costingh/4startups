import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "http://republic.co",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b627476772c8dd4071_Republic.co_company_logo_2017.png",
    name: "Republic.co",
  },
  {
    link: "https://wefunder.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b65ceeee7e320f2162_wefunder.png",
    name: "Wefunder",
  },
  {
    link: "https://www.fundera.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b610f77ff0bd069037_fundera-square-logo.png",
    name: "Fundera",
  },
  {
    link: "https://www.crowdcube.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b617dcb9ac4d3bced4_crowdcube.png",
    name: "Crowdcube",
  },
  {
    link: "https://clear.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b63931008190594b71_clearco-400.jpg",
    name: "Clearco",
  },
  {
    link: "https://www.ondeck.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b6c7855135d554967d_ondeck-ID-post.png",
    name: "OnDeck",
  },
  {
    link: "https://www.kabbage.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b63d71746f2bc8402d_kabbage.png",
    name: "Kabbage",
  },
  {
    link: "https://www.bluevine.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b5320b64c3339ab129_bluevine.png",
    name: "BlueVine",
  },
  {
    link: "https://www.seedinvest.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b6b0cac97ba35c5f1d_SeedInvest.png",
    name: "SeedInvest",
  },
  {
    link: "https://www.kickstarter.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b6b46068b39056a88e_kickstarter-logo-vector.png",
    name: "Kickstarter",
  },
  {
    link: "https://www.indiegogo.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b5b0cac9f6155c5f0d_indiegogo.png",
    name: "Indiegogo",
  },
  {
    link: "https://www.lendio.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b5d467fb8694a895cc_lendio.png",
    name: "Lendio",
  },
  {
    link: "https://fundbox.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b510f77fe9b0069036_fundbox.png",
    name: "Fundbox",
  },
  {
    link: "https://www.payability.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b5b45bb780b5da824f_payability.png",
    name: "Payability",
  },
  {
    link: "https://www.hockeystick.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b5488e46bc9e6dae6c_hockeystick.png",
    name: "Hockeystick",
  },
];

export default function Funding() {
  return <MarketingLayout toolsList={toolsList} />;
}
