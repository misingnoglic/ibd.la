import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { groupNameMap } from "../data/groupInfo";

const IbdTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Group Name</TableCell>
            <TableCell align="right">Mean (cM)</TableCell>
            <TableCell align="right">Mean Detected (cM)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(props.data).map(([groupName, { no_zero,  zero }]) => (
            <TableRow
              key={groupName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {groupNameMap[groupName]}
              </TableCell>
              <TableCell align="right">{no_zero.toFixed(4)}</TableCell>
              <TableCell align="right">{zero.toFixed(4)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IbdTable;
