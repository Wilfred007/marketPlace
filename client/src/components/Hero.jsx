import Image from 'next/image'
import React from 'react'



function Hero() {
  return (
    <div className='flex justify-between flex-col container space-x-5 md:flex-row'>
      <div className='leading-3  p-10'>
        <h1 className='text-3xl font-bold'><span className='text-3xl text-amber-700'>Find</span> <span className='text-gray-800'>the best houses</span> </h1><br />
        <h1 className='text-xl md:text-2xl font-bold text-gray-800'>Own a piece of the city</h1>
        <div className='mt-5 leading-6'>
          <p className='text-gray-700'>A decentralized house listing application where owners can list their houses for sale and buyers can pay to own</p>
        </div>
        <div className='mt-10'>
        <a className='mt-10 rounded-md bg-blue-950 text-white py-2 px-3 cursor-pointer'>Find More</a>
        </div>


    </div>
      <div className='w-full'>
        <Image
          src='/house.jpg'
          height={600}
          width={600}
          alt='Hero'
          className='rounded-md'
        />
      </div>
    </div>
  )
}

export default Hero