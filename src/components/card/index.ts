import CardRoot from "./card.astro";
import Title from "./title.astro";
import Subtitle from "./subtitle.astro";
import Text from "./text.astro";
import Header from "./header.astro";
import Body from "./body.astro";
import Footer from "./footer.astro";
import Image from "./img/";

// Create the compound component
export default Object.assign(CardRoot, {
  Title,
  Subtitle,
  Text,
  Header,
  Body,
  Footer,
  Image
});
