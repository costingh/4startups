import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://landingi.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e7357e59b67934216d5_Landingi.png",
    name: "Landingi",
  },
  {
    link: "https://instapage.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e73323aacfa4492fb43_Instapage.PNG",
    name: "Instapage",
  },
  {
    link: "https://lp.leadpages.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e721df666e4be995b03_Leadpages.jpg",
    name: "Leadpages",
  },
  {
    link: "https://unbounce.com",
    image:
      "ttps://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e73e89122574a76a822_unbounce.png",
    name: "Unbounce",
  },
  {
    link: "https://www.pagewiz.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e72be705faf156b29dd_pagewiz.png",
    name: "PageWiz",
  },
  {
    link: "https://landerapp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e729d53e448429d4147_lander.png",
    name: "Lander",
  },
  {
    link: "https://www.launchrock.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e7117effe7f44a2bd15_launchrock.jpg",
    name: "Launchrock",
  },
  {
    link: "https://carrd.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e7149c3ce5e5b1acc16_carrd.png",
    name: "Carrd",
  },
];

export default function LandingPage() {
  return <MarketingLayout toolsList={toolsList} />;
}
