import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from "./ErrorPage";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import SocialMediaPage from "./pages/SocialMediaPage";
import AdsPage from "./pages/AdsPage";
import PhotographyPage from "./pages/PhotographyPage";
import WebdesignPage from "./pages/WebdesignPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} errorelement={<ErrorPage />} />
          <Route path='/about' element={<AboutPage />} errorelement={<ErrorPage />} />
          <Route path='/works/social-media' element={<SocialMediaPage />} errorelement={<ErrorPage />} />
          <Route path='/works/advertisement' element={<AdsPage />} errorelement={<ErrorPage />} />
          <Route path='/works/photography' element={<PhotographyPage />} errorelement={<ErrorPage />} />
          <Route path='/works/webdesign' element={<WebdesignPage />} errorelement={<ErrorPage />} />
          <Route path='/contact' element={<ContactPage />} errorelement={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
