import MarketingLayout from "../../components/MarketingLayout";

const content = {
  name: "Online Presence",
  heading: "Why A Strong Digital Presence Matters for a Brand",
  muted:
    "A digital presence gives your brand an ideal platform to communicate with consumers.",
  description:
    "A thriving business feeds on generating engagement. During this time of uncertainty, it is absolutely crucial for businesses to connect with consumers and stay relevant. In the last decade or so in particular, many consumers have become accustomed to finding what they want online.",
};

function OnlinePresence() {
  return <MarketingLayout content={content} />;
}

export default OnlinePresence;
