import styles from "./start.module.css";
import UserNameInput from "../UserNameInput";

export default function Start({ onQuizStart, userName, setUsername }) {
  return (
    <div className={styles.start}>
      <h2>Qual é seu nome?</h2>
      <UserNameInput userName={userName} setUsername={setUsername} />
      <p>Dificuldade:</p>
      <div className={styles.containerDifficulty}>
        <label className="containerInput">
          <span className={styles.dificultyName}>Fácil</span>
          <input type="checkbox" id="facil" />
          <span className="checkmark"></span>
        </label>
        <label className="containerInput">
          <span className={styles.dificultyName}>Difícil</span>
          <input type="checkbox" id="dificil" />
          <span className="checkmark"></span>
        </label>
      </div>
      <button onClick={onQuizStart}>Começar</button>
    </div>
  );
}
