// NAVBAR : 
"use client";
import React from 'react';
import Link from 'next/link';

const page = () => {


  return (

    <div className="navbar mt-[1%] md:h-10 md:w-[100%] select-none transition-all bg-[#0049a8]" style={{border:"0px solid white"}}>

            <nav className="flex items-center h-9.5 justify-center">
                <ul className="flex flex-row">

                  <Link className="sm:mx-2 md:mx-3 font-semibold cursor-pointer hover:underline-offset-[5px] hover:underline" 
                    href={{
                      pathname : "/",
                  }}replace> Home </Link>

                   
                  <Link className="sm:mx-2 md:mx-3 font-semibold cursor-pointer hover:underline-offset-[5px] hover:underline" 
                    href={{
                      pathname : "/blogs",
                  }}replace> Blogs </Link>

                  
                  <Link className="sm:mx-2 md:mx-3 font-semibold cursor-pointer hover:underline-offset-[5px] hover:underline"
                    href={{
                    pathname : "/about",
                  }}replace> About </Link>

                    
                  <Link className="sm:mx-2 md:mx-3 font-semibold cursor-pointer hover:underline-offset-[5px] hover:underline" 
                    href={{
                    pathname : "/contact",
                  }}replace> Contact us </Link>

                </ul>
            </nav> 

          </div>
  )
}

export default page;