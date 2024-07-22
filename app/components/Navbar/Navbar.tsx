import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='w-screen flex justify-center absolute top-3'>
        <nav className='w-[80vw] rounded-3xl h-20 p-3 shadow-md bg-white'>
            <ul>
                <li className='flex items-center gap-3'>
                    <Image src={'/logo/logo.png'} width={60} height={60} alt='LOGO' className=' rounded-full shadow-2xl'/> <span className='text-xl text-lime-500 font-bold'>Hifz Classes</span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar