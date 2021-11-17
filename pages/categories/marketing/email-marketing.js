import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.constantcontact.com/global/home-page",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35b24bb7cc67ff34e4a0c_CC.jpg",
    name: "Constant Contact",
  },
  {
    link: "https://www.mailerlite.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35b7fca8f27355369f885_ML.jpg",
    name: "MailerLite",
  },
  {
    link: "https://www.sendinblue.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35bd15830832742b06fd1_SB.jpg",
    name: "Sendinblue",
  },
  {
    link: "https://www.getresponse.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35c68978e07b9d500ffe9_GR.jpg",
    name: "Get Response",
  },
  {
    link: "http://www.mailchimp.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35cbf76916387130d7e27_MC.jpg",
    name: "Mailchimp",
  },
  {
    link: "http://www.campaignmonitor.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35d9871654678f1494410_CM.jpg",
    name: "Campaign Monitor",
  },
  {
    link: "http://www.activecampaign.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35e78fc0661ca4356adbb_AC%202.png",
    name: "Active Campaign",
  },
  {
    link: "https://www.omnisend.com/v4/", // possible affiliation
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35db849c3ce60171aa29f_OS.jpg",
    name: "Omnisend",
  },
  {
    link: "https://moosend.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35e7f715abb267581ea4e_MS%202.png",
    name: "Moosend",
  },
  {
    link: "https://www.aweber.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35e875c914ff991212926_AW.jpg",
    name: "AWeber",
  },
  {
    link: "https://convertkit.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35fdb7a126c9becc09d5f_CK.jpg",
    name: "ConvertKit",
  },
  {
    link: "https://www.drip.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35fe049c4957d42f8cfa6_Drip.png",
    name: "Drip",
  },
  {
    link: "https://myemma.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b360a4bb7cc67c1c4e64d0_Emma%203.jpg",
    name: "Emma",
  },
  {
    link: "https://automizy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b35feb1c7edd7574f5fc31_Automizy.png",
    name: "Automizy",
  },
];

export default function EmailMarketing() {
  return <MarketingLayout toolsList={toolsList} />;
}
