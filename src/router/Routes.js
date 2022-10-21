import React from "react";
import Home from "../pages/home";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";

function Router(params) {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default Router;
