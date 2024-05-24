'use client';
import React, { useState } from 'react';
import Professor from '@/componentes/caixa professor';
import CabecalhoLogado from '@/componentes/header logado';
import Modal from '@/componentes/modais/modal1';

const Page = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className='bg-[#ededed]'>
      <CabecalhoLogado />
      <div className='justify-center w-11/12 mx-auto'>
        <div className='flex justify-between m-4 mx-auto w-5/6 text-center place-content-center'>
          <div>
            <h1 className='font-semibold text-3xl text-center'>
              Novos Professores
            </h1>
          </div>
          <div className='bg-[#ffffff] flex items-center justify-between cursor-pointer rounded-full p-2 text-center w-96 h-20 font-thin text-xl place-content-center'>
            <img src="/lupa.svg" alt="Search" />
            <input type="text" placeholder='Buscar Professor(a)' className='cursor-pointer rounded-full'/>
          </div>
        </div>

        <div className='flex gap-16 mx-auto w-11/12 justify-center p-6'>
          <Professor />
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
          <div className='flex items-center'>
            <div className='bg-[#00abed] text-white rounded-full w-auto h-12 text-center text-2xl justify-center mx-4 content-center p-3 border-white border-2 cursor-pointer shadow-xl'>
              <button>Nova Publicação</button>
            </div>
            <div className='bg-[#00abed] text-white rounded-full w-36 h-12 text-center text-2xl justify-center mx-4 content-center p-3 border-white border-2 cursor-pointer shadow-xl'>
              <button onClick={() => setOpenModal(true)}>Ordenar</button>
              <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
            </div>
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
  );
};

export default Page;