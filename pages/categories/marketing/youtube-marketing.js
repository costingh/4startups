import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://vidiq.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae3f5d236a8bb2b6c7_vidiq.jpg",
    name: "VidIQ",
  },
  {
    link: "https://www.tubebuddy.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ad2747674738dd3fd5_tubebuddy_logo.png",
    name: "TubeBuddy",
  },
  {
    link: "https://www.patreon.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3adb45bb7c6e3da819b_patreon_monogram.png",
    name: "Patreon",
  },
  {
    link: "https://vidooly.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ad5ceeee1dd60f2131_vidooly.jpg",
    name: "Vidooly",
  },
  {
    link: "https://www.tubics.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ad3b6d1b35f5967f9a_tubics.png",
    name: "Tubics",
  },
  {
    link: "https://morningfa.me/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3adb46068c90856a843_morning%20fame.png",
    name: "Morning Fame",
  },
  {
    link: "https://socialblade.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3aeb45bb7f7c9da819d_Social_Blade.png",
    name: "Social Blade",
  },
  {
    link: "https://rapidtags.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3acc5e1519fee8cc176_rapidtags.jpg",
    name: "Rapid Tags",
  },
];

export default function YouTubeMarketing() {
  return <MarketingLayout toolsList={toolsList} />;
}
