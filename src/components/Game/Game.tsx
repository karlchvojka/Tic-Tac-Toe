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
    if (nextMove === 0) {
      setHistory([Array(9).fill(null)]);
    }
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    return (
      <li key={move}>
        { (move === 0 && currentMove === 0) ? (
            <p>Welcome to a new game</p>
          ) : (move === currentMove && move > 0) ? (
            <p>You are at move #{move}</p>
          ) : (move === 0 && currentMove > 0) ? (
            <button onClick={() => jumpTo(0)}>Restart Game</button>
          ) : (<button onClick={() => jumpTo(move)}>Go to move #{move}</button>)
        }
      </li>
    )
  })

  return (
    <div className={styles.game}>
      <header>
        <h1>Tic-Tac-Toe</h1>
        <p>A simple Tic-Tac-Toe game written in ReactJS for Practice</p>
      </header>
      <div className={styles.gameUI}>
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className={styles.gameInfo}>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
