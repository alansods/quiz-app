import styles from './inputText.module.css'

export default function Inputext({userName, setUsername}) {

  function createuserName(e){
    setUsername(e.target.value)
  }

  return (
    <div className={styles.container}>
      <input
            type="text"
            placeholder="Digite seu nome"
            value={userName}
            onChange={createuserName}
          />
    </div>
  );
}