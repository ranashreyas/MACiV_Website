// src/App.js
import { Routes, Route, Link } from "react-router-dom";

import Home   from "./pages/Home";
import ForPatients from "./pages/ForPatients";
import ResearchSites from "./pages/ResearchSites";

// Optional "catch-all" component
function NotFound() {
  return <h2>404 – Page not found</h2>;
}

export default function App() {
  return (
    <>
      {/* Professional Navigation Bar */}
      <nav style={{ 
        backgroundColor: '#4d6399',
        padding: '15px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '10px 20px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/for-patients" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '10px 20px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            For Patients & Families
          </Link>
          
          <Link 
            to="/research-sites" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              padding: '10px 20px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Research Sites
          </Link>
        </div>
      </nav>

      {/* Route table */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-patients" element={<ForPatients />} />
        <Route path="/research-sites" element={<ResearchSites />} />
        {/* Fallback for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
