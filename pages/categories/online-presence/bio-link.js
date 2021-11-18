import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://linktr.ee/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3aa079b183758732cbf_linktree.png",
    name: "Linktree",
  },
  {
    link: "https://beacons.ai/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3aa94058ae3f4078f64_beacons.png",
    name: "Beacons",
  },
  {
    link: "https://milkshake.app/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ac8e70e00d48e41cff_milkshake.png",
    name: "Milkshake",
  },
  {
    link: "https://campsite.bio/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3aa75af5e1d2054b717_campsite.jpg",
    name: "Campsite",
  },
  {
    link: "https://lnk.bio/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3a9320b6465bb9ab0bd_lnk.bio.png",
    name: "Lnk.Bio",
  },
];

export default function BioLink() {
  return <MarketingLayout toolsList={toolsList} />;
}
