import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if( squares[i]) return;
    
    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext? "X" : "O";
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="board">
      {Array.from({ length: 9 }, (_, index) => (
        <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)}/>
      ))}
    </div>
  );
}