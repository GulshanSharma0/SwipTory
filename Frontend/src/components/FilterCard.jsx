import Card from "./Card";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const FilterCard = () => {
  return (
    <ScrollingCarousel className="scroll_carousel">
      <Card title="all" />
      <Card title="food" />
      <Card title="travel" />
      <Card title="health and fitness" />
      <Card title="movie" />
      <Card title="education" />
    </ScrollingCarousel>
  );
};

export default FilterCard;
