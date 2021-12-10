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
import _ from "lodash";
import { useData } from "../Utilities/DataContext";

const getRowId = (row) => row.id;

export default function Roster(props) {
  const {
    commitChanges,
    changeAddedRows,
    rows,
    columns,
    editingRowIds,
    setEditingRowIds,
    rowChanges,
    setRowChanges,
    addedRows,
    setRows,
    editingStateColumnExtensions,
    tableColumnExtensions,
  } = useData();

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
            onCommitChanges={(obj) => commitChanges({ ...obj, rows, setRows })}
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
