import style from "./start.module.css"
import UserNameInput from "../UserNameInput"

export default function Start({ onQuizStart, userName, setUsername }) {
  return (
    <div className={style.start}>
      <h3>Qual é seu nome?</h3>
      <UserNameInput userName={userName} setUsername={setUsername} />
      <h3>Dificuldade:</h3>
      <div className={style.containerDifficulty}>
        <label className="containerInput">
          <span className={style.dificultyName}>Fácil</span>
          <input type="checkbox" id="facil" />
          <span className="checkmark"></span>
        </label>
        <label className="containerInput">
          <span className={style.dificultyName}>Difícil</span>
          <input type="checkbox" id="dificil" />
          <span className="checkmark"></span>
        </label>
      </div>
      {userName.length > 2 && <button className={style.startButton} onClick={onQuizStart}>Começar</button>}
      {userName.length < 3 && <button className={style.startButtonDisabled} disabled onClick={onQuizStart}>Começar</button>}
    </div>
  );
}
