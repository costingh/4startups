import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://livesession.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e43cc352ba5de0106f_logo_livesession_dark.png",
    name: "Live Session",
  },
  {
    link: "https://www.plerdy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e43d71744895c84192_plerdy.png",
    name: "Plerdy",
  },
  {
    link: "https://mouseflow.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e33237387f14d8ab81_mouseflow.png",
    name: "Mouseflow",
  },
  {
    link: "https://www.inspectlet.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e33465c62f24d4aa4a_inspectlet_sm.png",
    name: "Inspectlet",
  },
  {
    link: "https://66analytics.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e27dd3191a806cf21f_66analytics.png",
    name: "66 Analytics",
  },
  {
    link: "https://www.luckyorange.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e36526af4e31b1fe71_lucky%20orange.png",
    name: "Lucky Orange",
  },
  {
    link: "https://www.hotjar.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e394058a69b7079086_square-hotjar-logo-black.png",
    name: "Hotjar",
  },
  {
    link: "https://www.crazyegg.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e3d467fb1588a89866_crazy-egg-squarelogo-1548697977453.png",
    name: "Crazy Egg",
  },
  {
    link: "https://www.smartlook.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e4d467fbf276a89867_Smartlook-Logo-Square-Insight-Platforms.png",
    name: "Smartlook",
  },
  {
    link: "https://www.fullstory.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3e36526afcd9bb1fe57_fullstory.png",
    name: "Fullstory",
  },
];

export default function Heatmaps() {
  return <MarketingLayout toolsList={toolsList} />;
}
