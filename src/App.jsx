import {
  html,
  render,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

// initialize Parse first so the connection is configured
// before any model runs a query
import "@/Shared/parseConfig.jsx";

// import signPage component and the Parse model for signs
import { signPage } from "./Signs/Components/signPage.jsx";
import { getAllSigns } from "./Signs/Models/signModel.jsx";
import Components from "./Signs/Components/Components.jsx";

export default function App() {
  return < Components/>;
}