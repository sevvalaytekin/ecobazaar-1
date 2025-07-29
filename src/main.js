import page from "page";
import homepage from "./pages/homepage/home";
import "./style.css";

page("/", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(homepage());
});

page();
