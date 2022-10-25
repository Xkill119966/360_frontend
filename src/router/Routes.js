import React from "react";
import Home from "../pages/home";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import FormPage from "../pages/FormPage";
import Landing from "../pages/Landing"
function Router(params) {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/landing" element={<Landing />} />

      </Routes>
    </Layout>
  );
}

export default Router;
