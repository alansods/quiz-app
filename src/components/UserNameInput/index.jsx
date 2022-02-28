import styles from './inputText.module.css'

export default function UserNameInput({userName, setUsername, onQuizStart}) {

  return (
    <div className={styles.container}>
      <input
            type="text"
            placeholder="Digite seu nome"
            value={userName}
            onChange={(e) => setUsername(e.target.value) }
            onKeyPress={(e) => e.key === 'Enter' && onQuizStart()}
            autoFocus 
          />
    </div>
  );
}