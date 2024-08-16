import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const EXAMPLES = {
  php: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  asp: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
};
export default CORE_CONCEPTS;
