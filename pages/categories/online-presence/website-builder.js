import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://webflow.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673b49c495df07f8e817_Webflow.PNG",
    name: "Webflow",
  },
  {
    link: "https://www.ucraft.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673bebc5d1e13a547578_Ucraft.PNG",
    name: "Ucraft",
  },
  {
    link: "https://elementor.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c234177a60ee08e34d417c_elementor%20(2).png",
    name: "Elementor",
  },
  {
    link: "https://www.wix.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c23417211046005ad476cd_wix.png",
    name: "Wix",
  },
  {
    link: "https://www.weebly.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673a0e0fd86dfd2dbed5_Weebly.png",
    name: "Weebly",
  },
  {
    link: "https://www.squarespace.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c23418e38b1a416257e744_squarespace.pn",
    name: "Squarespace",
  },
  {
    link: "https://www.webnode.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673bb7b11d08441a45cb_Webnode.jpg",
    name: "Webnode",
  },
  {
    link: "https://www.strikingly.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673abb78e33b523a28c3_strikingly.png",
    name: "Strikingly",
  },
  {
    link: "https://bookmark.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c23417fa1ee22f9bdc021d_bookmark%20(2).png",
    name: "Bookmark",
  },
  {
    link: "https://zyro.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3673b0e0fd8db3b2dbed6_Zyro.png",
    name: "Zyro",
  },
  {
    link: "https://www.pagecloud.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36739b5434b4bc57f8537_PageCloud.png",
    name: "PageCloud",
  },
];

export default function WebsiteBuilder() {
  return <MarketingLayout toolsList={toolsList} />;
}
