import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://withglo.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3af5515ccb3a687005a_GLO.jpg",
    name: "GLO",
  },
  {
    link: "https://gust.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3afac256feb281c74ee_gust.png",
    name: "Gust",
  },
  {
    link: "https://www.f6s.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3af2747670038dd3ff9_f6s.png",
    name: "F6S",
  },
  {
    link: "https://www.parachute360.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3af2818585a660125d7_parachute360.png",
    name: "Parachute 360",
  },
  {
    link: "https://younoodle.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae3465c655fcd4a947_younoodle.png",
    name: "Younoodle",
  },
  {
    link: "https://500.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae0179db5d83363665_500startups.png",
    name: "500.co",
  },
  {
    link: "https://www.gan.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae488e469d416dae6b_gan.png",
    name: "Gan.co",
  },
  {
    link: "https://www.1776.vc/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae281858d37d0125d6_1776.png",
    name: "1776",
  },
  {
    link: "https://salto.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae6a84f98df123087d_salto.png",
    name: "Salto",
  },
  {
    link: "https://cofounderslab.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae323738fba0d8aaa4_cofounderslab.jpg",
    name: "Cofounders Lab",
  },
  {
    link: "https://startupnation.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae3b6d1b3149967f9b_startupnations.pn",
    name: "Startup Natio",
  },
  {
    link: "https://foundersnetwork.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae33499307a111b793_FN-Logo-FB.jpg",
    name: "Founders Network",
  },
];

export default function BusinessNetwork() {
  return <MarketingLayout toolsList={toolsList} />;
}
