import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.fiverr.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b992d47ebc77cf9d5f_fiverr.png",
    name: "Fiverr",
  },
  {
    link: "https://www.hellobonsai.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b93cc352539ce00dce_hellobonsai.png",
    name: "Bonsai",
  },
  {
    link: "https://plutio.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b92747677c79dd408d_plutio.png",
    name: "Plutio",
  },
  {
    link: "https://www.and.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b8c78551570f54967e_and.co.png",
    name: "AND.CO",
  },
  {
    link: "https://www.wingspan.app/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b917dcb93f143bced9_wingspan.jpeg",
    name: "Wingspan",
  },
  {
    link: "https://www.honeybook.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b8079b181b8b732cd3_honeybook.png",
    name: "HoneyBook",
  },
  {
    link: "https://www.17hats.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b895c5e1280193089b_17hats.png",
    name: "17hats",
  },
  {
    link: "https://clarrow.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b863d766aa8883f500_clarrow.png",
    name: "Clarrow",
  },
  {
    link: "https://www.hecticapp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b810f77fd043069038_hectic%20app.jpg",
    name: "Hectic",
  },
  {
    link: "http://www.weareindy.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b801157064b0ee2305_weareindy.jpg",
    name: "Indy",
  },
];

export default function FreelanceSolopreneur() {
  return <MarketingLayout toolsList={toolsList} />;
}
