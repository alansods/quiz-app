import "./App.css"
import Header from "./components/Header"
import Start from "./components/Start"
import Question from "./components/Question"
import End from "./components/End"
import quizDataEasy from "./api/quizDataEasy.json"

import React, { useEffect, useState } from "react"

let interval

function App() {
  const [step, setStep] = useState(1); //define qual componente de tela está ativo.
  const [activeQuestion, setActiveQuestion] = useState(0) //define qual é o número da questão atual.
  const [answers, setAnswers] = useState([])
  const [userName, setUsername] = useState("") //define o nome do jogador.
  const [time, setTime] = useState(0)

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval)
    }
  }, [step])

  //inicia o quiz ao clicar em começar.
  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)
  };

  const resetClickHandler = ()=> {

  }

  return (
    <div className="App">
      <Header userName={userName} step={step} />

      <div className="card">
        <div className="card-content">
          <div className="content">
            {step === 1 &&
              <Start
                onQuizStart={quizStartHandler}
                userName={userName}
                setUsername={setUsername}
              />
            }

            {step === 2 &&
              <Question
                data={quizDataEasy[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={quizDataEasy.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
              />
            }

            {step === 3 &&
              <End
              results = {answers}
              data = {quizDataEasy}
              numberOfQuestions = {quizDataEasy.length}
              onReset = {resetClickHandler}
              onAnswersCheck = {() => {}}
              time = {time}
              />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
