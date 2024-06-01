import React from 'react'

const CabecalhoLogado = () => {
  return (
    <header className='bg-[#a4fed3] flex p-4 justify-between'>
        <div className=''>
          <img src='/image 2.svg' alt=''/>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='mx-20'>
              <button><img src="/sino.svg" alt="" /></button>
            </div>

            <div>
              <button><img src="/morty logado.svg" alt="" /></button>
            </div>

            <div>
              <button><img src="/porta deslogar.svg" alt="" /></button>
            </div>
        </div>
      </header>
  )
}

export default CabecalhoLogado