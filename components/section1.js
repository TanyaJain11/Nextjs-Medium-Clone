// // import React from 'react'
// // import Image from 'next/image'
// // import Link from 'next/link'
// // import Author from './_child/author'
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import SwiperCore,{Autoplay} from 'swiper';

// // // Import Swiper styles
// // import 'swiper/css';
// // import { ToastContainer } from 'react-toastify';

// // const section1 = () => {
// //     SwiperCore.use([Autoplay])
// //   return (
// //     <section className='py-16'>
      
// //         <div className='container mx-auto mx:px-20'>
// //             <h1 className='font-bold text-4xl pb-12 text-center'>
// //              Trending
// //             </h1>
// //             <Swiper
// //             loop={true}
// //       slidesPerView={1}
// //       autoplay={{
// //         delay:3000
// //       }}
// //     >
// //       <SwiperSlide> {Slide()}</SwiperSlide>
// //       <SwiperSlide> {Slide()}</SwiperSlide>
// //       <SwiperSlide> {Slide()}</SwiperSlide>
// //       <SwiperSlide> {Slide()}</SwiperSlide>
// //     </Swiper>
           
// //         </div>

// //     </section>
// //   )
// // }

// // export default section1

// // function Slide(){
// //     return(
// //         <div className='grid md:grid-cols-2'>
// //             <div className="image">
// //                 <Link href={"/"}>
// //                 <Image src={"/images/1im.jpg"} width={600} height={600}/></Link>
// //             </div>
// //             <div className='info flex justify-center flex-col'>
// //                 <div className='cat'>
// //                     <Link href={"/"} className='text-orange-300 hover:text-orange-300'>wertyujikl</Link>
// //                     <Link href={"/"} className='text-orange-300 hover:text-orange-300'>--october 2023</Link>
// //                 </div>
// //                 <div className='title'>
// //                         <Link href={"/"} className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'> Elit fugiat cupidatat veniam reprehenderit exercitation fugiat amet.
// //                         </Link>
// //                 </div>
// //                 <p className='text-gray-500 py-3'>Ullamco laborum amet esse labore in nisi anim.</p>
// //                 <Author ></Author>
// //             </div>
// //         </div>
// //     )
// // }


// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Author from './_child/author';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
// import 'swiper/css';
// import { ToastContainer } from 'react-toastify';

// SwiperCore.use([Autoplay]);

// const Section1 = () => {
//   const [trendingBlogs, setTrendingBlogs] = useState([]);

//   useEffect(() => {
//     fetchTrendingBlogs();
//   }, []);

//   const fetchTrendingBlogs = async () => {
//     try {
//       const response = await fetch('/api/trendingPosts');
//       const data = await response.json();
//       setTrendingBlogs(data);
//       console.log(trendingBlogs)
//     } catch (error) {
//       console.error('Error fetching trending blogs:', error);
//     }
//   };

//   return (
//     <section className='py-16'>
//       <div className='container mx-auto mx:px-20'>
//         <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
//         <Swiper loop={true} slidesPerView={1} autoplay={{ delay: 3000 }}>
//           {trendingBlogs.map((blog) => (
//             <SwiperSlide key={blog._id}>{Slide(blog)}</SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Section1;

// function Slide(blog) {
//   return (
//     <div className='grid md:grid-cols-2'>
//       <div className='image'>
//         <Link href={'/'}>
//           <Image src={'/images/1im.jpg'} width={600} height={600} />
//         </Link>
//       </div>
//       <div className='info flex justify-center flex-col'>
//         <div className='cat'>
//           <Link href={'/'} className='text-orange-300 hover:text-orange-300'>
//             {blog.category}
//           </Link>
//           <Link
//             href={'/'}
//             className='text-orange-300 hover:text-orange-300'
//           >
//             {blog.date}
//           </Link>
//         </div>
//         <div className='title'>
//           <Link
//             href={'/'}
//             className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'
//           >
//             {blog.title}
//           </Link>
//         </div>
//         <p className='text-gray-500 py-3'>{blog.description}</p>
//         <Author />
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { ToastContainer } from 'react-toastify';

SwiperCore.use([Autoplay]);

const Section1 = () => {
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    fetchTrendingBlogs();
  }, []);

  const fetchTrendingBlogs = async () => {
    try {
      const response = await fetch('/api/trendingPosts');
      const data = await response.json();
      setTrendingBlogs(data);
      console.log(trendingBlogs);
    } catch (error) {
      console.error('Error fetching trending blogs:', error);
    }
  };

  return (
    <section className='py-16'>
      <div className='container mx-auto mx:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
        <Swiper loop={true} slidesPerView={1} autoplay={{ delay: 3000 }}>
          {trendingBlogs.map((blog) => (
            <SwiperSlide key={blog._id}>{Slide(blog)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

function Slide(blog) {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='image'>
        <Link href={'/'}>
          <Image src={'/images/1im.jpg'} width={600} height={600} />
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={'/'} className='text-orange-300 hover:text-orange-300'>
            {blog.category}
          </Link>
          <Link
            href={'/'}
            className='text-orange-300 hover:text-orange-300'
          >
            {blog.date}
          </Link>
        </div>
        <div className='title'>
          <Link
            href={'/'}
            className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'
          >
            {blog.title}
          </Link>
        </div>
        <p className='text-gray-500 py-3'>{blog.description}</p>
        <Author />
      </div>
    </div>
  );
}
