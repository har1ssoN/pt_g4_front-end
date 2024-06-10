import React, { useState } from 'react';
import styles from './novapubli.module.css'; 

export default function EditComentario({ isOpen }) {
  if (isOpen) {
    return (
        <div className={styles.modalPrincipal}>
        <div className={styles.modalFundo}>
          <div className={styles.inputs}>
          </div>
          <div className={styles.inputs}>
          </div>
          <div className={styles.inputs}>
            <textarea className={styles.inputGrandao}></textarea>
          </div>
          <div className={styles.botoes}>
            <button className={`${styles.botao} ${styles.cancelar}`}>Cancelar</button>
            <button className={`${styles.botao} ${styles.avaliar}`}>Editar</button>
          </div>
        </div>
      </div>
    )
  }
  return null
}
