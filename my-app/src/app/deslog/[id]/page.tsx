"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Deslog from "../page";

export type EditProps = {
  params: {
    id: string;
  };
};

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
  commentsCount?: number;
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

const Edit = (props: EditProps) => {
  const router = useRouter();
  const { id } = props.params;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async (userId: string) => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${userId}`);
        const userData = response.data;

        const commentsResponse = await axios.get('http://localhost:3001/comentario');
        const comments = commentsResponse.data;


        const avaliacoesWithDetails = await Promise.all(userData.Avaliacoes.map(async (avaliacao: Avaliacao) => {
          const professorResponse = await axios.get(`http://localhost:3001/professor/${avaliacao.professorId}`);
          const disciplinaResponse = await axios.get(`http://localhost:3001/disciplina/${avaliacao.disciplinaId}`);

          const commentsCount = comments.filter((comment: any) => comment.avaliacaoId === avaliacao.id).length;

          return {
            ...avaliacao,
            professor: professorResponse.data,
            disciplina: disciplinaResponse.data,
            commentsCount,
          };
        }));

        setUser({ ...userData, Avaliacoes: avaliacoesWithDetails });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getUserData(id);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return <Deslog user={user} />;
};

export default Edit;
