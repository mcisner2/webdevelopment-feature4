import {
    html,
    useEffect,
    useState
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  
  // import two functions to convert letter to letter in ASCII and
  // convert rgba bytes into a pixelated image
  import { labelToLetter } from "../Services/getData.js";
  import { signImage } from "./signImage.js";
  
  // construct page here with title and signs
  export function signPage({ title, signs = [] }) {
    useEffect(() => {
      document.title = title;
    }, [title]);


  // searchLetter: text the user types to filter signs by letter
  // sortOrder: "ascending" (A-Z) or "descending" (Z-A)
  // showCaptions: whether letter captions are shown under each image
  const [searchLetter, setSearchLetter] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [showCaptions, setShowCaptions] = useState(true);
 
  // Filter the signs array down to only the ones matching the typed earch text 
  // This is case-insensitive, since .toLowerCase() is used
  const filteredSigns = signs.filter((sign) => {
    const letter = labelToLetter(sign.label);
    return letter.toLowerCase().startsWith(searchLetter.toLowerCase());
  });
 
  // Sort the filtered signs alphabetically, ascending or descending depending on the dropdown selection.
  const sortedSigns = filteredSigns.slice().sort((a, b) => {
    const letterA = labelToLetter(a.label);
    const letterB = labelToLetter(b.label);
    return sortOrder === "ascending"
      ? letterA.localeCompare(letterB)
      : letterB.localeCompare(letterA);
  });
  
    // Used mapping function in JS to print out all names
    // from data.json payload; wrapped it in div element to
    // format in html and have it display
    return html`
      <header>
        <h1>${title}</h1>
        <p>Note: ASL signs including motion are not included in this set</p>
        
          <form
            style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 16px;"
            onSubmit=${(e) => e.preventDefault()}>

            <label>
              Search letter:
              <input
                type="text"
                placeholder="e.g. A"
                maxlength="1"
                value=${searchLetter}
                onInput=${(e) => setSearchLetter(e.target.value)}
              />
            </label>

            <label>
              Sort order:
              <select
                value=${sortOrder}
                onChange=${(e) => setSortOrder(e.target.value)}>
                <option value="ascending">A - Z</option>
                <option value="descending">Z - A</option>
              </select>
            </label>

            <label>
              <input
                type="checkbox"
                checked=${showCaptions}
                onChange=${(e) => setShowCaptions(e.target.checked)}
              />
              Show letter captions
            </label>
          </form>


        <div style="display: flex; flex-wrap: wrap; gap: 16px;">
          ${sortedSigns.map(
            (sign) =>
              html`<${signImage} key=${sign.label} pixels=${sign.pixels} letter=${labelToLetter(sign.label)} showCaption=${showCaptions} />`
          )}
        </div>
      </header>
    `;
  }