'use client'

import { useState } from "react";

import styles from "./Square.module.css";

/**
 * Square
 * 
 * Used within the Tic-tac-toe board.
 * 
 * @returns Square Component
 */
export default function Square() {

  const [value, setValue] = useState<string | null>(null);

  /**
   * Button Click Handler
   */
  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className={styles.square}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}