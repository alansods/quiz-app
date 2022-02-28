import React, { useState, useRef, useEffect } from "react";
import styles from "./question.module.css";

export default function Question({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radioWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radioWrapper.current.querySelector('input:checked')
    if(findCheckedInput){
      findCheckedInput.checked = false
    }
  }, [data])

  var obj = data.answers;
  var answersArray = Object.entries(obj);

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Responda a questão para continuar.')
    }
    onAnswerUpdate(prevState => [...prevState, {q: data.question, a: selected}])
    setSelected('')
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1)
    }else {
      onSetStep(3)
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div>
            <span>Questão {`${activeQuestion + 1}`} de {numberOfQuestions}</span>
          </div>
          <h2>{data.question}</h2>
          <div className="control" ref={radioWrapper}>
            {answersArray.map((answer, i) => (
              <label className="radio" key={i}>
                {answer[1] &&
                  <div>
                    <input
                    type="radio"
                    name="answer[1]"
                    value={answer[1]}
                    onChange={changeHandler}
                    key={i}
                    />
                    {`${1+i}) ${answer[1]}`}
                  </div>
                }
                
              </label>
            ))}
          </div>
          {error && <div className="error">{error}</div>}
          <button onClick={nextClickHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}