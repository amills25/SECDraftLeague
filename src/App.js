import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Footer from "./Components/Footer";
import Home from "../src/Pages/Home";
import Editor from "../src/Pages/Editor";
import Lineup from "../src/Pages/Lineup";
import Standings from "./Pages/Standings";
import Schedule from "./Pages/Schedule";
import History from "../src/Pages/History";
import Rules from "../src/Pages/Rules";
import NewUser from "../src/Pages/NewUser";
import Login from "../src/Pages/Login";

function App() {
  const user = { membership: "Commissioner" }; //use api to determine membership status later on
  return (
    <>
      <MyNavbar />
      <main>
        <Routes>
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<History />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor user={user} />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
