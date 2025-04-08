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

    <div className=' md:mt-[10%] md:mb-[10%] md:w-[250px] md:ml-[18%] lg:ml-[4%] xl:ml-[12.5%] xl:mt-[4.5%] xl:mb-[10%] 2xl:ml-[20.5%] 2xl:mt-[10%] flex items-center justify-center flex-col select-none transition-all' style={{border:"0px solid white"}}>

       <Image src="/images/coding.jpg" width={400} height={400} alt='Coding' className='md:mt[20%] object-cover lg:h-[250px] lg:w-[500px]'/>


    </div>

  </>
  )
}

export default page;
