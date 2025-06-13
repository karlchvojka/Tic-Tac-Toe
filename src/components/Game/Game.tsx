'use client'

import Board from '@/components/Board/board'

/**
 * Game Component
 * 
 * Wrapper component to hold and manage the Game
 */
export default function Game() {
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