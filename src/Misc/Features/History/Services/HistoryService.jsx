// HistoryService.jsx
// Service layer for the History feature: loads the history events
// from the local history.json file and returns them as a Promise,
// so components can load them asynchronously.
import historyData from "../history.json";

export async function getHistoryData() {
  return Array.isArray(historyData) ? historyData : historyData.events ?? [];
}