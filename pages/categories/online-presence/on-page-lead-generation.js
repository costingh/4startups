import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://outgrow.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e717165465c4249880d_outgrow.png",
    name: "Outgrow",
  },
  {
    link: "https://www.involve.me",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e71be857932c2bcd03b_Involve.me.png",
    name: "Involve.me",
  },
  {
    link: "https://www.optimonk.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e7158308304aeb0a834_optimonk.jpg",
    name: "Optimonk",
  },
  {
    link: "https://www.poptin.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e718e93f10c7c919195_Poptin.png",
    name: "Poptin",
  },
  {
    link: "https://hellobar.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e7171654609c749880c_hellobar.png",
    name: "Hellobar",
  },
  {
    link: "https://www.listagram.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d1716ba4c7ac93c2f618_listagram%202.png",
    name: "Listagram",
  },
  {
    link: "https://sleeknote.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e700e0fd8e3522dd1d3_sleeknote.png",
    name: "Sleeknote",
  },
  {
    link: "https://convertful.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e708a49692e2dbe8989_convertful.jpg",
    name: "Convertful",
  },
  {
    link: "https://useproof.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e6fa44c2d68218e6357_proof.png",
    name: "Proof",
  },
  {
    link: "https://optinmonster.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e70be705f5e206b29dc_OptinMonster.png",
    name: "Optinmonster",
  },
  {
    link: "https://www.tryinteract.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d11ad2961d1c2b15ee81_TryInteract-logo.png",
    name: "Interact",
  },
  {
    link: "https://www.mailmunch.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e7084c6fccf0ddfbacc_mailmunch.png",
    name: "Mailmunch",
  },
  {
    link: "https://www.videoask.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c0d0c83a28b783db8796b5_videoask%20logo.png",
    name: "VideoAsk",
  },
  {
    link: "https://www.leadquizzes.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e6f7a126c4c1fc0bcb6_leadquizzes.jpg",
    name: "Leadquizzes",
  },
  {
    link: "https://www.kyleads.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b36e706ec9b03dbee3025d_kyleads.jpg",
    name: "Kyleads",
  },
];

export default function OnPageLeadingGeneration() {
  return <MarketingLayout toolsList={toolsList} />;
}
