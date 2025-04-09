//about page

'use client'

import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
// import img from '/images/coding.jpg';
// import img from 'images/coding.jpg';


const page = () => {

  useEffect (() => {

      document.title = "Hunting Coder - About";

  },[]) 


  return (
<>

    <div className='relative mx-auto mb-[20%] w-[50%] aspect-[16/9] mt-[8vh] hover:rounded-4xl overflow-hidden select-none transition-all duration-300' style={{border:"1px solid white"}}>

       <Image src="/images/coding.jpg" fill={true} alt='Coding' className='absolute object-cover'/>


    </div>

  </>
  )
}

export default page;
