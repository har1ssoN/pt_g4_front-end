import CabecalhoDeslogado from '@/componentes/header deslogado';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Avaliacao {
  id: number;
  conteudo: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  professorId: number;
  disciplinaId: number;
  professor?: Professor;
  disciplina?: Disciplina;
}

interface Professor {
  id: number;
  name: string;
}

interface Disciplina {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  course: string;
  profile_image?: Uint8Array;
  createdAt: string;
  updatedAt: string;
  Avaliacoes: Avaliacao[];
}

interface DeslogProps {
  user: User;
}

export default function Deslog({ user }: DeslogProps) {
  if (!user) {
    return <div>User not found</div>;
  }
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/'); // Redireciona para a página de login
  };

  return (
    <div className="telainteira flex flex-col">
      <CabecalhoDeslogado />
      <div className="bg-gray-200 flex justify-center">
        <div className="relative h-full bg-white w-2/5">
          <div className="quadrado_verde flex w-full h-32 bg-green-400">
            <div className=" absolute -left-11 top-1" onClick={handleBackClick}>
              <button><img src="/back.png" className="h-10 w-10" alt="" /></button>
            </div>
          </div>

          <img src="/morty.png" className="absolute top-16 left-28 transform -translate-x-1/2 rounded-full h-36 w-36" alt="Morty" />

          <div className="border border-black ">
            <div className="divide-y divide-black">
              <div className="flex w-full ">
                <div className="justify-normal "></div>
                <div className="ml-16 mt-24 mb-3 text-sm">
                  <p className='font-bold'>{user.name}</p>
                  {user.course} / Dept. {user.department} <br />
                  {user.email} <br />
                </div>
              </div>
              <p className='font-bold text-sm'>Publicações</p>
            </div>
            {user.Avaliacoes.map((avaliacao) => (
              <div key={avaliacao.id} className="flex flex-col justify-left bg-green-400 rounded-3xl px-4 py-4 mx-2 my-6">
                <div className="flex">
                  <img src="/morty.png" className="h-10 w-10 bg-[#A4FED3] rounded-full" alt="User Image" />
                  <p className='w-full mt-2 ml-2 text-sm'>
                    {user.name} · {new Date(avaliacao.createdAt).toLocaleDateString()} ás {new Date(avaliacao.createdAt).toLocaleTimeString()} · {avaliacao.professor?.name} · {avaliacao.disciplina?.name}
                  </p>
                </div>
                <div className="w-full px-2 pt-5">
                  <p className="text-justify font-sans text-base">{avaliacao.conteudo}</p>
                  <div className='flex items-center justify-between'>
                    <div className='flex'>
                      <button><img src="/comentario.png" className='h-7 w-7' alt="Comments Icon" /></button>
                      <p className='mt-1 ml-2 text-sm'>Comentários</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
