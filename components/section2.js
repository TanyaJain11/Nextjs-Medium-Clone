import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';

const section2 = () => {
    // getPost().then(res=>console.log(res))
  return (
    <section className='conatiner mx-auto md:px-20 py-10'>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>

        <div className='grid md:grid-cols-2 lg:gid-cols-3 gap-14'>
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
      
    </section>
  )
}

export default section2


function Post(){
    return(
        <div className='item'>
            <div className='images'>
            <Link href={"/"}>
                <Image src={"/images/hack.jpg"} width={500} height={350} className="rounded"/></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
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
