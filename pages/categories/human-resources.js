import MarketingLayout from "../../components/MarketingLayout";

const content = {
  name: "Human Resources",
  heading: "Why HR is important to an Organization?",
  muted:
    "Human resources is important to organizations in myriad areas, ranging from strategic planning to company image.",
  description:
    "The areas in which HR maintains control can enhance an employees’ experience throughout the workforce while strengthening business operations.",
};

function HumanResources() {
  return <MarketingLayout content={content} />;
}

export default HumanResources;
