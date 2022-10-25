import React from "react";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/navbar";
import FormPage from "./components/FormPage";

import Footer from "./components/footer";
import LandingPage from "./components/Landing";
function App() {
  return (
    <div>
      <Navbar />
      <FormPage />
      <Footer />
    </div>
=======
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
>>>>>>> e488ce16e11227059fce4ab16e412506da1f28a5
  );
}

export default App;
