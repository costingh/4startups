import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.bluehost.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3672280e8c6512e450cd1_BH.jpg",
    name: "Bluehost",
  },
  {
    link: "https://partners.hostgator.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673e021a564f3d97610f_HG.jpg",
    name: "HostGator",
  },
  {
    link: "https://hostinger.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0cb9c0b42b3b9969da49c_hostingerrrrrr.png",
    name: "Hostinger",
  },
  {
    link: "https://kinsta.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0c9c904b1a5220a23865d_kinsta2.png",
    name: "Kinsta",
  },
  {
    link: "https://liquidweb.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0c987b2b83aad95d5e937_LW2.png",
    name: "Liquid Web",
  },
  {
    link: "https://www.greengeeks.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673debc5d19d7754757c_GG.png",
    name: "GreenGeeks",
  },
  {
    link: "https://dreamhost.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0ca1a431320a3f752b385_dreamhost.jpg",
    name: "DreamHost",
  },
  {
    link: "https://www.ipage.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673c7165463f0e49632a_ipage.PNG",
    name: "iPage",
  },
  {
    link: "https://www.a2hosting.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0cad6aaa84a78556eee2a_a2-hosting-squarelogo-1434376092251.png",
    name: "A2 Hosting",
  },
  {
    link: "https://wpengine.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0cb5bd717d6f808888210_Stacked-Light.png",
    name: "WP Engine",
  },
  {
    link: "http://www.siteground.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673bfda0a4770ea48e76_SG.jpg",
    name: "SiteGround",
  },
  {
    link: "http://www.cloudways.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673bd71f4961ad3d68b8_CW.png",
    name: "Cloudways",
  },
];

export default function WebHosting() {
  return <MarketingLayout toolsList={toolsList} />;
}
