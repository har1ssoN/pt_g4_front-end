import React from 'react'
import Image from 'next/image'

const CabecalhoLogado = () => {
  return (
    <header className='bg-[#a4fed3] flex p-4 justify-between'>
        <div className=''>
          <img src='/image 2.svg' alt=''/>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='gap-8'>
                <img src="/sino.svg" alt="" />
            </div>
            <div>
                <img src="/morty logado.svg" alt="" />
            </div>
            <div>
                <img src="/porta deslogar.svg" alt="" />
            </div>
        </div>
      </header>
  )
}

export default CabecalhoLogado