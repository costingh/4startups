import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://smartmockups.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c3630bdf24ab1faf3d117e_smartmockups.jpg",
    name: "Smart Mockups",
  },
  {
    link: "https://artboard.studio/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1be4d819ec58e8c7bf_AS.jpg",
    name: "Artboard Studio",
  },
  {
    link: "https://mediamodifier.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1bbfe59fc404017cad_MM.jpg",
    name: "Media Modifie",
  },
  {
    link: "https://mockuuups.studio/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c362a053417c6b84a22da3_Mockuuupsstudio2.png",
    name: "Mockuuups Studio",
  },
  {
    link: "https://placeit.net/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1b999dc13d73cfaf98_place%20it.jpg",
    name: "Place It",
  },
  {
    link: "https://www.mockupworld.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1b48ff4cc4b48d613a_MW.jpg",
    name: "Mockup World",
  },
  {
    link: "https://mockupbro.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1b270971862c4df9c5_Mockupbro.jpg",
    name: "Mockupbro",
  },
  {
    link: "https://yellowimages.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1b137444c262fa97b9_YI.png",
    name: "Yellow Images",
  },
  {
    link: "https://www.mockmagic.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1bce5b9dc6a3b963e9_Mock%20Magic.png",
    name: "Mock Magic",
  },
  {
    link: "https://things.morflax.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1b08e5c92b323d75bc_MT.jpg",
    name: "Morflax Things",
  },
];

export default function MockUps() {
  return <MarketingLayout toolsList={toolsList} />;
}
