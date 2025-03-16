import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Resources from "./components/Resources";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/html" />} />
          <Route path="html" element={<Resources category="html" />} />
          <Route path="css" element={<Resources category="css" />} />
          <Route path="javascript" element={<Resources category="javascript" />} />
          <Route path="react" element={<Resources category="react" />} />
          <Route path="sanity" element={<Resources category="sanity" />} />
          {/* Fallback for ukjente ruter */}
          <Route path="*" element={<h2>Page not found</h2>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
