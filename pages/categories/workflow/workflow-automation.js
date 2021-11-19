import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://zapier.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b594058a279c078f6f_zapier.png",
    name: "Zapier",
  },
  {
    link: "https://www.integromat.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b43237386be9d8aab8_integromat.png",
    name: "Integromat",
  },
  {
    link: "https://automate.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b410f77f9966069035_automate.io.png",
    name: "Automate.io",
  },
  {
    link: "https://automations.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b43cc3523fa7e00da3_automations_logo.png",
    name: "Automations",
  },
  {
    link: "https://ifttt.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b45515cc8b58870064_ifttt.png",
    name: "IFTTT",
  },
  {
    link: "https://integrately.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b401157033f2ee2301_integrately.png",
    name: "Integrately",
  },
  {
    link: "https://tray.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b48eb65cac306e7ade_tray.io.png",
    name: "Tray.io",
  },
  {
    link: "https://www.workato.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b410f77f68fe069034_workato.png",
    name: "Workato",
  },
  {
    link: "https://kissflow.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b5b418ce44081867cd_kissflow.png",
    name: "Kissflow",
  },
  {
    link: "https://www.integrify.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b46526afd645b1fc9f_Integrify-2.png",
    name: "Integrify",
  },
];

export default function WorkflowAutomation() {
  return <MarketingLayout toolsList={toolsList} />;
}
