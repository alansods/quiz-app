import React, { useState, useRef, useEffect } from "react";
import style from "./question.module.css";
import { FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Question({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
  easyChecked,
}) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radioWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radioWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  //transforma obj do quizData em array
  var obj = data.answers;
  var answersArray = Object.entries(obj);
  console.log("Valor do data.answers: " + answersArray);

  //coloca a resposta clicada no selected
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  //ao clicar em proxima
  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Responda a questão para continuar.");
      //impede de avançar caso não selected esteja vazio pq não clicou em nenhuma resposta
    }
    if (error) {
      setError("");
    }

    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected }, //valor da questao e do value do input selecionado
    ]);

    setSelected("");

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  //framer motion
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", duration: 0.5 }}
      variants={variants}
    >
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className={style.question}>
              <div className={style.small}>
                <span>
                  Questão {`${activeQuestion + 1}`} de {numberOfQuestions} -
                  Nível: {easyChecked ? "Fácil" : "Difícil"}
                </span>
              </div>
              <div>
                <h2>{data.question}</h2>
                <span className={style.tag}>Tag: {data.tags[0].name}</span>
              </div>
              <div className="control" ref={radioWrapper}>
                {answersArray.map((answerItem, i) => (
                  <label htmlFor={i} className="radio" key={i}>
                    {answerItem[1] && ( //se tiver resposta que não seja null aparece
                      <div>
                        <input
                          type="radio"
                          id={i}
                          name="itemResposta"
                          value={answerItem[0]} //valor armazenado da sua resposta no selected
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}
