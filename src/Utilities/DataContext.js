import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext({});

// helper function that exports just the needed / wanted data for the provider
export const DataHelper = () => {
  const [data, setData] = useState([]);

  const arrangeData = (d) => {
    return d.sort((a, b) => (a.points > b.points ? -1 : 1));
  };

  const savePointData = (grandTotal, rosterID) => {
    setData((prevData) => {
      let newData = prevData.map((old) => {
        let d = { ...old };
        if (d.id === rosterID) {
          d.points = grandTotal;
        }
        return d;
      });
      return newData;
    });
  };

  const getAllUsers = () => {
    axios({
      method: "get",
      url: "https://SECDraft-Laravel-mrslamdunk813305.codeanyapp.com/api/v1/allUsers",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        //   Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        const parsedData = response.data.map((d) => {
          const points = d.lineup.weeks.reduce((a, c) => a + c.points, 0);
          return { ...d, points };
        });
        setData(parsedData);
      })
      .catch((e) => console.log(e));
  };

  useEffect(getAllUsers, []);

  return {
    arrangeData,
    data,
    savePointData,
    setData,
    getAllUsers,
  };
};

// custom Provider component
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
