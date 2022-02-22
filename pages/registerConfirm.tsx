/** @format */

import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';



const RegisterConfirm: NextPage = () => {
  return (
    <Layout title='Registered'>
      <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 bg-blockchain-pattern '>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <div className='bg-white rounded-2x1 shadow-2xl flex w-1/2 max-w-2x4 '>
            <div className='m-12 p-1'>
              {/* Sign in section */}
              <div
          
              >
        
              </div>
              <div> 
                <h2 className='text-3xl font-bold text-blue-500 pl-32 mt-3 ' >
                 Thank you for registering with us!
                </h2>
               
                <div className='flex justify-center mb-4 '>
                  
                </div>
              
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default RegisterConfirm;
