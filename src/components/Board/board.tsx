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
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}