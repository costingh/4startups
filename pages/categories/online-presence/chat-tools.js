import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.livechat.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c7bb547fecf20cb1ec_livechat.jpeg",
    name: "LiveChat",
  },
  {
    link: "https://www.chatbot.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c76ec9b01c4de3a849_chatbot.png",
    name: "Chatbot",
  },
  {
    link: "https://hellotars.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d6a7334b263c1e8996b0_6a_PBoFh_400x400.png",
    name: "TARS",
  },
  {
    link: "https://collect.chat",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c7769163ff100e6804_collect.chat.jpg",
    name: "Collect.chat",
  },
  {
    link: "https://landbot.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d657334b260673899465_landbot%202.png",
    name: "Landbot",
  },
  {
    link: "https://app.mobilemonkey.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d5eb46fd806464ce7749_mobile%20monkey.png",
    name: "Mobile Monkey",
  },
  {
    link: "https://www.freshworks.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c7500bfe70e53cb6a9_Freshchat-Logo.png",
    name: "Freshchat",
  },
  {
    link: "https://manychat.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c6323aaca2fd94679f_Many%20Chat.PNG",
    name: "ManyChat",
  },
  {
    link: "https://www.tidio.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c7be705f07166bb8d7_tidio.jpg",
    name: "Tidio",
  },
  {
    link: "https://www.olark.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c739357dff0f2417d1_olark.jpg",
    name: "Olark",
  },
  {
    link: "https://www.tawk.to/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c76d6b233100afecb8_tawk.to.jpg",
    name: "Tawk.to",
  },
  {
    link: "https://www.drift.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c6fc066125005790d0_drift-logo.png",
    name: "Drift",
  },
  {
    link: "https://www.intercom.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b39719bb78e35d5b3afbfa_intercom.png",
    name: "Intercom",
  },
  {
    link: "https://purechat.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c649c4951c62f990d3_pure%20chat.png",
    name: "Pure Chat",
  },
];

export default function ChatTools() {
  return <MarketingLayout toolsList={toolsList} />;
}
