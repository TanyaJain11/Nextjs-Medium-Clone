// import Format from '../../layout/format'
// import Author from '../../components/_child/author'
// import Image from 'next/image'
// import Ralated from '../../components/_child/ralated'
// import getPost from '../../lib/helper'
// import fetcher from '../../lib/fetcher';
// import Spinner from '../../components/_child/spinner'
// import ErrorComponent from '../../components/_child/error'
// import { useRouter } from 'next/router'
// import { SWRConfig } from 'swr'

// export default function Page({ fallback }){

//     const router = useRouter()
//     const { postId } = router.query;
//     const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)

//     if(isLoading) return <Spinner></Spinner>
//     if(isError) return <ErrorComponent></ErrorComponent>

//     return (
//         <SWRConfig value={ { fallback }}>
//             <Article {...data}></Article>
//         </SWRConfig>
//     )

// }

// function Article({ title, img, subtitle, description, author }){

//     return (
//         <Format>
//             <section className='container mx-auto md:px-2 py-16 w-1/2'>
//                 <div className='flex justify-center'>
//                     { author ? <Author {...author}></Author> : <></>}
//                 </div>

//                 <div className="post py-10">
//                     <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>

//                     <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title"}</p>

//                     <div className="py-10">
//                         <Image src={img || "/"} width={900} height={600}></Image>
//                     </div>

//                     <div className="content text-gray-600 text-lg flex flex-col gap-4">
//                         {description || "No Description"}
//                     </div>

//                 </div>  

//                 <Ralated></Ralated>
//             </section>
//         </Format>
//     )
// }


// export async function getStaticProps( { params } ){
//     const posts = await getPost(params.postId)

//     return {
//        props : {
//             fallback : {
//                 '/api/posts' : posts
//             }
//        }
//     }
// }

// export async function getStaticPaths(){
//     const posts = await getPost();
//     const paths = posts.map(value => {
//         return {
//             params : {
//                 postId : value.id.toString()
//             }
//         }
//     })

//     return {
//         paths,
//         fallback : false
//     }

// }
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Format from '../../layout/format';
import Author from '../../components/_child/author';
import Image from 'next/image';
import Ralated from '../../components/_child/ralated';

export default function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    if (!postId) {
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        const post = response.data;

        console.log('Fetched post:', post);
        setPost(post);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error fetching post');
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { title, img, subtitle, description, author } = post || {};

  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author} /> : <></>}
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title || "No Title"}</h1>

          <p className="text-gray-500 text-xl text-center">{subtitle || "No Title"}</p>

          <div className="py-10">
            <Image src={img || "/"} width={900} height={600} />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || "No Description"}
          </div>
        </div>

        <Ralated />
      </section>
    </Format>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get('/api/posts');
    const posts = response.data;

    const paths = posts.map((value) => ({
      params: {
        postId: value._id.toString()
      }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      paths: [],
      fallback: false
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await axios.get(`/api/posts/${params.postId}`);
    const post = response.data;

    return {
      props: {
        post
      }
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: {
        post: null
      }
    };
  }
}
