// // import { Swiper, SwiperSlide } from "swiper/react"
// // import Link from "next/link"
// // import img from "next/img"
// // import Author from "./_child/author"
// // import fetcher from '../lib/fetcher'
// // import Spinner from "./_child/spinner"
// // import Error from "./_child/error"

// // export default function section3() {

// //     const { data, isLoading, isError } = fetcher('api/popular')
    
// //     if(isLoading) return <Spinner></Spinner>;
// //     if(isError) return <Error></Error>

// //   return (
// //     <section className="container mx-auto md:px-20 py-16">
// //         <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

// //         {/* swiper */}
// //         <Swiper
// //             breakpoints={{
// //                 640 : {
// //                     slidesPerView: 2,
// //                     spaceBetween: 30
// //                 }
// //             }}
// //         >
// //             {
// //                     data.map((value, index) => (
// //                         <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
// //                     ))
// //             }
// //         </Swiper>

// //     </section>
// //   )
// // }


// // function Post({ data }){

// //     const { id, title, category, img, description, published, author } = data;

// //     return (
// //         <div className="grid">
// //             <div className="imgs">
// //                 <Link href={`/posts/${id}`}><img src={img || ""} width={600} height={400} /></Link>
// //             </div>
// //             <div className="info flex justify-center flex-col py-4">
// //                 <div className="cat">
// //                     <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
// //                     <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || ""}</Link>
// //                 </div>
// //                 <div className="title">
// //                     <Link href={`/posts/${id}`} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</Link>
// //                 </div>
// //                 <p className="text-gray-500 py-3">
// //                 {description || "No Description"}
// //                 </p>
// //                 { author ? <Author></Author> : <></>}
// //             </div>
// //         </div>
// //     )
// // }


// // export default function section3() {
// //     const [data, setData] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [isError, setIsError] = useState(false);
  
// //     useEffect(() => {
// //       const fetchData = async () => {
// //         try {
// //           const response = await axios.get('/api/popular');
// //           setData(response.data);
// //         } catch (error) {
// //           setIsError(true);
// //           console.error('Error fetching popular posts:', error);
// //         } finally {
// //           setIsLoading(false);
// //         }
// //       };
  
// //       fetchData();
// //     }, []);
  
// //     if (isLoading) return <Spinner />;
// //     if (isError) return <Error />;
  
// //     return (
// //       <section className="container mx-auto md:px-20 py-16">
// //         <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
  
// //         {/* swiper */}
// //         <Swiper
// //           breakpoints={{
// //             640: {
// //               slidesPerView: 2,
// //               spaceBetween: 30,
// //             },
// //           }}
// //         >
// //           {data.map((value, index) => (
// //             <SwiperSlide key={index}>
// //               <Post data={value} />
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </section>
// //     );
// //   }


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Link from 'next/link';

// import Author from './_child/author';
// import Spinner from './_child/spinner';
// import Error from './_child/error';

// export default function Section3() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/popular');
//         setData(response.data);
//       } catch (error) {
//         setIsError(true);
//         console.error('Error fetching popular posts:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) return <Spinner />;
//   if (isError) return <Error />;

//   return (
//     <section className="container mx-auto md:px-20 py-16">
//       <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

//       {/* swiper */}
//       <Swiper
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         {data.map((value, index) => (
//           <SwiperSlide key={index}>
//             <Post data={value} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// function Post({ data }) {
//     // console.log("dddddddddddd",data);
//   const { _id, title, category, image, description, published, author } = data;

//   return (
//     <div className="grid">
//       <div className="imgs">
//         <Link href={`/posts/${_id}`}>
//           <img src={image || ''} width={600} height={400} />
//         </Link>
//       </div>
//       <div className="info flex justify-center flex-col py-4">
//         <div className="cat">
//           <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">
//             {category || 'No Category'}
//           </Link>
//           <Link href={`/posts/${_id}`} className="text-gray-800 hover:text-gray-600">
//             - {published || ''}
//           </Link>
//         </div>
//         <div className="title">
//           <Link href={`/posts/${_id}`} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
//             {title || 'No Title'}
//           </Link>
//         </div>
//         <p className="text-gray-500 py-3">{description || 'No Description'}</p>
//         {author ? <Author {...author} /> : <></>}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import axios from 'axios';
import Author from "./_child/author";
import Link from "next/link";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Section4() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/popular');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      if (selectedCategory === 'All') {
        setFilteredData(data.slice(0, 6));
      } else {
        const filteredPosts = data.filter((post) => post.category === selectedCategory);
        setFilteredData(filteredPosts.slice(0, 6));
      }
    }
  }, [selectedCategory, data]);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  const categories = ['All', ...new Set(data.map((post) => post.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Categories</h1>
          <div className="flex justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 mx-2 rounded-md ${
                  selectedCategory === category
                    ? 'bg-gray-300 text-black-800'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="item">
            <h1 className="font-bold text-4xl py-12">
              {selectedCategory === 'All' ? 'Popular Blogs' : `Popular ${selectedCategory} Blogs`}
            </h1>
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredData.map((post) => (
                <Post key={post._id} data={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { _id, title, category, image, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="img flex flex-col justify-start">
        <Link href={`/posts/${_id}`}>
          <img src={image || ""} className="rounded" width={300} height={250} alt={title} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">
            {category || "No Category"}
          </Link>
          <Link href={`/posts/${_id}`} className="text-black-800 hover:text-black-600">
            - {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${_id}`} className="text-xl font-bold text-black-800 hover:text-black-600">
            {title || "No Title"}
          </Link>
        </div>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
