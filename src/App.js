import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
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
      //use a resource to combine user (id, name, email), membership.label, and usermembership tables to setUserData
      console.log("hello");
      axios({
        method: "get",
        url: "https://Laravel-awmills25552543.codeanyapp.com/api/v1/user",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
      }).then(function (response) {
        console.log(response);
        setUserData(response.data[0]);
      });
    }
  }, [token]);

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const removeUser = () => {
    setUserData({});
  };

  return (
    <>
      <MyNavbar
        removeToken={removeToken}
        removeUser={removeUser}
        token={token}
        userData={userData}
      />
      <main>
        <Routes>
          <Route
            path="/lineup/:id"
            element={
              <Lineup token={token} saveToken={saveToken} userData={userData} />
            }
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
            element={
              <Login token={token} saveToken={saveToken} userData={userData} />
            }
          />
          <Route path="/editor" element={<Editor userData={userData} />} />
          <Route
            path="/*"
            element={
              <Home token={token} saveToken={saveToken} userData={userData} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
