import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.setmore.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c515595b7963593446_Setmore.png",
    name: "Setmore",
  },
  {
    link: "https://www.supersaas.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c549c3ceeece1b6ce2_supersaas.png",
    name: "SuperSaas",
  },
  {
    link: "https://www.appointlet.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c549c3ce15e11b6ce1_appointlet.png",
    name: "Appointlet",
  },
  {
    link: "https://calendly.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c557e59b3ced42a6b5_calendly.jpeg",
    name: "Calendly",
  },
  {
    link: "https://simplybook.me/en/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c4323aac709594678c_SimplyBook.jpg",
    name: "SimplyBook",
  },
  {
    link: "https://www.bizzabo.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c2162e50609e4b39099d05_x_ai_logo_aRcATfzeB.png",
    name: "X.ai",
  },
  {
    link: "https://acuityscheduling.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c4b5434b7cd8803af3_acuity-scheduling.png",
    name: "Acuity Scheduling",
  },
  {
    link: "https://www.bookafy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c217a4a8a1da0f2d6ae4d3_Bookafy%20(2).png",
    name: "Bookafy",
  },
  {
    link: "https://10to8.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c515595b83dd593445_10to8.png",
    name: "10to8",
  },
  {
    link: "https://www.appointy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c4978e07aef501dc71_appointy.png",
    name: "Appointy",
  },
  {
    link: "https://www.genbook.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b396c40df5e9b43d266eae_genbook.jpg",
    name: "Genbook",
  },
  {
    link: "https://www.oncehub.com/scheduleonce",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c216eceda71d869003284f_Schedule%20once.png",
    name: "Schedule Once",
  },
  {
    link: "https://doodle.com/en/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c216a2a282d866753ac721_Doodle%20(2).png",
    name: "Doodle",
  },
];

export default function AppointmentScheduling() {
  return <MarketingLayout toolsList={toolsList} />;
}
