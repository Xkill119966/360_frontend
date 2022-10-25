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
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
