import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import MyNavbar from "./Components/MyNavbar";
import Footer from "./Components/Footer";
import Home from "../src/Pages/Home";
import Lineup from "../src/Pages/Lineup";
import Standings from "./Pages/Standings";
import Schedule from "./Pages/Schedule";
import History from "../src/Pages/History";
import Rules from "../src/Pages/Rules";
import Login from "../src/Pages/Login";
import { DataProvider } from "./Utilities/DataContext";

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
      })
        .then(function (response) {
          setUserData(response.data[0]);
        })
        .catch(function (error) {
          removeToken();
          removeUser();
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

  let [standings, setStandings] = useState([]);
  standings = [
    { name: "Mike Mills", points: 0 },
    { name: "Andrew Mills", points: 0 },
    { name: "Joel Storrow", points: 0 },
    { name: "Dylan Prezkop", points: 0 },
    { name: "Clark Spencer", points: 0 },
    { name: "Team Zimmer", points: 0 },
  ];

  const arrangeStandings = () => {
    setStandings(standings.sort((a, b) => (a.color > b.color ? 1 : -1)));
  };

  return (
    <DataProvider token={token} userData={userData}>
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
                <Lineup
                  token={token}
                  saveToken={saveToken}
                  userData={userData}
                />
              }
            />
            <Route
              path="/standings"
              element={<Standings arrangeStandings={arrangeStandings} />}
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/history" element={<History />} />
            <Route path="/rules" element={<Rules />} />
            <Route
              path="/login"
              element={
                <Login
                  token={token}
                  saveToken={saveToken}
                  userData={userData}
                />
              }
            />
            <Route
              path="/*"
              element={
                <Home
                  token={token}
                  saveToken={saveToken}
                  userData={userData}
                  // arrangeStandings={arrangeStandings}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </>
    </DataProvider>
  );
}

export default App;
