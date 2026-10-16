// Navigation.jsx

import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav aria-label="Main" style={{ display: "flex", gap: "16px" }}>
      <NavLink to="/">Signs</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}