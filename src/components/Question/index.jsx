import React, { useState, useRef, useEffect } from "react";
import style from "./question.module.css";
import { FaExclamationCircle } from "react-icons/fa";

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
    const findCheckedInput = radioWrapper.current.querySelector(
      "input:checked"
    );
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  //transforma obj do quizData em array
  var obj = data.answers;
  var answersArray = Object.entries(obj);

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Responda a questão para continuar.");
    }

    if (error) {
      setError("");
    }

    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);

    setSelected("");

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className={style.question}>
      <div className={style.small}>
        <span>
          Questão {`${activeQuestion + 1}`} de {numberOfQuestions}
        </span>
      </div>
      <div>
        <h2>{data.question}</h2>
        <span className={style.tag}>Tag: {data.tags[0].name}</span>
      </div>
      <div className="control" ref={radioWrapper}>
        {answersArray.map((answerItem, i) => (
          <label className="radio" key={i}>
            {answerItem[1] && (
              <div>
                <input
                  type="radio"
                  name="answerItem[1]"
                  value={answerItem[0]}
                  onChange={changeHandler}
                  key={i}
                />
                <strong>{1 + i}) </strong>
                {answerItem[1]}
              </div>
            )}
          </label>
        ))}
      </div>
      {error && (
        <div className={style.error}>
          <FaExclamationCircle />
          {error}
        </div>
      )}
      <button onClick={nextClickHandler}>Próxima</button>
    </div>
  );
}
