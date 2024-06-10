import React from "react";
import styles from "./ordenar.module.css"; 

export default function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div className={styles.modal}> 
      <button>Nome</button>
        <br className={styles.linha}/>
        <hr />
        <button>Matéria</button>
        <br className={styles.linha}/>   
        <hr />   
        <button>Recentes</button>
        <br className={styles.linha}/>
        <hr />
        <button>Antigas</button>
      </div>
    );
  }
  return null;
}
