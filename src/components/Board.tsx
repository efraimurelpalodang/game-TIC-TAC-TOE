import { useState } from "react";
import Square from "./Square";

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }
  return false;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext? 'X' : 'O')
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {Array.from({ length: 9 }, (_, index) => (
          <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </>
  );
}
