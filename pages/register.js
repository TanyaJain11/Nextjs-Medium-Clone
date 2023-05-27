import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Register(){
    const router = useRouter()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  
    const submitHandler = async(e) => {
      e.preventDefault();
      console.log(name,email,password);
  
      try{
          const {data} = await axios.post('/api/register',{
            name,email,password
          })
          router.push('/login')
          console.log(data);
      }catch(error){
          console.log(error);
      }
    };
    return (
        <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'  onSubmit={submitHandler}>
            <div className="input-group">
                    <input 
                    type="name"
                    name='name'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                        Register
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
               Already have account? <Link href={'/login'}className='text-blue-700'>Sign In</Link>
            </p>
        </section>

        </Layout>
    )
}