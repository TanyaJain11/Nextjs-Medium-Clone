// import Link from "next/link";
// import { FaSignOutAlt } from "react-icons/fa";
// import { FaSignInAlt,FaPenAlt } from "react-icons/fa";

// import { useSession, signOut } from "next-auth/react";

// export default function header(){
//   const { data } = useSession();
//   console.log(data)
 

//   return (
//     <div>
//       <header className="bg-gray-50">

//         <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
//           <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0 ">
//             <input type="text" className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 
//             rounded-full text-sm shadow-sm placehoder-late-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Search..."/>
//           </div>
//           <div className="shrink w-80 sm:order-2">
//             <Link href={"/"} className="font-bold uppercase -3xl">Idea<span className="text-blue-600 ">Nex</span>
//             </Link>
//             <p className="text-orange-500">where ideas connect</p>
            
//           </div>
//           <div className="w-96 order-3 flex justify-center">
//             <div className="flex gap-6">
              
//             <img src={"/images/author/836.jpg"} width={60} height={60} className='rounded-full'/>
//                {/* {data?.user ? (Hi, {data?.user?.name})} */}
              
//               {/* <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row"> */}
//           {data?.user ? (
//             <>
            
//               <span style={{ marginRight: "15px" }} className="pt-4">
//               <Link href="/profile">
//                   Hi, {data?.user?.name}
//               </Link>
//               </span>

//               {/* <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
//                 {" "}
//                 Logout
//               </span> */}
//                <div className="pt-2"  onClick={() => signOut()}> <FaSignOutAlt color="#88888888"/>Logout</div>
//             </>
//           ) : (
//             // <span style={{ marginRight: "15px" }}>
//             //   {" "}
//             //   <Link className="nav-link" href="/login">
//             //     Login
//             //   </Link>
//             // </span>
//             <Link href={"/login"} className="pt-2"><FaSignInAlt/>Login</Link>
//           )}
//         {/* </div> */}
//             <Link href={"/write"} className="pt-2"><FaPenAlt/>Write</Link>
//             {/* <Link href={"/login"} className="pt-2"><FaSignInAlt/>Login</Link> */}
//             {/* <Link href={"/"} className="pt-2"> <FaSignOutAlt color="#88888888"/>Logout</Link> */}
//             </div>
//           </div>
//         </div>
        
//       </header>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaSignInAlt, FaPenAlt } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';
import Author from './_child/author'

export default function Header() {
  const { data } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 
            rounded-full text-sm shadow-sm placehoder-late-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="shrink w-80 sm:order-2">
            <Link href="/" className="font-bold uppercase -3xl">
              Idea<span className="text-blue-600">Nex</span>
            </Link>
            <p className="text-orange-500">where ideas connect</p>
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
              {/* <img
                src="/images/author/836.jpg"
                width={60}
                height={60}
                className="rounded-full"
              /> */}
              {data?.user ? (
                <>
                  <span style={{ marginRight: '15px' }} className="pt-4">
                    <Link href="/profile">Hi, {data?.user?.name}</Link>
                  </span>
                  <div className="pt-2" onClick={() => signOut()}>
                    <FaSignOutAlt color="#88888888" />
                    Logout
                  </div>
                </>
              ) : (
                <Link href="/login" className="pt-2">
                  <FaSignInAlt />
                  Login
                </Link>
              )}
              <Link href="/write" className="pt-2">
                <FaPenAlt />
                Write
              </Link>
            </div>
          </div>
        </div>
      </header>
      {searchResults.length > 0 && (
        // <div>
        //   {/* Render the search results section */}
        //   <h2>Search Results</h2>
        //   <ul>
        //     {searchResults.map((result) => (
        //       <li key={result._id}>
        //         {/* Display the relevant information from the search results */}
        //         <Link href={`/blog/${result._id}`}>
                  
        //             <h3>{result.title}</h3>
        //             <p>{result.description}</p>
                  
        //         </Link>
        //       </li>
        //     ))}
        //   </ul>
        // </div>
        //  <section className="container mx-auto md:px-20 py-10">
        //  <h1 className="font-bold text-4xl py-12 text-center">Search Posts</h1>
         <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Blogs Based On Search</h1>
         {searchResults.map((result,index) => 
             <Post data={result} key={index} />
           )}
         </div>
       </section>
      )}
    </div>
  );
}

function Post({ data }) {
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

