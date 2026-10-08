import {
  html,
  render,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

// import signPage component and getData service file
import { signPage } from "./Signs/Components/signPage.js";
import { getData } from "./Signs/Services/getData.js";

// data down flow with getData called and setSigns called
function App() {
  const [signs, setSigns] = useState([]);

  // track request and display loading message with useState
  const [status, setStatus] = useState("Loading");

  // .then is to load the images successfully
  // .catch is for if an error occurs; we need the user to see that message
  useEffect(() => {
    console.log("Images are rendering...");
    getData().then((data) => {
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

render(html` <${App} /> `, document.getElementById("app"));