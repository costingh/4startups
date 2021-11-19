import MarketingLayout from "../../components/MarketingLayout";

const content = {
  name: "Finances",
  heading: "The importance of financing your business",
  muted:
    "Whether you are starting a new business, expanding an existing business or developing new products, finance will be at the core of every business function.",
  description:
    "Finance is the elixir that assists in the formation of new businesses, and allows businesses to take advantage of opportunities to grow, employ local workers and in turn support other businesses and local, state and federal government through the remittance of income taxes.",
};

function Finances() {
  return <MarketingLayout content={content} />;
}

export default Finances;
