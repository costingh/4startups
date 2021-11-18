import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://coolors.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3acd1202b6bc5bfbd4a_coolors.jpg",
    name: "Coolors",
  },
  {
    link: "https://colorhunt.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab92d47e6795cf9d3c_colorhunt.png",
    name: "Colorhunt",
  },
  {
    link: "http://colormind.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3acb0cac96ee75c5e90_colormind.png",
    name: "Colormind",
  },
  {
    link: "https://mycolor.space/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab6526af1dccb1fc13_colorspace.jpg",
    name: "Color Space",
  },
  {
    link: "https://colors.muz.li/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ab040fe520c2de5cfe_colorsmuzli.png",
    name: "Colors",
  },
];

export default function ColorPalette() {
  return <MarketingLayout toolsList={toolsList} />;
}
