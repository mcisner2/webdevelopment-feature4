import { useEffect, useState } from "react";
import { signPage as Signs } from "./signPage.jsx";
import { getAllSigns } from "@/Signs/Models/signModel.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getAllSigns().then(setSigns);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signs signs={signs} />} />
      </Routes>
    </Router>
  );
}