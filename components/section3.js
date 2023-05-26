// import { Swiper, SwiperSlide } from "swiper/react"
// import Link from "next/link"
// import Image from "next/image"
// import Author from "./_child/author"
// import fetcher from '../lib/fetcher'
// import Spinner from "./_child/spinner"
// import Error from "./_child/error"

// export default function section3() {

//     const { data, isLoading, isError } = fetcher('api/popular')
    
//     if(isLoading) return <Spinner></Spinner>;
//     if(isError) return <Error></Error>

//   return (
//     <section className="container mx-auto md:px-20 py-16">
//         <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

//         {/* swiper */}
//         <Swiper
//             breakpoints={{
//                 640 : {
//                     slidesPerView: 2,
//                     spaceBetween: 30
//                 }
//             }}
//         >
//             {
//                     data.map((value, index) => (
//                         <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
//                     ))
//             }
//         </Swiper>

//     </section>
//   )
// }


// function Post({ data }){

//     const { id, title, category, img, description, published, author } = data;

//     return (
//         <div className="grid">
//             <div className="images">
//                 <Link href={`/posts/${id}`}><Image src={img || ""} width={600} height={400} /></Link>
//             </div>
//             <div className="info flex justify-center flex-col py-4">
//                 <div className="cat">
//                     <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
//                     <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || ""}</Link>
//                 </div>
//                 <div className="title">
//                     <Link href={`/posts/${id}`} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</Link>
//                 </div>
//                 <p className="text-gray-500 py-3">
//                 {description || "No Description"}
//                 </p>
//                 { author ? <Author></Author> : <></>}
//             </div>
//         </div>
//     )
// }


// export default function section3() {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError, setIsError] = useState(false);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get('/api/popular');
//           setData(response.data);
//         } catch (error) {
//           setIsError(true);
//           console.error('Error fetching popular posts:', error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     if (isLoading) return <Spinner />;
//     if (isError) return <Error />;
  
//     return (
//       <section className="container mx-auto md:px-20 py-16">
//         <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
  
//         {/* swiper */}
//         <Swiper
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//           }}
//         >
//           {data.map((value, index) => (
//             <SwiperSlide key={index}>
//               <Post data={value} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     );
//   }


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function Section3() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/popular');
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching popular posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
    // console.log("dddddddddddd",data);
  const { _id, title, category, img, description, published, author } = data;

  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${_id}`}>
          <Image src={img || ''} width={600} height={400} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">
            {category || 'No Category'}
          </Link>
          <Link href={`/posts/${_id}`} className="text-gray-800 hover:text-gray-600">
            - {published || ''}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${_id}`} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
            {title || 'No Title'}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || 'No Description'}</p>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}
