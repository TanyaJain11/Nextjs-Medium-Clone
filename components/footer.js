import React from 'react'
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSignInAlt,FaPenAlt } from "react-icons/fa";
import  Newsletter from './_child/newsletter'

const Footer = () => {
  return (
    <footer className='bg-gray-50'>
        <Newsletter></Newsletter>
       <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
            <div className='flex gap-6 justify-center'>
            <Link href={"/"}><FaPenAlt/>Write</Link>
            <Link href={"/"}><FaSignInAlt/>Login</Link>
            <Link href={"/"}> <FaSignOutAlt color="#88888888"/>Logout</Link>
            </div>
            <p className='py-5 text-gray-400'>Copyrigth @2023 All rights reserved</p>
            <p className='text-gray-400 text-center'>Terms & Conditions</p>
        </div>
       </div>
    </footer>
  )
}

export default Footer
