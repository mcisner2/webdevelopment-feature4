// App.jsx
// Root component. Initializes Parse first so the connection is
// configured before any model runs a query, then renders the
// router/components tree.

import "@/Shared/parseConfig.jsx";

import Components from "./Signs/Components/Components.jsx";

export default function App() {
  return <Components />;
}