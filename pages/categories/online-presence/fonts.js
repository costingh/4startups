import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.dafont.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ac32373868d6d8aa6a_dafont.png",
    name: "Dafont",
  },
  {
    link: "https://www.myfonts.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab2818585ad50125c6_myfonts.jpg",
    name: "Myfonts",
  },
  {
    link: "https://www.whatfontis.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab95c5e1bb99930776_whatfontis.png",
    name: "What Font Is",
  },
  {
    link: "https://www.fontsquirrel.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab10f77f795606902d_fontsquirrel.png",
    name: "Font Squirrel",
  },
  {
    link: "https://www.fontspring.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3aa17dcb903ac3bce84_fontspring.jpeg",
    name: "Font Spring",
  },
  {
    link: "http://whatfontapp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab3d7174529dc83fc7_whatfontapp.png",
    name: "What Fon",
  },
];

export default function Fonts() {
  return <MarketingLayout toolsList={toolsList} />;
}
