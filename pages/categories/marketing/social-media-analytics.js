import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "http://mtr.cool",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2c2709717c354e5909_metricool.png",
    name: "Metricool",
  },
  {
    link: "https://vaizle.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2c23a41bf1413eea62_vaizle.png",
    name: "Vaizle",
  },
  {
    link: "https://brandmentions.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2cc10c126dc448ea65_brandmentions.png",
    name: "Brand Mentions",
  },
  {
    link: "https://www.social-searcher.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2cd3a4666a72eddb38_social%20searcher.png",
    name: "Social Searcher",
  },
  {
    link: "https://viralstat.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2dc753e2ccc48804cf_viral%20stat.png",
    name: "Viral Stat",
  },
  {
    link: "https://brand24.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2dca0c7b764cc18401_Brand24.png",
    name: "Brand24",
  },
  {
    link: "https://awario.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2d628ab5207a5a48dc_awario.jpg",
    name: "Awario",
  },
  {
    link: "https://mention.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c36500d27b3f3d1d49c51f_mention3.png",
    name: "Mention",
  },
  {
    link: "https://www.socialinsider.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2de8e705a38a159e14_social%20insider.png",
    name: "Social Insider",
  },
  {
    link: "https://www.quintly.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63d2de9e1ce1a849146b6_quintly_logo.png",
    name: "Quintly",
  },
];

export default function SocialMediaAnalytics() {
  return <MarketingLayout toolsList={toolsList} />;
}
