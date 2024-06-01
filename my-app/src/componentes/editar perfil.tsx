import React, { useState } from 'react';
import styles from './editarPerfil.module.css';

export default function EditarPerfil({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalPrincipal}>
            <div className={styles.modal2}>
                <button className={styles.x} onClick={onClose}>X</button>
                <div className={styles.inputs}>
                    <img src="/morty.png" className="rounded-full h-36 w-36 mx-auto" alt="Morty" />
                    <form className="flex flex-col items-center">
                        <label className="mt-4 w-full">
                            <input type="text" className="ml-2 p-1 border rounded-xl w-full" placeholder='Nome'/>
                        </label>
                        <label className="mt-4 w-full">
                            <input type="text" className="ml-2 p-1 border rounded-xl w-full" placeholder='Email'/>
                        </label>
                        <label className="mt-4 w-full">
                            <input type="text" className="ml-2 p-1 border rounded-xl w-full" placeholder='Curso'/>
                        </label>
                        <label className="mt-4 w-full">
                            <input type="text" className="ml-2 p-1 border rounded-xl w-full" placeholder='Departamento'/>
                        </label>
                        <label className="mt-4 w-full">
                            <input type="password" className="ml-2 p-1 border rounded-xl w-full" placeholder='Senha Atual'/>
                        </label>
                        <label className="mt-4 w-full">
                            <input type="password" className="ml-2 p-1 border rounded-xl w-full" placeholder='Nova Senha'/>
                        </label>
                        <label className="mt-4 w-full">
                            <input type="password" className="ml-2 p-1 border rounded-xl w-full" placeholder='Confirmar Nova Senha'/>
                        </label>
                        <button type="submit" className="mt-6 px-4 py-2 bg-green-400 rounded-full">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
