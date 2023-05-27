// import Author from "./_child/author"
// import Link from "next/link"

// import fetcher from '../lib/fetcher'
// import Spinner from "./_child/spinner"
// import Error from "./_child/error"


// export default function section4() {

//     const { data, isLoading, isError } = fetcher('api/popular')
    
//     if(isLoading) return <Spinner></Spinner>;
//     if(isError) return <Error></Error>

//   return (
//     <section className="container mx-auto md:px-20 py-16">
//         <div className="grid lg:grid-cols-2">
//             <div className="item">
//                 <h1 className="font-bold text-4xl py-12">Business</h1>
//                 <div className="flex flex-col gap-6">
//                     {/* posts */}
//                     { data[1] ? <Post data={data[1]}></Post> : <></>}
//                     { data[2] ? <Post data={data[2]}></Post> : <></>}
//                     { data[3] ? <Post data={data[3]}></Post> : <></>}
//                 </div>
//             </div>
//             <div className="item">
//                 <h1 className="font-bold text-4xl py-12">Travel</h1>
//                 <div className="flex flex-col gap-6">
//                     { data[4] ? <Post data={data[4]}></Post> : <></>}
//                     { data[5] ? <Post data={data[5]}></Post> : <></>}
//                     { data[2] ? <Post data={data[2]}></Post> : <></>}
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// function Post({ data }){

//     const { _id, title, category, image, published, author } = data;

//     return (
//         <div className="flex gap-5">
//             <div className="img flex flex-col justify-start">
//                 <Link href={`/posts/${_id}`}><img src={image || ""}  className="rounded" width={300} height={250} /></Link>
//             </div>
//             <div className="info flex justify-center flex-col">
//                 <div className="cat">
//                     <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
//                     <Link href={`/posts/${_id}`} className="text-black-800 hover:text-black-600">- {published || ""}</Link>
//                 </div>
//                 <div className="title">
//                     <Link href={`/posts/${_id}`} className="text-xl font-bold text-black-800 hover:text-black-600">{title || "No Title"}</Link>
//                 </div>
//                 { author ? <Author {...author} /> : <></>}
//             </div>
//         </div>
//     )
// }



// import { useState } from 'react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
// // import 'swiper/components/navigation/navigation.min.css';
// // import 'swiper/components/pagination/pagination.min.css';
// import Author from "./_child/author";
// import Link from "next/link";
// import fetcher from '../lib/fetcher';
// import Spinner from "./_child/spinner";
// import Error from "./_child/error";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// export default function Section4() {
//   const { data, isLoading, isError } = fetcher('api/popular');
//   const [selectedCategory, setSelectedCategory] = useState('Business');

//   if (isLoading) return <Spinner />;
//   if (isError) return <Error />;

//   // Filter posts based on the selected category
//   const filteredData = data.filter((post) => post.category === selectedCategory);

//   return (
//     <section className=" bg-gray-100">
//       <div className="container mx-auto px-4 py-16">
//         {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
//           <div className="item">
//             <h1 className="font-bold text-4xl py-12 text-center">Categories</h1>
//             <Swiper
//               spaceBetween={5}
//               slidesPerView={5}
//               navigation
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay configuration
//               onSlideChange={(swiper) => {
//                 const category = swiper.slides[swiper.activeIndex].getAttribute('data-category');
//                 setSelectedCategory(category);
//               }}
//             >
//               <SwiperSlide data-category="Business">
//                 <div className="rounded bg-gray-300 flex items-center justify-center  h-15">
//                   <p className="text-2xl font-bold text-black-800">Business</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide data-category="Travel">
//                 <div className="rounded bg-gray-300 flex items-center justify-center  h-15">
//                   <p className="text-2xl font-bold text-black-800">Travel</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide data-category="Travel">
//                 <div className="rounded bg-gray-300 flex items-center justify-center h-15">
//                   <p className="text-2xl font-bold text-black-800">Travel</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide data-category="Travel">
//                 <div className="rounded bg-gray-300 flex items-center justify-center h-15">
//                   <p className="text-2xl font-bold text-black-800">Travel</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide data-category="Travel">
//                 <div className="rounded bg-gray-300 flex items-center justify-center h-15">
//                   <p className="text-2xl font-bold text-black-800">Travel</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide data-category="Travel">
//                 <div className="rounded bg-gray-300 flex items-center justify-center h-15">
//                   <p className="text-2xl font-bold text-black-800">Travel</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide data-category="Travel">
//                 <div className="rounded bg-gray-300 flex items-center justify-center h-15">
//                   <p className="text-2xl font-bold text-black-800">Travel</p>
//                 </div>
//               </SwiperSlide>
//               {/* Add more swiper slides for other categories */}
//             </Swiper>
//           </div>
        
//           {/* <div className="item">
//             <h1 className="font-bold text-4xl py-12">{selectedCategory}</h1>
//             <div className="flex flex-col gap-6">
//               {filteredData.map((post) => (
//                 <Post key={post._id} data={post} />
//               ))}
//             </div>
//           </div> */}
//          <div className="grid lg:grid-cols-2 mt-4">
//              <div className="item mt-5">
//                 <div className="flex flex-col gap-6">
//                      {/* posts */}
//                      { data[1] ? <Post data={data[1]}></Post> : <></>}                    
//                       { data[2] ? <Post data={data[2]}></Post> : <></>}                   
//                      { data[3] ? <Post data={data[3]}></Post> : <></>}
//                 </div>
//              </div>
//             <div className="item mt-5">
//                <div className="flex flex-col gap-6 mt-5">
//                     { data[4] ? <Post data={data[4]}></Post> : <></>}
//                     { data[5] ? <Post data={data[5]}></Post> : <></>}
//                      { data[2] ? <Post data={data[2]}></Post> : <></>}
//                 </div>
//              </div>
//          </div>
//             </div>
          
      
//     </section>
//   );
// }

//  function Post({ data }){

//         const { _id, title, category, image, published, author } = data;
    
//         return (
//             <div className="flex gap-5">
//                 <div className="img flex flex-col justify-start">
//                     <Link href={`/posts/${_id}`}><img src={image || ""}  className="rounded" width={300} height={250} /></Link>
//                 </div>
//                 <div className="info flex justify-center flex-col">
//                     <div className="cat">
//                         <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
//                         <Link href={`/posts/${_id}`} className="text-black-800 hover:text-black-600">- {published || ""}</Link>
//                     </div>
//                     <div className="title">
//                         <Link href={`/posts/${_id}`} className="text-xl font-bold text-black-800 hover:text-black-600">{title || "No Title"}</Link>
//                     </div>
//                     { author ? <Author {...author} /> : <></>}
//                 </div>
//             </div>
//         )
//     }


import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Author from "./_child/author";
import Link from "next/link";
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Section4() {
  const { data, isLoading, isError } = fetcher('api/popular');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
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
