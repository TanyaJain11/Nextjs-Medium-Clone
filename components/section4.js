
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
