'use client'
import { useState } from "react";
import Board from '../Board/Board'

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
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)])

  const currentSquares = history[history.length - 1];

  /**
   * Handle Play
   * 
   * Helper function to update game state
   * 
   * @param nextSquares 
   */
  function handlePlay(nextSquares: Array<string>) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  } 

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol><li><p>test</p></li></ol>
      </div>
    </div>
  );
}