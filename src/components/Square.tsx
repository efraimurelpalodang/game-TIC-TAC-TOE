import type { SquareProps } from "../ts/types";

export default function Square(props: SquareProps) {
  const {value, onSquareClick} = props;

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}
