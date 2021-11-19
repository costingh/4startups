import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://quickbooks.intuit.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6368401e136ef7bbeb1ad_quickbooks.png",
    name: "Quickbooks",
  },
  {
    link: "https://www.freshbooks.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63683b275e34a168407f2_freshbooks.png",
    name: "Freshbooks",
  },
  {
    link: "https://www.meliopayments.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b636832ab070016900a871_melio-3.png",
    name: "Melio",
  },
  {
    link: "https://www.financepal.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63684660ecf1bd67871e6_financepal.png",
    name: "Finance Pal",
  },
  {
    link: "https://app.invoiceninja.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b636835bf852017ad96f4d_invoice%20ninja.png",
    name: "Invoice Ninja",
  },
  {
    link: "https://www.taxjar.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6368301e136052cbeb198_Taxjar.PNG",
    name: "TaxJar",
  },
  {
    link: "https://www.moonclerk.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63683c5a66a27d2f10175_moonclerk.jpg",
    name: "Moonclerk",
  },
  {
    link: "https://www.quaderno.io/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b636832b1facefe583fe42_quaderno.jpg",
    name: "Quaderno",
  },
  {
    link: "https://synder.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682cf55ac41ce08febc_synder%20(2).png",
    name: "Synder",
  },
  {
    link: "https://harpoonapp.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6368123a41b20cc3ec000_harpoon%20(2).png",
    name: "Harpoon",
  },
  {
    link: "https://www.pleo.io/en",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b6368301e13639b4beb197_pleo.png",
    name: "Pleo",
  },
  {
    link: "https://www.bill.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63683ab5f440ba184d797_bill.com.png",
    name: "Bill",
  },
  {
    link: "https://kashoo.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682aebc0e5e7164712c_kashoo.png",
    name: "Kashoo",
  },
  {
    link: "https://bench.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63683e9e1ce4258912501_bench-accounting.png",
    name: "Bench",
  },
  {
    link: "https://www.waveapps.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682137444215efaf294_wave%20app.png",
    name: "Wave",
  },
  {
    link: "https://www.xero.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682c5a66ae0acf10169_Xero_software_logo.svg",
    name: "Xero",
  },
  {
    link: "https://www.invoicesimple.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682e9e1ce4f73912500_invoice-simple.png",
    name: "Invoice Simple",
  },
  {
    link: "https://www.lessaccounting.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682e8e7054f96156736_less%20accounting.png",
    name: "Less Accounting",
  },
  {
    link: "https://zipbooks.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682f45536d79c6814d4_zipbooks.png",
    name: "Zipbooks",
  },
  {
    link: "https://slimvoice.co/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b63682b275e3a3d48407f1_slimvoice.jpg",
    name: "Slimvoice",
  },
];

export default function Finances() {
  return <MarketingLayout toolsList={toolsList} />;
}
