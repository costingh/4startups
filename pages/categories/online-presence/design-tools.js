import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.canva.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c35384dc6e7c5ce14cf9ba_canva.png",
    name: "Canva",
  },
  {
    link: "https://getstencil.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c639357d001d2417c9_stencil.png",
    name: "Stencil",
  },
  {
    link: "https://snappa.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c6fda0a4b3cfa55c07_Snappa.PNG",
    name: "Snappa",
  },
  {
    link: "https://about.easil.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c6fc0661cb4d5790cf_easil.png",
    name: "Easil",
  },
  {
    link: "https://pixelied.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c5b7b11d7b3e1af45f_pixelied.jpg",
    name: "Pixelied",
  },
  {
    link: "https://www.visme.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c6323aac9ad494679e_visme.png",
    name: "Visme",
  },
  {
    link: "https://www.tailorbrands.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c617effe73b5a361c8_tailor-brands.jp",
    name: "Tailor Brands",
  },
  {
    link: "https://www.adobe.com/express/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c5be705f34616bb8d6_adobe%20spark.png",
    name: "Adobe Spark",
  },
  {
    link: "https://www.designwizard.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c56ec9b07613e3a848_design%20wizard.png",
    name: "Design Wizard",
  },
  {
    link: "https://crello.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c57165465c394a1ad2_crello.png",
    name: "Crello",
  },
  {
    link: "https://www.picmonkey.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c5af169a3d3b9cdaf3_picmonkey.png",
    name: "PicMonkey",
  },
];

export default function DesignTools() {
  return <MarketingLayout toolsList={toolsList} />;
}
