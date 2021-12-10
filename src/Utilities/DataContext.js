import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";
import axios from "axios";
import Toggle from "../Components/Toggle.js";
import _ from "lodash";

const DataContext = createContext({});

// helper function that exports just the needed / wanted data for the provider
export const DataHelper = (props) => {
  //generateRows exists here

  const [data, setData] = useState([]);
  const [currentRoster, setCurrentRoster] = useState(1);

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
        console.log(response);
        const parsedData = response.data.map((d) => ({ ...d, points: 0 }));
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

  const generateRows = ({ rosterData, component }) => {
    const memberRosterData = rosterData.find(
      (r) => r.user_id === currentRoster
    );
    const athleteIDs = [
      ...new Set(memberRosterData.weeks.map((item) => item.athlete_id)),
    ];
    let rows = [];
    for (let i = 0; i < athleteIDs.length; i++) {
      let athleteID = athleteIDs[i];
      let athleteData = memberRosterData.weeks.filter(
        (w) => w.athlete_id === athleteID
      );

      let obj = {
        id: i,
        active: component(athleteID),
      };

      obj["name"] = athleteData[i].athlete.name;
      obj["team"] = athleteData[i].athlete.team;
      obj["toggled"] = athleteData[i].athlete.active;
      obj["wkData"] = athleteData;

      for (let n = 1; n <= 10; n++) {
        obj[`week${n}`] = athleteData[n - 1]?.points;
      }

      obj.total = athleteData.reduce((a, c) => ({
        points: a.points + c.points,
      })).points;

      rows.push(obj);
    }
    return rows;
  };

  const [toggleState, setToggleState] = useState({});
  const saveToggleState = (athleteID) => {
    setToggleState((prevState) => {
      let newState = { ...prevState };
      newState[athleteID] = !newState[athleteID];
      return newState;
    });
  };

  const [roster, setRoster] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://Laravel-awmills25552543.codeanyapp.com/api/v1/lineup",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        // Authorization: `Bearer ${token}`,
      },
    }).then(function (response) {
      setRoster(response.data);
      console.log(response);
    });
  }, []);

  const [columns] = useState([
    { name: "active", title: "Active" },
    { name: "name", title: "Name" },
    { name: "team", title: "Team" },
    { name: "week1", title: "Week1" },
    { name: "week2", title: "Week2" },
    { name: "week3", title: "Week3" },
    { name: "week4", title: "Week4" },
    { name: "week5", title: "Week5" },
    { name: "week6", title: "Week6" },
    { name: "week7", title: "Week7" },
    { name: "week8", title: "Week8" },
    { name: "week9", title: "Week9" },
    { name: "week10", title: "SECT" },
    { name: "total", title: "Total" },
  ]);

  let weekNum = 0;
  for (let index = 0; index < 100; index++) {
    weekNum = (index % 10) + 1;
  }
  const generatedRows = useMemo(() => {
    if (roster.length > 0) {
      return generateRows({
        rosterData: roster,
        columns,
        currentRoster,
        component: (athleteID) => (
          <Toggle
            saveToggleState={saveToggleState}
            toggleState={toggleState[athleteID]}
            athleteID={athleteID}
            userData={props.userData}
          />
        ),
        wk_id: weekNum,
      });
    } else {
      return [];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roster, columns, currentRoster]);

  const [rows, setRows] = useState([]);

  // when we first generate the rows, we also generate the toogle state
  useEffect(() => {
    if (roster.length > 0) {
      setRows(
        generateRows({
          rosterData: roster,
          columns,
          currentRoster,
          component: (athleteID) => (
            <Toggle
              saveToggleState={saveToggleState}
              toggleState={toggleState[athleteID]}
              athleteID={athleteID}
              userData={props.userData}
            />
          ),
          wk_id: weekNum,
        })
      );
      let obj = {};
      for (let i = 0; i < generatedRows.length; i++) {
        obj[generatedRows[i].active.props.athleteID] = generatedRows[i].toggled;
      }
      setToggleState(obj);
    }
  }, [roster, columns, currentRoster]);

  useEffect(() => {
    if (_.size(toggleState) > 0) {
      let rowsCopy = [...rows];
      let newRows = [];

      for (let i = 0; i < rowsCopy.length; i++) {
        let obj = {};
        _.map(rowsCopy[i], (rowData, key) => {
          if (key === "active") {
            obj["toggled"] = toggleState[rowData.props.athleteID] ? 1 : 0;
            rowData = (
              <Toggle
                saveToggleState={saveToggleState}
                toggleState={toggleState[rowData.props.athleteID]}
                athleteID={rowData.props.athleteID}
                userData={props.userData}
              />
            );
          }
          obj[key] = rowData;
        });
        newRows.push(obj);
      }
      setRows(() => {
        saveToDB(newRows);
        return newRows;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleState]);

  const [editingStateColumnExtensions] = useState([
    { columnName: "active", editingEnabled: false },
    { columnName: "total", editingEnabled: false },
  ]);
  const [tableColumnExtensions] = useState([
    { columnName: "active", width: "6%" },
    { columnName: "name", width: "15%" },
    { columnName: "team", width: "5%" },
    { columnName: "week1", width: "auto" },
    { columnName: "week2", width: "auto" },
    { columnName: "week3", width: "auto" },
    { columnName: "week4", width: "auto" },
    { columnName: "week5", width: "auto" },
    { columnName: "week6", width: "auto" },
    { columnName: "week7", width: "auto" },
    { columnName: "week8", width: "auto" },
    { columnName: "week9", width: "auto" },
    { columnName: "week10", width: "auto" },
    { columnName: "total", width: "5%" },
  ]);
  const [editingRowIds, setEditingRowIds] = useState([]);
  const [addedRows, setAddedRows] = useState([]);
  const [rowChanges, setRowChanges] = useState({});

  const changeAddedRows = (value) => {
    const initialized = value.map((row) =>
      Object.keys(row).length ? row : { total: 0 }
    );
    setAddedRows(initialized);
  };

  // save button on row, triggers updating the row in state and then saves to db
  useEffect(() => {
    let rowCopy = [...rows];
    let newRows = [];
    // calculating total
    let grandTotal = 0;
    for (let i = 0; i < rowCopy.length; i++) {
      let newObj = { ...rowCopy[i] };
      let total = _.reduce(
        newObj,
        (result, value, key) => {
          let resultInt = parseInt(result);
          let valueInt = parseInt(value);
          if (key.includes("week")) {
            return resultInt + valueInt;
          }
          return resultInt;
        },
        0
      );
      newObj.total = total;
      grandTotal += total;
      newRows.push(newObj);
    }
    savePointData(grandTotal, currentRoster);

    if (!_.isEqual(newRows, rows)) {
      for (let i = 0; i < newRows.length; i++) {
        for (let j = 0; j < newRows[i].wkData.length; j++) {
          newRows[i].wkData[j].points = newRows[i][`week${j + 1}`];
        }
      }
      saveToDB(newRows);
      setRows(newRows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const saveToDB = (data) => {
    axios({
      method: "post",
      url: "https://Laravel-awmills25552543.codeanyapp.com/api/v1/lineup/edit",
      data: {
        rows: data,
        lineup_id: currentRoster,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${props.token}`,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const commitChanges = ({ added, changed, deleted, rows, setRows }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return {
    data,
    savePointData,
    arrangeData,
    generateRows,
    saveToDB,
    commitChanges,
    saveToggleState,
    generatedRows,
    changeAddedRows,
    editingStateColumnExtensions,
    toggleState,
    setRowChanges,
    rowChanges,
    addedRows,
    setEditingRowIds,
    editingRowIds,
    tableColumnExtensions,
    roster,
    columns,
    currentRoster,
    setCurrentRoster,
  };
};

// custom Provider component
export const DataProvider = (props) => {
  const initialContext = DataHelper(props);

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
