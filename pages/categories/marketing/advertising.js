import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://adzooma.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5c6bc7868df2707f1d_Adzooma.PNG",
    name: "Adzooma",
  },
  {
    link: "https://revealbot.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5c8b92ea073dd88fae_revealbot.png",
    name: "RevealBot",
  },
  {
    link: "https://leadsbridge.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5cf4632f782561086f_Leadsbridge.PNG",
    name: "Leads Bridge",
  },
  {
    link: "https://adalysis.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5c1735602234dfb9ca_adalysis.jpg",
    name: "Adalysis",
  },
  {
    link: "https://madgicx.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5cf4632f67bc610870_madgicx.jpg",
    name: "Madgicx",
  },
  {
    link: "https://www.adroll.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5cca5c1516990a9d01_adroll.png",
    name: "Adroll",
  },
  {
    link: "https://www.wordstream.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5dee8e204c0272aa32_wordstream.png",
    name: "Wordstream",
  },
  {
    link: "https://adespresso.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5c5cbd05086b8da1f8_adespresso.png",
    name: "Adespresso",
  },
  {
    link: "https://niceads.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5c5cfb873f16d5e367_Nice%20Ads.png",
    name: "Nice Ads",
  },
];

export default function Advertising() {
  return <MarketingLayout toolsList={toolsList} />;
}
