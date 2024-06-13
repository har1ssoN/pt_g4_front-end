'use client';
import React from 'react'
import { useRouter } from "next/navigation";

const CabecalhoLogado = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  const handleProfileClick = () => {
    router.push('/profile'); 
  };
  return (
    <header className='bg-[#a4fed3] flex p-4 justify-between h-24'>
        <div className=''>
          <img src='/image 2.svg' alt=''/>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='mx-20'>
              <button><img src="/sino.svg" alt="" /></button>
            </div>

            <div>
              <button onClick={handleProfileClick}><img src="/morty logado.svg" alt="" /></button>
            </div>

            <div>
              <button onClick={handleLoginClick}><img src="/porta deslogar.svg" alt="" /></button>
            </div>
        </div>
      </header>
  )
}

export default CabecalhoLogado