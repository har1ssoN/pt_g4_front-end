'use client';
import React, { useState } from 'react';
import styles from './editarPerfil.module.css';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Formik, Form, Field } from 'formik';


export default function EditarPerfil({ isOpen, onClose, userId }) {
    const validationSchema = Yup.object({
        email: Yup.string().email('Formato de email inválido'),
        name: Yup.string(),
        username: Yup.string(),
        password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
      });

      
        const initialValues = {
            name: '',
            email: '',
            department: '',
            course: '',
            password: '',
        }

        const handleSubmit = (values: any) => {
            console.log(values);
            const response = axios.patch('http://localhost:3001/user/1',values  )
          };

      
    if (!isOpen) return null

    return (
        <div className={styles.modalPrincipal}>
            <div className={styles.modal2}>
                <button className={styles.x} onClick={onClose}>X</button>
                <div className={styles.inputs}>
                    <img src="/morty.png" className="rounded-full h-36 w-36 mx-auto" alt="Morty" />
                    <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({errors, })=> (
                <Form className="flex flex-col">
                    {JSON.stringify(errors)}
                  <div className="mb-4">
                    <Field
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Nome"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
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
                      name="course"
                      type="text"
                      id="course"
                      placeholder="Curso"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      name="department"
                      type="text"
                      id="department"
                      placeholder="Departamento"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Nova senha"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                    <div className="mt-10 flex space-x-5 justify-center px-10">
                      <button
                        type="submit"
                        className="w-1/3 bg-emerald-200 text-blue-950 border border-blue-950 py-3 px-0 mt-4 rounded-md hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </Form>)}
              </Formik>
                </div>
            </div>
        </div>
    );
}
