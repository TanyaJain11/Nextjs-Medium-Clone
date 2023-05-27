// import Link from "next/link"
// import Author from "./author"

// export default function Ralated() {

//     return (
//         <section className="pt-20">
//              <h1 className="font-bold text-3xl py-10">Related</h1>

//              <div className="flex flex-col gap-10">
//                 { Post() }
//                 { Post() }
//                 { Post() }
//                 { Post() }
//                 { Post() }
//              </div>
//         </section>
//     )
// }


// function Post(){
//     return (
//         <div className="flex gap-5">
//             <div className="img flex flex-col justify-start">
//                 <Link href={"/"} ><img src={"/imgs/img1.jpg"} className="rounded" width={300} height={200}></img></Link>
//             </div>
//             <div className="info flex justify-center flex-col">
//                 <div className="cat">
//                     <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
//                     <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2022</Link>
//                 </div>
//                 <div className="title">
//                     <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
//                 </div>
//                 <Author></Author>
//             </div>
//         </div>
//     )
// }


import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Author from '../_child/author'

export default function Ralated({ category, title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await axios.get(`/api/related-posts?category=${category}&title=${title}`);
        const posts = response.data;

        console.log('Fetched related posts:', posts);
        setRelatedPosts(posts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        setError('Error fetching related posts');
        setIsLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [category, title]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
        {relatedPosts.map((post) => (
          <Post key={post._id} data={post} />
        ))}
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
          <img src={image || ""} className="rounded" width={300} height={200} alt={title} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${_id}`} className="text-orange-600 hover:text-orange-800">
            {category || "No Category"}
          </Link>
          <Link href={`/posts/${_id}`} className="text-gray-800 hover:text-gray-600">
            - {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${_id}`} className="text-xl font-bold text-gray-800 hover:text-gray-600">
            {title || "No Title"}
          </Link>
        </div>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
