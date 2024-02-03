import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Catalog, Filter, Home, NotFound } from "./pages";

import { Footer, Header } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
