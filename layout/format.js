import React from 'react'
import Head from 'next/head'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SessionProvider } from "next-auth/react";

const format = ({children}) => {
  return (
    <>
     <SessionProvider>
    <Head>
        <title>Blog</title>
    </Head>
      <Header></Header>
      
      <main>{children}</main>
      <Footer></Footer>
      </SessionProvider>
    </>
  )
}

export default format
