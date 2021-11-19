import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.octoboard.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b2bc2364104a1710a1_octoboard.png",
    name: "Octoboard",
  },
  {
    link: "https://dashthis.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b247218cbf6463f59a_dashthis.png",
    name: "Dash This",
  },
  {
    link: "https://www.geckoboard.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b2bd91d5bc11a558df_geckoboard.png",
    name: "Geckoboard",
  },
  {
    link: "https://www.cyfe.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b16526af1040b1fc48_cyfe.png",
    name: "Cyfe",
  },
  {
    link: "https://www.klipfolio.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b30179db148f363677_klipfolio-logo-share.png",
    name: "Klipfolio",
  },
  {
    link: "https://databox.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b1df174104f988d484_databox.png",
    name: "Databox",
  },
  {
    link: "https://www.grow.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b25515cc289087005f_grow%20app.png",
    name: "Grow",
  },
  {
    link: "http://board.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b20179db41bd363676_board%20app.jpg",
    name: "Board",
  },
  {
    link: "https://www.clicdata.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b110f77fb599069030_clickdata.png",
    name: "Clic Data",
  },
  {
    link: "https://powerbi.microsoft.com/en-us/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b23f5d238259b2b6f0_PowerBI-Logo.png",
    name: "Microsoft Power BI",
  },
];

export default function Dashboard() {
  return <MarketingLayout toolsList={toolsList} />;
}
