import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext({});

// helper function that exports just the needed / wanted data for the provider
export const DataHelper = () => {
  //generateRows exists here

  const [data, setData] = useState([
    { name: "Mike Mills", points: 0 },
    { name: "Andrew Mills", points: 0 },
    { name: "Joel Storrow", points: 0 },
    { name: "Dylan Prezkop", points: 0 },
    { name: "Clark Spencer", points: 0 },
    { name: "Team Zimmer", points: 0 },
  ]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://Laravel-awmills25552543.codeanyapp.com/api/v1/allUsers",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        //   Authorization: `Bearer ${token}`,
      },
    }).then(function (response) {
      console.log(response);
    });
  }, []);

  const arrangeData = () => {
    setData(data.sort((a, b) => (a.points > b.points ? 1 : -1)));
  };

  const savePointData = (newData) => {};

  // on mount, get final result from database
  useEffect(() => {
    // getFinalPlaylistNextResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    arrangeData,
  };
};

// custom Provider component
// export const UserProvider = UserContext.Provider
export const DataProvider = (props) => {
  const initialContext = DataHelper();

  return (
    <DataContext.Provider value={initialContext}>
      {props.children}
    </DataContext.Provider>
  );
};

// create a custom hook
export const useData = () => useContext(DataContext);

// actual context
export default DataContext;
