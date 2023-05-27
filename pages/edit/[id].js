// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSession } from 'next-auth/react';

// const Edit = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { data } = useSession();
//   const user = data?.user;

//   const [title, setTitle] = useState('');
//   const [subtitle, setSubtitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [img, setimg] = useState('');
//   const [description, setDescription] = useState('');
//   const [published, setPublished] = useState('');
//   const [authorName, setAuthorName] = useState('');
//   const [authorimg, setAuthorimg] = useState('');
//   const [authorDesignation, setAuthorDesignation] = useState('');

//   useEffect(() => {
//     const fetchBlogPost = async () => {
//       try {
//         const response = await axios.get(`/api/getPost?id=${id}`);
//         const blogPost = response.data;
//         setTitle(blogPost.title);
//         setSubtitle(blogPost.subtitle);
//         setCategory(blogPost.category);
//         setimg(blogPost.img);
//         setDescription(blogPost.description);
//         setPublished(blogPost.published);
//         setAuthorName(blogPost.author.name);
//         setAuthorimg(blogPost.author.img);
//         setAuthorDesignation(blogPost.author.designation);
//       } catch (error) {
//         console.error('Error fetching blog post:', error);
//       }
//     };

//     if (id) {
//       fetchBlogPost();
//     }
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       title,
//       subtitle,
//       category,
//       img,
//       description,
//       published,
//       author: {
//         name: user?.name,
//         email: user?.email,
//         img: authorimg,
//         designation: authorDesignation,
//       },
//     };

//     try {
//       const response = await axios.put(`/api/updatePost?id=${id}`, formData);
//       console.log('Blog post updated:', response.data);
//       toast.success('Update successfully', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'dark',
//       });
//     } catch (error) {
//       console.error('Error updating blog post:', error);
//     }
//   };

//   return (
//     <div className="grid h-screen place-items-center mx-12">
//       <ToastContainer />

//       <form className="w-full" onSubmit={handleSubmit}>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
//               Title
//             </label>
//             <input
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-title"
//               name="title"
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subtitle">
//               Subtitle
//             </label>
//             <input
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-subtitle"
//               name="subtitle"
//               type="text"
//               placeholder="Subtitle"
//               value={subtitle}
//               onChange={(e) => setSubtitle(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Add more input fields for other properties */}

//         <div className="flex justify-end">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Update
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Edit;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSession();
  const user = data?.user;

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [img, setimg] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorimg, setAuthorimg] = useState('');
  const [authorDesignation, setAuthorDesignation] = useState('');

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`/api/getPost?id=${id}`);
        const blogPost = response.data;
        setTitle(blogPost.title);
        setSubtitle(blogPost.subtitle);
        setCategory(blogPost.category);
        setimg(blogPost.img);
        setDescription(blogPost.description);
        setPublished(blogPost.published);
        setAuthorName(blogPost.author.name);
        setAuthorimg(blogPost.author.img);
        setAuthorDesignation(blogPost.author.designation);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      subtitle,
      category,
      img,
      description,
      published,
      author: {
        name: user?.name,
        email: user?.email,
        img: authorimg,
        designation: authorDesignation,
      },
    };

    try {
      const response = await axios.put(`/api/updatePost?id=${id}`, formData);
      console.log('Blog post updated:', response.data);
      toast.success('Update successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  return (
    <div className="grid h-screen place-items-center mx-12">
      <ToastContainer />

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-title"
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subtitle">
              Subtitle
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-subtitle"
              name="subtitle"
              type="text"
              placeholder="Subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
              Category
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-category"
              name="category"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-img">
              img URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-img"
              name="img"
              type="text"
              placeholder="img URL"
              value={img}
              onChange={(e) => setimg(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-description"
              name="description"
              rows="6"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-published">
              Published Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-published"
              name="published"
              type="date"
              placeholder="Published Date"
              value={published}
              onChange={(e) => setPublished(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-author-name">
              Author Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-author-name"
              name="authorName"
              type="text"
              placeholder="Author Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-author-img">
              Author img URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-author-img"
              name="authorimg"
              type="text"
              placeholder="Author img URL"
              value={authorimg}
              onChange={(e) => setAuthorimg(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-author-designation">
              Author Designation
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-author-designation"
              name="authorDesignation"
              type="text"
              placeholder="Author Designation"
              value={authorDesignation}
              onChange={(e) => setAuthorDesignation(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;

