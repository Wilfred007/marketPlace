import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';


function Navbar() {
  return (
    <div className='flex justify-between p-5 shadow-lg'>
        <div>
            <h1 className='text-blue-600 text-xl font-bold'>HouseHub</h1>
        </div>
        <div className='flex gap-5'>
            <a href="" className='hover:text-blue-500 text-gray-800 font-mono'>About</a>
            <a href="" className='hover:text-blue-500 text-gray-800 font-mono'>Buy</a>
            <a href="" className=' hover:text-blue-500 text-gray-800 font-mono'>Sell</a>
        </div>
        <div>
        <ConnectButton />
        </div>
    </div>
  )
}

export default Navbar