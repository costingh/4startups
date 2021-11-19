import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.lawdepot.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3afd18afd9c056aeb9b_lawdepot.png",
    name: "LawDepot",
  },
  {
    link: "https://termly.io/en/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3afdf174151a988d420_termly.jpg",
    name: "Termly",
  },
  {
    link: "https://www.legalzoom.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3afdfd8360be827a837_legalzoom.png",
    name: "Legalzoom",
  },
  {
    link: "https://www.rocketlawyer.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b017dcb916483bceab_rocket%20lawyer.png",
    name: "Rockey Lawyer",
  },
  {
    link: "https://www.nolo.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b0bd91d579c0a558d4_nolo.png",
    name: "NOLO",
  },
  {
    link: "https://www.legalnature.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b03349937c5f11b7b4_legalnature-logo.png",
    name: "LegalNature",
  },
  {
    link: "https://www.incfile.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3af10f77f1e6606902f_incfile.jpg",
    name: "Incfile",
  },
  {
    link: "https://www.zenbusiness.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae0bcd7eba79e24215_zenbusiness.png",
    name: "Zenbusiness",
  },
  {
    link: "https://www.docracy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b0334993b1c211b7c4_Docracy.png",
    name: "Docracy",
  },
  {
    link: "https://www.avodocs.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ae6526af283bb1fc27_avodocs.png",
    name: "Avodocs",
  },
  {
    link: "https://www.termsfeed.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3afbef2c65a924ad8a2_termsfeed.jpg",
    name: "Termsfeed",
  },
];

export default function Legal() {
  return <MarketingLayout toolsList={toolsList} />;
}
