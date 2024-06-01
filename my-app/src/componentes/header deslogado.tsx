import React from 'react'

const CabecalhoDeslogado = () => {
  return (
    <header className='bg-[#a4fed3] flex p-4 justify-between'>
        <div className=''>
          <img src='/image 2.svg' alt=''/>
        </div>
        <div className='bg-[#00abed] text-white rounded-full w-36 h-12 text-center text-2xl  justify-center mx-4 content-center p-3 border-white border-2 cursor-pointer shadow-xl'>
          <button>
            Login
          </button>
        </div>
      </header>
  )
}

export default CabecalhoDeslogado