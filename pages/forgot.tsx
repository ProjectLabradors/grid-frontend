/** @format */
import { useForm } from "react-hook-form";
import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import Image from 'next/image';
import {

  FaRegEnvelope,
} from 'react-icons/fa';
import { AiOutlineWarning } from 'react-icons/ai';

interface IFormInput {
  email: string;
  password: string;
}
  const Forgot: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();
  
  const onSubmit = (data: IFormInput) => { 
    alert(JSON.stringify(data));
  };



  
  return (
    <Layout title='Forgot password'>
       <form onSubmit={handleSubmit(onSubmit)}> 
      <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 bg-blockchain-pattern '>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <div className='bg-white rounded-2xl shadow-2xl flex w-1/4 max-w-2x4 '>
            <div className='m-16 p-8'>
              {/* Sign in section */}
              <div
                style={{
                  position: 'relative',
                  width: '180%',
                  height: '50px',
                  maxHeight: '50px',
                  maxWidth: '100%',
                  bottom: '5px'
                }}
              >
                <Image
                  src='/images/project_labrador_logo.png'
                  alt='Project Labrador'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div>
                <h2 className='text-3xl font-bold text-blue-500 ' >
                 Forgot Password
                </h2>
                <div className='border-2 w-10 border-blue-500 inline-block mb-2 '></div>
                <div className='flex justify-center mb-2 '>
                  
                </div>
                <p className='text-gray-500 my-3'>or use your email account</p>
                      
                <div className='flex flex-col items-center'>
                  <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 m-2' /> 
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-200 outline-none text-sm flex-1 "
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                  </div>
                  {errors?.email?.type === 'required' && (
                      <div className='text-left w-64 mb-1'>
                        {' '}
                        <p className='text-sm text-red-600 flex'>
                          <AiOutlineWarning className='text-sm mx-2 my-1' />{' '}
                          This field is required
                        </p>
                      </div>
                    )}
                    {errors?.email?.type === 'pattern' && (
                      <div className='text-left w-64 mb-1'>
                        {' '}
                        <p className='text-sm text-red-600 flex'>
                          <AiOutlineWarning className='text-sm mx-2 my-1' />{' '}
                          Please enter a valid email Id
                        </p>
                      </div>
                    )}
                    <input
                      type='submit'
                      className='border-2 cursor-pointer border-blue-500 text-blue-500 rounded-full px-12 p-3 mt-8 inline-block font-semibold hover:bg-blue-500 hover:text-white'
                      value='Reset password'
                    />
                
                </div>
              </div>
            </div>
            
          </div>
        </main>
      </div>
      </form>
    </Layout>

                    
  );
};

export default Forgot;



