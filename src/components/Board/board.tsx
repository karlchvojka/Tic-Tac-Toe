'use client'

import { useState } from "react";

import styles from "./Board.module.css";

/* Component Imports */
import Square from '../Square/Square'
/* End Component Imports */

/**
 * Board
 * 
 * The Tic-tac-toe board
 * 
 * @returns Board Component 
 */
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  /**
   * Handle Click
   * 
   * Event Handler to update board state for individual square
   * @param i 
   */
  function handleClick(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return ( 
    <div className="board-wrap">
      <div className={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}