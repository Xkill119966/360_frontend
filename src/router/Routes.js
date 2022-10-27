import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import EnquiryPage from "../pages/EnquiryPage";
import FormPage from "../pages/FormPage";
import LandingPage from "../pages/LandingPage";
import ThanksPage from "../pages/ThanksPage";
function Router(params) {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
