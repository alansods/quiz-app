import React, { useState, useEffect } from "react";
import style from "./end.module.css";
import { formatTime } from "../../utils";
import Lottie from "react-lottie";
import * as animationHappy from "../../lotties/happy.json";
import * as animationSad from "../../lotties/sad.json";
import { motion } from "framer-motion";

export default function End({
  results,
  data,
  onReset,
  onAnswersCheck,
  time,
  numberOfQuestions,
}) {
  const defaultOptionsHappy = {
    loop: true,
    autoplay: true,
    animationData: animationHappy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsSad = {
    loop: true,
    autoplay: true,
    animationData: animationSad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].correct_answer) {
        console.log(result.a);
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

   //framer motion
   const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", duration: 0.6 }}
      variants={variants}
    >
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className={style.end}>
              <div>
                {correctAnswers > 6 && (
                  <div>
                    <Lottie
                      options={defaultOptionsHappy}
                      height={110}
                      width={110}
                    />
                    <p className={style.good}>
                      Parabéns! Você foi muito bem, continue assim.
                    </p>
                  </div>
                )}
                {correctAnswers < 7 && (
                  <div>
                    <Lottie
                      options={defaultOptionsSad}
                      height={80}
                      width={80}
                    />
                    <p className={style.bad}>
                      Que pena, você não foi muito bem. Tente novamente.
                    </p>
                  </div>
                )}
              </div>
              <div className={style.pontuacao}>
                <h3>Sua pontuação:</h3>
                <p>
                  Você acertou <strong>{correctAnswers}</strong> questões do
                  total de {numberOfQuestions}.
                </p>
              </div>
              <div className={style.tempo}>
                <h3>Seu tempo:</h3>
                <p>
                  Você levou <strong>{formatTime(time)}</strong> para terminar.
                </p>
              </div>
              <div>
                <button onClick={onAnswersCheck}>Checar suas respostas</button>
                <button className={style.reiniciar} onClick={onReset}>
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
