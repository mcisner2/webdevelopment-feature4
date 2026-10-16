// HistoryEvent.jsx
// Child component: renders a single history event.
// Receives all of its data as props from HistoryList (the parent)
// and has no state or fetching logic of its own - it just displays
// what it's given.

export function HistoryEvent({ event }) {
  const { year, title, description, category } = event;

  return (
    <article data-category={category} style={{ marginBottom: "16px" }}>
      <strong>{year}</strong> - <strong>{title}</strong>
      <p>{description}</p>
    </article>
  );
}