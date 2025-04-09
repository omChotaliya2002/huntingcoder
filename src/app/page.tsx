
// HOME PAGE : ============================

'use client'
import { useEffect } from "react";
import Image from "next/image";


export default function Home() {

  useEffect (()=> {
      document.title = "Hunting Coder - Home";
  },[])

  

  return (
  <>     

      <div className="relative flex w-[100%] h-[475px] items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)] select-none transition-all"
      style={{border:"0px solid yellow"}}>

      <main className="flex flex-col gap-[32px] row-start-2 items-center md:mx-auto" style={{border:"0px solid white"}}>
        
        <meta name="keywords" content="nextjs, huntingcoder blog"/>

        <h1 className="sm:text-[22px] sm:ml-[-30%] md:text-[30px] md:ml-[-35%] md:mt-[-20%] font-bold" style={{border:"0px solid white"}}> Hunting </h1>

        <div className="relative sm:w-[100px] sm:h-[30px] sm:mt-[-22.7%] sm:ml-[34%] md:w-[125px] md:h-[40px] md:ml-[34.5%] md:mt-[-22%]" style={{border:"0px solid yellow"}}> 

              <Image src="/images/coder2.png" fill={true} alt="coder" className=" object-cover select-none" style={{border:"0px solid white"}}/>

        </div>


        <h1 className="font-medium font-mono sm:w-[100%] sm:text-[10px] md:mt-[1%] md:w-[110%] md:ml-[10%] md:text-[12px] underline underline-offset-[5px]" style={{border:"0px solid white"}}> Blogs for hunting coders by a hunting coder. </h1>


        {/* <div className="blogs mt-[7%] flex flex-col items-start justify-center">  

          <h1 className="text-[25px] ml-[30%] font-semibold underline-offset-[6px] underline"> Popular Blogs </h1>

          <div className="blogitem mt-6">
            <h1 className="font-semibold text-[17px]"> How to get prepared for programming in 2025? </h1>
            <p className="mt-2 text-[12px]"> You should learn this languages and frameworks to be productive in 2025. </p>        
          </div>

          <div className="blogitem mt-[25px]">
            <h1 className="font-semibold text-[17px]"> How to get prepared for programming in 2025? </h1>
            <p className="mt-2 text-[12px]"> You should learn this languages and frameworks to be productive in 2025. </p>        
          </div>

          <div className="blogitem mt-[25px]">
            <h1 className="font-semibold text-[17px]"> How to get prepared for programming in 2025? </h1>
            <p className="mt-2 text-[12px]"> You should learn this languages and frameworks to be productive in 2025. </p>        
          </div>

          <div className="blogitem mt-[25px]">
            <h1 className="font-semibold text-[17px]"> How to get prepared for programming in 2025? </h1>
            <p className="mt-2 text-[12px]"> You should learn this languages and frameworks to be productive in 2025. </p>        
          </div>

        </div> */}


      </main>
    </div>

    </>
  );
}
