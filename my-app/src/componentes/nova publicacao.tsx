import React, { useState } from 'react';
import styles from './novapubli.module.css';
import axios from 'axios';

export default function NovaPub({ isOpen, onClose }) {
  const [nomeProfessor, setNomeProfessor] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [comentario, setComentario] = useState('');

  const handleCancelar = () => {
    onClose(); 
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/comentarios', {
        nomeProfessor,
        disciplina,
        comentario
      });
      console.log('sucesso', response.data);
      onClose(); 
    } catch (error) {
      console.error('Erro', error);
    }
  };

  if (isOpen) {
    return (
      <div className={styles.modalPrincipal}>
        <div className={styles.modalFundo}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder='Nome do Professor'
              value={nomeProfessor}
              onChange={(e) => setNomeProfessor(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder='Disciplina'
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <textarea
              className={styles.inputGrandao}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.botoes}>
            <button className={`${styles.botao} ${styles.cancelar}`} onClick={handleCancelar}>Cancelar</button>
            <button className={`${styles.botao} ${styles.avaliar}`} onClick={handleSubmit}>Avaliar</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
