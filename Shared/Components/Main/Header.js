import {
  html,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { labelToLetter } from "./Components/Services/getData.js";
import { signImage } from "./Components/Main/signImage.js";

export function Header({ title, signs = [] }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Used mapping function in JS to print out all names
  // from data.json payload; wrapped it in h2 element and div to
  // format in html and have it display
  return html`
    <header>
      <h1>${title}</h1>
      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        ${signs.map(
          (sign) =>
            html`<${signImage} key=${sign.label} pixels=${sign.pixels} letter=${labelToLetter(sign.label)} />`
        )}
      </div>
    </header>
  `;
}
