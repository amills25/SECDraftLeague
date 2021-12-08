import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  EditingState,
  SelectionState,
  TreeDataState,
  CustomTreeData,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  TableTreeColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
// import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import Toggle from "../Components/Toggle";
import {
  generateSum,
  generateRows as exampleGenerateRows,
} from "../data/generator";
import { generateRows } from "../Utilities/generateRows";
import _ from "lodash";

const getRowId = (row) => row.id;

export default function Roster(props) {
  let d = new Date();
  let day = d.getDay();

  const { id = 1 } = useParams();

  const [toggleState, setToggleState] = useState({});
  const saveToggleState = (athleteID) => {
    setToggleState((prevState) => {
      let newState = { ...prevState };
      newState[athleteID] = !newState[athleteID];
      console.log({ athleteID, newState });
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

  const generatedRows = useMemo(() => {
    if (roster.length > 0) {
      return generateRows({
        rosterData: roster,
        columns,
        currentRoster: props.currentRoster,
        component: (athleteID) => (
          //   props.userData.length > 0 &&
          //   (props.userData?.user_memberships[0].membership_id === 1 ||
          //     props.userData?.user_memberships[0].id === parseInt(id)) && (
          <Toggle
            saveToggleState={saveToggleState}
            toggleState={toggleState[athleteID]}
            athleteID={athleteID}
            userData={props.userData}
          />
          //TO DO: figure out how to save week_id for all 10 weeks for every player with another if like above
        ),
        //   ),
      });
    } else {
      return [];
    }
  }, [roster, columns, props.currentRoster]);

  const [rows, setRows] = useState([]);

  // when we first generate the rows, we also generate the toogle state
  useEffect(() => {
    if (generatedRows.length > 0) {
      setRows(generatedRows);
      let obj = {};
      for (let i = 0; i < generatedRows.length; i++) {
        obj[generatedRows[i].active.props.athleteID] = generatedRows[i].toggled;
      }
      setToggleState(obj);
    }
  }, [generatedRows]);

  //   const exampleRows = exampleGenerateRows({
  //     columnValues: { id: ({ index }) => index, ...columnValues },
  //     length: 9,
  //   });
  //   console.log(exampleRows);

  // useEffect( saveToDB, [rows])

  // save button on row, triggers updating the row in state and then saves to db
  useEffect(() => {
    let rowCopy = [...rows];
    let newRows = [];
    // console.log("Finished editing:", { rowCopy });
    // calculating total
    for (let i = 0; i < rowCopy.length; i++) {
      let newObj = { ...rowCopy[i] };
      let total = _.reduce(
        newObj,
        (result, value, key) => {
          //   console.log(result, value, key);
          let resultInt = parseInt(result);
          let valueInt = parseInt(value);
          if (key.includes("week")) {
            // console.log(key);
            return resultInt + valueInt;
          }
          return resultInt;
        },
        0
      );
      //   console.log(total);
      newObj.total = total;

      newRows.push(newObj);
    }
    if (!_.isEqual(newRows, rows)) {
      console.log(newRows);

      for (let i = 0; i < newRows.length; i++) {
        // const data = _.map(newRows[i], (row) => {
        //   row.toggle = toggleState[row.active.props.athleteID];
        //   //   console.log(row);
        // });
        const data = { ...newRows[i] };
        // delete data.active;
        //savetoDB(data); --justin change
      }
      saveToDB(newRows); //--justin change
      setRows(newRows);
    }
  }, [rows]);

  useEffect(() => {
    if (_.size(toggleState) > 0) {
      let rowsCopy = [...rows];
      let newRows = [];

      for (let i = 0; i < rowsCopy.length; i++) {
        let obj = {};
        _.map(rowsCopy[i], (rowData, key) => {
          // console.log(rowData, key);
          if (key === "active") {
            //   console.log(rowData, toggleState[rowData.props.athleteID]);
            obj["toggled"] = toggleState[rowData.props.athleteID];
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
        // saveToDB(obj);
        newRows.push(obj);
      }
      console.log(newRows);
      setRows(newRows);
    }
  }, [toggleState]);

  const saveToDB = (data) => {
    axios({
      method: "post",
      url: "https://Laravel-awmills25552543.codeanyapp.com/api/v1/lineup/edit",
      data: {
        rows: data,
        lineup_id: props.userData.id,
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
    }).then((response) => {
      console.log(response);
    });
  };

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

  const commitChanges = ({ added, changed, deleted }) => {
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

  console.log(props.userData.length);
  return (
    <>
      <div className="card">
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState
            editingRowIds={editingRowIds}
            onEditingRowIdsChange={setEditingRowIds}
            rowChanges={rowChanges}
            onRowChangesChange={setRowChanges}
            addedRows={addedRows}
            onAddedRowsChange={changeAddedRows}
            onCommitChanges={commitChanges}
            defaultEditingRowIds={[0]}
            columnExtensions={editingStateColumnExtensions}
          />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow />
          <TableEditRow />
          {Object.keys(props.userData).length > 0 &&
            props.userData?.user_memberships[0]?.membership_id === 1 && (
              <TableEditColumn
                //   showAddCommand={!addedRows.length}

                showEditCommand
                //   showDeleteCommand
              />
            )}
        </Grid>
      </div>
    </>
  );
}

//need to make active button appear if commissioner, current logged in user, and it's sunday-tuesday
