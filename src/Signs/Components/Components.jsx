import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "@/Shared/Components/Main/Navigation.jsx";
import { SignPage } from "./signPage.jsx";
import { HistoryList } from "@/Misc/Features/History/Components/HistoryList.jsx";
import { getAllSigns } from "@/Signs/Models/signModel.jsx";

export default function Components() {
  const [signs, setSigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // load signs asynchronously through the Parse model, not directly in the component
  useEffect(() => {
    getAllSigns()
      .then(setSigns)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // the signs route shows loading/error states before the page renders
  const signsElement = loading ? (
    <p role="status">Loading signs...</p>
  ) : error ? (
    <p role="alert">Could not load signs: {error}</p>
  ) : (
    <SignPage signs={signs} />
  );

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={signsElement} />
        <Route path="/history" element={<HistoryList />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
}