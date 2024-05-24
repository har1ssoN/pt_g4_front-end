import React from "react";
import styles from "./Modal.module.css"; 

export default function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div className={styles.modal}> 
        Nome
        <br className={styles.linha}/>
        Matéria
        <br className={styles.linha}/>      
        Recentes
        <br className={styles.linha}/>
        Antigas
      </div>
    );
  }
  return null;
}
