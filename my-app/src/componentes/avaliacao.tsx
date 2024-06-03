import React, { useState } from 'react';
import EditComentario from './editar comentario';

const Avaliacao = ({ setOpenEdit }) => {
    const [openEdit, setLocalOpenEdit] = useState(false);

    const handleOpenEdit = (isOpen) => {
        setLocalOpenEdit(isOpen);
        setOpenEdit(isOpen);
    };

    return (
        <>
            <article className="flex flex-row justify-left bg-[#3eee9a] rounded-3xl px-4 py-4 mx-2 my-6">
                <div className=" h-10 w-10 mt-3">
                    <img src="/morty logado.svg" className="rounded-full" alt="" />
                </div>
                <div className="flex-col w-full px-2 pt-5">
                    <h1 className='ml-2 mb-4 text-opacity-100'>
                        Morty Gamer · 17/04/2024, ás 21:42 · João Frango · Surf
                    </h1>
                    <p className="text-justify font-sans text-base mb-4 ml-2">
                        Professor Bacana. Adoro quando falta!
                    </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex'>
                            <button><img src="/comentarios.svg" className='h-7 w-7' alt="" /></button>
                            <p className='mt-1 ml-2 text-sm'>2 comentários</p>
                        </div>
                        <div>
                            <button onClick={() => handleOpenEdit(true)}><img src="/edit.svg" className='h-4 w-4 mx-4' alt="" /></button>
                            <EditComentario isOpen={openEdit} onClose={() => handleOpenEdit(false)} />
                            <button><img src="/lixeira.svg" className='h-4 w-4' alt="" /></button>
                        </div>
                    </div>
                </div>
            </article>
            <div className='border-2 border-[#efefef]'></div>
        </>
    );
};

export default Avaliacao;
