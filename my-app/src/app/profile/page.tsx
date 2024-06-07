'use client';
import React, { useState } from 'react';
import EditarPerfil from '@/componentes/editar perfil';
import CabecalhoLogado from '@/componentes/header logado';
import EditComentario from '@/componentes/editar comentario';
import ModalComentarios from '@/componentes/postar novo comentario';

export default function Profile() {
    const [openEditarPerfil, setOpenEditarPerfil] = useState(false);
    const [openEdit, setLocalOpenEdit] = useState(false);
    const [openComentarios, setOpenComentarios] = useState(false);

    const handleOpenEdit = (isOpen) => {
        setLocalOpenEdit(isOpen);
        setOpenEdit(isOpen);
    };

    const handleOpenComentarios = (isOpen) => {
        setOpenComentarios(isOpen);
    };


    return (
        <div className="telainteira flex flex-col">
            <CabecalhoLogado />
            <div className="bg-gray-200 flex justify-center">
                <div className="relative h-full bg-white w-2/5">
                    <div className="quadrado_verde flex w-full h-32 bg-green-400">
                        <div className="absolute -left-11 top-1">
                            <button><img src="/back.png" className="h-10 w-10" alt="" /></button>
                        </div>
                    </div>
                    <img src="/morty.png" className="absolute top-16 left-28 transform -translate-x-1/2 rounded-full h-36 w-36" alt="Morty" />
                    <div className="border border-black">
                        <div className="quadrado_branco flex w-full bg-white">
                            <div className="flex justify-end">
                                <button onClick={() => setOpenEditarPerfil(true)} className="absolute top-36 right-2 h-8 w-28 bg-[#A4FED3] rounded-3xl">Editar perfil</button>
                                <EditarPerfil isOpen={openEditarPerfil} onClose={() => setOpenEditarPerfil(false)} />
                                <button className="absolute top-48 right-2 h-8 w-28 bg-[#ff3535] rounded-3xl">Excluir perfil</button>
                            </div>
                        </div>
                        <div className="divide-y divide-black">
                            <div className="flex w-full ">
                                <div className="justify-normal "></div>
                                <div className="ml-16 mt-24 mb-3 text-sm"></div>
                            </div>
                            <div className="flex w-full">
                                    <div className="justify-normal"></div>
                                    <div className="ml-16 mt-24 mb-3 text-sm">
                                        <p className='font-bold'>Morty Gamer</p>
                                        Ciência da Computação / Dept. Ciência da Computação <br />
                                        morty.gamer.23@cjr.org.br <br />
                                    </div>
                            </div>
                            
                            <p className='font-bold text-sm'>Publicações</p>
                            
                            <div className="flex flex-col justify-left bg-green-400 rounded-3xl px-4 py-4 mx-2 my-6">
                                <div className="flex">
                                    <img src="/morty.png" className="h-10 w-10 bg-[#A4FED3] rounded-full" alt="" />
                                    <p className='w-full mt-2 ml-2 text-sm'>Morty Gamer · 17/04/2024, ás 21:42 · João Frango · Surf</p>
                                </div>
                                <div className="w-full px-2 pt-5">
                                    <p className="text-justify font-sans text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam animi hic quos non similique magni earum consequuntur corporis facilis consectetur, repellendus eaque ab. Pariatur repudiandae minima culpa quas vitae?
                                    </p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex'>
                                            <button onClick={() => handleOpenComentarios(true)}><img src="/comentario.png" className='h-7 w-7' alt="" /></button>
                                            <ModalComentarios isOpen={openComentarios} onClose={() => handleOpenComentarios(false)} />
                                            <p className='mt-1 ml-2 text-sm'>2 comentários</p>
                                        </div>
                                        <div>
                                            <button onClick={() => handleOpenEdit(true)}><img src="resposta.png" className='h-4 w-4 mx-4' alt="" /></button>
                                            <EditComentario isOpen={openEdit} onClose={() => handleOpenEdit(false)} />
                                            <button><img src="lixeira.png" className='h-4 w-4' alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-left bg-green-400 rounded-3xl px-4 py-4 mx-2 my-6">
                                <div className="flex">
                                    <img src="/morty.png" className="h-10 w-10 bg-[#A4FED3] rounded-full" alt="" />
                                    <p className='w-full mt-2 ml-2 text-sm'>Morty Gamer · 15/04/2024, ás 21:42 · Rick · Viagem Interdimensional</p>
                                </div>
                                <div className="w-full px-2 pt-5">
                                    <p className="text-justify font-sans text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam animi hic quos non similique magni earum consequuntur corporis facilis consectetur, repellendus eaque ab. Pariatur repudiandae minima culpa quas vitae?
                                    </p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex'>
                                        <button onClick={() => handleOpenComentarios(true)}><img src="/comentario.png" className='h-7 w-7' alt="" /></button>
                                        <ModalComentarios isOpen={openComentarios} onClose={() => handleOpenComentarios(false)} />
                                            <p className='mt-1 ml-2 text-sm'>2 comentários</p>
                                        </div>
                                    </div>
                                    <div>
                                    <button onClick={() => handleOpenEdit(true)}><img src="resposta.png" className='h-4 w-4 mx-4' alt="" /></button>
                                    <EditComentario isOpen={openEdit} onClose={() => handleOpenEdit(false)} />
                                        <button><img src="lixeira.png" className='h-4 w-4' alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
