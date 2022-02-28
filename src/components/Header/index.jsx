import style from './header.module.css'

export default function Header({userName, step}) {
  return (
    <header className={style.headerQuiz}>
      <div>
        <h2 className={style.logo}>Quiz App</h2>
      </div>
      <div>
        {step === 1 && <div>Usuário</div>}
        {step === 2 && <div>{userName}</div>}
      </div>
    </header>
  );
}