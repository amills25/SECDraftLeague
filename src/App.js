import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Home from "../src/Pages/Home";
import Lineup from "../src/Pages/Lineup";
import Standings from "./Pages/Standings";
import Schedule from "./Pages/Schedule";
import History from "../src/Pages/History";
import Rules from "../src/Pages/Rules";
import NewUser from "../src/Pages/NewUser";
import Login from "../src/Pages/Login";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/history" element={<History />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
