import style from './header.module.css'
import { FaUserAlt } from 'react-icons/fa';

export default function Header({userName, step}) {
  return (
    <header className={style.headerQuiz}>
      <div>
        <h2 className={style.logo}>Quiz App - Alan Santos</h2>
      </div>
      <div>
        {step === 1 && <div className={style.container}><FaUserAlt />Usuário</div>}
        {step === 2 && <div className={style.container}><FaUserAlt />{userName}</div>}
      </div>
    </header>
  );
}