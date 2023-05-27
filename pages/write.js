// import React from 'react'
// import { useRouter } from 'next/router';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
// import axios from 'axios';

// import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';
import { useSession, signOut, SessionProvider } from "next-auth/react";
import Format from '../layout/format'
const write = () => {
  const { data} = useSession();
  const user = data?.user;

     console.log("ddddddddddaaaa",user?.name)

    // console.log("dataaa",data.user.name);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [img, setimg] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorimg, setAuthorimg] = useState("");
  const [authorDesignation, setAuthorDesignation] = useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log("write",img)
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
      const response = await axios.post("/api/addPost", formData);
      console.log("New blog post saved:", response.data);
      toast.success('save successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } catch (error) {
      console.error("Error saving blog post:", error);
    }

    // Reset form fields
    setTitle("");
    setSubtitle("");
    setCategory("");
    setimg("");
    setDescription("");
    setPublished("");
    setAuthorName("");
    setAuthorimg("");
    setAuthorDesignation("");
  };

  const handleImg = async (files) => {
    const data = new FormData()
    // console.log(files)
    data.append("file", files[0])
    data.append("upload_preset", "blogs_medium")
    // data.append("cloud_name", "dklbu3ywu")

    const response = await fetch("https://api.cloudinary.com/v1_1/codergirll/img/upload", {
      method: "post",
      body: data,
      mode: 'cors'
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setimg(data.url)
      console.log("")
    })
    console.log("write",response)
  }
  const handleAuthorImg = async (files) => {
    const data = new FormData()
    console.log(files)
    data.append("file", files[0])
    data.append("upload_preset", "blogs_medium")
    // data.append("cloud_name", "dklbu3ywu")

    const response = await fetch("https://api.cloudinary.com/v1_1/codergirll/img/upload", {
      method: "post",
      body: data,
      mode: 'cors'
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setAuthorimg(data.url)
      console.log("")
    })
    console.log(response)
  }
    
  return (
 
  <Format>
    <div className='grid h-screen place-items-center mx-12'>
      <ToastContainer/>

  <form class="w-full" onSubmit={handleSubmit}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-title">
        Title
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title"
      name='title' type="text" placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-subtitle">
        Subtitle
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subtitle" 
       value={subtitle}
       onChange={(e) => setSubtitle(e.target.value)}
      type="text" placeholder="subtitle"
      name="subtitle"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-category">
        Category
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="grid-title" type="text" placeholder="category"
       value={category}
       name='category'
       onChange={(e) => setCategory(e.target.value)}/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-img">
        img
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-img"
       type="file" placeholder="img"
       onChange={(e) => handleImg(e.target.files)} />
    {/* //    value={password}
    //    onChange={(e) => setPassword(e.target.value)}/> */}
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
      description
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"
       rows="4" cols="50" type="text" name="description" placeholder="description"
       value={description}
       onChange={(e) => setDescription(e.target.value)}/>
    </div>
  </div>
  <p className='text-center text-black-50 font-bold mt-1'>Author</p>

        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-name'
            >
              Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-name'
              type='text'
              placeholder={user?.name}
              name='name'
              value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-img'
            >
              img
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-img'
              name='img'
              type='file'
              placeholder='img'
              onChange={(e) => handleAuthorImg(e.target.files)} />
           
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-designation'
            >
              Designation
            </label>
            <input
              name='designation
'
className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
id='grid-designation'
type='text'
placeholder='Designation'
value={authorDesignation}
onChange={(e) => setAuthorDesignation(e.target.value)}

/>
</div>
</div>
<div className='text-center mt-8'>
<button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center">
     Publish
</button>
</div>
</form>

</div>
</Format>

  )
}



export default write
