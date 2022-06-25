import ReactDOM from "react-dom/client";
import App from "./App";
import GlobatStlye from "./GlobalStlye";
import ThemeContext from "./Helpers/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext>
    <GlobatStlye />
    <App />
  </ThemeContext>
);
