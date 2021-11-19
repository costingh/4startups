import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="4Startups is a program developed to help entrepreneurs find the right ICT solutions to grow their businesses. We are offering a complex list of digital tools (marketing, content management, social media management, analytics, finances, human resources, workflow, communication and many more) four startups, for business owners and entrepeneurs."
          />
          <meta property="og:title" content="Tools for Startups" />
          <meta
            property="og:description"
            content="4Startups is a program developed to help entrepreneurs find the right ICT solutions to grow their businesses. We are offering a complex list of digital tools (marketing, content management, social media management, analytics, finances, human resources, workflow, communication and many more) four startups, for business owners and entrepeneurs."
          />
          <meta property="og:url" content="https://4startups.vercel.app/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
