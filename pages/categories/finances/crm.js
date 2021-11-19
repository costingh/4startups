import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.pipedrive.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d337bc317fecc70eb1d3_Pipedrive-b.png",
    name: "Pipedrive",
  },
  {
    link: "https://www.freshworks.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/611faef26cd7086f6816dddb_freshsales.png",
    name: "Freshsales",
  },
  {
    link: "https://salesflare.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855f6d6b238bbaafa823_Salesflare.PNG",
    name: "Salesflare",
  },
  {
    link: "https://get.streak.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855fbb547f22780c62b8_Streak.png",
    name: "Streak CRM",
  },
  {
    link: "https://nethunt.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855f17effe1502a31937_nethunt.png",
    name: "Nethunt CRM",
  },
  {
    link: "https://www.teamgate.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855f57e59b3f99426adb_teamgate.png",
    name: "Teamgate",
  },
  {
    link: "https://youdontneedacrm.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855fbb547f77ca0c62b6_nocrm.png",
    name: "NoCRM",
  },
  {
    link: "https://www.funnelcrm.co",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855fbb547f64110c62b7_funnel%20crm.jpeg",
    name: "Funnel CRM",
  },
  {
    link: "https://www.salesmate.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855f58e0908baf5d1cde_Salesmate.png",
    name: "Salesmate",
  },
  {
    link: "https://www.agilecrm.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e58308343c9b10266_agile%20crm.png",
    name: "Agile CRM",
  },
  {
    link: "https://capsulecrm.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d3a5334b26a01d89852e_capsule%20(2).png",
    name: "Capsule CRM",
  },
  {
    link: "https://close.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d3ff7e26cb5b78bc7ed6_close.png",
    name: "Close CRM",
  },
  {
    link: "https://www.copper.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b385d358e090ae2a5d201b_Copper.png",
    name: "Copper CRM",
  },
];

export default function CRM() {
  return <MarketingLayout toolsList={toolsList} />;
}
