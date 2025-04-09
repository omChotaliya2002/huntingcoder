// contact page :

'use client'

import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';

const page = () => {

  useEffect(() => {
      document.title = "Hunting Coder - Contact Us";
  })

  return (
<>
  <div className='relative flex items-center justify-center h-[300px] mt-[8%] flex-col select-none transition-all' style={{border:"2px solid white"}}>
      
      <div className='absolute top-[10%] w-fit h-[40px]' style={{border:"1px solid white"}}>  
          <p className='text-[25px] font-semibold' style={{border:"1px solid white"}}> Find us on  </p>       
      </div>


      <ul className='flex flex-row items-center justify-center social-platforms absolute w-full h-[60px] bg-blue-200' style={{border:"2px solid yellow"}}>

          
            <Image src="/images/github.svg" width={100} height={100} alt='github' className='w-[70px] h-[60px] sm:mx-[10px] md:mx-[10px] lg:mx-[15px] xl:mx-[35px] 2xl:mx-[50px] cursor-pointer hover:scale-110'/>
        

         
            <Image src="/images/fb.svg" width={100} height={100} alt='facebook' className='h-[60px] w-[60px] sm:mx-[10px] md:mx-[10px] lg:mx-[15px] xl:mx-[35px] 2xl:mx-[50px] cursor-pointer hover:scale-110'/>


          
            <Image src="/images/Twitter.svg" width={100} height={100} alt='twitter' className='h-[65px] w-[65px] sm:mx-[10px] md:mx-[10px] lg:mx-[15px] xl:mx-[35px] 2xl:mx-[50px] cursor-pointer hover:scale-110'/>
        

         
            <Image src="/images/wordpress.svg" width={200} height={200} alt='wordpress' className='h-[40px] w-[40px] sm:mx-[20px] md:mx-[10px] lg:mx-[15px] xl:mx-[35px] 2xl:mx-[50px] cursor-pointer hover:scale-110'/>

      </ul>

    </div>

    </>
  )
}

export default page;