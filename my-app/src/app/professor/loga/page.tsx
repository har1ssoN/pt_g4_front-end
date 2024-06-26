'use client';
import React from 'react'
import { useRouter } from "next/navigation";

export default function loga() {
    const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  const handleFeedClick = () => {
    router.push('/feed/logado');
  };

  const handleProfileClick = () => {
    router.push('/profile'); 
  };

    return (
        <div className="telainteira flex flex-col">
            <div className="header flex w-full h-15 px-4 py-4 bg-[#A4FED3]">
                <img src="/unb_logo.png" className="h-8 w-16" alt="" />
                <div className="right-images flex flex-row justify-end w-full bg-[#A4FED3]">
                    <button><img src="/notificacao.png" className="h-8 w-8 mx-20" alt="" /></button>
                    <button onClick={handleProfileClick}><img src="/morty.png" className="rounded-full  h-9 w-9 mx-2" alt="" /></button>
                    <button onClick={handleLoginClick}><img src="/sair.png" className="h-8 w-8 mx-2" alt="" /></button>

                </div>
            </div>
            <div className="bg-gray-200 flex justify-center">
                <div className="relative h-full bg-white w-2/5">
                    <div className="quadrado_verde flex w-full h-32 bg-green-400">
                        <div className=" absolute -left-11 top-1">
                            <button onClick={handleFeedClick}><img src="/back.png" className="h-10 w-10" alt="" /></button>
                        </div>
                    </div>

                    <img src="/rick.png" className="absolute top-16 left-28 transform -translate-x-1/2 rounded-full h-36 w-36" alt="Morty" />

                    <div className="border border-black ">
                        <div className="divide-y divide-black">
                            <div className="flex w-full ">
                                <div className="justify-normal "></div>
                                <p className="ml-16 mt-24 mb-3 text-sm">
                                    <p className='font-bold'>Rick Sanchez</p>
                                    Ciência da Computação  / Dept. Ciência da Computação <br />
                                    Segurança Computacional, Estrutura de Dados, Viagem Interdimensional <br />

                                </p>
                            </div>
                            <p className='font-bold text-sm'>Publicações</p>
                        </div>
                        <div className="flex flex-col justify-left bg-green-400 rounded-3xl px-4 py-4 mx-2 my-6">
                            <div className="flex">
                                <img onClick={handleProfileClick} src="/morty.png" className=" h-10 w-10 bg-[#A4FED3] rounded-full" alt="" />
                                <p className='w-full mt-2 ml-2 text-sm'>Morty Gamer · 15/04/2024, ás 21:42 · Rick · Viagem Interdimensional
                                </p>
                            </div>
                            <div className="w-full px-2 pt-5">
                                <p className="text-justify font-sans text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam animi hic quos non similique magni earum consequuntur corporis facilis consectetur, repellendus eaque ab. Pariatur repudiandae minima culpa quas vitae?
                                </p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex'>
                                        <button><img src="/comentario.png" className='h-7 w-7' alt="" /></button>
                                        <p className='mt-1 ml-2 text-sm'>5 comentários</p>
                                    </div>
                                    <div>
                                        <button><img src="resposta.png" className='h-4 w-4 mx-4' alt="" /></button>
                                        <button><img src="lixeira.png" className='h-4 w-4' alt="" /></button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-left bg-green-400 rounded-3xl px-4 py-4 mx-2 my-6">
                            <div className="flex">
                                <img src="/bart.png" className=" h-10 w-10 bg-[#A4FED3] rounded-full" alt="" />
                                <p className='w-full mt-2 ml-2 text-sm'>El Barto · 10/04/2024, ás 11:12 · Rick · Estrutura de Dados
                                </p>
                            </div>
                            <div className="w-full px-2 pt-5">
                                <p className="text-justify font-sans text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam animi hic quos non similique magni earum consequuntur corporis facilis consectetur, repellendus eaque ab. Pariatur repudiandae minima culpa quas vitae?
                                </p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex'>
                                        <button><img src="/comentario.png" className='h-7 w-7' alt="" /></button>
                                        <p className='mt-1 ml-2 text-sm'>3 comentários</p>
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