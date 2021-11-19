import MarketingLayout from "../../components/MarketingLayout";

const content = {
  name: "Workflow",
  heading:
    "Workflows can help streamline and automate repeatable business tasks",
  muted:
    "Workflows can minimize room for errors and increase overall efficiency.",
  description:
    "This, in turn, dramatically improves your business. Managers can make quicker, smarter decisions and employees are empowered to collaborate in a more productive and agile way.",
};

function Workflow() {
  return <MarketingLayout content={content} />;
}

export default Workflow;
