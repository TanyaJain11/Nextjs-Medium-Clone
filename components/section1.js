import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/author'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

const section1 = () => {
    SwiperCore.use([Autoplay])
  return (
    <section className='py-16'>
        <div className='container mx-auto mx:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>
             Trending
            </h1>
            <Swiper
            loop={true}
      slidesPerView={1}
      autoplay={{
        delay:3000
      }}
    >
      <SwiperSlide> {Slide()}</SwiperSlide>
      <SwiperSlide> {Slide()}</SwiperSlide>
      <SwiperSlide> {Slide()}</SwiperSlide>
      <SwiperSlide> {Slide()}</SwiperSlide>
    </Swiper>
           
        </div>

    </section>
  )
}

export default section1

function Slide(){
    return(
        <div className='grid md:grid-cols-2'>
            <div className="image">
                <Link href={"/"}>
                <Image src={"/images/1im.jpg"} width={600} height={600}/></Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={"/"} className='text-orange-300 hover:text-orange-300'>wertyujikl</Link>
                    <Link href={"/"} className='text-orange-300 hover:text-orange-300'>--october 2023</Link>
                </div>
                <div className='title'>
                        <Link href={"/"} className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'> Elit fugiat cupidatat veniam reprehenderit exercitation fugiat amet.
                        </Link>
                </div>
                <p className='text-gray-500 py-3'>Ullamco laborum amet esse labore in nisi anim.</p>
                <Author ></Author>
            </div>
        </div>
    )
}
