import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://grasshopper.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e576bc786786c707ed8_grasshopper-vector-logo-small.png",
    name: "Grasshopper",
  },
  {
    link: "https://talkroute.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e575a3b89e1df91a5a0_talkroute.png",
    name: "Talkroute",
  },
  {
    link: "https://www.nextiva.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e57aeacc97b1ea7e1ce_nextiva.png",
    name: "Nextiva",
  },
  {
    link: "https://www.freshworks.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e57438355d1390367ac_freshcaller.png",
    name: "Freshcaller",
  },
  {
    link: "https://ringostat.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e561735600b90dfb927_ringostat.png",
    name: "Ringostat",
  },
  {
    link: "https://www.cloudtalk.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e56fc8b5b7dcbe42cac_cloudtalk.png",
    name: "Cloudtalk",
  },
  {
    link: "https://www.ooma.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5659f140fccb9863cb_ooma.jpg",
    name: "OOMA",
  },
  {
    link: "https://callhippo.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e56438355355f0367ab_callhippo.png",
    name: "CallHippo",
  },
  {
    link: "https://aircall.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5630198d4a85220635_aircall.png",
    name: "Aircall",
  },
  {
    link: "https://www.ringcentral.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e56e583979fb1096592_ringcentral_logo.png",
    name: "Ring Central",
  },
  {
    link: "https://www.8x8.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e56e81e9ed86bcf6862_8x8.png",
    name: "8x8",
  },
  {
    link: "https://www.openphone.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5613d8af4ceb29f5d4_open%20phone.jpg",
    name: "Open Phone",
  },
];

export default function PhoneCommunication() {
  return <MarketingLayout toolsList={toolsList} />;
}
