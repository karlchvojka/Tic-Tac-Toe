import styles from "./Board.module.css";

export default function Board() {
  return ( 
    <div className="board-wrap">
      <div className="board-row">
        <button className={styles.square}>1</button>
        <button className={styles.square}>2</button>
        <button className={styles.square}>3</button>
      </div>
      <div className="board-row">
        <button className={styles.square}>4</button>
        <button className={styles.square}>5</button>
        <button className={styles.square}>6</button>
      </div>
      <div className="board-row">
        <button className={styles.square}>7</button>
        <button className={styles.square}>8</button>
        <button className={styles.square}>9</button>
      </div>
    </div>
  );
}