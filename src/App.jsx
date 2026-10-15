import {
  html,
  render,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

// initialize Parse first so the connection is configured
// before any model runs a query
import "./Shared/parseConfig.js";

// import signPage component and the Parse model for signs
import { signPage } from "../Signs/Components/signPage.js";
import { getAllSigns } from "../Signs/Models/signModel.js";

// data down flow with getAllSigns called and setSigns called
function App() {
  const [signs, setSigns] = useState([]);

  // track request and display loading message with useState
  const [status, setStatus] = useState("Loading");

  // .then is to load the images successfully
  // .catch is for if an error occurs; we need the user to see that message
  useEffect(() => {
    console.log("Images are rendering...");
    getAllSigns().then((data) => {
      setSigns(data);
      setStatus("Success");
    })
    .catch((error) => {
      console.error("Signs failed to load", error);
      setStatus("Error");
    })
  }, []);

  // render signs into html format noted here and in signPage
  return html`
  <div>
    ${status === "Loading" && html`
        <p role="status">Loading signs...</p>
    `}
    ${status === "Error" && html`
        <p role="status">Failed to load images</p>
    `}
    <${signPage} title="ASL Signs from A to Z" signs=${signs} />
  </div>
`;
}

export default App;