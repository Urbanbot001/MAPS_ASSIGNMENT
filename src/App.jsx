// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuoteDetails from "./assets/QuoteDetails";
import QuotesPage from "./assets/QuotesPage";
import TermsPage from "./assets/TermsPage";
import Review from "./assets/Review";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<QuoteDetails />} /> {/* Main layout */}
          <Route path="/quotes" element={<QuotesPage />} /> {/* Quotes Page */}
          <Route path="/termspage" element={<TermsPage />} /> {/* Terms Page */}
          <Route path="/review" element={<Review />} /> {/* Review */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
