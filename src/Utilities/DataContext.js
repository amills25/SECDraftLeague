import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext({});

// helper function that exports just the needed / wanted data for the provider
export const DataHelper = () => {
  //generateRows exists here
  const [data, setData] = useState([]);

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
    })
      .then(function (response) {
        // console.log(response);
        // const parsedData = response.data.map((d) => ({ ...d, points: 0 }));
        // setData(parsedData);
        const parsedData = response.data.map((d) => {
          console.log(d);
          //   ...d,
          //   const points = 0;
          const points = d.lineup.weeks.reduce((a, c) => a.points + c.points, {
            points: 0,
          }).points;
          return { ...d, points };
        });
        setData(parsedData);
      })
      .catch((e) => console.log(e));
  }, []);

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

  return {
    arrangeData,
    data,
    savePointData,
    setData,
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
