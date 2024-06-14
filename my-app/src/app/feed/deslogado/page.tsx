'use client';
import React, { useState } from 'react';
import Cabecalho from '@/componentes/header deslogado'
import Professor from '@/componentes/caixa professor'
import CabecalhoDeslogado from '@/componentes/header deslogado';
import Modal from '@/componentes/botao ordenar';
import { useRouter } from "next/navigation";


const page = () => {
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();

  const handleProfessorClick = () => {
    router.push('/professor/desloga'); 
  };

  return (
      <main className='bg-[#ededed]'>
        <CabecalhoDeslogado />
        <div className='justify-center w-11/12 mx-auto'>

          <div className='flex justify-between m-4 mx-auto w-5/6 text-center place-content-center'>
            <div>
              <h1 className='font-semibold text-3xl text-center'>
                Novos Professores
              </h1>
            </div>
            <div className='bg-[#ffffff] flex items-center justify-between cursor-pointer rounded-full p-2 text-center w-96 h-20 font-thin text-xl place-content-center'>
              <img src="/lupa.svg" alt="" />

              <input type="text" placeholder='  Buscar Professor(a)' className='flex-auto focus outline-none'/>
            </div>
          </div>

          <div className='flex gap-16 mx-auto w-11/12 justify-center p-6'>
            <div className=' text-center cursor-pointer bg-[#ffffff] p-5 rounded-2xl'>
              <button onClick={handleProfessorClick}><img src="/image Rick.svg" alt="" /></button>
              <div>
                <h1 className='font-semibold text-xl'>
                  Rick Sanchez
                </h1>
              </div>
              <div className='text-opacity-4'>
                <h2>
                  Segurança Computacional
                </h2>
              </div>
            </div>
            <Professor />
            <Professor />
            <Professor />
          </div>

          <div className='border-2 border-black'></div>

          <div className='flex justify-between m-6 mx-auto w-11/12'>
            <div>
              <h1 className='font-semibold text-3xl text-center'>
                Todos os Professores
              </h1>
            </div>
            <div className='bg-[#00abed] text-white rounded-full w-36 h-12 text-center text-2xl  justify-center mx-4 content-center p-3 border-white border-2 cursor-pointer shadow-xl z-50'>
            <button onClick={() => setOpenModal(!openModal)}>Ordenar</button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
            </div>
          </div>

          <div className='flex gap-16 mx-auto w-11/12 justify-center'>
            <Professor />
            <Professor />
            <Professor />
            <Professor />
          </div>

        </div>
      </main>
  )
}

export default page