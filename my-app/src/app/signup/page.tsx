'use client';
import Image from "next/image";
import IMG from "../../../public/image 1.png";
import style from "./style.module.css";
import { useState } from 'react';
import axios from "axios";
import imagem from "../../../public/imagem-perfil-signup.png"

export default function Signup() {
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");
    const [departamento, setDepartamento] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = {
            name: nome,
            email: email,
            course: curso,
            department: departamento,
            password,
        };

        try {
            const response = await axios.post("http://localhost:3001/user", data);
            console.log(response);
        } catch (error) {
            console.error("Erro ao criar conta:", error);
        }
    }

    return (
        <div className="telainteira flex flex-row">
            <div className="form-image">
                <Image src={IMG} width={400} height={400} className="w-[50vw] h-[100vh]" alt={""} />
            </div>

            <div className="form flex flex-col items-center w-[50vw] h-[100vh] justify-evenly bg-[#EDEDED]">
                <h1 className="titulo text-3xl font-bold">Cadastro usuário</h1>
                <form onSubmit={handleSubmit} className="inputs flex flex-col w-full items-center h-[75%] justify-evenly">
                    <button><Image src={imagem}  width={110} height={110} alt={""} /></button>

                    <input type="text" className={style.input} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />

                    <input type="email" className={style.input} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" className={style.input} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />

                    <input type="text" className={style.input} placeholder="Curso" onChange={(e) => setCurso(e.target.value)} />

                    <input type="text" className={style.input} placeholder="Departamento" onChange={(e) => setDepartamento(e.target.value)} />

                    <button type="submit" className={style.botao}>Criar conta</button>
                </form>
            </div>
        </div>
    );
}
