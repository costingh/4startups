import React from "react";
import { NextSeo } from "next-seo";

function SEO() {
  return (
    <NextSeo
      title=""
      description=""
      canonical=""
      openGraph={{
        url: "",
        title: "",
        description: "",
        keywords: "",
        images: [
          {
            url: "",
            width: 1280,
            height: 1280,
            alt: "",
            type: "image/png",
          },
          {
            url: "https://nft-finder.vercel.app/favicon.png",
            width: 32,
            height: 32,
            alt: "NFT Finder Favicon",
            type: "image/png",
          },
          {
            url: "https://nft-finder.vercel.app/vercel.svg",
            width: 32,
            height: 32,
            alt: "Vercel Logo",
            type: "image/svg",
          },
        ],
        site_name: "NFT Finder",
      }}
      twitter={{
        site: "@costin_official",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "dc:creator",
          name: "dc:creator",
          content: "Costin Gheorghe",
        },
        {
          property: "application-name",
          httpEquiv: "application-name",
          content: "NFT Finder",
        },
      ]}
    />
  );
}

export default SEO;
