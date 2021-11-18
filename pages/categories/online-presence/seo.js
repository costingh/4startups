import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.semrush.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c354c1df24ab09963cbe58_semrush%20(2).png",
    name: "SEMRush",
  },
  {
    link: "https://mangools.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2ec753e20f678804d1_mangools-1592382084-logo.png",
    name: "Mangools",
  },
  {
    link: "https://www.longtailpro.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2ec753e201528804d0_long%20tail%20pro.jpg",
    name: "Long Tail Pro",
  },
  {
    link: "https://www.seoprofiler.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2ee9e1ce57d89146c6_seoprofiler.png",
    name: "SEO Profiler",
  },
  {
    link: "https://seranking.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2ec5a66acfb7f12bb4_se-ranking.png",
    name: "SE Ranking",
  },
  {
    link: "https://www.seopowersuite.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2e9e7e868286045249_seo%20powersuite.png",
    name: "SEO Power Suite",
  },
  {
    link: "https://onpagechamp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2e8ba3e1b3f0791e3d_onpage%20champ.png",
    name: "Onpage Champ",
  },
  {
    link: "https://serpstat.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2ec5a66a64d0f12bb3_Serpstat-logo-300x300.jpg",
    name: "Serpstat",
  },
  {
    link: "https://moz.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2d48ff4cefd88db1dd_moz.jpeg",
    name: "Moz",
  },
  {
    link: "https://ahrefs.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2ebfe59f167201ecc9_ahrefs.png",
    name: "Ahrefs",
  },
  {
    link: "https://www.moneyrobot.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2de4d819778de936c8_money-robot-logo.png",
    name: "Money Robot",
  },
];

export default function Seo() {
  return <MarketingLayout toolsList={toolsList} />;
}
