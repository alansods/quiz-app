import style from "./start.module.css"
import UserNameInput from "../UserNameInput"

export default function Start({ onQuizStart, userName, setUsername, easyChecked, setEasyChecked, hardChecked, setHardChecked }) {
  return (
    <div className={style.start}>
      <h3>Qual é seu nome?</h3>
      <UserNameInput userName={userName} setUsername={setUsername} onQuizStart={onQuizStart} />
      <h3>Dificuldade:</h3>
      <div className={style.containerDifficulty}>
        <label htmlFor="checkbox1" className="containerInput">
          <span className={style.dificultyName}>Fácil</span>
          <input id="checkbox1" tabindex="0" type="checkbox" checked={easyChecked} value="facil" onChange={()=> setEasyChecked(!easyChecked)} />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="checkbox2" className="containerInput">
          <span className={style.dificultyName}>Difícil</span>
          <input id="checkbox2" tabindex="0" type="checkbox" checked={hardChecked} value="dificil" onChange={()=> setHardChecked(!hardChecked)} />
          <span className="checkmark"></span>
        </label>

        {console.log("Facil: " + easyChecked)}
        {console.log("Dificil: " + hardChecked)}

      </div>

      {userName.length >2 && (easyChecked || hardChecked)
      ? <button className={style.startButton} onClick={onQuizStart}>Começar</button>
      : <button className={style.startButtonDisabled} disabled onClick={onQuizStart}>Começar</button>}

    </div>
  );
}
