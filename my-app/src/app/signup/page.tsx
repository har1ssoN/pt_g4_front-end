'use client';
import Image from "next/image"
import IMG from "../../../public/image 1.png"
import style from "./style.module.css"
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Signup() {
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")
    const [departamento, setDepartamento] = useState("")


    async function handleSubmit(e: Event) {
        e.preventDefault()
        const data = {
            name: nome,
            email: email,
            course: curso,
            departament: departamento,
            password,
        }
        const response = await axios.post("http://localhost:3001/user",data)
        console.log(response)
    }

    return(
        <div className="telainteira flex flex-row">
            <div className="form-image">
                <Image src={IMG} width={400} height={400} className="w-[50vw] h-[100vh]" alt={""}  />
            </div>

            <div className="form flex flex-col items-center w-[50vw] h-[100vh] justify-evenly bg-[#EDEDED]">
                <h1 className="titulo text-3xl font-bold">Cadastro usuário</h1>
                <form onSubmit={(e) => handleSubmit(e)} className="inputs flex flex-col w-full items-center h-[75%] justify-evenly">
                <input type="text" className={style.input}  placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                
                <input type="email" className={style.input}  placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              
                <input type="password" className={style.input}  placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                
                <input type="text" className={style.input}  placeholder="Curso" onChange={(e) => setCurso(e.target.value)}/>
                
                <input type="text" className={style.input}  placeholder="Departamento" onChange={(e) => setDepartamento(e.target.value)}/>
                
                <button className={style.botao}>Criar conta</button>
                </form>
            </div>

            
        </div>        
    )
}
