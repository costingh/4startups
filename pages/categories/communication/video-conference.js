import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://zoom.us/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b64269d76494d27440768a_zoom.png",
    name: "Zoom",
  },
  {
    link: "https://livestorm.c",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b64269fe21b06f1eb5ab6e_Live%20Storm.PNG",
    name: "Livestorm",
  },
  {
    link: "https://easywebinar.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b642691690925f1fbc61d9_Easy%20webinar.png",
    name: "Easy Webinar ",
  },
  {
    link: "https://streamyard.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6426a79dc3a76e0584011_streamyard.png",
    name: "Streamyard",
  },
  {
    link: "https://proficonf.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b64269ee98b43943750cb7_proficonf.png",
    name: "Proficonf",
  },
  {
    link: "https://topia.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b642693f27b8a491640735_topia_teal_on_white.jpg",
    name: "Topia",
  },
  {
    link: "https://be.live",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b642692240c86ac530fdcd_be.live.png",
    name: "Be.live",
  },
  {
    link: "https://www.webinarjam.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b642691690924c50bc61d7_webinar%20jam.png",
    name: "Webinar Jam",
  },
  {
    link: "https://www.bigmarker.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b64269158255c806972540_bigmarker.png",
    name: "BigMarker",
  },
  {
    link: "https://webinarninja.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b64269c89fd9f0c674a40d_webinar%20ninja.png",
    name: "Webinar Ninja",
  },
  {
    link: "https://clickmeeting.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6426889ead4ed0b52a958_clickmeeting.png",
    name: "Click Meeting",
  },
];

export default function VideoConference() {
  return <MarketingLayout toolsList={toolsList} />;
}
