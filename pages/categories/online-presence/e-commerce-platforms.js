import MarketingLayout from "../../../components/MarketingLayout";

const toolsList = [
  {
    link: "https://www.shopify.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e58fcaf544d362e6ad0_shopify-review-logo-new.png",
    name: "Shopify",
  },
  {
    link: "https://www.bigcommerce.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e58a9c6e5f48eda5a8b_bigcommerce.jpg",
    name: "Big Commerce",
  },
  {
    link: "https://www.ecwid.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78eaa44a185e42bdb385e_ecwid%20(2).png",
    name: "Ecwid",
  },
  {
    link: "https://squareup.com",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e579e425d81d24f91c9_square.png",
    name: "Square",
  },
  {
    link: "https://magento.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e58e5a1b57646e8f350_magento-logo.png",
    name: "Magento",
  },
  {
    link: "https://woocommerce.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e587cfb3eea59f2b12f_woocommerce.png",
    name: "Woo Commerce",
  },
  {
    link: "https://www.volusion.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e57d5f5a54e5ba23a54_volusion.png",
    name: "Volusion",
  },
  {
    link: "https://sellfy.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e57aeacc93121a7e1cf_sellfy.png",
    name: "Sellfy",
  },
  {
    link: "https://www.shift4shop.com/index2.html",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e57e81e9e76bccf6863_3dcart-title.png",
    name: "3d Cart",
  },
  {
    link: "https://www.bigcartel.com/",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60b78e579c662e583d102948_big%20cartel.png",
    name: "Big Carte",
  },
  {
    link: "https://www.prestashop.com/en",
    image:
      "https://uploads-ssl.webflow.com/60a2624c279a8e8fe3bdcaad/60c357ca725e11e446e8be8f_494740.jpg",
    name: "PrestaShop",
  },
];

export default function EcommercePlatforms() {
  return <MarketingLayout toolsList={toolsList} />;
}
