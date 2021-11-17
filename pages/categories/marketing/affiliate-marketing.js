import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://refcandy.referralcandy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c44ed6bb5990bbb478f58b_RC.png",
    name: "Referral Candy",
  },
  {
    link: "https://tapfiliate.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1904782c3c8e0f782d_tapfiliate.png",
    name: "Tapfiliate",
  },
  {
    link: "https://paykstrt.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a1878e87731a531d211_Upviral.PNG",
    name: "Upviral",
  },
  {
    link: "https://www.getrewardful.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c44edb1bc9c5a4413afa95_rewardful_1374_logo_1602234647_m650e.png",
    name: "Rewardful",
  },
  {
    link: "https://www.partnerstack.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a180a62e9a8bda4027d_partnerstack.png",
    name: "PartnerStack",
  },
  {
    link: "https://viral-loops.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a18724f52a378dcb0f0_viralloops.png",
    name: "Viral Loops",
  },
  {
    link: "https://smile.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a18155abeea62f4618a_smile.io.png",
    name: "Smile.io",
  },
  {
    link: "https://www.mention-me.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a18ce5b9d4090b963db_mention%20me.png",
    name: "Mention Me",
  },
];

export default function AffiliateMarketing() {
  return <MarketingLayout toolsList={toolsList} />;
}
