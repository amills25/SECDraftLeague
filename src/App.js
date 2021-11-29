import * as React from "react";
import { Routes, Switch, Route, Link } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Footer from "../src/Components/Footer";
import Home from "../src/Pages/Home";
import Lineup from "../src/Pages/Lineup";
import Standings from "./Pages/Standings";
import History from "../src/Pages/History";
import Rules from "../src/Pages/Rules";
import Login from "../src/Pages/Login";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/history" element={<History />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
