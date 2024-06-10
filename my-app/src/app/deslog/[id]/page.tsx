"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CabecalhoDeslogado from "@/componentes/header deslogado";
import Deslog from "../page";

export type EditProps = {
  params: {
    id: string;
  };
};

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  course: string;
  profile_image?: string;
  createdAt: string;
  updatedAt: string;
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
        setUser(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('erro');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getUserData(id);
    }
  }, [id]);

  if (!user) {
    return <div>User not found</div>;
  }

  return <Deslog user={user} />;
};

export default Edit;
