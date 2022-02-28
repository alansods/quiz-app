import style from './header.module.css'

export default function Header({userName}) {
  return (
    <header className={style.headerQuiz}>
      <div>
        <h2>Quiz App</h2>
      </div>
      <div>
        {userName.length ===0 && <div>Usuário</div>}
        {userName}
        </div>
    </header>
  );
}