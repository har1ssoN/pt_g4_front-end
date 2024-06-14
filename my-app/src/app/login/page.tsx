'use client';
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Required'),
    password: Yup.string().required('Required'),
  });

  const initialValues = { email: '', password: '' };

  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', values);
      console.log('Login bem-sucedido:', response.data);
      router.push('/feed/logado'); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      if (error.response && error.response.status === 404) {
        
        setError('Email ou senha incorreto(s)');
      } else if (error.response && error.response.data && error.response.data.message) {
        
        setError(error.response.data.message);
      } else {
        
        setError('Erro ao tentar fazer login');
      }
    }
  };

  const handleSignupClick = () => {
    router.push('/signup');
  };

  if (!isClient) {
    return <></>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/2 bg-gray-200">
            <img src="/image 1.png" className="w-full h-full" alt="Imagem" />
          </div>
          <div className="w-1/2 bg-gray-50 flex">
            <div className="m-auto w-3/4">
              <h1 className="text-center mt-8 mb-16 text-4xl">Avaliação de Professores</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="flex flex-col">
                  <div className="mb-4">
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                    {error && (
                      <div className="text-red-600 text-sm mt-2">{error}</div>
                    )}
                    <div className="mt-10 flex space-x-5 justify-center px-10">
                      <button
                        type="submit"
                        className="w-1/3 bg-emerald-200 text-blue-950 border border-blue-950 py-3 px-0 mt-4 rounded-md hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        Entrar
                      </button>
                      <button onClick={handleSignupClick} 
                        type="button"
                        className="w-1/3 bg-emerald-200 text-blue-950 border border-blue-950 py-3 px-0 mt-4 rounded-md hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        Criar conta
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
