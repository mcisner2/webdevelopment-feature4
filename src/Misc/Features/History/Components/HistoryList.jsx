// HistoryList.js
// Parent component for the History feature.
// Responsible for: fetching data via HistoryService, tracking
// loading/error/data state, and rendering one HistoryEvent child
// per item. Does NOT know how an individual event is displayed -
// that's the child's job.

import {
  html,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getHistoryData } from "../Services/HistoryService.js";
import { historyEvent } from "./HistoryEvent.jsx";

export function historyList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Runs once when the component mounts. Fetch the history data
    // and update state depending on the outcome.
    getHistoryData()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => {
        // Something went wrong (bad path, malformed JSON, etc.) -
        // show an error state instead of leaving the user with a
        // blank screen.
        setError("Unable to load ASL history right now. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return html`<p role="status">Loading history...</p>`;
  }

  if (error) {
    return html`<p role="status">${error}</p>`;
  }

  return html`
    <section>
      <h2>History of ASL</h2>
      ${events.map(
        (event) => html`<${historyEvent} key=${event.id} event=${event} />`
      )}
    </section>
  `;
}