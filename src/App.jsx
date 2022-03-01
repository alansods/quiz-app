import "./App.css";
import Header from "./components/Header";
import Start from "./components/Start";
import Question from "./components/Question";
import End from "./components/End";
import Resultado from "./components/Resultado";
import quizDataEasy from "./api/quizDataEasy.json";
import quizDataHard from "./api/quizDataHard.json";

import React, { useEffect, useState } from "react";

let interval;

function App() {
  const [step, setStep] = useState(1); //define qual componente de tela está ativo.
  const [activeQuestion, setActiveQuestion] = useState(0); //define qual é o número da questão atual.
  const [answers, setAnswers] = useState([]);
  const [userName, setUsername] = useState(""); //define o nome do jogador.
  const [time, setTime] = useState(0);
  const [easyChecked, setEasyChecked] = useState(false);
  const [hardChecked, setHardChecked] = useState(false);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (easyChecked) {
      setHardChecked(false);
    }
  }, [easyChecked]);

  useEffect(() => {
    if (hardChecked) {
      setEasyChecked(false);
    }
  }, [hardChecked]);

  //inicia o quiz ao clicar em começar.
  const quizStartHandler = () => {
    if (userName.length > 2 && (easyChecked || hardChecked)) {
      setStep(2);

      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
    setTime(0);
    setUsername("");
    setEasyChecked(false);
    setHardChecked(false);
  };

  return (
    <div className="App">
      <Header userName={userName} step={step} />

      {step === 1 && (
        <Start
          onQuizStart={quizStartHandler}
          userName={userName}
          setUsername={setUsername}
          easyChecked={easyChecked}
          setEasyChecked={setEasyChecked}
          hardChecked={hardChecked}
          setHardChecked={setHardChecked}
        />
      )}

      {step === 2 && (
        <Question
          data={
            easyChecked
              ? quizDataEasy[activeQuestion]
              : quizDataHard[activeQuestion]
          }
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizDataEasy.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
          easyChecked={easyChecked}
        />
      )}

      {step === 3 && (
        <End
          results={answers}
          data={easyChecked ? quizDataEasy : quizDataHard}
          numberOfQuestions={
            easyChecked ? quizDataEasy.length : quizDataHard.length
          }
          onReset={resetClickHandler}
          onAnswersCheck={() => setStep(4)}
          time={time}
        />
      )}

      {step === 4 && (
        <Resultado
          results={answers}
          data={easyChecked ? quizDataEasy : quizDataHard}
          onReset={resetClickHandler}
        />
      )}
    </div>
  );
}

export default App;
