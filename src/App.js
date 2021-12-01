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
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let myToken = window.localStorage.getItem("token");
    if (myToken) {
      setToken(myToken);
    }
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      //run axios call to get user data
      //use a resource to combine user (id, name, email), membership.label, and usermembership tables
    }
  }, [token]);
  // get user info

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken);
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
          <Route path="/editor" element={<Editor userData={userData} />} />
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
