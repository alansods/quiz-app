import style from "./resultado.module.css";

export default function Resultado({ results, onReset, data }) {
  return (
    <div className={style.resultado}>
      <h2>Suas respostas:</h2>
      <ul>
        {results.map((result, i) => (
          <li key={i}>
            <p>
              <strong>{i +1}) {result.q}</strong>
            </p>
            <p>Sua resposta foi: {result.a}</p>
            <p>A resposta correta é: {data[i].correct_answer}</p>
            {data[i].correct_answer === result.a ? <p className={style.correct}>Parabéns! Você acertou essa questão.</p> : <p className={style.incorrect}>Que pena! Você errou está questão.</p>}
          </li>
        ))}
      </ul>

      <button className={style.reiniciar} onClick={onReset}>
        Reiniciar
      </button>
    </div>
  );
}
