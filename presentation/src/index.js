import welcome from "~/slides/welcome.mdx";
import content from "~/slides/content.mdx";
import thanks from "~/slides/thanks.mdx";

export { default as theme } from "./wizeline-theme";
export default [...welcome, ...content, ...thanks];
