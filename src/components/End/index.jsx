import React, { useState, useRef, useEffect } from "react"
import style from "./end.module.css"
import { formatTime } from "../../utils"

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
      <div>
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_sgzw5ogf.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay>
      </lottie-player>
      </div>
      <div className={style.pontuacao}>
        <h3>Sua pontuação:</h3>
        <p>Você acertou <strong>{correctAnswers}</strong> questões do total de {numberOfQuestions}.</p>
      </div>
      <div className={style.tempo}>
      <h3>Seu tempo:</h3>
      <p>Você levou <strong>{formatTime(time)}</strong> para terminar.</p>
      </div>
      <button onClick={onAnswersCheck}>Checar suas respostas</button>
      <button className={style.reiniciar} onClick={onReset}>
        Reiniciar
      </button>
    </div>
  );
}
