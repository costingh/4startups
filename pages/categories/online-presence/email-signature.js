import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.wisestamp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ad75af5ec9ec54b727_wisestamp.png",
    name: "Wise Stam",
  },
  {
    link: "https://newoldstamp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ac94058ac0bc078f6a_newoldstamp.png",
    name: "New Old Stamp",
  },
  {
    link: "https://mysignature.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c45b1cb2a33364991af625_mysign.png",
    name: "Mysignature",
  },
  {
    link: "https://www.xink.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ac0115708253ee22fa_xink.io.png",
    name: "Xink",
  },
  {
    link: "https://www.rocketseed.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3ac488e46244d6dae5b_rocketseed.jpg",
    name: "Rocket Seed",
  },
  {
    link: "https://emailsignaturerescue.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3acac256f2e2e1c74d0_email%20signature%20resuce.png",
    name: "Email Signature Rescu",
  },
];

export default function EmailSignature() {
  return <MarketingLayout toolsList={toolsList} />;
}
