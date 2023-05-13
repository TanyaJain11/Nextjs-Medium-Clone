import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

const section3 = () => {
  return (
    <section className='container mx-auto md:px-20 py-16'>
          <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>
           <Swiper
             slidesPerView={2}
           >
            
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper> 
      
    </section>
  )
}

export default section3


function Post(){
    return(
        <div className='grid'>
            <div className='images'>
            <Link href={"/"}>
                <Image src={"/images/hack.jpg"} width={600} height={400}/></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={"/"} className='text-orange-300 hover:text-orange-300'>wertyujikl</Link>
                    <Link href={"/"} className='text-orange-300 hover:text-orange-300'>--october 2023</Link>
                </div>
                <div className='title'>
                        <Link href={"/"} className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'> Elit fugiat cupidatat veniam reprehenderi
                        </Link>
                </div>
                <p className='text-gray-500 py-3'>Ullamco laborum amet esse labore in nisi anim.prehenderit exercitation.prehenderit exercitation.prehenderit exercitation.prehenderit exercitation.prehenderit exercitation.</p>
                <Author ></Author>
            </div>
        </div>
    )
}
