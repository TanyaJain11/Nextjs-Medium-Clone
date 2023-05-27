import React from 'react'
import Link from 'next/link'

import Author from './author'


const related = () => {
  return (
    <section className='pt-20'>
        <h1 className='font-bold text-3xl py-10'>Realted</h1>
        <div className='flex flex-col gap-10'>
             {Post()}
             {Post()}
             {Post()}
        </div>
    </section>
  )
}

export default related

function Post(){
    return (
        <div className='flex gap-5'>
            <div className='img flex flex-col justify-start'>
            <Link href={"/"}>
                <img src={"/imgs/hack.jpg"} width={300} height={200} className="rounded"/></Link>
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

