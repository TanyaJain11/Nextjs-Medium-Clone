
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"
import { useState ,useEffect} from 'react';


// export default function section1() {

//     const { data, isLoading, isError } = fetcher('api/trendingPosts')
    
//     if(isLoading) return <Spinner></Spinner>;
//     if(isError) return <Error></Error>

//     SwiperCore.use([Autoplay])

//     const bg = {
//         background: "url('/imgs/banner.png') no-repeat",
//         backgroundPosition: "right"
//     }

//   return (
//     <section className="py-16" style={bg}>
//         <div className="container mx-auto md:px-20">
//             <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

//             <Swiper
//                 slidesPerView={1}
//                 // loop={true}
//                 // autoplay= {{
//                 //     delay: 2000
//                 // }}
//                 >
//                 {
//                     data.map((value, index) => (
//                         <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
//                     ))
//                 }
//             ...
//             </Swiper>

            
//         </div>
//     </section>
//   )
// }

// function Slide({ data }){

//     const { id, title, category, img, published, description ,author } = data;

//     return (
//         <div className="grid md:grid-cols-2">
//             <div className="img">
//                 <Link href={`/posts/${id}`}><img src={img || "/"} width={600} height={600} /></Link>
//             </div>
//             <div className="info flex justify-center flex-col">
//                 <div className="cat">
//                     <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
//                     <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</Link>
//                 </div>
//                 <div className="title">
//                     <Link href={`/posts/${id}`} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</Link>
//                 </div>
//                 <p className="text-gray-500 py-3">
//                     {description || "description"}
//                 </p>
//                 { author ? <Author></Author> : <></>}
//             </div>
//         </div>
//     )
// }

// import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Section1() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get('/api/trendingPosts');
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching trending posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 1000
          }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  console.log("daaaaaaaaaaaa",data);
  const { _id, title, category, image, published, description, author } = data;
console.log("idddddddd",_id);
  return (
    <div className="grid md:grid-cols-2">
      <div className="img">
        {/* <p>{img}</p> */}
        <Link href={`/posts/${_id}`}>

          <img src={image || '/'} width={500} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">
            {category || 'Unknown'}
          </Link>
          <Link href={`/posts/${_id}`} className="text-gray-800 hover:text-gray-600">
            - {published || 'Unknown'}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${_id}`} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
            {title || 'Unknown'}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || 'description'}</p>
        {author ?<Author {...author} /> : <></>}
      </div>
    </div>
  );
}
