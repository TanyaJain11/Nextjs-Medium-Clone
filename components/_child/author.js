// import React from 'react'
//
// import Link from 'next/link'
// const author = () => {
//   return (
//     <div className='author flex py-5'>
//       <img src={"/imgs/author/836.jpg"} width={60} height={60} className='rounded-full'></img>
//       <div className='flex flex-col justify-center px-4'>
//         <Link href={"/"} className='text-md font-bold text-gray-800 hover:text-grey-400'>Flying h </Link>
//             <span className='text-sm text-gray-500'>ceo and founder</span>
       
//       </div>
//     </div>
//   )
// }

// export default author
import React from 'react';

import Link from 'next/link';

const Author = ({ name, email, img,designation }) => {
  
  return (
    <div className='author flex py-5'>
      {/* <p>{img}</p> */}
      <img src={img} width={60} height={60} className='rounded-full' />
      <div className='flex flex-col justify-center px-4'>
        <Link href={"/"} className='text-md font-bold text-gray-800 hover:text-grey-400'>
          {name}
        </Link>
        <span className='text-sm text-gray-500'>{designation}</span>
      </div>
    </div>
  );
};

export default Author;

