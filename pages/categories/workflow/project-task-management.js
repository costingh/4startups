import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.wrike.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03e4d8197f6ee8c7a7_wrike-logo.png",
    name: "Wrike",
  },
  {
    link: "https://www.teamwork.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a032b1fac423083a330_Teamwork.png",
    name: "Teamwork",
  },
  {
    link: "https://clickup.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03ce5b9d06d1b962bb_ClickUp%20(1).png",
    name: "Clickup",
  },
  {
    link: "https://monday.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c46270db5df6ee17de5e20_monday.png",
    name: "Monday.com",
  },
  {
    link: "https://www.notion.so/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03b275e3152483c1b1_notion.png",
    name: "Notion",
  },
  {
    link: "https://agile.taiga.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a0323a41b3fe53e8451_taiga-logo.jpg",
    name: "Taiga",
  },
  {
    link: "https://niftypm.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03c3aab2643a87f531_nifty.png",
    name: "NiftyPM",
  },
  {
    link: "https://asana.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03155abe6168f46156_asana.png",
    name: "Asana",
  },
  {
    link: "https://www.any.do/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03c3aab2a48b87f530_Anydo-logo.png",
    name: "Any.do",
  },
  {
    link: "https://airfocus.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a0348ff4c847e8d60f0_Airfocus.PNG",
    name: "Airfocus",
  },
  {
    link: "https://trello.com/en",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03999dc10148cfaf17_trello.png",
    name: "Trello",
  },
  {
    link: "https://www.ntaskmanager.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a02999dc1605fcfaf16_ntask.png",
    name: "nTask",
  },
  {
    link: "http://teamgantt.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a03bfe59f46b3017ca0_teamgantt.png",
    name: "Teamgantt",
  },
  {
    link: "https://basecamp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a029f15d50ca552f5e4_Basecamp-Logo1.png",
    name: "BaseCamp",
  },
  {
    link: "https://www.paymoapp.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60dc6fbafddd9c76817afdf4_Paymo%20Icon%20White.png",
    name: "Paymo",
  },
  {
    link: "https://www.nutcache.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a0213744477befa97af_nutcache.png",
    name: "Nutcache",
  },
  {
    link: "https://airtable.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a02c753e24fe2878ad7_airtable.png",
    name: "AirTable",
  },
  {
    link: "https://hive.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a02d06b3b7ba29cbeab_hive.png",
    name: "Hive",
  },
  {
    link: "https://www.favro.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a0243f858444356f6e5_favro.png",
    name: "Favro",
  },
  {
    link: "https://coschedule.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a019e7e86d36003e04c_coschedule.png",
    name: "CoSchedule",
  },
  {
    link: "https://zenkit.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a028700bc4f9b60d7e0_Zenkit_Logo_Icon_square.png",
    name: "Zenkit",
  },
  {
    link: "https://www.functionfox.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a049e7e86e29b03e04f_functionfox.png",
    name: "Function Fox",
  },
  {
    link: "https://todoist.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a0143f858014256f6e4_todoist.png",
    name: "Todoist",
  },
  {
    link: "https://ora.pm",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a01a065ab0ccccfb049_orapm.jpg",
    name: "Ora.pm",
  },
  {
    link: "https://www.proworkflow.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a01c753e2a85b878ad6_proworkflow-logo-1.jpg",
    name: "ProWorkFlow",
  },
  {
    link: "https://www.meistertask.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a010d8c975bc2a9a77a_meister%20task.png",
    name: "Meister Task",
  },
  {
    link: "https://www.dragapp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a01d06b3b6d149cbeaa_drag%20app.png",
    name: "Drag",
  },
  {
    link: "https://app.timehero.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a011374442b24fa97ae_timehero.png",
    name: "Time Hero",
  },
  {
    link: "https://freedcamp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a01e8e7057f09153147_freedcamp.png",
    name: "Freedcamp",
  },
  {
    link: "https://productive.io",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a001374448eacfa97ab_productive-1573566547-logo.png",
    name: "Productive",
  },
  {
    link: "https://startinfinity.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a01155abe83d0f46155_infinity.jpg",
    name: "Infinity",
  },
  {
    link: "https://www.samepage.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a01af338cfb456b49fc_samepage.png",
    name: "Samepage",
  },
  {
    link: "https://try.focuster.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a00137444c542fa97ad_focuster.jpg",
    name: "Focuster",
  },
  {
    link: "https://www.scoro.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a019e7e86343f03e04b_scoro.pn",
    name: "Scoro",
  },
  {
    link: "https://www.proofhub.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a00d0b4d45f6c737e77_proofhub.png",
    name: "Proofhub",
  },
  {
    link: "https://www.ayoa.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a00137444ffe4fa97ac_ayoa.png",
    name: "Ayoa",
  },
  {
    link: "https://www.easyproject.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a00bfe59fad75017c9f_easy%20project.png",
    name: "Easy Project",
  },
  {
    link: "https://ganttpro.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b629ffce5b9da2b3b962ba_ganttpro_logo.png",
    name: "Ganttpro",
  },
  {
    link: "https://miro.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a0027097167294df989_miro.png",
    name: "Miro",
  },
  {
    link: "https://activecollab.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b62a008ba3e1043878c15a_activecollab.png",
    name: "ActiveCollab",
  },
];

export default function TaskManagement() {
  return <MarketingLayout toolsList={toolsList} />;
}
