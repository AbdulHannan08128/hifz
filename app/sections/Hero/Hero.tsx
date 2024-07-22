import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';

const Hero = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-blue-200'>
      <Navbar/>
      <p className='mt-4 text-2xl text-gray-800 text-center font-light'>
        Join us to excel in your educational journey with interactive and engaging Quranic classes.
      </p>
      <div className='flex gap-6 lg:flex-row flex-col mt-6'>
        <button className='px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white text-lg font-medium rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300'>
          Login(T)
        </button>
        <button className='px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white text-lg font-medium rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300'>
          Login(S)
        </button>
      </div>
      <div className='mt-10 flex items-center'>
        <span className='w-24 border-t border-gray-400'></span>
        <p className='text-gray-500 mx-4'>or</p>
        <span className='w-24 border-t border-gray-400'></span>
      </div>
      <button className='mt-4 px-8 py-3 bg-white text-lg font-medium text-gray-800 border border-gray-300 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300'>
        Register
      </button>
    </div>
  );
}

export default Hero;
