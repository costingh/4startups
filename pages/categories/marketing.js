import MarketingLayout from "../../components/MarketingLayout";

const content = {
  name: "Marketing",
  heading: "Digital Marketing Tools You Need When Starting a Business",
  muted:
    "Did you know there are more than 30 million small businesses in the United States alone?",
  description:
    "With a number like this, small business owners need a competitive edge. If you are building a business, chances are you’re looking for ways to get your leg up on the competition. To accomplish this, you’ll need a good marketing strategy and access to the best digital marketing tools.",
};

function marketing() {
  return <MarketingLayout content={content} />;
}

export default marketing;
