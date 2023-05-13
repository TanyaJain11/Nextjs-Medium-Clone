import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

const section4 = () => {
  return (
    <section className='container mx-auto md:px-20 py-16'>
        <div className='grid lg:grid-cols-2'>
            <div className='item'>
            <h1 className='font-bold text-4xl py-12 text-center'>Business</h1>
            <div className='flex flex-col gap-6'>
                {Post()}
                {Post()}
                {Post()}
            </div>
            </div>
            <div className='item'>
            <h1 className='font-bold text-4xl py-12 text-center'>Business</h1>
            <div className='flex flex-col gap-6'>
                {Post()}
                {Post()}
                {Post()}
            </div>
            </div>
        </div>
    </section>
  )
}

export default section4


function Post(){
    return(
        <div className='flex gap-5'>
            <div className='image flex flex-col justify-start'>
            <Link href={"/"}>
                <Image src={"/images/hack.jpg"} width={300} height={300} className="rounded"/></Link>
            </div>
            <div className='info flex justify-center flex-col'>
            <div className='cat'>
                    <Link href={"/"} className='text-orange-300 hover:text-orange-300'>wertyujikl</Link>
                    <Link href={"/"} className='text-orange-300 hover:text-orange-300'>--october 2023</Link>
                </div>
                <div className='title'>
                        <Link href={"/"} className='text-xl font-bold text-gray-800 hover:text-gray-600'> Elit fugiat cupidatat veniam reprehenderi
                        </Link>
                </div>
                <p className='text-gray-500 py-3'>Ullamco laborum amet esse labore in nisi anim.prehenderit exercitation.prehenderit exercitation.prehenderit exercitation.prehenderit exercitation.prehenderit exercitation.</p>
                <Author ></Author>

            </div>
        </div>
    )
}