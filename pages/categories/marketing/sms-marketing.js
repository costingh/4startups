import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://simpletexting.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b892d47e2a63cf9d5c_simpletexting-1601567475-logo.png",
    name: "Simple Texting",
  },
  {
    link: "https://www.postscript.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3bb334993261711b7fc_postscript.png",
    name: "PostScript",
  },
  {
    link: "https://www.eztexting.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b7274767f1ffdd4072_eztexting.png",
    name: "EZ Texting",
  },
  {
    link: "https://www.salesmessage.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b717dcb948443bced5_salesmsg.png",
    name: "Salesmsg",
  },
  {
    link: "https://www.attentivemobile.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b775af5e31d254b770_attentive.png",
    name: "Attentive",
  },
  {
    link: "https://www.trumpia.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b7bd91d56c9ca558fa_trumpia.jpg",
    name: "Trumpia",
  },
  {
    link: "https://www.twilio.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b75ceeeeb4950f2165_twilio.png",
    name: "Twilio",
  },
  {
    link: "https://www.textline.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b73d717422dbc8402e_textline.png",
    name: "Textline",
  },
  {
    link: "https://www.callloop.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b86526af57cbb1fccc_callloop.png",
    name: "Call Loop",
  },
  {
    link: "https://www.textmagic.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b6df174129c788d527_textmagic.png",
    name: "Text Magic",
  },
];

export default function SMSMarketing() {
  return <MarketingLayout toolsList={toolsList} />;
}
