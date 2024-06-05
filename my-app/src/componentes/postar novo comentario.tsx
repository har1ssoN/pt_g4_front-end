import React from 'react';
import styles from './novapubli.module.css';

const ModalComentarios = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className={styles.modalFundo}>
                <div className={styles.inputs}>
                </div>
                <div className={styles.inputs}>
                </div>
                <div className={styles.inputs}>
                    <textarea className={styles.inputGrandao}></textarea>
                </div>
                <div className={styles.botoes}>
                    <button className={`${styles.botao} ${styles.cancelar}`} onClick={onClose}>Cancelar</button>
                    <button className={`${styles.botao} ${styles.avaliar}`}>Comentar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalComentarios;
