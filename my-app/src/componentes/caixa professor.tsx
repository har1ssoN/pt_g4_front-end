import React from 'react'

const Professor = () => {
  return (
    <button>
        <div className='text-center cursor-pointer bg-[#ffffff] p-5 rounded-2xl'>
            <img src="/usuario generico.svg" alt="" />
            <div>
                <h1 className='font-semibold text-xl'>
                    Nome
                </h1>
            </div>
            <div className='font-thin'>
                <h2>
                    Disciplina
                </h2>
            </div>
        </div>
    </button>
  )
}

export default Professor