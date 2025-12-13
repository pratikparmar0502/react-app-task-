import { useState } from "react";
import { Container } from "react-bootstrap";

const Task2 = () => {
  const winner = (box) => {
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

    for (let i = 0; i < array.length; i++) {
      const [a, b, c] = array[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return box[a];
      }
    }
    return null;
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setisXturn(true);
    // setisXturn(isXturn ? true : false);
  };
  const winnerName = winner(board);
  const isDraw = board.every((box) => box !== null);

  let status = "Turn : " + (isXturn ? "X" : "O");
  if (winnerName) {
    status = `Winner : ${winnerName}`;
  } else if (isDraw) {
    status = `Draw!`;
  }

  const click = (index) => {
    if (board[index] || winnerName) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXturn ? "X" : "O";

    setBoard(newBoard);
    setisXturn(!isXturn);
  };

  return (
    <>
      <Container>
        <div className="title">Tic Tac Toe</div>
        <div className="status-message">{status}</div>
        <table border={1}>
          <tr>
            <td onClick={() => click(0)}>{board[0]}</td>
            <td onClick={() => click(1)}>{board[1]}</td>
            <td onClick={() => click(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => click(3)}>{board[3]}</td>
            <td onClick={() => click(4)}>{board[4]}</td>
            <td onClick={() => click(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => click(6)}>{board[6]}</td>
            <td onClick={() => click(7)}>{board[7]}</td>
            <td onClick={() => click(8)}>{board[8]}</td>
          </tr>
        </table>
        <button className="btn-reset" onClick={reset}>
          Reset
        </button>
      </Container>
    </>
  );
};

export default Task2;
