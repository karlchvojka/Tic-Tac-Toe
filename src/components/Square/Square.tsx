'use client'

import styles from "./Square.module.css";

/**
 * Type declaration for Square Component Props
 */
type SquareProps = {
  value: number;
} 

/**
 * Square
 * 
 * Used within the Tic-tac-toe board.
 * 
 * @param {number} value Display value for the square 
 * @returns Square Component
 */
export default function Square({ value } : SquareProps ) {
  return <button className={styles.square}>{value}</button>
}