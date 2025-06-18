'use client'

import { MouseEventHandler, useState } from "react";

import styles from "./Board.module.css";

/* Component Imports */
import Square from '../Square/Square'
/* End Component Imports */

/* Game Status Type Declaration*/
type GameStatus = string | null;
type NextSquares = Array<string>;

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (nextSquares: string[]) => void;
}

/**
 * Board
 * 
 * The Tic-tac-toe board
 * 
 * @returns Board Component 
 */
export default function Board({ xIsNext, squares, onPlay} : BoardProps) {
  let gameStatus: GameStatus = null;

  /**
   * Calculate Winner
   * 
   * Checks the board to see if there is a winner
   * @param {Array} squares The current board
   * @returns {string|null} The winner of the game
   */
  function calculateWinner(squares: Array<string>): string | null {
  // Build an array of possible "line" combinations to check for winner
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check if the lines arrays have the same character in all 3
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  /**
   * Handle Click
   * 
   * Event Handler to update board state for individual squares
   * 
   * @param {number} i Square array index that was clicked
   * @return
   */
  function handleClick(i: number){
    // If a square already has a value, return and skip to the next turn.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Duplicate the Squares state
    const nextSquares : NextSquares = squares.slice();

    // If xIsNext is true, place an X, else place an O
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    
    onPlay(nextSquares);
  }

  // Check for winner and update Status section
  const winner = calculateWinner(squares);

  if (winner) {
    gameStatus = "Winner: " + winner;
  } else {
    gameStatus = "Next player: " + (xIsNext? "X" : "O")
  }

  return ( 
    <div className="board-wrap">
      <div className="status"><p>{gameStatus}</p></div>
      <div className={styles.playBoard}>
        { 
          [...Array(9).keys()].map(square =>
            <div key={square} className={square}>
              <Square value={squares[square]} onSquareClick={() => handleClick(square)} />
            </div>
          )
        }
      </div>
    </div>
  );
}
