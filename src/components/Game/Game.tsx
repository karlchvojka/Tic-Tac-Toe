'use client'
import { useState } from "react";
import Board from '@/components/Board/board'

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
  const [history, setHistory] = useState([Array(9).fill(null)])

  const currentSquares = history[history.length -1];

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol><li><p>test</p></li></ol>
      </div>
    </div>
  );
}