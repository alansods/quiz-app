import './App.css';
import Start from './components/Start'
import Question from './components/Question';
import quizDataEasy from './api/quizDataEasy.json'

import React, { useState } from 'react';

function App() {

  const [step, setStep] = useState(1)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [userName, setUsername] = useState('')

  const quizStartHandler = () => {
    setStep(2)
  }

  return (
    <div className="App">
      <h2>Jogador: {userName}</h2>
      {step === 1 && <Start
        onQuizStart={quizStartHandler}
        userName = {userName}
        setUsername = {setUsername}
        />}
      
      {step === 2 && <Question
        data={quizDataEasy[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizDataEasy.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
    </div>
  );
}

export default App;
