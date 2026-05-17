import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const TicTacToe = () => {
  const [list, setList] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const click = (index) => {
    const copyList = [...list];
    if (copyList[index]) return;
    copyList[index] = turn ? "X" : "O";
    setList(copyList);
    setTurn(!turn);
    winStatus(copyList);
  };

  const winStatus = (list) => {
    const array = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of array) {
      if (
        list[a] === list[b] &&
        list[b] === list[c] &&
        list[c] === list[a] &&
        list[a] !== null
      ) {
        alert("Player " + list[a] + " wins!");
        setReset();
        return;
      } else if (!list.includes(null)) {
        alert("Draw!!!");
        setReset();
        return;
      }
    }
  };

  const setReset = () => {
    setList(Array(9).fill(null));
    setTurn(true);
  };

  const cellStyle = {
    width: "100px",
    height: "100px",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    border: "2px solid #333",
    padding: 0,
    "&:hover": { backgroundColor: "#f0f0f0" },
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
          Tic Tac Toe
        </Typography>

        <Table
          sx={{
            width: "300px",
            margin: "0 auto",
            borderCollapse: "collapse",
            borderStyle: "hidden",
            border: "1px",
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell sx={cellStyle} onClick={() => click(0)}>
                {list[0]}{" "}
              </TableCell>
              <TableCell sx={cellStyle} onClick={() => click(1)}>
                {list[1]}{" "}
              </TableCell>
              <TableCell sx={cellStyle} onClick={() => click(2)}>
                {list[2]}{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} onClick={() => click(3)}>
                {list[3]}
              </TableCell>
              <TableCell sx={cellStyle} onClick={() => click(4)}>
                {list[4]}
              </TableCell>
              <TableCell sx={cellStyle} onClick={() => click(5)}>
                {list[5]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} onClick={() => click(6)}>
                {list[6]}
              </TableCell>
              <TableCell sx={cellStyle} onClick={() => click(7)}>
                {list[7]}
              </TableCell>
              <TableCell sx={cellStyle} onClick={() => click(8)}>
                {list[8]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Button
          onClick={() => setReset()}
          variant="contained"
          size="large"
          sx={{ mt: 6, px: 4, borderRadius: "20px" }}
        >
          Reset Game
        </Button>
      </Box>
    </Container>
  );
};

export default TicTacToe;
