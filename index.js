
const css = React.createElement()
const br = React.createElement("br", {});
const heading = React.createElement("h2", {className:"heading"}, "Topics covered");
const anchor1 = React.createElement(
  "a",
  { href: "#", className: "A1" },
  "Getting started with the web"
);
const anchor2 = React.createElement(
  "a",
  { href: "#", className: "A2" },
  "HTML-Structuring the web"
);
const anchor3 = React.createElement("a", { href: "#", className:"A3" }, "CSS-Styling the web");

const paragraph = React.createElement("p",{className:"para"},heading,
"The following is a list of the topics we cover in the MDN learning area",br,br,anchor1,br,br,'Provide a practical introduction to web developement for computer beginers.',br,br,anchor2,br,br,'HTML is the language we use structure the diffrence the diffrent parts of our content',br,br,anchor3,br,br,'CSS is the language that we use to control our web content style and layouts.'
);
const div = React.createElement("div", {}, [
  paragraph,
  br,
]);



ReactDOM.render(div, document.getElementById('root'));