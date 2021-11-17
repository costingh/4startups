import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://findthatlead.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1d78e877741f321ea0_Findthatlead.PNG",
    name: "Find That Lead",
  },
  {
    link: "https://leadfeeder.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1d16e9af5c3324699b_leadfeeder.jpg",
    name: "Leadfeeder",
  },
  {
    link: "https://www.uplead.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1d4925c0360c62227f_UpLead.png",
    name: "Uplead",
  },
  {
    link: "https://hunter.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1dab7ef74d5cfd6031_hunter.io.png",
    name: "Hunter.io",
  },
  {
    link: "https://www.emaillistvalidation.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c356543330db51b5f0dd5d_emaillistvalidation.png",
    name: "Email List Validation",
  },
  {
    link: "https://www.zerobounce.net",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c35604bc9cb2d51a63bacd_zerobounce.png",
    name: "ZeroBounce",
  },
  {
    link: "https://aeroleads.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1d8700bc6683613b10_aero%20leads.png",
    name: "Aero Leads",
  },
  {
    link: "https://www.voilanorbert.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1d4925c06474622278_voila%20norbert.png",
    name: "Voila Norbert",
  },
  {
    link: "https://anymailfinder.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1dcf55acb7bc092615_Anymail-finder-logo.png",
    name: "Anymail Finder",
  },
  {
    link: "https://www.leadfuze.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1dc5a66a6087f13790_leadfuze.jpg",
    name: "LeadFuze",
  },
  {
    link: "https://www.leadgibbon.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63f1da2e1326bf4c986bf_leadgibbon.png",
    name: "Lead Gibbon",
  },
];

export default function SalesProspecting() {
  return <MarketingLayout toolsList={toolsList} />;
}
