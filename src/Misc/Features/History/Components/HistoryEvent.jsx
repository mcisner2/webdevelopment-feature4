// HistoryEvent.js
// Child component: renders a single history event.
// Receives all of its data as props from HistoryList (the parent)
// and has no state or fetching logic of its own - it just displays
// what it's given.

import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function historyEvent({ event }) {
  const { year, title, description, category } = event;

  return html`
    <article data-category=${category} style="margin-bottom: 16px;">
      <strong>${year}</strong> - <strong>${title}</strong>
      <p>${description}</p>
    </article>
  `;
}