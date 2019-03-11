import theme from "mdx-deck/themes";
import WizelineProvider from "./WizelineProvider";

export default {
  ...theme,
  font: "Montserrat, Roboto, sans-serif",
  colors: {
    ...theme.colors, // include existing theme colors
    text: "#1C2324",
    background: "transparent",
    link: "#1C2324",
    code: "#25A4B2"
  },
  heading: {
    ...theme.heading,
    "font-family": "Proxima Nova, sans-serif"
  },
  p: {
    ...theme.p,
    "font-size": "1em"
  },
  ul: {
    ...theme.ul,
    "font-size": "1em"
  },
  li: {
    ...theme.li,
    "font-size": "1em"
  },
  Provider: WizelineProvider,
};
