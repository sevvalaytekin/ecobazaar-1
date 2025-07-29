import Example from "./../../components/ExampleComponent/Example.js";
import "./home.css";

const homepage = () => {
  const container = document.createElement("div");
  container.classList.add("homeRoot"); 

  container.appendChild(Example());

  return container;
};

export default homepage;
