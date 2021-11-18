import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://adzooma.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e5c6bc7868df2707f1d_Adzooma.PNG",
    name: "Adzooma",
  },
];

export default function Fonts() {
  return <MarketingLayout toolsList={toolsList} />;
}
