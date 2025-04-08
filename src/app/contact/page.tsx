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
    <div className='flex relative items-center justify-center flex-col md:mb-[30%] md:mt-[15%] xl:mb-[20%] select-none transition-all' style={{border:"0px solid white"}}>
       <p className='text-[25px] md:mb-[20%] md:mx-auto font-semibold 2xl:mb-[10%]' style={{border:"1px solid white"}}> Find us on  </p>

      <div className='social-platforms absolute mt-96 md:mt-[20%] md:w-[100%] md:h-[70px] bg-blue-200' style={{border:"2px solid yellow"}}>

        <div className='github md:w-[55px] md:h-[50px] md:ml-[15%] md:mt-[3%] mt-[2%] xl:mt-[1.5%] 2xl:mt-[1.5%]' style={{border:"0px solid black"}}>  
            <Image src="/images/github.svg" width={100} height={100} alt='github' className='md:h-[70px] md:w-[70px] md:ml-[2%] md:mt-[-25%] cursor-pointer hover:scale-110'/>
        </div>

        <div className='facebook w-fit h-fit md:ml-[32%] md:mt-[-11.6%] lg:mt-[-8.5%] xl:mt-[-7%] xl:ml-[34%] 2xl:mt-[-5%]' style={{border:"0px solid black"}}>  
            <Image src="/images/fb.svg" width={100} height={100} alt='facebook' className='h-[65px] w-[65px] mt-[-2%] cursor-pointer hover:scale-110'/>
        </div>

        <div className='twitter w-[75px] h-fit md:ml-[50%] md:mt-[-15.5%] lg:mt-[-11%] xl:mt-[-9.5%] xl:ml-[53%] 2xl:mt-[-7%]' style={{border:"0px solid black"}}>  
            <Image src="/images/Twitter.svg" width={100} height={100} alt='twitter' className='h-[60px] w-[75px] mt-[-2%] cursor-pointer hover:scale-110'/>
        </div>

        <div className='wordpress md:w-[55px] md:h-[50px] md:ml-[71.5%] md:mt-[-13%] lg:mt-[-10%] xl:mt-[-7.5%] xl:ml-[75%] 2xl:mt-[-6%]' style={{border:"0px solid black"}}>  
            <Image src="/images/wordpress.svg" width={200} height={200} alt='wordpress' className='md:h-[45px] md:w-[45px] md:mt-[-2%] md:ml-[7%] cursor-pointer hover:scale-110'/>
        </div>

      </div>

    </div>

    </>
  )
}

export default page;