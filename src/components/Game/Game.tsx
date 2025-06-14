'use client'
import { useState } from "react";
import Board from '../Board/Board';

import styles from "./Game.module.css";

/**
 * Game Component
 * 
 * Wrapper component to hold and manage the Game
 */
export default function Game() {
  /** 
   * State Declarations
   * 
   * xIsNext tracks which turn it is (X or O)
   * history tracks each move throughout a game.
   */
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  /**
   * Handle Play
   * 
   * Helper function to update game state
   * 
   * @param nextSquares 
   */
  function handlePlay(nextSquares: Array<string>) {
    const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className={styles.game}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.gameInfo}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}