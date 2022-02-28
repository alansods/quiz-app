import React, { useState, useRef, useEffect } from "react";
import style from "./end.module.css";
import { formatTime } from "../../utils";

export default function End({
  results,
  data,
  onReset,
  onAnswersCheck,
  time,
  numberOfQuestions,
}) {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(()=> {
    let correct = 0
    results.forEach((result, index) => {
      if(result.a === data[index].correct_answer) {
        console.log(result.a)
        correct++
      }
    })
    setCorrectAnswers(correct)
    // eslint-disable-next-line
  },[])

  return (
    <div className={style.end}>
      <div className={style.pontuacao}>
        <h3>Sua pontuação:</h3>
        <p>{correctAnswers} respostas de {numberOfQuestions}.</p>
      </div>
      <div className={style.tempo}>
      <h3>Seu tempo:</h3>
      <p>{formatTime(time)}</p>
      </div>
      <button onClick={onAnswersCheck}>Checar suas respostas</button>
      <button className={style.reiniciar} onClick={onReset}>
        Reiniciar
      </button>
    </div>
  );
}
