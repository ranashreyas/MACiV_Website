// src/App.js
import { Routes, Route, Link } from "react-router-dom";

import Home   from "./pages/Home";
import Page1  from "./pages/Page1";
import Page2  from "./pages/Page2";

// Optional “catch-all” component
function NotFound() {
  return <h2>404 – Page not found</h2>;
}

export default function App() {
  return (
    <>
      {/* Simple nav — remove or style as you like */}
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/page-1">Page 1</Link> |{" "}
        <Link to="/page-2">Page 2</Link>
      </nav>

      {/* Route table */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        {/* Fallback for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
