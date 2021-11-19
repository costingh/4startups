import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.freshworks.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e8a4969a5a7bedeb3_freshteam.jpg",
    name: "Freshteam",
  },
  {
    link: "https://breezy.hr",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855efda0a4dadda51947_breezy-hr.jpg",
    name: "Breezy HR",
  },
  {
    link: "https://www.bambee.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855efda0a409bca51948_bambee%20hr.png",
    name: "Bambee",
  },
  {
    link: "https://vivahr.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e8a496912c1bedeb4_viva%20hr.png",
    name: "Viva HR",
  },
  {
    link: "https://gusto.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e021a56270697e0b8_gusto.png",
    name: "Gusto",
  },
  {
    link: "https://www.bamboohr.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e8e93f1491d91e50a_bamboo-hr.png",
    name: "BambooHR",
  },
  {
    link: "https://eddy.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e716546478349db27_eddyhr.png",
    name: "Eddy HR",
  },
  {
    link: "https://workbright.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855dca8f2727ea6a92a7_workbright.png",
    name: "Workbright",
  },
  {
    link: "https://www.helppier.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e56797d5933bcf4ff_helppier.png",
    name: "Helppier",
  },
  {
    link: "https://niceboard.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855d49c4952b09f948e7_niceboard.pn",
    name: "Niceboard",
  },
  {
    link: "https://onpay.com/hr/software",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855d17effe3c45a31920_onpay.png",
    name: "OnPay",
  },
  {
    link: "https://www.leavedates.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855d978e07d9410196c7_leavedates.jpg",
    name: "Leave Dates",
  },
  {
    link: "https://www.leapsome.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855dfb2fc970a33aea5a_leapsome.png",
    name: "Leapsome",
  },
  {
    link: "https://www.zenefits.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855e1df666e86d99bd12_zenefits.jpg",
    name: "Zenefits",
  },
  {
    link: "https://www.staffsquared.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855d0df5e97766262712_staffsquared.jpg",
    name: "Staff Squared",
  },
  {
    link: "https://www.namely.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b3855d583083ce04b10265_namely.jpg",
    name: "Namely",
  },
];

export default function HrAdministration() {
  return <MarketingLayout toolsList={toolsList} />;
}
