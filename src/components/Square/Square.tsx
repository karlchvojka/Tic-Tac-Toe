'use client'

import { MouseEventHandler } from "react";
import styles from "./Square.module.css";

/**
 * Square Component Prop types
 */
type SquareProps = {
  /* Value to be displayed in the square */
  value: string | null;

  /* Square click event handler */
  onSquareClick: MouseEventHandler;
}

/**
 * Square
 * 
 * Used within the Tic-tac-toe board.
 * 
 * @returns Square Component
 */
export default function Square({value, onSquareClick} : SquareProps) {
  return (
    <button
      className={styles.square}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}