import { useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route
            path="/about"
            element={<AboutPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/works/social-media"
            element={<SocialMediaPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/works/advertisement"
            element={<AdsPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/works/photography"
            element={<PhotographyPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/works/webdesign"
            element={<WebdesignPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
    </>
  );
}

export default App;
