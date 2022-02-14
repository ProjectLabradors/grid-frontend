/** @format */

import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import Image from 'next/image';
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from 'react-icons/fa';

import { MdLockOutline } from 'react-icons/md';

const IndexPage: NextPage = () => {
  return (
    <Layout title='Login'>
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
                <p className='text-gray-500 my-3'>or use your email account</p>
                <div className='flex flex-col items-center'>
                  <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 m-2' />
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='bg-gray-200 outline-none text-sm flex-1'
                    />
                  </div>
                  <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 m-2' />
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='bg-gray-200 outline-none text-sm flex-1'
                    />
                  </div>
                  <div className='flex justify-between w-64 mb-5'>
                    <label className='flex items-center text-xs'>
                      <input type='checkbox' name='remember' className='mr-1' />{' '}
                      Remember me
                    </label>
                    <a href='#' className='text-xs'>
                      Forgot Password?
                    </a>
                  </div>
                  <a
                    href='#'
                    className='border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white'
                  >
                    Sign In
                  </a>
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
              <a
                href='#'
                className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500'
              >
                Sign Up
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default IndexPage;
