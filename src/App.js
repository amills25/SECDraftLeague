import React, { useState, useEffect } from "react";
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
  const [token, setToken] = useState("");

  useEffect(() => {
    let myToken = window.localStorage.getItem("token");
    if (myToken) {
      setToken(myToken);
    }
  });

  const saveToken = (userToken) => {
    localStorage.setItem("token");
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <>
      <MyNavbar removeToken={removeToken} token={token} />
      <main>
        <Routes>
          <Route
            path="/lineup"
            element={<Lineup token={token} saveToken={saveToken} />}
          />
          <Route path="/standings" element={<Standings />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<History />} />
          <Route path="/rules" element={<Rules />} />
          <Route
            path="/newuser"
            element={<NewUser token={token} saveToken={saveToken} />}
          />
          <Route
            path="/login"
            element={<Login token={token} saveToken={saveToken} />}
          />
          <Route path="/editor" element={<Editor user={user} />} />
          <Route
            path="/*"
            element={<Home token={token} saveToken={saveToken} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
