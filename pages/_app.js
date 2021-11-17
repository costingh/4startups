import "../styles/globals.css";
import { useRouter } from "next/router";
import React from "react";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return <>{pageLoading ? <LoadingScreen /> : <Component {...pageProps} />}</>;
}

export default MyApp;
