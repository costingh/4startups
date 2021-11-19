import MarketingLayout from "../../components/MarketingLayout";

const content = {
  name: "Communication",
  heading: "Business Communication is Critical to Your Company's Success",
  muted:
    "Business communication involves constant flow of information within and outside a company. ",
  description:
    "Effective business communication is essential for success and growth of every organization. Unlike everyday communications, business communication is always goal oriented. For an enterprise company to operate successfully, all the rules, core company values, regulations and policies of the company have to be communicated to people within and outside the organization. ",
};

function Communication() {
  return <MarketingLayout content={content} />;
}

export default Communication;
