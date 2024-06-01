import React from "react";

const Comentario = () => {
    return (
        <article className="flex flex-row justify-left bg-[#3eee9a] rounded-3xl px-4 py-4 mx-2 my-6 scale-90">
            <div className="absolute bottom-20 left-64">
                <img src="/rectangle.svg" alt="" />
            </div>
            <div className="h-10 w-10 mt-3">
                <img src="/joao frango.svg" className="rounded-full" alt="" />
            </div>
            <div className="flex flex-col w-full px-2 pt-5">
                <h1 className='ml-2 mb-4 text-sm text-opacity-100'>
                João Frango · 17/04/2024, ás 21:43
                </h1>
                <p className="text-justify font-sans text-base ml-2">
                    tudo encima bro?
                </p>
            </div>
        </article>
    )
}

export default Comentario