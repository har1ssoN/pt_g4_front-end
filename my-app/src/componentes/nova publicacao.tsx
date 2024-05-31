import React from 'react'
import styles from './novapubli.module.css'; 

export default function NovaPub({ isOpen }) {
  if (isOpen) {
    return (
      <div className={styles.modalPrincipal}>
        <div className={styles.modalFundo}>
          <div className={styles.inputs}>
            <input type="text" placeholder='Nome do Professor' />
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder='Disciplina' />
          </div>
          <div className={styles.inputs}>
            <textarea className={styles.inputGrandao}></textarea>
          </div>
          <div className={styles.botoes}>
            <button className={`${styles.botao} ${styles.cancelar}`}>Cancelar</button>
            <button className={`${styles.botao} ${styles.avaliar}`}>Avaliar</button>
          </div>
        </div>
      </div>
    )
  }
  return null
}
