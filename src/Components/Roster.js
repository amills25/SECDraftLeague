import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
import Toggle from "../Components/Toggle";
import { generateRows } from "../Utilities/generateRows";
import _ from "lodash";
import { useData } from "../Utilities/DataContext";

const getRowId = (row) => row.id;

export default function Roster(props) {
  const { savePointData, getAllUsers } = useData();

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
      url: "https://SECDraft-Laravel-mrslamdunk813305.codeanyapp.com/api/v1/lineup",
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
    });
  }, []);

  const [columns] = useState([
    { name: "active", title: "Active" },
    { name: "name", title: "Name" },
    { name: "team", title: "Team" },
    { name: "week1", title: "Wk1" },
    { name: "week2", title: "Wk2" },
    { name: "week3", title: "Wk3" },
    { name: "week4", title: "Wk4" },
    { name: "week5", title: "Wk5" },
    { name: "week6", title: "Wk6" },
    { name: "week7", title: "Wk7" },
    { name: "week8", title: "Wk8" },
    { name: "week9", title: "Wk9" },
    { name: "week10", title: "Wk10" },
    { name: "week11", title: "SECT" },
    { name: "total", title: "Total" },
  ]);

  let weekNum = 0;
  for (let index = 0; index < 110; index++) {
    weekNum = (index % 10) + 1;
  }
  const generatedRows = useMemo(() => {
    if (roster.length > 0) {
      return generateRows({
        rosterData: roster,
        columns,
        currentRoster: props.currentRoster,
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
  }, [roster, columns, props.currentRoster]);

  const [rows, setRows] = useState([]);

  // when we first generate the rows, we also generate the toggle state
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

  const saveToDB = (data) => {
    axios({
      method: "post",
      url: "https://SECDraft-Laravel-mrslamdunk813305.codeanyapp.com/api/v1/lineup/edit",
      data: {
        rows: data,
        lineup_id: props.currentRoster,
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
        getAllUsers();
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    { columnName: "week11", width: "auto" },
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
    savePointData(grandTotal, props.currentRoster);

    if (!_.isEqual(newRows, rows)) {
      for (let i = 0; i < newRows.length; i++) {
        for (let j = 0; j < newRows[i].wkData.length; j++) {
          newRows[i].wkData[j].points = newRows[i][`week${j + 1}`];
          //   trying to get name to change without having to change points
          //   newRows[i].wkData[j].athlete.name = newRows[i][`name`];
        }
      }
      saveToDB(newRows);
      setRows(newRows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  return (
    <>
      <div className="card myBorder">
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
