'use client';
import React, { useState } from 'react';
import Avaliacao from '@/componentes/avaliacao';
import Comentario from '@/componentes/comentario';
import CabecalhoLogado from '@/componentes/header logado';
import { useRouter } from "next/navigation";

export default function Profile() {
    const [openEdit, setOpenEdit] = useState(false);

    const router = useRouter();

    const handleProfileClick = () => {
        router.push('/profile'); 
    };
    return (
        <main className="h-screen bg-[#ededed]">
            <CabecalhoLogado />
            <div className="flex justify-center h-auto">
                <div className="relative h-full w-2/5 bg-[#FFFFFF]">
                    <div className="absolute -left-11 top-1">
                        <button onClick={handleProfileClick}><img src="/voltar.svg" className="h-10 w-10" alt="" /></button>
                    </div>
                    <div className="border border-[#7e7e7e] min-h-[592px]">
                        <Avaliacao setOpenEdit={setOpenEdit} />
                        {!openEdit && (
                            <>
                                <Comentario />
                                <article className="flex flex-row justify-left bg-[#3eee9a] rounded-3xl px-4 py-4 mx-2 my-6 scale-90">
                                    <div className="absolute bottom-20 left-64">
                                        <img src="/rectangle.svg" alt="" />
                                    </div>
                                    <div className=" h-10 w-10 mt-3">
                                        <img src="/joao frango.svg" className="rounded-full" alt="" />
                                    </div>
                                    <div className="flex flex-col w-full px-2 pt-5">
                                        <h1 className='ml-2 mb-4 text-sm text-opacity-100'>
                                            João Frango · 17/04/2024, ás 21:43
                                        </h1>
                                        <p className="text-justify font-sans text-base ml-2">
                                            você viu o Kadu?
                                        </p>
                                    </div>
                                </article>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
