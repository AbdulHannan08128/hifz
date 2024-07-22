import React from 'react';

const Hero = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-100'>
      <h1 className='text-6xl text-green-600 animate-bounce w-screen text-center'>
        Welcome To Hifz Classes
      </h1>
      <p className='mt-4 text-xl text-gray-700 text-center'>
        Join us to excel in your educational journey with interactive and engaging quranic classes.
      </p>
      <button className='mt-6 px-6 py-2 bg-green-600 text-white text-lg rounded-full hover:bg-green-700 transition duration-300'>
        Get Started
      </button>
    </div>
  );
}

export default Hero;
