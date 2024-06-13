'use client';
import React from 'react'
import { useRouter } from "next/navigation";

const CabecalhoDeslogado = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); // Redireciona para a página de login
  };
  return (
    <header className='bg-[#a4fed3] flex p-4 justify-between'>
        <div className=''>
          <img src='/image 2.svg' alt=''/>
        </div>
        <div className='bg-[#00abed] text-white rounded-full w-36 h-12 text-center text-2xl  justify-center mx-4 content-center p-3 border-white border-2 cursor-pointer shadow-xl'
        onClick={handleLoginClick} // Adiciona o redirecionamento ao clicar
        >
          <button>
            Login
          </button>
        </div>
      </header>
  )
}

export default CabecalhoDeslogado