'use client'

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
  return ( 
    <div className="board-wrap">
      <div className={styles.boardRow}>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className={styles.boardRow}>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className={styles.boardRow}>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </div>
  );
}