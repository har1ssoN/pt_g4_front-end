import Image from "next/image"
import IMG from "../../../public/image 1.png"
import style from "./style.module.css"


export default function Signup() {
    return(
        <div className="telainteira flex flex-row">
            <div className="form-image">
                <Image src={IMG} width={400} height={400} className="w-[50vw] h-[100vh]" alt={""}  />
            </div>

            <div className="form flex flex-col items-center w-[50vw] h-[100vh] justify-evenly bg-[#EDEDED]">
                <h1 className="titulo text-3xl font-bold">Cadastro usuário</h1>
                <div className="inputs flex flex-col w-full items-center h-[75%] justify-evenly">
                <input type="text" className={style.input}  placeholder="Nome"/>
                
                <input type="email" className={style.input}  placeholder="Email"/>
              
                <input type="password" className={style.input}  placeholder="Senha"/>
                
                <input type="text" className={style.input}  placeholder="Curso"/>
                
                <input type="text" className={style.input}  placeholder="Departamento"/>
                
                <button className={style.botao}>Criar conta</button>
                </div>
            </div>

            
        </div>        
    )
}
