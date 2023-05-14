import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import { useState } from 'react';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login(){
    const router = useRouter()
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const submitHandler = async(e) => {
  e.preventDefault();
  
  try{
    const data = await signIn('credentials',{
      redirect:false,
      email,
      password
    })
    console.log(data)
    if(data.error==null){
        toast.success('Login successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    router.push('/');
    }else if(data.error=='Invalid Email or password'){
        // toast('error', { hideProgressBar: true, autoClose: 2000, type: 'success' })
        toast.error('Invalid Email or password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    // console.log(data)
  }catch(error){
    // toast(, { hideProgressBar: true, autoClose: 2000, type: 'success' })
    toast.error('Invalid Email or password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    console.log(error)
  }
};

    return (
        <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <ToastContainer/>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'  onSubmit={submitHandler}>
                <div className="input-group">
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input 
                    type="password"
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit'>
                        Login
                    </button>
                </div>
                {/* <div className="input-button">
                    <button type='submit'>
                        Sign In with Google
                    </button>
                </div>
                <div className="input-button">
                    <button type='submit'>
                        Sign In with Github
                    </button>
                </div> */}
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link href={'/register'}className='text-blue-700'>Sign Up</Link>
            </p>
        </section>

        </Layout>
    )
}