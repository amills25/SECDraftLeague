import React, { useState } from "react";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
// import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import Toggle from "../Components/Toggle";

import { generateRows } from "../data/generator";

const getRowId = (row) => row.id;

export default function Roster() {
  const [columns] = useState([
    { name: "active", title: "Active" },
    { name: "name", title: "Name" },
    { name: "team", title: "Team" },
    { name: "game1", title: "1" },
    { name: "game2", title: "2" },
    { name: "game3", title: "3" },
    { name: "game4", title: "4" },
    { name: "game5", title: "5" },
    { name: "game6", title: "6" },
    { name: "game7", title: "7" },
    { name: "game8", title: "8" },
    { name: "game9", title: "9" },
    { name: "game10", title: "10" },
    { name: "game11", title: "11" },
    { name: "game12", title: "12" },
    { name: "game13", title: "13" },
    { name: "game14", title: "14" },
    { name: "game15", title: "15" },
    { name: "game16", title: "16" },
    { name: "game17", title: "17" },
    { name: "game18", title: "18" },
    { name: "game19", title: "19" },
    { name: "game20", title: "20" },
    { name: "total", title: "Total" },
  ]);
  const columnValues = {
    active: <Toggle />,
    name: "jeff",
    game1: 0,
    game2: 0,
    game3: 0,
    game4: 0,
    game5: 0,
    game6: 0,
    game7: 0,
    game8: 0,
    game9: 0,
    game10: 0,
    game11: 0,
    game12: 0,
    game13: 0,
    game14: 0,
    game15: 0,
    game16: 0,
    game17: 0,
    game18: 0,
    game19: 0,
    game20: 0,
    total: 0,
  };
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...columnValues },
      length: 9,
    })
  );
  console.log("EDITING:", { rows });
  const [tableColumnExtensions] = useState([{ columnName: "id", width: 60 }]);
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

  return (
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
        />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand={!addedRows.length}
          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </div>
  );
}

// import React from "react";
// import { Table } from "react-bootstrap";

// export default function Roster() {
//   return (
//     <Table responsive>
//       <thead>
//         <tr>
//           <th>Player</th>
//           <th>Team</th>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <th key={index}>{index + 1}</th>
//           ))}
//           <th>Points Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//         <tr>
//           <td>Player.name</td>
//           <td>Player.team</td>
//           {Array.from({ length: 20 }).map((_, index) => (
//             <td key={index}>0</td>
//           ))}
//           <th>sum</th>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }
