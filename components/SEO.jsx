import React from "react";
import { NextSeo } from "next-seo";

function SEO({ title }) {
  return (
    <NextSeo
      title={title ? title : "Startups"}
      description="4Startups is a program developed to help entrepreneurs find the right ICT solutions to grow their businesses. We are offering a complex list of digital tools (marketing, content management, social media management, analytics, finances, human resources, workflow, communication and many more) four startups, for business owners and entrepeneurs."
      canonical="https://4startups.vercel.app/"
      openGraph={{
        url: "https://4startups.vercel.app/",
        title: "Tools for Startups",
        description:
          "4Startups is a program developed to help entrepreneurs find the right ICT solutions to grow their businesses. We are offering a complex list of digital tools (marketing, content management, social media management, analytics, finances, human resources, workflow, communication and many more) four startups, for business owners and entrepeneurs.",
        keywords:
          "digital tools, sfotware for startups, startups, marketing, human resources, ICT solutions, communication, seo, web presence, finances, workflow, social media management, analytics",
        images: [
          {
            url: "/favicon.png",
            width: 32,
            height: 32,
            alt: "favicon",
            type: "image/png",
          },
        ],
        site_name: "4 Startups",
      }}
      twitter={{
        site: "@4startups_app",
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
          content:
            "4Startups is a program developed to help entrepreneurs find the right ICT solutions to grow their businesses. We are offering a complex list of digital tools (marketing, content management, social media management, analytics, finances, human resources, workflow, communication and many more) four startups, for business owners and entrepeneurs.",
        },
      ]}
    />
  );
}

export default SEO;
