import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://surveysparrow.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b463d7662c9583f4e0_surveysparrow.jpg",
    name: "Survey Sparrow",
  },
  {
    link: "http://paperform.co",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b4b45bb7272bda8218_paperform.jpg",
    name: "Paperform",
  },
  {
    link: "https://www.typeform.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b392d47e7eefcf9d41_typeform.png",
    name: "Typeform",
  },
  {
    link: "https://www.jotform.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b43465c625c7d4a96d_jotform-logo-orange-800x800.png",
    name: "Jotform",
  },
  {
    link: "https://www.surveymonkey.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b35515cc6960870061_surveymonkey.png",
    name: "Survey Monkey",
  },
  {
    link: "https://surveyplanet.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b3281858c4040125da_survey%20planet.jpg",
    name: "Survey Planet",
  },
  {
    link: "https://www.questionpro.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b3040fe5fe8bde5d11_question%20pro.png",
    name: "Question Pro",
  },
  {
    link: "https://www.getfeedback.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b30bcd7ecebce24255_getfeedback.jpg",
    name: "GetFeedback",
  },
  {
    link: "https://www.asknicely.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b25515ccdab1870060_asknicely.png",
    name: "AskNicely",
  },
  {
    link: "https://survicate.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b8e3b23cc3526319e00d83_survicate.jpg",
    name: "Survicate",
  },
];

export default function Survey() {
  return <MarketingLayout toolsList={toolsList} />;
}
