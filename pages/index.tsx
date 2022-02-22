/** @format */

import React, { useState } from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import Image from 'next/image';
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiOutlineWarning } from 'react-icons/ai';
import NextLink from "next/link";
import { Link as MUILink } from "@material-ui/core";
import axios from 'axios';

interface IFormInput {
  email: string;
  password: string;
}

const IndexPage: NextPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [serverError, setServerError] = useState('');
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let body = {
      email: data.email,
      password: data.password,
    };
    axios
      .post(process.env.BACKEND_URL + 'auth', body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setServerError('Invalid email or password');
        }
      });
  };

  return (
    <Layout title='Login'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 bg-blockchain-pattern'>
          <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
              <div className='w-3/5 p-5'>
                {/* Sign in section */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '50px',
                    maxHeight: '50px',
                    maxWidth: '100%',
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
                  <h2 className='text-3xl font-bold text-blue-500'>
                    Sign in to Account
                  </h2>
                  <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>
                  <div className='flex justify-center my-2'>
                    <a
                      href='#'
                      className='border-2 border-gray-200 rounded-full p-3 mx-1'
                    >
                      <FaFacebookF className='text-sm' />
                    </a>
                    <a
                      href='#'
                      className='border-2 border-gray-200 rounded-full p-3 mx-1'
                    >
                      <FaLinkedin className='text-sm' />
                    </a>
                    <a
                      href='#'
                      className='border-2 border-gray-200 rounded-full p-3 mx-1'
                    >
                      <FaGoogle className='text-sm' />
                    </a>
                  </div>
                  <p className='text-gray-500 my-3'>
                    or use your email account
                  </p>
                  {serverError && <p className='text-sm text-red-600 text-center'>{serverError}</p>}
                  <div className='flex flex-col items-center'>
                    <div className='bg-gray-200 w-64 p-2 flex items-center mb-2'>
                      <FaRegEnvelope className='text-gray-400 m-2' />
                      <input
                        type='text'
                        placeholder='Email'
                        className='bg-gray-200 outline-none text-sm flex-1'
                        {...register('email', {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        onKeyUp={e => setServerError('')}
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
                    <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                      <MdLockOutline className='text-gray-400 m-2' />
                      <input
                        type={passwordShown ? 'text' : 'password'}
                        placeholder='Password'
                        className='bg-gray-200 outline-none text-sm flex-1'
                        {...register('password', {
                          required: true,
                        })}
                        onKeyUp={e => setServerError('')}
                      />
                      {passwordShown ? (
                        <FaEyeSlash
                          className='text-gray-600 m-2 hover:text-blue-500'
                          onClick={togglePasswordVisiblity}
                        />
                      ) : (
                        <FaEye
                          className='text-gray-600 m-2 hover:text-blue-500'
                          onClick={togglePasswordVisiblity}
                        />
                      )}
                    </div>

                    {errors?.password?.type === 'required' && (
                      <div className='text-left w-64 mb-1'>
                        {' '}
                        <p className='text-sm text-red-600 flex'>
                          <AiOutlineWarning className='text-sm mx-2 my-1' />{' '}
                          This field is required
                        </p>{' '}
                      </div>
                    )}
                    <div className='flex justify-between w-64 mb-5 mt-3'>
                      <label className='flex items-center text-xs'>
                        <input
                          type='checkbox'
                          name='remember'
                          className='mr-1'
                        />{' '}
                        Remember me
                      </label>
                      <a href='#' className='text-xs'>
                        Forgot Password?
                      </a>
                    </div>
                    <input
                      type='submit'
                      className='border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold bg-white hover:bg-blue-500 hover:text-white'
                      value='Sign In'
                    />
                  </div>
                </div>
              </div>
              <div className='w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-32 px-12'>
                {/* Sign up section */}
                <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
                <div className='border-2 w-10 border-white inline-block mb-2'></div>
                <p className='mb-10'>
                  Fill up your information and start journey with us.
                </p>
                <NextLink href="register">
                  <MUILink className="border-2 text-white border-white rounded-full px-12 py-2 inline-block cursor-pointer hover:text-blue-500 font-semibold hover:bg-white hover:no-underline">
                    Sign Up
                  </MUILink>
                </NextLink>
              </div>
            </div>
          </main>
        </div>
      </form>
    </Layout>
  );
};

export default IndexPage;
