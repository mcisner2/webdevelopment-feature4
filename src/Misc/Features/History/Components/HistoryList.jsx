// HistoryList.jsx
// Parent component for the History feature.
// Responsible for: fetching data via HistoryService, tracking
// loading/error/data state, and rendering one HistoryEvent child
// per item.

import { useEffect, useState } from "react";
import { getHistoryData } from "../Services/HistoryService.jsx";
import { HistoryEvent } from "./HistoryEvent.jsx";

export function HistoryList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Runs once when the component mounts. Fetch the history data
    // and update state depending on the outcome.
    getHistoryData()
      .then(setEvents)
      .catch(() => {
        // bad path, malformed JSON, etc. - show an error instead of a blank screen
        setError("Unable to load ASL history right now. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p role="status">Loading history...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
      <h2>History of ASL</h2>
      {events.map((event) => (
        <HistoryEvent key={event.id} event={event} />
      ))}
    </section>
  );
}